import { MagnifyingGlass } from "@phosphor-icons/react";
export const Search = () => {
  return (
    <form action="" role="search" className="form--search">
      <input
        type="search"
        className="input--search"
        id="search-js"
        name="q"
        placeholder="Search"
        aria-label="Search through application"
      />
      <button type="submit" className="button--search">
        <span className="sr-only">Search</span>
        <MagnifyingGlass size={24} weight="bold" />
      </button>
    </form>
  );
};
