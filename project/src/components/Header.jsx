import PropTypes from "prop-types";

import { UploadPicture } from "./UploadPicture";
import { Logo } from "./Logo";
import { Search } from "./Search";

export const Header = ({ isMobile }) => {
  return (
    <header>
      <Logo color="#ff4757" />
      <Search />
      {!isMobile && <UploadPicture />}
    </header>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
};
