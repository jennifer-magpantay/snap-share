import PropTypes from "prop-types";
import { Card } from "./Card";

export const CardList = ({ data }) => {
  return (
    <>
      {data && (
        <ul className="list--container">
          {data.map((item) => (
            <li key={item.id}>
              <Card
                title={item.title}
                caption={item.caption}
                lastModified={item.lastModified}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

CardList.propTypes = {
  data: PropTypes.array,
};
