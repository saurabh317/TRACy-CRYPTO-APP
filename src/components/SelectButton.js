import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  selectbutton: {
    border: "1px solid rgb(8, 0, 255)",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(8, 0, 255)",
      color: "white",
    },
    width: "15%",
  },

  "@media screen and (min-width: 370px) and (max-width: 600px)": {
    selectbutton: {
      width: "fit-content",
      padding: 4,
      fontSize: "12px",
      paddingLeft: 6,
      paddingRight: 6,
    },
  },
}));

const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();
  return (
    <span
      onClick={onClick}
      style={{
        backgroundColor: selected ? "rgb(8, 0, 255)" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
        transition: "background-color 0.3s",
      }}
      className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
