import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import {
  BAR_BLACK_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
} from "../../constants/colors";

interface PrimaryBtnProps {
  route?: string | undefined;
  sx?: any;
  variant?: "text" | "contained" | "outlined" | undefined;
}

const PrimaryBtn: FC<PrimaryBtnProps> = ({
  route,
  children,
  sx,
  variant = "contained",
}) => {
  const router = useRouter();
  const changeRoute = (e: any, route?: string) => {
    if (route) return router.push(route);
    return e.preventDefault();
  };
  return (
    <Button
      variant={variant}
      sx={{
        background: variant === "contained" ? PRIMARY_COLOR : "text",
        color: variant === "contained" ? BAR_BLACK_COLOR : "text",
        fontWeight: 600,
        "&:hover": {
          background: PRIMARY_COLOR_HOVER,
        },
        ...sx,
      }}
      onClick={(e) => changeRoute(e, route)}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
