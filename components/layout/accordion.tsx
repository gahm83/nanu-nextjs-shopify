'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ShopifyRichText from './ShopifyRichText';

interface AccordionData {
  answer: string;
  question: string;
}

const AccordionItem = ({
  title,
  children,
  isOpen,
  toggle
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}) => (
  <div className="relative w-full py-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-[5px] after:bg-border-wood after:bg-repeat-space after:content-[''] lg:py-16">
    <motion.div
      onClick={toggle}
      className={`relative mx-auto flex items-end justify-between ${isOpen && 'pb-10'} max-w-[800px] cursor-pointer space-x-4`}
    >
      <h2 className="max-w-[800px] font-portland text-lg font-bold uppercase text-[#532826] lg:text-2xl">
        {title}
      </h2>
      <span className="group relative flex h-16 w-16 shrink-0 items-center justify-center before:absolute before:block before:h-12 before:w-12 before:rotate-45 before:transform before:border-2 before:border-[#532826] before:transition before:duration-300 before:content-[''] hover:before:bg-[#532826]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute [&_path]:origin-center [&_path]:-rotate-90 [&_path]:fill-[#532826] [&_path]:transition [&_path]:duration-300"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2675 1.30086L10.9746 0.59375L12.3888 2.00796L11.6817 2.71507L4.32168 10.0751H20.043H21.043V12.0751H20.043H4.32154L11.6817 19.4353L12.3888 20.1424L10.9746 21.5566L10.2675 20.8495L1.20029 11.7823L0.493183 11.0752L1.20029 10.3681L10.2675 1.30086Z"
          />
        </svg>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute opacity-0 group-hover:opacity-100 [&_path]:origin-center [&_path]:rotate-90 [&_path]:fill-[#F6E7E0] [&_path]:transition [&_path]:duration-300"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2675 1.30086L10.9746 0.59375L12.3888 2.00796L11.6817 2.71507L4.32168 10.0751H20.043H21.043V12.0751H20.043H4.32154L11.6817 19.4353L12.3888 20.1424L10.9746 21.5566L10.2675 20.8495L1.20029 11.7823L0.493183 11.0752L1.20029 10.3681L10.2675 1.30086Z"
          />
        </svg>
      </span>
    </motion.div>
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isOpen ? 'auto' : 0 }}
      exit={{ height: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative mx-auto max-w-[800px] space-y-5 overflow-hidden text-justify text-xl font-medium text-[#532826]"
    >
      {children}
    </motion.div>
  </div>
);

const Accordion = ({ accordionData }: { accordionData: AccordionData[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-11/12 max-w-[960px]">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          isOpen={openIndex === index}
          toggle={() => toggleAccordion(index)}
        >
          <ShopifyRichText
            {...JSON.parse(item.answer)}
            options={[
              { type: 'bold', className: 'twcss-font-bold' },
              { type: 'italic', className: 'twcss-font-italic' }
            ]}
          />
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
