import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchComponent.style";
import { InputBase } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import history from '../../routes/history'

import ACTIONS from "../Actions/Actions";
export const SearchComponent = () => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);

    dispatch({ type: ACTIONS.search, payload: text });
    history.push('/')

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
        value={text}
      />
    </div>
  );
};
