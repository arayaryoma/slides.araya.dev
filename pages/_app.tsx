import * as React from "react";
import { FC } from "react";
import { NextComponentType } from "next";
import "./styles.css";

type Props = {
  Component: NextComponentType;
  pageProps: any;
};

export const App: FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
