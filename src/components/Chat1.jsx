import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image2 from "../assets/Images/User.png";
import Pusher from 'pusher-js';
import axios from 'axios';
import { useTranslation } from "react-i18next";
// import Setmessages from '../../src/services/SetMessagesService.js';

const Chat1 = () => {
  const [username, setUsername] = useState("username");
  const [image, setImage] = useState("image");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  let allMessage = [];


  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('a7054637f68aecdc40aa', {
      cluster: 'ap2',
      encrypted: true
    });

    const channel = pusher.subscribe('nawi');
    channel.bind('message', (data) => {
      setMessages([...messages, data.message]);
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe();
};
}, [messages]);


const handleMessageChange = (e) => {
  setMessage(e.target.value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  await axios.post('https://loclahost:8000/api/messages', { message });
  setMessage('');
};

const {t} = useTranslation();

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mt-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-white p-4">
          <div className="text-xl font-semibold mb-4">{t('chat_header')}</div>
          <input
            type="search"
            className="border-2 border-gray-200 rounded-lg w-full h-8 text-right p-2 mb-4 focus:outline-none focus:border-purple-600"
            placeholder={t('chat_find')}
          />
          <a href="#1">
            <svg
              className="mt-[-45px] ml-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#828282"
                stroke-width="2"
              />
              <path
                d="M21.0004 20.9999L16.6504 16.6499"
                stroke="#828282"
                stroke-width="2"
              />
            </svg>
          </a>
          <br></br>
          <div className="space-y-4">
            {messages.map((message, index) => {
              return (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={message.image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{message.username}</div>
                    <div className="text-sm text-gray-600">
                      {message.message}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat area */}
        <div className="w-full md:w-2/3 bg-white flex flex-col">
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={Image2}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <input
                  className="font-semibold bg-white"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="text-sm text-gray-600">Active 20m ago</div>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-6 space-y-4 overflow-auto bg-[#ُEBEAFA]">
            <div className="flex justify-end">
              <div className="bg-[#800080] text-white p-2 rounded-lg max-w-xs">
                This is the main chat template
              </div>
            </div>
            <div className="text-gray-500 text-xs text-center">
              Nov 30, 2023, 9:41 AM
            </div>
            <div className="flex">
              <div className="bg-gray-300 p-2 rounded-lg max-w-xs">Oh?</div>
            </div>
            <div className="flex">
              <div className="bg-gray-300 p-2 rounded-lg max-w-xs">Cool</div>
            </div>
            <div className="flex">
              <div className="bg-gray-300 p-2 rounded-lg max-w-xs">
                How does it work?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#800080] text-white p-2 rounded-lg max-w-xs">
                Simple
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#800080] text-white p-2 rounded-lg max-w-xs">
                You just edit any text to type in the conversation you want to
                show, and delete any bubbles you don’t want to use.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#800080] text-white p-2 rounded-lg max-w-xs">
                Boom
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-300 p-2 rounded-lg max-w-xs">Hmmm</div>
            </div>
            <div className="flex">
              <div className="bg-gray-300 p-2 rounded-lg max-w-xs">
                I think I get it.
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-300 p-2 rounded-lg max-w-xs">
                Will head to the Help Center if I have more questions tho
              </div>
            </div>
          </div>

          {/* Message input */}
          <svg
            className="mb-[-47px] ml-[23px] z-40"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 -0.000976562C15.524 -0.000976562 20.002 4.47702 20.002 10.001C20.002 15.524 15.524 20.002 10 20.002C4.47605 20.002 -0.00195312 15.524 -0.00195312 10.001C-0.00195313 4.47702 4.47605 -0.000976562 10 -0.000976562ZM10 1.49902C8.87586 1.48683 7.76041 1.69772 6.71827 2.1195C5.67612 2.54127 4.72798 3.16554 3.92871 3.95619C3.12944 4.74684 2.49492 5.68816 2.06187 6.72566C1.62882 7.76317 1.40584 8.87627 1.40584 10.0005C1.40584 11.1248 1.62882 12.2379 2.06187 13.2754C2.49492 14.3129 3.12944 15.2542 3.92871 16.0449C4.72798 16.8355 5.67612 17.4598 6.71827 17.8816C7.76041 18.3033 8.87586 18.5142 10 18.502C12.2321 18.4678 14.3611 17.5571 15.9274 15.9666C17.4937 14.376 18.3717 12.2333 18.3717 10.001C18.3717 7.76874 17.4937 5.626 15.9274 4.03548C14.3611 2.44496 12.2321 1.53426 10 1.50002V1.49902ZM6.46205 12.784C6.8828 13.32 7.42 13.7533 8.03298 14.0509C8.64595 14.3486 9.31863 14.5028 10 14.502C10.6806 14.5028 11.3525 14.3489 11.9649 14.052C12.5772 13.755 13.1142 13.3228 13.535 12.788C13.6584 12.6319 13.8386 12.5312 14.0362 12.5081C14.2338 12.4849 14.4325 12.5412 14.5885 12.6645C14.7446 12.7878 14.8453 12.9681 14.8685 13.1657C14.8916 13.3633 14.8354 13.5619 14.712 13.718C14.1508 14.4306 13.435 15.0064 12.6188 15.4021C11.8026 15.7977 10.9071 16.0029 10 16.002C9.0918 16.0028 8.19528 15.797 7.37826 15.4003C6.56124 15.0035 5.84512 14.4262 5.28405 13.712C5.16624 13.5554 5.11444 13.3588 5.13972 13.1645C5.16501 12.9701 5.26538 12.7934 5.41934 12.6721C5.5733 12.5508 5.76863 12.4946 5.96351 12.5155C6.15839 12.5364 6.33734 12.6328 6.46205 12.784ZM7.00005 6.75002C7.16711 6.7453 7.33342 6.77412 7.48915 6.83479C7.64488 6.89545 7.78686 6.98673 7.90669 7.10323C8.02653 7.21972 8.12179 7.35907 8.18684 7.51302C8.25188 7.66697 8.2854 7.8324 8.2854 7.99952C8.2854 8.16665 8.25188 8.33208 8.18684 8.48603C8.12179 8.63998 8.02653 8.77932 7.90669 8.89582C7.78686 9.01231 7.64488 9.10359 7.48915 9.16426C7.33342 9.22493 7.16711 9.25375 7.00005 9.24902C6.67478 9.23982 6.36592 9.10414 6.1391 8.87082C5.91229 8.6375 5.7854 8.32492 5.7854 7.99952C5.7854 7.67413 5.91229 7.36155 6.1391 7.12823C6.36592 6.89491 6.67478 6.75923 7.00005 6.75002ZM13 6.75002C13.1671 6.7453 13.3334 6.77412 13.4891 6.83479C13.6449 6.89545 13.7869 6.98673 13.9067 7.10323C14.0265 7.21972 14.1218 7.35907 14.1868 7.51302C14.2519 7.66697 14.2854 7.8324 14.2854 7.99952C14.2854 8.16665 14.2519 8.33208 14.1868 8.48603C14.1218 8.63998 14.0265 8.77932 13.9067 8.89582C13.7869 9.01231 13.6449 9.10359 13.4891 9.16426C13.3334 9.22493 13.1671 9.25375 13 9.24902C12.6748 9.23982 12.3659 9.10414 12.1391 8.87082C11.9123 8.6375 11.7854 8.32492 11.7854 7.99952C11.7854 7.67413 11.9123 7.36155 12.1391 7.12823C12.3659 6.89491 12.6748 6.75923 13 6.75002Z"
              fill="currentColor"
            />
          </svg>

          <form onSubmit={handleSubmit} className="p-4 flex items-center">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
               placeholder={t('chat_type')}
              className="flex-1 p-2 pr-8 text-right rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
            />

            <a href="#1">
              <svg
              // onClick={Setmessages.Setmessages}
                className=" ml-[-30px]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8151 10.1968L3.28308 11.4528C3.19649 11.4673 3.11522 11.5043 3.04746 11.5601C2.97971 11.6159 2.92784 11.6886 2.89708 11.7708L0.30008 18.7278C0.0520799 19.3678 0.72108 19.9778 1.33508 19.6708L19.3351 10.6708C19.4598 10.6086 19.5646 10.5128 19.6379 10.3943C19.7112 10.2758 19.75 10.1392 19.75 9.99984C19.75 9.86049 19.7112 9.72389 19.6379 9.60537C19.5646 9.48685 19.4598 9.39109 19.3351 9.32884L1.33508 0.32884C0.72108 0.0218396 0.0520799 0.63284 0.30008 1.27184L2.89808 8.22884C2.92869 8.31125 2.9805 8.38414 3.04827 8.44014C3.11604 8.49615 3.19737 8.5333 3.28408 8.54784L10.8161 9.80284C10.8624 9.81096 10.9044 9.83516 10.9347 9.8712C10.965 9.90723 10.9816 9.95278 10.9816 9.99984C10.9816 10.0469 10.965 10.0925 10.9347 10.1285C10.9044 10.1645 10.8624 10.1887 10.8161 10.1968H10.8151Z"
                  fill="#8BABD8"
                />
              </svg>
            </a>
            <a href="#4">
              <svg
                className="z-auto ml-[-122px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </a>
          </form>
        </div>

        <div className="w-full md:w-1/3 bg-white p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <img
                src={Image}
                alt="Profile"
                className="w-[55%] h-[55%] rounded-full"
              />
            </div>
            <div className="font-semibold text-xl text-center">لانا محمد</div>
            <Link to="#4">
              <button className="bg-[#800080] ml-[50px] hover:bg-amber-500 text-[#fff] w-[180px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[18px]">
               {t('chat_profile')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat1;
