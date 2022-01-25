import { Grid, TextField } from "@mui/material";
import FirstStep from "./steps/FirstStep";

const Step = (index: number) => {
  console.log(index);
  return (
    <Grid container direction={"column"} sx={{ padding: 20 }}>
      {index === 1 ? (
        <>
          <FirstStep />
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
