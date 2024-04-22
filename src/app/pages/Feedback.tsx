/* eslint-disable jsx-a11y/accessible-emoji */
import clsx from 'clsx';
import BottomBar from '../shared/BottomBar';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logogrey from '../../../public/images/logo.svg'


const API_URL = 'https://node.nighteye.live';

const Feedback = () => {
  const navigate = useNavigate();
  const [emoji, setEmoji] = useState('');
  const [feedback, setFeedback] = useState('');

  const saveFeedback = () => {
    const postData = {
      emoji: emoji,
      feedback: feedback,
    };
    axios
      .post(`${API_URL}/feedback/saveFeedback`, postData)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message, {
            position: 'top-right',
          });
        } else {
          toast.error(res.data.message, {
            position: 'top-right',
          });
        }
      })
      .catch((err) => {
        console.error('Error sending message:', err);
        toast.error('Something went wrong', {
          position: 'top-right',
        });
      });
  };

  return (
    <div className="h-screen overflow-scroll text-white relative bg-gradient-to-bl from-purple-900">
      <div>
        <div className="flex justify-end" 
           onClick={() => {
            navigate('..');
           }}
           >
          <IoMdClose
            size={50}
            className="right-0 m-6 bg-gray-400 rounded-full p-2"  
            
            />
        </div>
        <div className="mt-7">
          <div className="flex justify-center items-center gap-3">
            <div
              className="text-5xl cursor-pointer"
              onClick={() => {
                setEmoji('disappointed');
              }}
            >
              😔
            </div>
            <div
              className="text-5xl cursor-pointer"
              onClick={() => {
                setEmoji('mildDegreeOfConcern');
              }}
            >
              🙁
            </div>
            <div
              className="text-5xl cursor-pointer"
              onClick={() => {
                setEmoji('neutral');
              }}
            >
              😐
            </div>
            <div
              className="text-5xl cursor-pointer"
              onClick={() => {
                setEmoji('slightlyHappy');
              }}
            >
              🙂
            </div>
            <div
              className="text-5xl cursor-pointer"
              onClick={() => {
                setEmoji('pleased');
              }}
            >
              😀
            </div>
          </div>
          <div className="text-center my-4 text-3xl font-semibold tracking-wide">
            Choose your <span className="text-purple-500">experience</span>
          </div>
          <div className="p-5 flex justify-center">
            <textarea
              className="w-full p-5 text-lg rounded-2xl max-w-[500pt] text-black"
              rows={7}
              placeholder="Suggest anything that we can approve"
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={clsx([
                'text-center bg-gradient-to-br from-purple-700 bg-blue-900 ',
                'rounded-full px-10 py-4 text-xl w-[60%] max-w-[300pt]',
              ])}
              onClick={saveFeedback}
            >
              Send Feedback
            </button>
          </div>
          

        </div>
        <div className='logodata flex flex-col justify-center items-center pt-10 pb-20 text-center'>
          <img src={logogrey} alt="" className="w-[45pt]"/>
              <h1 className="text-3xl font-semibold drop-shadow-2xl text-orange">
                Your Scout on  <br />a Night  Out
                
              </h1>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Feedback;
