import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { calculateCardWidth } from "../helpers/cardWidth";

import { CardList } from "./CardList";
import { Button } from "./Button";

import GridTwo from "./icons/GridTwo";
import GridFour from "./icons/GridFour";
import GridOne from "./icons/GridOne";

const data = [
  {
    id: "1",
    src: "/",
    title: "Lorem ipsum",
    caption: "Some caption for the picture",
    lastModified: "2018-07-07",
  },
  {
    id: "2",
    src: "/",
    title: "Lorem ipsum",
    caption: "Some caption for the picture",
    lastModified: "2018-07-07",
  },
  {
    id: "3",
    src: "/",
    title: "Lorem ipsum",
    caption: "Some caption for the picture",
    lastModified: "2018-07-07",
  },
  {
    id: "4",
    src: "/",
    title: "Lorem ipsum",
    caption: "Some caption for the picture",
    lastModified: "2018-07-07",
  },

  {
    id: "5",
    src: "/",
    title: "Lorem ipsum",
    caption: "Some caption for the picture",
    lastModified: "2018-07-07",
  },
];

export const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  });

  function handleGridView(event) {
    const gridView = event.currentTarget.dataset.view;
    const snapsList = document.querySelectorAll(
      "#cards-container #cards-list li"
    );
    Array.from(snapsList).forEach(
      (snap) => (snap.style.width = `calc(100% / ${gridView} - 8px)`)
    );
  }

  return (
    <main>
      <div className="main--header">
        <h2 className="main--header-title">
          {data.length === 0
            ? "No snaps registered yet"
            : "Your snaps colletion"}
        </h2>

        {windowWidth > 600 && (
          <div
            className="container--button-view
        "
          >
            <Button
              customClass="grid"
              id="grid-one-button"
              type="button"
              hasIcon={true}
              text="Display one picture at time"
              icon={<GridOne />}
              data-view="1"
              disabled={data.length === 0}
              onClick={(event) => {
                handleGridView(event);
              }}
            />

            <Button
              customClass="grid"
              id="grid-two-button"
              type="button"
              hasIcon={true}
              text="Display two columns of pictures"
              icon={<GridTwo />}
              data-view="2"
              disabled={data.length === 0}
              onClick={(event) => {
                handleGridView(event);
              }}
            />

            {windowWidth >= 1440 && (
              <Button
                customClass="grid"
                id="grid-four-button"
                type="button"
                hasIcon={true}
                text="Display four columns of pictures"
                icon={<GridFour />}
                data-view="4"
                disabled={data.length === 0}
                onClick={(event) => {
                  handleGridView(event);
                }}
              />
            )}
          </div>
        )}
      </div>
      <div className="container--cards-list" id="cards-container">
        {data.length === 0 ? (
          <p>No moments registered yet</p>
        ) : (
          <CardList data={data} width={calculateCardWidth(windowWidth)} />
        )}
      </div>
    </main>
  );
};

Main.propTypes = {
  isMobile: PropTypes.bool,
};
