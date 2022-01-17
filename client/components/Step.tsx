import { Grid, TextField } from "@mui/material";

const Step = (index: number) => {
  return (
    <Grid container direction={"column"} sx={{ padding: 20 }}>
      {index === 1 ? (
        <>
          <TextField sx={{ mt: 2 }} label="Track name" />
          <TextField sx={{ mt: 2 }} label="Artist name" />
          <TextField sx={{ mt: 2 }} label="Track text" rows={3} multiline />
        </>
      ) : index === 1 ? (
        <></>
      ) : (
        <h1>Hello</h1>
      )}
    </Grid>
  );
};

export default Step;
