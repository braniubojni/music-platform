import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { BAR_BLACK_COLOR, PRIMARY_COLOR_HOVER } from "../../constants/colors";
import { useState } from "react";
import FirstStep from "../../components/steps/FirstStep";
import FileUpload from "../../components/steps/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const next = () => setActiveStep((prev) => prev - 1);
  const back = () => setActiveStep((prev) => prev + 1);

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        <Box sx={{ px: "2%" }} component="h1">
          <>
            {activeStep === 0 ? (
              <FirstStep />
            ) : activeStep === 1 ? (
              <FileUpload />
            ) : (
              <h1>Hello</h1>
            )}
          </>
        </Box>
      </StepWrapper>
      <Grid container justifyContent="space-between" sx={{ mt: "2%" }}>
        <Button
          variant="outlined"
          onClick={() => next()}
          disabled={activeStep <= 0}
          sx={{
            ml: 1,
            "&:hover": {
              background: PRIMARY_COLOR_HOVER,
            },
            color: BAR_BLACK_COLOR,
            width: "15%",
          }}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          onClick={() => back()}
          disabled={activeStep >= 2}
          sx={{
            ml: 1,
            "&:hover": {
              background: PRIMARY_COLOR_HOVER,
            },
            color: BAR_BLACK_COLOR,
            width: "15%",
          }}
        >
          Next
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
