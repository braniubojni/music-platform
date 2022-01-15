import { Box, styled } from "@mui/system";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  div: {
    h2: {
      margin: 0,
      padding: 0,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
}));
