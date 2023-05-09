import PropTypes from "prop-types";
export const Button = ({ type, customClass, hasIcon, text, icon }) => {
  return (
    <button type={type} className={customClass && customClass}>
      {hasIcon ? (
        <>
          <span className="sr-only">{text}</span>
          {icon}
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  customClass: PropTypes.string,
  hasIcon: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.node,
};
