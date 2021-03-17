import React from "react";

export const CircularIndeterminate = () => {
  const classes = useStyles();
  setTimeout(() => {
    return (
        <CircularProgress />
    );
  }, 5000);
};
