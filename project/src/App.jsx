import "./styles/app.scss";

import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container-flex">
        <h1>Hello Stranger</h1>
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
};
