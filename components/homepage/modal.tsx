'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import TenOff from '../svg/ten-off';

function Modal() {
  const [showPopup, setShowPopup] = React.useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] h-screen w-screen overflow-y-auto bg-black/70 md:flex md:items-center md:justify-center">
        <motion.div
          className="w-full p-10 pt-12 "
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative mx-auto w-full max-w-[380px] rounded-lg bg-[#532826] lg:w-full lg:max-w-screen-lg">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
              <div className="flex flex-col items-center space-y-5 px-6 py-8 lg:justify-between lg:px-9 lg:py-20">
                <div className="flex w-8/12 justify-center lg:w-9/12">
                  <TenOff />
                </div>
                <p className="text-center text-xl font-medium lg:text-2xl">
                  When you <span className="text-[#8DC8E8]">sign up</span> for our emails!
                </p>
                <p className="text-center text-2xl font-medium leading-none lg:text-3xl">
                  Get access to exclusive sales
                  <br /> and new product drops!
                </p>
                <div className="flex w-full justify-center lg:w-10/12">
                  <form action="" className="flex h-[48px] items-stretch text-xl font-medium">
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="appearance-none border-2 border-[#F6E7E0] bg-transparent pl-4 placeholder:text-[#F6E7E0]/70"
                    />
                    <button type="submit" className="bg-[#F6E7E0] px-4 text-[#532826]">
                      Sign up
                    </button>
                  </form>
                </div>
                <div className="border-bottom-sky-lg relative pb-9 lg:pb-12">
                  <p className="text-center text-lg leading-none">
                    By subscribing, you agree to receive
                    <br /> promotional emails from Nanu.
                  </p>
                </div>
              </div>
              <div className="relative max-lg:aspect-video">
                <Image
                  src="/images/10-off-at-signup.jpg"
                  alt="10% OFF When you sign up for our emails!"
                  width={585}
                  height={717}
                  className="absolute h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <button className="group absolute left-full top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#532826]">
              <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
              <XMarkIcon className="relative z-10 h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Modal;
