import React, { useCallback, useEffect, useState } from 'react';
import BottomBar from '../shared/BottomBar';
import clsx from 'clsx';
import { IoIosArrowForward } from 'react-icons/io';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '../shared/Pagination';
import { autoPlay } from 'react-swipeable-views-utils';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Interaction = () => {
  const [splashTapped, setSplashTapped] = useState(true);
  const [logoTapped, setLogoTapped] = useState(true);
  const [sloganTapped, setSloganTapped] = useState(false);
  const [streamUrl, setStreamUrl] = useState('');
  const [index, setIndex] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState('Bars near you');
  const [dotIndex, setDotIndex] = useState();
  const [dotIndexBar, setDotIndexBar] = useState();
  const [delayDuration, setDelayDuration] = useState(2000);
  let liveChatTimeout, barsNearTimeout, camerasTimeout;

  const navigate = useNavigate();
  const Carousel = [
    'I am on NightEye, where are you?',
    'Send this to the friend that never choses the right bar',
    'Send this to the friend you will out drink tonight',
    "Send this to the friend who won't last the night",
    'Your friends are planning on NightEye, join them!',
    'Send this to the friend that never pays for the uber',
    "Your friend is worried you'll choose the wrong bar. Let's check!",
    'Take the guesswork out of your night out',
    "Let's scout the night!",
    'NightEye is helping you find a new spot tonight',
    "It's getting late, let's pick somewhere",
    "Let's get a drink, pick a spot!",
  ];

  const next = () => {
    if (index < Carousel.length - 1) {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const onLogoTapped = useCallback(() => {
    setLogoTapped(!logoTapped);
  }, [logoTapped]);

  const onTapSlogan = useCallback(() => {
    setSloganTapped(!sloganTapped);
  }, [sloganTapped]);

  const handleChangeIndex = useCallback(
    (index: any) => {
      setDotIndex(index);
      if (index == 0) setStreamUrl('xZeO0LJckm');
      else if (index == 1) setStreamUrl('0wBic-qV4');
      else setStreamUrl('coming soon');
    },
    [dotIndex]
  );

  const handleChangeIndexBar = useCallback(
    (index: any) => {
      setDotIndexBar(index);
    },
    [dotIndexBar]
  );

  const paginaTionindex = dotIndex;
  const paginaTionindexDot = dotIndexBar;
  const styles = {
    root: {
      position: 'relative',
      right: 0,
    },
    slideContainer: {
      height: 1000,
    },
    slide: {
      padding: 15,
      height: 100,
    },
    slide1: {
      background: 'transparent',
    },
    slide2: {
      background: 'transparent',
    },
    slide3: {
      background: 'transparent',
    },
  };

  const barStyles = {
    root: {
      position: 'relative',
      right: 0,
    },
    slideContainer: {
      height: 1000,
    },
    slide: {
      padding: 40,
      height: 100,
      width: 200,
    },
    style: {
      fontSize: '1.5rem',
    },
  };

  const handleStream = () => {};

  useEffect(() => {
    setSloganTapped(true);
    const timeOut = setTimeout(() => {
      setLogoTapped(true);
      setTimeout(() => {
        setSplashTapped(false);
        setTimeout(() => {
          setSloganTapped(true);
        }, 2000);
      }, 2000);
    }, 2000);

    return () => {
      setSloganTapped(true);
      setStreamUrl('xZeO0LJckm');
    };
  }, []);

  const handleScroll = (event: any) => {
    console.log('User scrolled event:', event.target.scrollTop);
  };
  return (
    <div className="h-screen overflow-scroll text-white relative">
      <div className="flex flex-col items-center pt-6 gap-3">
        
        
        
        
        <div
            className={clsx([
              'absolute duration-300 transition-all overscroll-auto',
              sloganTapped ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
              'w-screen max-w-[630pt] h-[600px] flex flex-col justify-center items-center text-center',
              'relative',
            ])}
            style={{
              backgroundImage: "url('/backgrounds/splashBg.png')",
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: '100% auto',
              backgroundPositionY: '0px',
              backgroundRepeat: 'no-repeat',
            }}
          >
        <div className="relative items-center flex justify-center  items-center  ">
                
              </div>
              <div className="flex justify-center ">
                <div
                  className="bg-black p-6 rounded-full backdrop-blur-md opacity-70 cursor-pointer"
                  onClick={() => {
                    navigate(`/stream?stream_key=${streamUrl}`);
                  }}
                >
                  <FaPlay size={30} />
                </div>
              </div>
              <div className="">
                <div style={{ position: 'relative' }}>
                  <SwipeableViews
                    index={paginaTionindex}
                    onChangeIndex={handleChangeIndex}
                    enableMouseEvents
                  >
                    <div style={Object.assign({}, styles.slide, styles.slide1)}>
                      <div className="text-2xl font-semibold tracking-wider">
                        Marina
                      </div>
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}>
                      <div className="text-2xl font-semibold tracking-wider">
                        North Beach
                      </div>
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide3)}>
                      <div className="text-2xl font-semibold tracking-wider">
                        Polk Street
                      </div>
                    </div>
                  </SwipeableViews>
                  <div className="flex flex-row items-center my-2 gap-2 justify-center">
                    <Pagination
                      dots={3}
                      index={paginaTionindex}
                      onChangeIndex={handleChangeIndex}
                    />
                  </div>
                </div>
              </div>
              </div>
              <div
          className={clsx([
            'bg-gray-900 px-3 rounded-xl text-lg flex',
            'flex-row justify-between items-center',
            'py-3 px-5 w-[75%]',
            'shadow-lg shadow-purple-600',
          ])}
        >
          <input
            type="text"
            className="outline-none bg-transparent text-white pl-3"
            placeholder="Phone / Email"
          />
          <div className="bg-purple-600 p-3 rounded-full">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default Interaction;
