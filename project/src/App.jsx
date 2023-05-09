import { useEffect, useState } from "react";

import "./styles/app.scss";
import { resizeHandler } from "./helpers/resizeHandler";

import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    resizeHandler(isMobile, setIsMobile, 900);
    window.addEventListener("resize", () => {
      resizeHandler(isMobile, setIsMobile, 900);
    });

    return () => {
      window.removeEventListener("resize", () => {
        resizeHandler(isMobile, setIsMobile, 900);
      });
    };
  }, [isMobile]);

  return (
    <>
      <Header isMobile={isMobile} />
      <div className="container-flex">
        <Aside />
        <Main />
      </div>
      <Footer isMobile={isMobile} />
    </>
  );
};
