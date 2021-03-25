import {useDispatch} from 'react-redux'
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import clsx from 'clsx';
import {SearchElements} from './SearchDispatchActions'
import { useStyles } from "./SearchComponent.style";
export const SearchComponent = (props) => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(SearchElements(event.target.value ))
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
