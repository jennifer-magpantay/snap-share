import PropTypes from "prop-types";
export const Button = ({ hasIcon, text, icon }) => {
  return (
    <button type="button">
      {hasIcon ? (
        <>
          <span className="sr-only">{text}</span>
          {icon}
        </>
      ) : (
        { text }
      )}
    </button>
  );
};

Button.prototype = {
  hasIcon: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.node,
};
