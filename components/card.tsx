import React from "react";
import { FC } from "react";

type Props = {
  slide: Slide;
};

export const Card: FC<Props> = ({ slide }) => {
  return (
    <div>
      <a href={slide.url}>
        <img src={slide.image} loading="lazy" />
        <span>{slide.title}</span>
      </a>
    </div>
  );
};
