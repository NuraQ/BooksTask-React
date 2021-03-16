import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchComponent.style";
import { InputBase } from "@material-ui/core";
import clsx from 'clsx';

export const SearchComponent = () => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();
  return (
    <div className={search}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        className={clsx(inputRoot, inputInput)}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};
