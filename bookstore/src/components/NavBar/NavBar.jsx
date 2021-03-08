import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./NavBar.styles";
import { Link as RouterLink } from "react-router-dom";

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
  const { header, logoStyle, menuButton, toolbar } = useStyles();

  const logo = (
    <Typography variant="h6" component="h1" className={logoStyle}>
      Book Store
    </Typography>
  );
  const displayDesktop = () => {
    return (
      <Toolbar className="toolbar">
        {logo}
        {menuLinks()}
      </Toolbar>
    );
  };
  const menuLinks = () => {
    return (
      <ul>
        {headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton
              }}
            >
              {label}
            </Button>
          );
        })}
      </ul>
    );
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};
export default Header;
