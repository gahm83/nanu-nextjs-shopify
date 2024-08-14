'use client';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

const css = {
  box: {
    backgroundColor: 'linen',
    width: '30vw',
    height: '30vw',
    position: 'relative' as const
  },
  fly: {
    position: 'absolute' as const,
    width: '20px',
    height: '20px',
    margin: '-10px',
    backgroundColor: 'red',
    borderRadius: 10
  }
};

interface Coordinates {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

function getRelativeCoordinates(
  event: React.MouseEvent,
  referenceElement: HTMLDivElement | null
): Coordinates {
  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: referenceElement?.offsetLeft || 0,
    top: referenceElement?.offsetTop || 0,
    width: referenceElement?.clientWidth || 0,
    height: referenceElement?.clientHeight || 0
  };

  let reference = referenceElement?.offsetParent as HTMLElement | null;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement | null;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  };
}

export default function MouseScroll() {
  const [mousePosition, setMousePosition] = useState<Partial<Coordinates>>({});
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));

    console.log();
  };

  return (
    <motion.div
      ref={boxRef}
      onMouseMove={(e) => handleMouseMove(e)}
      className="relative h-full w-full"
    >
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        className="h-[150%] w-full"
      />
      <div className="absolute left-0 top-0 z-10 text-black">
        {mousePosition.x} / {mousePosition.y}
        <br />
        {mousePosition.centerX} / {mousePosition.centerY}
        <br />
        {mousePosition.width} / {mousePosition.height}
        <br />
      </div>
    </motion.div>
  );
}
