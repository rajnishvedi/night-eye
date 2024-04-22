import React from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import videojs from 'video.js';
import clsx from 'clsx';
import BottomBar from '../shared/BottomBar';
import { useCallback, useEffect, useState } from 'react';

// import './LiveStreams.scss';
// import config from './../../../../../backend/config/frontendConfig';

const STREAM = 'https://stream.nighteye.live:';
const NODE = 'https://node.nighteye.live:';

export default class Navbar extends React.Component {
  state = {
    live_streams: [],
    stream: false,
    videoJsOptions: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      textTrackSettings: false,
      loadingSpinner: false,
      errorDisplay: false,
    },
    controlBar: {
      playToggle: false,
    },
    hls: {
      smoothQualityChange: true,
    },
    queryParam: '',
  };
  player: any;
  videoNode: any;

  constructor(props: any) {
    super(props);
    this.state = {
      live_streams: [],
      stream: false,
      videoJsOptions: {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        textTrackSettings: false,
        loadingSpinner: false,
        errorDisplay: false,
      },
      controlBar: {
        playToggle: false,
      },
      hls: {
        smoothQualityChange: true,
      },
      queryParam: '',
    };
  }

  componentDidMount() {
    this.getLiveStreams();
    // let query = new URLSearchParams(useLocation().search).get('stream_key');
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo:any = params.get('stream_key');
    this.state.queryParam = foo;
  }

  getLiveStreams() {
    axios
      // .get(URL + config.rtmp_server.http.port + '/api/streams')
      .get(STREAM + '/api/streams')
      .then((res) => {
        let streams = res.data;
        if (typeof (streams['live'] !== 'undefined')) {
          this.getStreamsInfo(streams['live']);
        }
      });
  }

  getStreamsInfo(live_streams: any) {
    axios
      .get(NODE + '/streams/info', {
        params: {
          streams: live_streams,
        },
      })
      .then((res) => {
        this.setState(
          {
            live_streams: res.data,
          },

          () => {
            console.log(this.state);
          }
        );

        this.setState(
          {
            stream: true,
            videoJsOptions: {
              autoplay: true,
              controls: true,
              responsive: true,
              width: 500,
              height: 300,
              sources: [
                {
                  // src: STREAM + '/live/' + res.data.stream_key + '/index.m3u8',
                  src:
                    STREAM + '/live/' + this.state.queryParam + '/index.m3u8',
                  type: 'application/x-mpegURL',
                },
              ],
              fluid: false,
            },
          },
          () => {
            this.player = videojs(
              this.videoNode,
              this.state.videoJsOptions,
              function onPlayerReady() {
                console.log('onPlayerReady', live_streams);
              }
            );
          }
        );
      });
  }

  render() {
    return (
      <>
        <div
          className={clsx([
            'h-screen overflow-scroll text-white relative',
            'bg-gradient-to-bl from-purple-900',
            'opacity-100',
            'transition-all duration-300',
          ])}
        >
          <div className="bg-black min-h-full bg-opacity-50 flex justify-center py-10">
            <div className="flex-1 h-full px-8 max-w-[400pt] flex flex-col gap-7">
              {this.state.stream ? (
                <div data-vjs-player>
                  <video
                    ref={(node) => (this.videoNode = node)}
                    className="video-js vjs-big-play-centered"
                  />
                </div>
              ) : (
                ' Loading ... '
              )}

              <div className="h-[20vh]" />
            </div>
          </div>
          <BottomBar />
        </div>
      </>
    );
  }
}
