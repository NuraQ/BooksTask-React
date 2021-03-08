import { AppBar, Toolbar, Typography, Button, InputBase } from "@material-ui/core";
import React from "react";
import { useStyles } from "./NavBar.styles";
import { NavLink as RouterLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const headersData = [
  {
    label: "Home",
    href: "/Home",
  },
  {
    label: "Purchased Books",
    href: "/PurchasedBooks",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];
const Header = () => {
  const { header, logoStyle, menuButton, search, searchIcon, inputRoot, inputInput} = useStyles();

  const logo = (
    <Typography variant="h6" component="h1" className={logoStyle}>
      Book Store
    </Typography>
  );
  
  const displayDesktop = () => {
    return (
      <Toolbar>
        {logo}
        {menuLinks()}
        <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              className={`${inputRoot} ${inputInput}`}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
      </Toolbar>
    );
  };
  const menuLinks = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "solid 3px #20B2AA	",
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};
export default Header;
