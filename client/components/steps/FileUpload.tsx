import React, { useRef } from "react";
import { Box, Input } from "@mui/material";

interface FileUploadProps {
  setFile: Function;
  accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.hasOwnProperty("files") && e.target.files !== null) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Box onClick={() => ref.current?.click()} sx={{ width: "46%" }}>
      <input
        type="file"
        accept={accept}
        onChange={onChange}
        style={{ display: "none" }}
        ref={ref}
      />
      {children}
    </Box>
  );
};

export default FileUpload;
