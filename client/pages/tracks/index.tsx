import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { TRACKS_CREATE_ROUTE } from "../../constants/routes";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

function Index() {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Track 1",
      artist: "Author 1",
      text: "Some text",
      listens: 5,
      audio: "http://localhost:5000/audio/7897.mp3",
      picture: "http://localhost:5000/image/avat.jpg",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card sx={{ mt: 3, width: "50%", minWidth: 320 }}>
          <Box px={2}>
            <Grid container justifyContent="space-between">
              <Box m={0} component="h1">
                Track List
              </Box>
              <Button onClick={() => router.push(TRACKS_CREATE_ROUTE)}>
                Upload
              </Button>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
}

export default Index;
