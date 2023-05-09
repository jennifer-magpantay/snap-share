import { CardList } from "./CardList";

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
];

export const Main = () => {
  return (
    <main>
      {/* header */}
      <div className="container--cards-list">
        <CardList data={data} />
      </div>
    </main>
  );
};
