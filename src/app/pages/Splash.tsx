import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { FaInstagram, FaPlay, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import BottomBar from '../shared/BottomBar';
import { IoMdShareAlt } from 'react-icons/io';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import ChatComponent from '../shared/ChatComponent';
import { useNavigate } from 'react-router-dom';
import Swipeable from 'react-swipeable';

import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
// @ts-ignore
import Pagination from '../shared/Pagination';
import { time } from 'console';
import { RiArrowDropRightLine } from "react-icons/ri";

import '../app.css';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Splash = () => {
  const [splashTapped, setSplashTapped] = useState(true);
  const [logoTapped, setLogoTapped] = useState(true);
  const [sloganTapped, setSloganTapped] = useState(false);
  const [streamUrl, setStreamUrl] = useState('');
  const [index, setIndex] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState('Bars near you');
  const [dotIndex, setDotIndex] = useState();
  const [dotIndexBar, setDotIndexBar] = useState();
  const [delayDuration, setDelayDuration] = useState(2000);
  const [backgroundImage, setBackgroundImage] = useState("/backgrounds/splashBg.png");

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
    (index:any) => {
      setDotIndex(index);
      let newStreamUrl;
      let newBackgroundImage;
      switch (index) {
        case 0:
          newStreamUrl = 'xZeO0LJckm';
          newBackgroundImage = '../../../public/backgrounds/unsplash_iFgRcqHznqg.svg';
          break;
        case 1:
          newStreamUrl = '0wBic-qV4';
          newBackgroundImage = '../../../public/backgrounds/North-beach.svg';
          break;
        case 2:
          newStreamUrl = 'coming soon';
          newBackgroundImage = '../../../public/backgrounds/Polk.svg';
          break;
        default:
          newStreamUrl = 'xZeO0LJckm'; // Default to the first stream URL
          newBackgroundImage = '../../../public/backgrounds/unsplash_iFgRcqHznqg.svg';
          break;
      }
      setStreamUrl(newStreamUrl); // Update streamUrl state based on the slide index
      setBackgroundImage(newBackgroundImage);
    },
    []
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
    <div className="bg-black">
      <div
        className={clsx([
          'min-h-screen bg-black text-white',
          'duration-300 transition-all relative',
        ])}
        onScroll={handleScroll}
      >
        <img
          onClick={onLogoTapped}
          src="/images/logo.svg"
          alt="NightsEye"
          className={clsx([
            'duration-500 transition-all absolute',
            'w-full h-screen',
            splashTapped && !logoTapped
              ? 'scale-50 opacity-100'
              : 'scale-0 opacity-0',
          ])}
        />
        <div
          className={clsx([
            'scale-0 opacity-0',
            'min-h-screen justify-center',
            'duration-500 transition-all absolute',
            'flex flex-col items-center gap-4',
            'w-screen',
          ])}
          onClick={onTapSlogan}
        >
          <img
            src="/images/purpleLogo.svg"
            alt="purpleLogo"
            className="w-[100pt]"
          />
          <h1 className="text-center text-3xl font-semibold">
            Your Scout on a <br />{' '}
            <span className="text-purple-500">Night</span> Out
          </h1>
        </div>
        <div className="flex justify-center">
          <div
            className={clsx([
              'absolute duration-300 transition-all overscroll-auto',
              sloganTapped ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
              'w-screen max-w-[630pt] min-h-screen flex flex-col items-center text-center',
              'relative',
            ])}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: '100% auto',
              backgroundPositionY: '0px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className={clsx([
                'w-full pt-14 flex justify-center items-center flex-col',
                'bg-gradient-to-b from-black to-transparent',
              ])}
            >
              <img src="/images/gradientLogo.svg" alt="" className="w-[45pt]" />
              <h1 className="text-3xl font-semibold drop-shadow-2xl">
                Your Scout on a <br />
                <span className="text-purple-500">Night</span> Out
              </h1>
            </div>
            <div>
              <div className="relative items-center justify-center flex ">
                <div style={{ position: 'relative' }}>
                  <AutoPlaySwipeableViews
                    index={dotIndexBar}
                    onChangeIndex={handleChangeIndexBar}
                    enableMouseEvents
                    animateTransitions={false}
                  >
                    <div
                      style={Object.assign({}, styles.slide, barStyles.style)}
                    >
                      Bars near you
                    </div>
                    <div
                      style={Object.assign({}, styles.slide, barStyles.style)}
                    >
                      Live cameras
                    </div>
                    <div
                      style={Object.assign({}, styles.slide, barStyles.style)}
                    >
                      Live chat
                    </div>
                    {/* <div style={Object.assign({}, styles.slide)}>
                      <div
                        className={clsx([
                          'my-7 text-lg text-white bg-black px-5 py-2 rounded-full bg-opacity-30 backdrop-blur-sm',
                          'transition-all duration-300 absolute whitespace-nowrap',
                        ])}
                      >
                        Bars near you
                      </div>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                      <div
                        className={clsx([
                          'my-7 text-lg text-white bg-black px-5 py-2 rounded-full bg-opacity-30 backdrop-blur-sm',
                          'transition-all duration-300 absolute whitespace-nowrap',
                        ])}
                      >
                        Live cameras
                      </div>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                      <div
                        className={clsx([
                          'my-7 text-lg text-white bg-black px-5 py-2 rounded-full bg-opacity-30 backdrop-blur-sm',
                          'transition-all duration-300 absolute whitespace-nowrap',
                        ])}
                      >
                        Live chat
                      </div>
                    </div> */}
                  </AutoPlaySwipeableViews>
                </div>
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

              {/* <div className="flex flex-row items-center my-2 gap-2 justify-center">
                <div className="w-3 bg-white aspect-square rounded-full" />
                <div className="w-3 bg-white bg-opacity-50 aspect-square rounded-full" />
                <div className="w-3 bg-white bg-opacity-50 aspect-square rounded-full" />
              </div> */}
            </div>
            <div className="shadow-2xl flex flex-col w-full justify-center bg-gradient-to-t from-black to-transparent">
              <div className="bg-opacity-20">
                <ChatComponent />
              </div>
              <div className="p-2 w-[87%] self-center rounded-xl bg-black">
              <div className="text-sm font-semibold mb-11">
                Stay updated on when new cameras go live
                  </div>
                  <form action="" className='Subscribe'>
                    <input type="text" placeholder='Phone / Email'/>
                    <button type='submit'> <RiArrowDropRightLine className='w-full h-full'/> </button>
                  </form>
                

              </div>
            </div>
            <div className="bg-black w-full flex flex-col items-center">
              <div
                className="w-[88%] my-4 bg-gradient-to-tl from-purple-900"
                style={{
                  backgroundImage: "url('/backgrounds/nighteyeText.png')",
                  backgroundRepeat: 'repeat',
                }}
              >
                <div className="my-10 select-none">
                  <div className="text-3xl font-semibold mb-11">
                    Invite your friends
                  </div>
                  <div className="flex flex-row items-center">
                    <MdArrowBackIos
                      className="-translate-y-4"
                      size={30}
                      onClick={previous}
                    />
                    <div className="flex-1 h-full">
                      <div
                        className={clsx([
                          'border-[5pt] uppercase p-4 text-3xl border-slate-800',
                          'rounded-2xl text-center flex-1',
                          'flex justify-center flex-col items-center gap-3 h-full',
                        ])}
                        style={{ height: '330px' }}
                      >
                        <img src="/images/purpleLogo.svg" alt="" />
                        <p>{Carousel?.[index]}</p>
                        <div className="flex justify-center gap-3">
                          <div className="bg-gray-700 p-2 rounded-full">
                            <FaInstagram />
                          </div>
                          <div className="bg-gray-700 p-2 rounded-full">
                            <FaSnapchatGhost />
                          </div>
                          <div className="bg-gray-700 p-2 rounded-full">
                            <IoMdShareAlt />
                          </div>
                        </div>
                      </div>
                      {/* <div className="flex justify-center p-4 gap-2">
                        <div className="w-3 aspect-square bg-white rounded-full" />
                        <div className="w-3 aspect-square bg-white rounded-full bg-opacity-30" />
                        <div className="w-3 aspect-square bg-white rounded-full bg-opacity-30" />
                      </div> */}
                    </div>
                    <MdArrowForwardIos
                      className="-translate-y-4"
                      size={30}
                      onClick={next}
                    />
                  </div>
                </div>

                <h1
                  className={clsx([
                    'text-center text-white text-3xl',
                    'font-semibold uppercase tracking-wider',
                  ])}
                >
                  A better <span className="text-purple-500">night</span>
                  <br />
                  for your <span className="text-purple-500">squad</span>
                </h1>
                <div className={clsx(['flex justify-center py-11 my-4'])}>
                  <video
                    autoPlay
                    src="/movies/splashPageMovie.mov"
                    className="rounded-3xl h-[60vh]"
                  ></video>
                </div>
              </div>
              <div className="h-28 w-full bg-gradient-to-t from-purple-900 to-transparent" />
              <div
                className={clsx([
                  'bg-black h-22 flex flex-col items-center my-5',
                ])}
              >
                <img src="/images/logo.svg" alt="" className="w-10 mb-3" />
                <div className="flex flex-row gap-3 my-4">
                  <div className="border-2 p-3 rounded-full border-gray-600">
                    <FaInstagram size={20} className="fill-purple-500" />
                  </div>
                  <div className="border-2 p-3 rounded-full border-gray-600">
                    <FaTiktok size={20} className="fill-purple-500" />
                  </div>
                  <div className="border-2 p-3 rounded-full border-gray-600">
                    <FaLinkedinIn size={20} className="fill-purple-500" />
                  </div>
                </div>
                <div className="underline my-1">Privacy Policy</div>
                <div className="underline my-1 mb-5">Terms & Conditions</div>
                <div className=" my-1 mb-40 mt-0">
                  © NightEYE 2025 • All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(['absolute z-40 mb-10 text-white'])}>
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default Splash;
