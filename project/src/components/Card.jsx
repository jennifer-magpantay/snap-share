import PropTypes from "prop-types";

export const Card = ({ title, caption, lastModified }) => {
  return (
    <div className="container--card">
      <p className="date--card">
        <time dateTime={lastModified}>{lastModified}</time>
      </p>
      <figure>
        <img src="/" alt={title} className="image--card" />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  lastModified: PropTypes.string,
};
