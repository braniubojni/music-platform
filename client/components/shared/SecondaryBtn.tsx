import { Button } from "@mui/material";
import { FC } from "react";
import { BAR_BLACK_COLOR, PRIMARY_COLOR_HOVER } from "../../constants/colors";

interface SecondaryBtnProps {
  onClick?: Function;
  disabled?: boolean | undefined;
}

const SecondaryBtn: FC<SecondaryBtnProps> = ({ children, onClick }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        mr: 1,
        "&:hover": {
          background: PRIMARY_COLOR_HOVER,
        },
        color: BAR_BLACK_COLOR,
        width: "15%",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SecondaryBtn;
