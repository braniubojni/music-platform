import { Card, Grid, IconButton } from "@mui/material";
import { FC } from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { TRACKS_ROUTE } from "../constants/routes";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  return (
    <Card
      className={styles.track}
      onClick={() => router.push(`${TRACKS_ROUTE}/${track._id}`)}
    >
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Box
        sx={{ width: 40, borderRadius: "50%", height: 40, mr: "2.5%" }}
        component="img"
        src={track.picture}
      ></Box>
      <Grid sx={{ pl: "2.5%", width: 200 }} direction="column" container>
        <Box>{track.name}</Box>
        <Box color="gray" fontSize={12}>
          {track.artist}
        </Box>
      </Grid>
      {active && <Box>02:42 / 03:22</Box>}
      <IconButton onClick={(e) => e.stopPropagation()} sx={{ ml: "auto" }}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
