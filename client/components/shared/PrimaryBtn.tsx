import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import {
  BAR_BLACK_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
} from "../../constants/colors";

interface PrimaryBtnProps {
  route: string;
  children: React.ReactNode;
  sx?: any;
}

const PrimaryBtn: FC<PrimaryBtnProps> = ({ route, children, sx }) => {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      sx={{
        background: PRIMARY_COLOR,
        color: BAR_BLACK_COLOR,
        fontWeight: 600,
        "&:hover": {
          background: PRIMARY_COLOR_HOVER,
        },
        ...sx,
      }}
      onClick={() => router.push(route)}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
