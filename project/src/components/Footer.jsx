import PropTypes from "prop-types";
import { Confetti, Camera } from "@phosphor-icons/react";

import { Button } from "./Button";

export const Footer = ({ isMobile }) => {
  return (
    <>
      {isMobile && (
        <div className="container--botton-page">
          <Button
            type="button"
            hasIcon={true}
            text="Take a picture"
            icon={<Camera size={32} color="#fafafa" />}
          />
        </div>
      )}
      <footer>
        <small>Developed with fun by Jennifer Magpantay </small>
        <Confetti size={18} color="#fafafa" />
      </footer>
    </>
  );
};

Footer.propTypes = {
  isMobile: PropTypes.bool,
};
