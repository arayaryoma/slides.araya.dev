import { GetStaticProps } from "next";
import { fetchDecks } from "@arayaryoma/speakerdeck-scraper";

import React, { FC } from "react";
import { Card } from "../components/card";

interface Props {
  slides: Array<Slide>;
}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <ul>
        {props.slides.map((slide, i) => (
          <li key={i}>
            <Card slide={slide} />
          </li>
        ))}
      </ul>
    </div>
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
