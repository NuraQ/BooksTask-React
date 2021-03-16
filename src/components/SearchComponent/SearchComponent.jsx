import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchComponent.style";
import { InputBase } from "@material-ui/core";
import { useDispatch } from "react-redux";

import ACTIONS from "../Actions/Actions";
export const SearchComponent = () => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: ACTIONS.search, payload: event.target.value });
  };

  return (
    <div className={search}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        className={`${inputRoot} ${inputInput}`}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {handleChange(e)}}
      />
    </div>
  );
};
