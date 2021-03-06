import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { useStyles } from "./NavBar.styles";

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
  const [mobileMenu, setMobileMenu] = useState({
    openMenu: false,
    anchorEl: null,
  });
  const { openMenu, anchorEl } = mobileMenu;
  const {
    header,
    logoStyle,
    menuButton,
    menuIcon,
    active,
    anchorOriginAttr,
    mobileMenuStyle
  } = useStyles();

  const logo = (
    <Typography variant="h6" component="h1" className={logoStyle}>
      Book Store
    </Typography>
  );

  const handleMenuView = (event) => {
    let target = event.currentTarget;
    setMobileMenu((prevState) => ({
      ...prevState,
      openMenu: true,
      anchorEl: target,
    }));
  };

  const handleClose = () => {
    setMobileMenu((prevState) => ({
      ...prevState,
      openMenu: false,
      anchorEl: null,
    }));
  };
  const MenuBar = () => {
    return (
      <Toolbar>
        <IconButton onClick={handleMenuView}>
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
        <RouterLink
          key={label}
          to={href}
          className={menuButton}
          activeClassName={active}
        >
          {label}
        </RouterLink>
      );
    });
    return Menu;
  };

  const MobileDisplay = () => {
    const data = headersData.map(({ label, href }) => {
      return (
        <MenuItem key={label}>
          <RouterLink
            key={label}
            to={href}
            className={mobileMenuStyle}
            activeClassName={active}
          >
            {label}
          </RouterLink>
        </MenuItem>
      );
    });
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={anchorOriginAttr}
        transformOrigin={anchorOriginAttr}
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
