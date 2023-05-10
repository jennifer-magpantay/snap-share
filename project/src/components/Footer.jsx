import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Confetti, Camera } from "@phosphor-icons/react";

import { Button } from "./Button";
import { Modal } from "./Modal";

export const Footer = ({ isMobile }) => {
  const [isCameraDisplayed, setIsCameraDisplayed] = useState(false);
  function handleOpenCamera(event) {
    setIsCameraDisplayed(!isCameraDisplayed);
    //document.body.style.overflowY = "hidden";
  }
  return (
    <>
      {isCameraDisplayed && createPortal(<Modal />, document.body)}
      <footer>
        {isMobile && (
          <div className="container--botton-page">
            <Button
              customClass="cta"
              id="open-camera-button"
              type="button"
              hasIcon={true}
              text="Take a picture"
              icon={<Camera size={32} color="#fafafa" />}
              onClick={(event) => handleOpenCamera(event)}
            />
          </div>
        )}

        {!isMobile && (
          <div className="signature">
            <small>Developed with fun by Jennifer Magpantay </small>
            <Confetti size={18} color="#fafafa" />
          </div>
        )}
      </footer>
    </>
  );
};

Footer.propTypes = {
  isMobile: PropTypes.bool,
};
