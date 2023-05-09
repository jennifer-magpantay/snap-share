import PropTypes from "prop-types";

import { Card } from "./Card";

export const CardList = ({ data, width }) => {
  return (
    <>
      {data && (
        <ul className="list--container" id="cards-list">
          {data.map((item) => (
            <li key={item.id} style={{ width: width }}>
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
  width: PropTypes.string,
};
