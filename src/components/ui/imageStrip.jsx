"use client";
import Image from "next/image";
import React, { memo, useEffect, useRef } from "react";

const ImageStrip = ({ images = [] }) => {
  const allImages = [...images, ...images];

  return (
    <marquee behavior="scroll" direction="left" scrollamount="8">
      <div className="flex gap-x-16 items-center">
        {allImages.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`img-${i}`}
            width={120}
            height={80}
            className="rounded-md object-contain"
          />
        ))}
      </div>
    </marquee>
  );
};
export default memo(ImageStrip);
