import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "./Button";

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
      <Button
        type="submit"
        hasIcon={true}
        text="Search in the application"
        icon={<MagnifyingGlass size={24} color="#FAFAFA" weight="bold" />}
      />
    </form>
  );
};
