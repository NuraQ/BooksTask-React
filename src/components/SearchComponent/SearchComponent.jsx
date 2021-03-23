import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchComponent.style";
import { InputBase } from "@material-ui/core";
import ACTIONS from "../Actions/Actions";
import clsx from 'clsx';

export const SearchComponent = (props) => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();
  const handleChange = (event) => {
    props.dispatch({ type: ACTIONS.search, payload: event.target.value });
  };

  return (
    <div className={search}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        className={clsx(inputRoot, inputInput)}
        onChange={(e) => {handleChange(e)}}
      />
    </div>
  );
};