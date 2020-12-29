import { GetStaticProps } from "next";
import { fetchDecks } from "@arayaryoma/speakerdeck-scraper";

import React, { FC } from "react";

interface Slide {
  title?: string;
  image?: string;
}

interface Props {
  slides: Array<Slide>;
}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <ul>
        {props.slides.map((slide, i) => (
          <li key={i}>{slide.title}</li>
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
      })),
    },
  };
};

export default Home;
