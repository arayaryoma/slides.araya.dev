import { fetchDecks } from "@arayaryoma/speakerdeck-scraper";
import fetch from "node-fetch";
import { parse, HTMLElement } from "node-html-parser";
import slideSources from "../data/slides.json";

export interface Slide {
  title?: string;
  image?: string;
  url?: string;
}

export const getAllSlides = async (): Promise<Array<Slide>> => {
  const decks = await fetchDecks({ username: "arayaryoma" });
  const slides = await fetchFromUrl();
  console.log(slides);
  return [
    ...decks.map((deck) => ({
      title: deck.title,
      url: deck.url,
      image: deck.previewImageSrc,
    })),
    ...slides,
  ];
};

const fetchFromUrl = async (): Promise<Array<Slide>> => {
  const promises = slideSources.map(async (src) => {
    const res = await fetch(src.url);
    const html = await res.text();
    const root = parse(html);
    const titleEl = root.querySelector("title");
    const ogpTitleEl = root.querySelector('meta[property="og:title"]');
    const ogpImageEl = root.querySelector('meta[property="og:image"]');
    const title = ogpTitleEl?.getAttribute("content") ?? titleEl?.text;
    return {
      title,
      image: ogpImageEl?.getAttribute("content"),
      url: src.url,
    };
  });
  return Promise.all(promises);
};
