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
import Avatar from '@material-ui/core/Avatar';
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

const Header = (props) => {
  const {
    header,
    logoStyle,
    menuButton,
    menuIcon,
    active,
    anchorOriginAttr,
    mobileMenu
  } = useStyles();
  const [isMobile, setIsMobile] = useState({
    openMenu: false,
    anchorEl: null,
  });
  const { openMenu, anchorEl } = isMobile;
  const dispatch = props.dispatch
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
    console.log(dispatch,"dispatchSD")
    return (
      <Toolbar>
        <IconButton onClick={handleMenuView}>
          <div className={menuIcon}>
            <HomeIcon />
          </div>
        </IconButton>
        {logo}
        {openMenu ? <MobileDisplay /> : <DesktopDisplay />}
        <SearchComponent dispatch={props.dispatch}/>
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
    const data = headersData.map(({ label, href,index }) => {
      return (
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
