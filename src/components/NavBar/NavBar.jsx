import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./NavBar.styles";
import { NavLink as RouterLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/iconbutton";
import { Menu, MenuItem } from "@material-ui/core";

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
  const {
    header,
    logoStyle,
    menuButton,
    search,
    searchIcon,
    inputRoot,
    inputInput,
    menuIcon,
  } = useStyles();

  const [drawerOpen, setState] = useState(false);
  const [anchorEl, setAnchor] = useState(null);

  const logo = (
    <Typography variant="h6" component="h1" className={logoStyle}>
      Book Store
    </Typography>
  );

  const setMobileView = (event) => {
    setState(true);
    setAnchor(event.currentTarget);
  };
   const handleClose = () => {
    setAnchor(null);
    setState(false);

  };
  const MenuBar = () => {
    return (
      <Toolbar>
        <IconButton onClick={setMobileView}>
          <HomeIcon className={menuIcon} />
        </IconButton>
        {logo}
        {drawerOpen ? <MobileDisplay /> : MenuDesktop()}
        <div className={search}>
          <div className={searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            className={`${inputRoot} ${inputInput}`}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    );
  };
  const MenuDesktop = () => {
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

  const MobileDisplay = () => {
    const data = headersData.map(({ label, href }) => {
      return (
        <MenuItem key={label}>
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
            }}
            activeStyle={{
              fontWeight: "bold",
              borderBottom: "solid 3px #20B2AA	",
            }}
          >
            {label}
          </Button>
        </MenuItem>
      );
    });
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data}
      </Menu>
    );
  };
  return (
    <header>
      <AppBar className={header}><MenuBar /></AppBar>
    </header>
  );
};
export default Header;
