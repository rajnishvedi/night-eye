import clsx from 'clsx';
import React from 'react';
import { FaEye, FaMapPin, FaStar } from 'react-icons/fa';
import { IoMdChatboxes, IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const QuickMenu = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/quickMenu.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="min-h-screen w-full text-white flex flex-col"
    >
      <div className="bg-gradient-to-t from-[#A855F744] h-full flex-1">
        <div className="flex justify-end p-10">
          <Link to={'..'}>
            <IoMdClose color="white" size={30} className="cursor-pointer" />
          </Link>
        </div>
        <div className="px-10">
          <div className="flex flex-row justify-between items-center mb-3">
            <img src="/images/quickMenuLabel.svg" alt="" className="" />
            <img src="/images/logo.svg" alt="" className="w-[30pt]" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div
              className={clsx([
                'flex flex-row items-center justify-start gap-5 w-full',
                'rounded-full p-3 transition-all duration-300 cursor-pointer active:scale-95',
                'hover:bg-black hover:shadow-md hover:shadow-purple-600',
                'active:bg-white active:text-black',
              ])}
              onClick={() => {
                navigate('/interaction');
              }}
            >
              <div className="bg-purple-500 rounded-full p-2">
                <FaEye color="white" size={15} />
              </div>
              <div>Go to Live Streams</div>
            </div>
            <div
              className={clsx([
                'flex flex-row items-center justify-start gap-5 w-full',
                'rounded-full p-3 transition-all duration-300 cursor-pointer active:scale-95',
                'hover:bg-black hover:shadow-md hover:shadow-purple-600',
                'active:bg-white active:text-black',
              ])}
              onClick={() => {
                navigate('/chat');
              }}
            >
              <div className="bg-purple-500 rounded-full p-2">
                <IoMdChatboxes color="white" size={15} />
              </div>
              <div>Go to Chats</div>
            </div>
            <div
              className={clsx([
                'flex flex-row items-center justify-start gap-5 w-full',
                'rounded-full p-3 transition-all duration-300 cursor-pointer active:scale-95',
                'hover:bg-black hover:shadow-md hover:shadow-purple-600',
                'active:bg-white active:text-black',
              ])}
              onClick={() => {
                navigate('/near-by-bars');
              }}
            >
              <div className="bg-purple-500 rounded-full p-2">
                <FaMapPin color="white" size={15} />
              </div>
              <div>Explore new spots</div>
            </div>
            <div
              className={clsx([
                'flex flex-row items-center justify-start gap-5 w-full',
                'rounded-full p-3 transition-all duration-300 cursor-pointer active:scale-95',
                'hover:bg-black hover:shadow-md hover:shadow-purple-600',
                'active:bg-white active:text-black',
              ])}
              onClick={() => {
                navigate('/feedback');
              }}
            >
              <div className="bg-purple-500 rounded-full p-2">
                <FaStar color="white" size={15} />
              </div>
              <div>Give us Feedback</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickMenu;
