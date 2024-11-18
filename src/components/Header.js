import {
  Select,
  MenuItem,
  AppBar,
  Container,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch } from "react-redux";
import { fetchAllCoins } from "../store/coinStore";
import RefreshButton from "./Banner/RefreshBtn";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "rgb(8, 0, 255)",
    fontFamily: "Montserrat",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "30px",
    marginBottom: 15,
  }
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={classes.title}
              variant="h5">
              TRACy
            </Typography>

            <RefreshButton/>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 20,
                color: 'blue',
                borderColor: 'blue'
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
