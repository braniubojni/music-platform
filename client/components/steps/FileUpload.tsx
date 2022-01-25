import React from "react";
import { Box, Input } from "@mui/material";

interface FileUploadProps {
  file: any;
  setFile: Function;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, setFile }) => {
  return (
    <Box sx={{ width: "46%" }}>
      <Input type="file" />
    </Box>
  );
};

export default FileUpload;
