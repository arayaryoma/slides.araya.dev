import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { FC } from "react";
import { Card } from "../components/card";
import classes from "./index.module.css";
import { getAllSlides, Slide } from "../models/slide";
import { Nullable } from "../utils/types";

type SlideProp = Nullable<Required<Slide>>;

export const getStaticProps: GetStaticProps<{
  slides: Array<SlideProp>;
}> = async (context) => {
  const slides = await getAllSlides();

  return {
    props: {
      slides: slides.map((slide) => ({
        title: slide.title ?? null,
        image: slide.image ?? null,
        url: slide.url ?? null,
      })),
    },
  };
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className={classes.main}>
      <section>
        <h1>Slides</h1>
        <ul className={classes.slides}>
          {props.slides.map((slide, i) => (
            <li key={i} className={classes.slide}>
              <Card title={slide.title} image={slide.image} url={slide.url} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
