import React from "react";

import useStyles from "./style";

const Button = ({ titlePrimary, titleSecondary, save, close }) => {
  const classes = useStyles();

  return (
    <>
      <button className={classes.btnCancel} onClick={close}>
        {titleSecondary}
      </button>
      <button className={classes.btnConfirm} onClick={save}>
        {titlePrimary}
      </button>
    </>
  );
};

export default Button;
