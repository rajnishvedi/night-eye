import clsx from 'clsx';
import { relative } from 'path';
import React, { useState, useEffect } from 'react';
import { FaSearch, FaMap } from 'react-icons/fa';
import { getUA } from 'react-device-detect';
import axios from 'axios';

const API_URL = 'https://node.nighteye.live';

const ChatComponent = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  useEffect(() => {
    axios
      .get(`${API_URL}/chats/getChats`)
      .then((res) => {
        setMessages(res.data.response);
      })
      .catch((err) => {
        console.error('Error fetching messages:', err);
      });
  }, []);

  const handleMessageChange = (e: any) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const postData = {
      chat: newMessage,
      userAgent: getUA,
    };
    axios
      .post(`${API_URL}/chats/saveChat`, postData)
      .then((res) => {
        setMessages([...messages, res.data.response]);
        setNewMessage('');
      })
      .catch((err) => {
        console.error('Error sending message:', err);
      });
  };

  const handleSearchChat = () => {
    const postData = {
      chatSearch: searchMessage,
    };
    axios
      .post(`${API_URL}/chats/searchChat`, postData)
      .then((res) => {
        setMessages(res.data.response);
        setNewMessage('');
      })
      .catch((err) => {
        console.error('Error sending message:', err);
      });
  };

  const render = (index: any, chat: any) => {
    if (index % 2 === 0) {
      return (
        <div className="flex items-start gap-3 text-left">
          <div className="w-[30pt] bg-blue-600 aspect-square rounded-full"></div>
          <div className="max-w-[250pt] bg-gray-800 p-3 rounded-r-2xl rounded-bl-2xl">
            <div className="text-gray-400">{chat}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-start justify-end gap-3">
          <div className="max-w-[250pt] bg-purple-800 p-3 rounded-l-2xl rounded-br-2xl">
            <div className="text-gray-400">{chat}</div>
          </div>
          <div className="w-[30pt] bg-purple-600 aspect-square rounded-full"></div>
        </div>
      );
    }
  };

  return (
    <div
      className={clsx([
        'mx-10 flex flex-col gap-8 mt-6 text-xs bg-black p-5 rounded-xl mb-20',
        'shadow-purple-900 shadow-lg h-96 overflow-hidden overflow-y-scroll	',
      ])}
    >
      <div className="flex bg-gray-800 items-center py-1 px-4 rounded-xl flex-1">
        <input
          type="text"
          className={clsx([
            'outline-none bg-transparent text-white flex-1',
            'bg-gray-800 p-1 pl-0 text-lg',
          ])}
          placeholder="Search the Chat"
          onChange={(e) => setSearchMessage(e.target.value)}
        />
        <FaSearch size={25} onClick={handleSearchChat} />
      </div>

      {messages.map((message: any, index: any) => (
        <div
          key={message._id}
          style={{ display: index % 2 === 0 ? 'show' : 'hidden' }}
        >
          {render(index, message.chat)}
        </div>
      ))}

      <div
        className="px-4 pb-12 pt-3 mb-1 sm:mb-0"
        style={{
          backgroundColor: '#170A33',
          borderRadius: 10,
          height: 50,
        }}
      >
        <div className="relative flex">
          <div>
            <input
              type="text"
              placeholder="Write your message!"
              className="bg-gray-800 w-full text-left text-sm outline-none"
              style={{
                backgroundColor: '#252836',
                borderRadius: 20,
                padding: 7,
                width: 194,
              }}
              value={newMessage} 
              onChange={handleMessageChange}
            />
          </div>

          <div className="flex md:hidden w-2/5 md:w-11/12 mt-0 md:mt-4 items-center shadow-md absolute right-0  inset-y-0 ">
            <button onClick={handleSendMessage}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#A855F7" />
                <g clipPath="url(#clip0_1_524)">
                  <path
                    d="M10 5.33337V14.6667"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 9.33337L10 5.33337"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 9.33337L10 5.33337"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_524">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(1 1)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 pl-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7377 6.38055C12.7377 2.86314 9.88624 0.0117188 6.36883 0.0117188C2.85142 0.0117188 0 2.86314 0 6.38055C0 8.31848 1.40683 11.1685 4.21316 14.9802L4.63383 15.5449L5.06424 16.1101L5.51081 16.6847C5.88299 17.159 6.5681 17.2417 7.04164 16.8701C7.11034 16.8162 7.17231 16.7542 7.22623 16.6855C10.8973 12.0073 12.7377 8.59655 12.7377 6.38055ZM0.817809 6.38052C0.817809 3.31454 3.30327 0.829078 6.36925 0.829078C9.43523 0.829078 11.9207 3.31454 11.9207 6.38052C11.9207 8.27266 10.564 10.9845 7.30465 15.2137L6.88729 15.7503L6.36925 16.3982L5.51122 15.3292C2.38326 11.2227 0.817809 8.22716 0.817809 6.38052ZM6.36897 3.48578C7.87374 3.48578 9.09361 4.70564 9.09361 6.21042C9.09361 7.71519 7.87374 8.93505 6.36897 8.93505C4.8642 8.93505 3.64434 7.71519 3.64434 6.21042C3.64434 4.70564 4.8642 3.48578 6.36897 3.48578ZM4.46172 6.21021C4.46172 5.15687 5.31562 4.30297 6.36897 4.30297C7.42231 4.30297 8.27621 5.15687 8.27621 6.21021C8.27621 7.26355 7.42231 8.11746 6.36897 8.11746C5.31562 8.11746 4.46172 7.26355 4.46172 6.21021Z"
                  fill="white"
                />
              </svg>
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8061 0.566528C12.4067 0.201843 11.888 0 11.3501 0H8.40451C7.86683 0 7.34822 0.201739 6.94884 0.566255L6.3707 1.09393C5.97778 1.45256 5.46756 1.65103 4.93857 1.65103C2.5371 1.65103 0.590332 3.62222 0.590332 6.05379V11.5572C0.590332 13.9888 2.5371 15.96 4.93857 15.96H14.7221C17.1236 15.96 19.0703 13.9888 19.0703 11.5572V6.05379C19.0703 3.62222 17.1236 1.65103 14.7221 1.65103L14.5666 1.64457C14.1541 1.61019 13.7625 1.43979 13.4531 1.15725L12.8061 0.566528ZM8.40474 1.00779H11.3504C11.6363 1.00779 11.9127 1.11534 12.1267 1.3107L12.7736 1.90142C13.2467 2.33332 13.8475 2.59589 14.4831 2.64887L14.6804 2.65795C16.5643 2.65882 18.0626 4.17591 18.0626 6.05358V11.557C18.0626 13.4347 16.5643 14.9518 14.7223 14.9518H4.9388C3.09687 14.9518 1.59856 13.4347 1.59856 11.557V6.05358C1.59856 4.23281 3.00744 2.7511 4.77233 2.66297L5.13333 2.65276C5.84383 2.6084 6.5203 2.32211 7.05046 1.83824L7.6286 1.31056C7.84255 1.11529 8.11889 1.00779 8.40474 1.00779ZM9.82986 4.20423C12.1495 4.20423 14.0299 6.08463 14.0299 8.40423C14.0299 10.7238 12.1495 12.6042 9.82986 12.6042C7.51026 12.6042 5.62986 10.7238 5.62986 8.40423C5.62986 6.08463 7.51026 4.20423 9.82986 4.20423ZM6.63794 8.40431C6.63794 6.64141 8.06704 5.21231 9.82994 5.21231C11.5928 5.21231 13.0219 6.64141 13.0219 8.40431C13.0219 10.1672 11.5928 11.5963 9.82994 11.5963C8.06704 11.5963 6.63794 10.1672 6.63794 8.40431Z"
                  fill="white"
                />
              </svg>
            </button>

            <button>
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.16012 0.253296C9.24776 0.253296 10.9401 1.94566 10.9401 4.0333V9.91329C10.9401 12.0009 9.24776 13.6933 7.16012 13.6933C5.07248 13.6933 3.38012 12.0009 3.38012 9.91329V4.0333C3.38012 1.94566 5.07248 0.253296 7.16012 0.253296ZM1.06967 8.92911C1.32019 8.92911 1.52802 9.11188 1.56708 9.35136L1.57367 9.43311V9.54395C1.57367 12.6856 4.07645 15.2291 7.15967 15.2291C10.1773 15.2291 12.6389 12.7927 12.7423 9.74364L12.7457 9.54395V9.44185C12.7457 9.1635 12.9713 8.93785 13.2497 8.93785C13.5002 8.93785 13.708 9.12063 13.7471 9.3601L13.7537 9.44185L13.7505 9.75232C13.6472 13.1801 11.004 15.9617 7.66356 16.2179L7.66367 19.1533C7.66367 19.4316 7.43802 19.6573 7.15967 19.6573C6.90916 19.6573 6.70133 19.4745 6.66227 19.235L6.65567 19.1533L6.65607 16.2179C3.31759 15.9621 0.67546 13.1837 0.569009 9.75883L0.565674 9.43311C0.565674 9.15476 0.791322 8.92911 1.06967 8.92911ZM4.38769 4.03337C4.38769 2.50244 5.62876 1.26137 7.15969 1.26137C8.69063 1.26137 9.93169 2.50244 9.93169 4.03337V9.91337C9.93169 11.4443 8.69063 12.6854 7.15969 12.6854C5.62876 12.6854 4.38769 11.4443 4.38769 9.91337V4.03337Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
