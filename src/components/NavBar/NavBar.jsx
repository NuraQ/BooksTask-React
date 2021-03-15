import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./NavBar.styles";
import { NavLink as RouterLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import { SearchComponent } from "../SearchComponent/SearchComponent";

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
  const { header, logoStyle, menuButton, menuIcon } = useStyles();
  const [state, setState] = useState({
    openMenu: false,
    anchorEl: null,
  });
  const { openMenu, anchorEl } = state;
  const logo = (
    <Typography variant="h6" component="h1" className={logoStyle}>
      Book Store
    </Typography>
  );

  const setMobileView = (event) => {
    let target = event.currentTarget;    
    setState((prevState) => ({ ...prevState, openMenu: true }));
    setState((prevState) => ({ ...prevState, anchorEl: target }));
  };

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, openMenu: false }));
    setState((prevState) => ({ ...prevState, anchorEl: null }));
  };
  const MenuBar = () => {
    return (
      <Toolbar>
        <IconButton onClick={setMobileView}>
          <div className={menuIcon}>
            <HomeIcon />
          </div>
        </IconButton>
        {logo}
        {openMenu ? <MobileDisplay /> : <DesktopDisplay />}
        <SearchComponent />
      </Toolbar>
    );
  };
  const DesktopDisplay = () => {
    const Menu = headersData.map(({ label, href }) => {
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
    return Menu;
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
      <AppBar className={header}>
        <MenuBar />
      </AppBar>
    </header>
  );
};
export default Header;
