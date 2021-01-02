import { GetStaticProps } from "next";
import { fetchDecks } from "@arayaryoma/speakerdeck-scraper";
import React, { FC } from "react";
import { Card } from "../components/card";
import classes from "./index.module.css";

interface Props {
  slides: Array<Slide>;
}

const Home: FC<Props> = (props) => {
  return (
    <main className={classes.main}>
      <section>
        <h1>Slides</h1>
        <ul className={classes.slides}>
          {props.slides.map((slide, i) => (
            <li key={i} className={classes.slide}>
              <Card slide={slide} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const decks = await fetchDecks({ username: "arayaryoma" });

  return {
    props: {
      slides: decks.map((deck) => ({
        title: deck.title,
        image: deck.previewImageSrc,
        url: deck.url,
      })),
    },
  };
};

export default Home;
