import { Box, TextField } from "@mui/material";
import React from "react";

const FirstStep: React.FC = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField sx={{ mt: 2 }} label="Track name" />
        <TextField sx={{ mt: 2 }} label="Artist name" />
        <TextField sx={{ mt: 2 }} label="Track text" rows={3} multiline />
      </Box>
    </>
  );
};

export default FirstStep;
