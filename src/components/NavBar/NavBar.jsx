import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import Avatar from "@material-ui/core/Avatar";
import { useStyles } from "./NavBar.styles";
import { useSelector } from "react-redux";

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

const showLabel = (label) => {
  if (label === "Purchased Books" || label === "Log Out") {
    return false;
  }
  return true;
};
const Header = (props) => {
  const [isMobile, setIsMobile] = useState({
    openMenu: false,
    anchorEl: null,
  });
  const {
    header,
    logoStyle,
    menuButton,
    menuIcon,
    active,
    anchorOriginAttr,
    mobileMenu,
    userIcon
  } = useStyles();
  const { openMenu, anchorEl } = isMobile;
  const selectCurenntUser = (state) => state.AuthState;
  const currentUser = useSelector(selectCurenntUser);
  const logo = (
    <Typography variant="h6" component="h1" className={logoStyle}>
      Book Store
    </Typography>
  );

  const handleMenuView = (event) => {
    let target = event.currentTarget;
    setIsMobile((prevState) => ({
      ...prevState,
      openMenu: true,
      anchorEl: target,
    }));
  };

  const handleClose = () => {
    setIsMobile((prevState) => ({
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
        <SearchComponent dispatch={props.dispatch} />
        {currentUser.isLogged && <Avatar className={userIcon}>FA</Avatar>}
      </Toolbar>
    );
  };
  const DesktopDisplay = () => {
    const Menu = headersData.map(({ label, href }) => {
      return (
        (currentUser.isLogged || showLabel(label)) && (
          <RouterLink
            key={label}
            to={href}
            className={menuButton}
            activeClassName={active}
          >
            {label}
          </RouterLink>
        )
      );
    });
    return Menu;
  };

  const MobileDisplay = () => {
    const data = headersData.map(({ label, href }) => {
      return (
        (currentUser.isLogged || showLabel(label)) && (
          <MenuItem key={label}>
            <RouterLink
              key={label}
              to={href}
              className={mobileMenu}
              activeClassName={active}
            >
              {label}
            </RouterLink>
          </MenuItem>
        )
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