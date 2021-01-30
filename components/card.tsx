import React from "react";
import { FC } from "react";
import classes from "./card.module.css";

type Props = {
  title: string | null;
  url: string | null;
  image: string | null;
};

export const Card: FC<Props> = ({ title, url, image }) => {
  return (
    <div>
      <a href={url} className={classes.card}>
        <img src={image} loading="lazy" className={classes.image} width={640} />
        <span className={classes.title}>{title}</span>
      </a>
    </div>
  );
};
