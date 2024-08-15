import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  logoBox: {
    textAlign: "center",
  },
  logo: {
    width: "80%",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
  },
  [theme.breakpoints.down("md")]: {
    rightColumn: {
      display: "none",
    },
  },
}));

export default useStyles;
