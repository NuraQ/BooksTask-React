import {useDispatch} from 'react-redux'
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import clsx from 'clsx';
import {SearchElements} from '../Actions/Books/BooksActions'
import { useStyles } from "./SearchComponent.style";

export const SearchComponent = () => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();
  const dispatch = useDispatch()
  const handleChange = (event) => {
    SearchElements(event.target.value, dispatch)
  };

  return (
    <div className={search}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        className={clsx(inputRoot, inputInput)}
        onChange={handleChange}
      />
    </div>
  );
};
