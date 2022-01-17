import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { FC } from "react";

interface StepWrapperProps {
  activeStep: number;
}

const steps = [
  "Information about track",
  "Upload the track",
  "Upload the track",
];

const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container sx={{ mt: "3%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, i) => (
          <Step key={step + i} completed={activeStep > i}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        sx={{ height: "60vh", m: "2% auto" }}
      >
        <Card sx={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
