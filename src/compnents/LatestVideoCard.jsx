import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";


/** @type {import("@mui/material").SxProps} */
const styles = {
  latestVideoContainer: {
    width: "100%",
    position: "relative"
  },
  latestVideoThumbnail: {
    width: "100%",
    filter: "brightness(30%)",
    mt: 1,
    display: "block"
  },
  latestVideoTitle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem",
    color: "neutral.light",
    mb: 2
  },
  latestVideoTimelabel:{
    color:"neutral.main",
    mt:2
  },
  latestVideoStatRow:{
    display:"flex",
    justifyContent:"space-between",
    mt:2
  },
  cardAction:{
    mt:2
  },
  item:{mb:2}
};

function LatestVideoCard() {
  return (
    <Card sx={styles.item}>
      <CardContent>
        <Typography variant="cardTitle">Latest Video Performance</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box component="img" sx={styles.latestVideoThumbnail}
               src="./src/assets/YouTube-Thumbnail-Download-Get-noticed.jpg" />
          <Typography sx={styles.latestVideoTitle}>Thumbnail Youtube Download</Typography>
        </Box>
        <Typography varient="h7" sx={styles.latestVideoTimelabel}>First 6 hours: </Typography>
        <Box sx={styles.latestVideoStatRow}>
          <Typography variant="h7">Views</Typography>
          <Typography variant="h7">127</Typography>
        </Box>
        <Box sx={styles.latestVideoStatRow}>
          <Typography variant="h7">Watch Time</Typography>
          <Typography variant="h7">42</Typography>
        </Box>
        <Box sx={styles.latestVideoStatRow}>
          <Typography variant="h7">Likes</Typography>
          <Typography variant="h7">107</Typography>
        </Box>
        <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
        <Typography sx={styles.cardAction} variant="link">SEE COMMENTS (12)</Typography>
      </CardContent>
    </Card>
  );
}

export default LatestVideoCard;