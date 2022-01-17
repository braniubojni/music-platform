import { FC } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { TRACKS_ROUTE } from "../../constants/routes";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import PrimaryBtn from "../../components/shared/PrimaryBtn";
import { Wrapper } from "./id.styles";
import { v4 as uuidv4 } from "uuid";
const TrackPage: FC = () => {
  const track: ITrack = {
    _id: "1",
    name: "Track 1",
    artist: "Author 1",
    text: "Some text",
    listens: 5,
    audio: "http://localhost:5000/audio/32c053c3.mp3",
    picture: "http://localhost:5000/image/3f80a1e9.jpg",
    comments: [],
  };
  return (
    <MainLayout>
      <PrimaryBtn sx={{ mt: 1.5, pb: 1.5 }} route={TRACKS_ROUTE}>
        To the list
      </PrimaryBtn>
      <Wrapper>
        <Box
          component="img"
          src={track.picture}
          sx={{
            width: 200,
            height: 200,
            mr: 2,
            borderRadius: 2,
            sm: {
              margin: "0 auto",
            },
          }}
        />
        <Box component="div">
          <Box component="h2">Track name - {track.name}</Box>
          <Box component="h2">Artist - {track.artist}</Box>
          <Box component="h2">Listened - {track.listens}</Box>
        </Box>
      </Wrapper>
      <Box component="h1">Words to track</Box>
      <Typography mb={1.5}>{track.text}</Typography>
      <Grid container>
        <Box component="h1">Comments</Box>
        <TextField
          label="Your name"
          fullWidth
          // value={}
          // onChange={}
        />
        <TextField
          label="Comments"
          fullWidth
          multiline
          rows={4}
          // value={}
          // onChange={}
        />
        <PrimaryBtn variant={"outlined"}>Send</PrimaryBtn>
      </Grid>
      <Box>
        {track.comments.map((comment, i) => (
          <Box key={uuidv4()}>
            <Box>Author - {comment.username}</Box>
            <Typography>Commentary - {comment.text}</Typography>
          </Box>
        ))}
      </Box>
    </MainLayout>
  );
};

export default TrackPage;
