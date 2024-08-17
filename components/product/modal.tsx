'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import ProductReviewForm from '../forms/product-review';

function Modal({ id }: { id: string }) {
  const [visible, setVisible] = React.useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const name = params.get('name');
    const email = params.get('email');

    if (name && email) {
      setVisible(true);
    }
  }, []);

  const togglePopup = () => {
    setVisible(!visible);
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] h-screen w-full overflow-y-auto bg-black/70 md:flex md:items-center md:justify-center">
          <motion.div
            className="w-full p-10 pt-12 "
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative mx-auto w-11/12 max-w-[420px] rounded-lg bg-[#532826]">
              <ProductReviewForm productId={id} />
              <button
                onClick={togglePopup}
                className="group absolute left-full top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#532826]"
              >
                <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
                <XMarkIcon className="relative z-10 h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
