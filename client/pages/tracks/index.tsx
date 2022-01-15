import { Box, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import PrimaryBtn from "../../components/shared/PrimaryBtn";
import TrackList from "../../components/TrackList";
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
      audio: "http://localhost:5000/audio/32c053c3.mp3",
      picture: "http://localhost:5000/image/3f80a1e9.jpg",
      comments: [],
    },
    {
      _id: "2",
      name: "Track 2",
      artist: "Author 2",
      text: "Some text",
      listens: 3,
      audio: "http://localhost:5000/audio/35498.mp3",
      picture: "http://localhost:5000/image/attestat.jpg",
      comments: [],
    },
    {
      _id: "3",
      name: "Track 3",
      artist: "Author 3",
      text: "Some text",
      listens: 1,
      audio: "http://localhost:5000/audio/456321.mp3",
      picture: "http://localhost:5000/image/vesna.jpg",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card sx={{ mt: 3, width: "90%", minWidth: 320, p: 1, height: "auto" }}>
          <Box p={2}>
            <Grid container justifyContent="space-between">
              <Box m={0} component="h1">
                Track List
              </Box>
              <PrimaryBtn route={TRACKS_CREATE_ROUTE}>Upload</PrimaryBtn>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
}

export default Index;
