import React from "react";

import useStyles from "./style";

const Button = ({ titlePrimary, titleSecondary, save, close }) => {
  const classes = useStyles();

  return (
    <>
      <button className={classes.btnCancel} onClick={close}>
        {titleSecondary}
      </button>
      <button type="submit" className={classes.btnConfirm} onClick={save}>
        {titlePrimary}
      </button>
    </>
  );
};

export default Button;
