import React from 'react';
import Logo from '../../../public/images/logo.svg';
import { GrInstagram } from 'react-icons/gr';
import Iphone from '../../../public/images/iphone.svg';
import VideoLive from '../../../public/movies/splashPageMovie.mov';
import clsx from 'clsx';
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import {FaCaretRight} from 'react-icons/fa';

const Desktop = () => {
  return (
    <div className="main-container">
    <div>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="" />
          <div className="logoname">
            <h3>
              Night <span>Eye</span>
            </h3>
          </div>
        </div>
        <div className="followbutton">
          <h4>Follow Us</h4>
          <GrInstagram className="insta" />
        </div>
      </div>
      <div className="towlines overflow-hidden">
        <div className="firstline">First</div>
        <div className="secondline">
          <h4>
            Please open this website on your Mobile Device to use NightEye
          </h4>
        </div>
      </div>
      <div className="Guesswork">
        <div className="guessText">
          <h1>
            Your Scout on a <br /> <span>Night Out.</span>
          </h1>
          <h3>
            Taking the <span> Guesswork</span>
            <br /> out of nightlife.
          </h3>
        </div>
        <div className="guessImage">
          <img src={Iphone} alt="" />
        </div>
      </div>
      <div className="socialNetwork">
        <img src="../../../public/images/logo.svg" alt="" />
        <h1>
          A Dedicated <span> Social Network</span>
          <br /> for Night Life.
        </h1>
        <p>
          Connecting bars & clubs to their customers, and providing live
          insights on where to be… and when.
        </p>
      </div>
      <div className="twobox grid grid-cols-2 gap-4">
        <div className="firstbox relative grid grid-cols-2  gap-0 col-span-3">
          <div className="explore flex flex-col item-center ">
            <h3>Explore.</h3>
            <p>Unique spots to Discover.</p>
          </div>
          <div className="live  align-center">
            <h3>Live Vibes.</h3>
            <p>Live Streams of Night Life Hot Spots.</p>
          </div>
          <div className="track flex content-center justify-center items-center">
            <div className="innertrack  align-center ">
              <h3>Track.</h3>
              <p>Import your existing Social Networks.</p>
            </div>
          </div>
          <div className="connect  align-center absolute">
            <h3>Connect.</h3>
            <p>Chat & Network while out.</p>
          </div>
        </div>
        <div className="secondbox">
          <img src="../../../public/images/grpimg.svg" alt="" />
        </div>
      </div>
      <div className="formdata w-100 flex justify-center items-center">
      <div className="formbox flex flex-row justify-evenly item-center gap-8">
         <div className="flex justify-center py-11 my-4 relative">
            <video
              autoPlay
              src="/movies/splashPageMovie.mov"
             
              className="rounded-3xl w-88 h-90"
            ></video>
            <button id="playPauseButton" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-transparent text-black rounded-full w-12 h-12 flex justify-center items-center">
            <FaCaretRight size={50} />
  </button>
          </div>
       
        <div className="formfill flex flex-col justify-center py-11 my-4 gap-y-8">
          <h3>
            Reach out to <span> NightEye</span>
          </h3>
            <form action="" className='grid gap-y-7'>
              <div className='grid  grid-cols-2 gap-6 text-white' >
                <div className="inputbox flex flex-col gap-3">
                <label htmlFor="Name" className='text-white'>Your name*</label>
                <input type="text"  className='w-80 h-16 rounded-2xl pl-4 outline-none bg-slate-800 shadow-custom' placeholder='Enter Your name' required/>
                </div>
                <div className="inputbox flex flex-col gap-3">
                <label htmlFor="Email" className='text-white'>Your Email</label>
                <input type="email" className='w-80 h-16 rounded-2xl pl-4 outline-none bg-slate-800 shadow-custom' placeholder='Enter Your email'/>
                </div>
              </div>
              <div className='grid  grid-cols-1 gap-4 text-white' >
                <div className="inputbox flex flex-col gap-3">
                <label htmlFor="Name" className='text-white'>What would you like to tell us?*</label>
                <input type="text"  className='w-120 h-20 rounded-2xl pl-4 outline-none bg-slate-800 shadow-custom' placeholder='Enter Your name' required/>
                </div>
                
              </div>
              <button type='submit' className='w-80 h-16 rounded-2xl pl-4 outline-none bg-custom-purple text-white shadow-custom'>Submit</button>
            </form>
        </div>
        </div>
      </div>
      <div className='bg-black  flex flex-col justify-center items-center my-5 w-100 h-[340px] shadow-custom '>
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
                <div className="underline my-1 text-white">Privacy Policy</div>
                <div className="underline my-1 mb-5 text-white">Terms & Conditions</div>
                <div className=" my-1  mt-0 text-white">
                  © NightEYE 2025 • All Rights Reserved
                </div>
              </div>
    </div>
     </div>
  );
};

export default Desktop;
