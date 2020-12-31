import React from "react";
import { FC } from "react";
import classes from "./card.module.css";

type Props = {
  slide: Slide;
};

export const Card: FC<Props> = ({ slide }) => {
  return (
    <div>
      <a href={slide.url} className={classes.card}>
        <img src={slide.image} loading="lazy" />
        <span>{slide.title}</span>
      </a>
    </div>
  );
};
