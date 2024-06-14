'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import ShapeRomboid from './svg/shape-romboid';

const FreeShippingBanner = () => {
  const { scrollY } = useScroll();
  // const [hidden, setHidden] = useState(false);

  const height = useTransform(scrollY, [0, 60], [60, 0]);

  // useMotionValueEvent(scrollY, 'change', (latest: number) => {
  //   setHidden(latest > 60)
  // });

  return (
    <motion.div className="free-shipping-banner flex h-[48px] w-full items-center justify-center space-x-4 overflow-hidden bg-[#8DC8E8] lg:h-[60px]">
      <ShapeRomboid className="relative block h-3 w-3 lg:h-4 lg:w-4 [&_svg]:fill-[#532826]" />
      <span className="block font-bold text-[#532826] md:text-lg lg:text-xl">
        FREE SHIPPING ON ORDERS OVER $50
      </span>
      <ShapeRomboid className="relative block h-3 w-3 lg:h-4 lg:w-4 [&_svg]:fill-[#532826]" />
    </motion.div>
  );
};

export default FreeShippingBanner;
