/* eslint-disable jsx-a11y/accessible-emoji */
import { FaSearch } from 'react-icons/fa';
import BottomBar from '../shared/BottomBar';
import clsx from 'clsx';
import { useState } from 'react';
import { FiShare } from 'react-icons/fi';

const NearbyBars = () => {
  const [showSheet, setShowSheet] = useState(false);

  const toggleSheet = () => {
    setShowSheet(!showSheet);
  };

  return (
    <>
      <div
        className={clsx([
          'h-screen overflow-scroll text-white relative',
          'bg-gradient-to-bl from-purple-900',
          showSheet ? 'opacity-25' : 'opacity-100',
          'transition-all duration-300',
        ])}
      >
        <div className="bg-black min-h-full bg-opacity-50 flex justify-center py-10">
          <div className="flex-1 h-full px-8 max-w-[400pt] flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <div className="text-3xl">Nearby Bars</div>
              <FaSearch size={30} />
            </div>
            {BarCardItem()}
            {BarCardItem()}
            {BarCardItem()}
            {BarCardItem()}
            <div className="h-[20vh]" />
          </div>
        </div>
        <BottomBar />
      </div>
      <div
        className={clsx([
          'bg-black absolute bottom-0 w-screen p-4 text-white shadow-custom',
          'transition-all duration-300 rounded-t-2xl min-h-[70vh]',
          'bg-top bg-no-repeat bg-cover',
          showSheet ? 'translate-y-0' : 'translate-y-full ',
        ])}
        style={{
          backgroundImage: "url('/backgrounds/barOutside.png')",
          backgroundSize: '100% 400px',
        }}
        onClick={toggleSheet}
      >
        <div className="m-5 flex flex-col ">
          <div className="flex justify-between">
            <div className="bg-gray-500 p-3 rounded-full">
              <FiShare size={30} />
            </div>
            <img src="/images/mapIcon.svg" alt="" className="w-10" />
          </div>
          <div className="my-3 text-3xl font-semibold">Westwood</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <div className="bg-gray-700 px-3 py-2 rounded-full">10PM - 4PM</div>
            <div className="bg-gray-700 px-3 py-2 rounded-full">
              Cover fee applied after 10AM
            </div>
          </div>
          <div className="my-4 text-lg">
            Bustling neighborhood bar with sports on the TVs, a jukebox & a
            clubhouse vibe. It's a cozy haven where locals converge, fostering a
            welcoming clubhouse atmosphere for all to enjoy.{' '}
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            <div className="bg-gradient-to-r from-purple-500 to-blue-700 px-3 py-2 rounded-full">
              Restro bar
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-700 px-3 py-2 rounded-full">
              Country
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-700 px-3 py-2 rounded-full">
              Ride bull
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function BarCardItem() {
    return (
      <div
        onClick={toggleSheet}
        className={clsx([
          'p-5 rounded-xl bg-no-repeat bg-cover bg-center ',
          'hover:scale-105 transition-all duration-300 cursor-pointer',
          'active:scale-95',
        ])}
        style={{
          backgroundImage: "url('/backgrounds/barOutside.png')",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="bg-gray-700 px-3 py-1 rounded-full">
            Cover fee applied 10pm
          </div>
          <img src="/images/mapIcon.svg" alt="" className="w-10" />
        </div>
        <div className="mt-20">
          <div className="text-2xl font-semibold tracking-wider">
            Irish Times
          </div>
          <div className="text-lg font-normal">
            "Irish Times" is a cozy Irish refuge ...see more
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="bg-gray-700 px-3 py-1 rounded-full">10PM - 4PM</div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-700 px-3 py-1 rounded-full">
              Restro bar
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-700 px-3 py-1 rounded-full">
              Country
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-700 px-3 py-1 rounded-full">
              Ride bull
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NearbyBars;
