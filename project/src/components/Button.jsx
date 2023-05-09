import PropTypes from "prop-types";

export const Button = ({
  type,
  customClass,
  id,
  hasIcon,
  text,
  icon,
  ...props
}) => {
  return (
    <button
      className={customClass && customClass}
      id={id}
      type={type}
      {...props}
    >
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
  id: PropTypes.string,
  hasIcon: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.node,
};
