'use client';
import Script from 'next/script';

function Modal() {
  // const [visible, setVisible] = React.useState(false);

  // useEffect(() => {
  //   let pop_status = localStorage.getItem('pop_status');
  //   if (!pop_status) {
  //     setVisible(true);
  //     localStorage.setItem('pop_status', 'visible');
  //   }
  // }, []);

  // if (!visible) return null;

  // const togglePopup = () => {
  //   setVisible(!visible);
  // };

  return (
    <>
      <Script
        src="//loox.io/widget/loox.js?shop=0690d7-0d.myshopify.com"
        strategy="lazyOnload" // Equivalent to async
      />
      <div id="looxReviews" data-product-id="XXXXXXXXXX">
        ddd
      </div>
    </>
    // <AnimatePresence>
    //   {visible && (
    //     <div className="fixed inset-0 z-[100] h-screen w-full overflow-y-auto bg-black/70 md:flex md:items-center md:justify-center">
    //       <motion.div
    //         className="w-full p-10 pt-12 "
    //         initial={{ opacity: 0, y: -200 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -200 }}
    //         transition={{ duration: 0.4 }}
    //       >
    //         <div className="relative mx-auto w-11/12 max-w-[380px] rounded-lg bg-[#532826] lg:max-w-screen-lg">
    //           <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
    //             <div className="flex flex-col items-center space-y-5 py-8 lg:justify-between lg:px-9 lg:py-20">
    //               <div className="flex w-8/12 justify-center lg:w-9/12">
    //                 <TenOff />
    //               </div>
    //               <p className="text-center text-xl font-medium leading-none lg:text-2xl">
    //                 When you <span className="text-[#8DC8E8]">sign up</span> for our emails!
    //               </p>
    //               <p className="text-center text-2xl font-medium leading-none lg:text-3xl">
    //                 Get access to exclusive sales
    //                 <br className="hidden lg:block" /> and new product drops!
    //               </p>
    //               <div className="flex w-full justify-center lg:w-10/12">
    //                 <form
    //                   action=""
    //                   className="flex flex-col items-stretch text-xl font-medium md:flex-row"
    //                 >
    //                   <input
    //                     type="text"
    //                     placeholder="Your email address"
    //                     className="h-[48px] appearance-none border-2 border-[#F6E7E0] bg-transparent pl-4 placeholder:text-[#F6E7E0]/70"
    //                   />
    //                   <button type="submit" className="h-[48px] bg-[#F6E7E0] px-4 text-[#532826]">
    //                     Sign up
    //                   </button>
    //                 </form>
    //               </div>
    //               <div className="border-bottom-sky-lg relative pb-9 lg:pb-12">
    //                 <p className="text-center text-lg leading-none">
    //                   By subscribing, you agree to receive
    //                   <br /> promotional emails from Nanu.
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="relative max-lg:aspect-video">
    //               <Image
    //                 src="/images/10-off-at-signup.jpg"
    //                 alt="10% OFF When you sign up for our emails!"
    //                 width={585}
    //                 height={717}
    //                 className="absolute h-full w-full object-cover object-center"
    //               />
    //             </div>
    //           </div>
    //           <button
    //             onClick={togglePopup}
    //             className="group absolute left-full top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#532826]"
    //           >
    //             <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
    //             <XMarkIcon className="relative z-10 h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
    //           </button>
    //         </div>
    //       </motion.div>
    //     </div>
    //   )}
    // </AnimatePresence>
  );
}

export default Modal;
