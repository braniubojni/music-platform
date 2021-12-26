import Button from "@mui/material/Button";
import { MainWrapper } from "./index.style";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <MainWrapper>
          <h1>Welcome</h1>
          <h3>The best music is collected here</h3>
        </MainWrapper>
      </MainLayout>
    </>
  );
};

export default Index;
