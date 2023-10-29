import React from "react";
import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import LatestVideoCard from "../../compnents/LatestVideoCard.jsx";

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2

  },
  columnsContainer: {
    columns: "280px 3",
    maxWidth: 1400

  },
  postAuthorSection: {
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    my: 3

  },
  avatar: {
    width: "30px",
    height: "auto",
    mr: 1
  },
  postMeta: {
    mr: 1,
    fontSize: "0.8rem",
    color: "neutral.dark"
  },
  item: {
    mb: 2
  },
  postStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    my: 3,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer"
    }
  },
  divider: {
    my: 2
  },
  videoStatRow: {
    display: "flex",
    justifyContent: "space-between",
    color: "neutral.dark",
    mt: 2,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer"
    }
  },
  cardAction: {
    mt: 2
  },
  commentRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2
  },
  videoThumbnail: {
    width: "80px",
    height: "auto",
    ml: "auto"
  },
  commentDetailSection: {
    display: "flex",
    alignItems: "center"
  },
  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2
  },
  ideaContent: {
    display:"flex",
  },
  ideaQuestion: {
    fontSize: "0.9rem",
    fontWeight: 500,
    my:2,

  },
  ideaImage: {
    width:"80px",
    alignSelf:"center",
    ml:5
  },
  insiderImage:{
    width:"100%",
    mt:1
  }
};

function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5" component="h2">Channel Dashboard</Typography>
      <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={{ mb: 2 }} />
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Post</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar sx={styles.avatar} src="./src/assets/avatar.png" />
              <Typography sx={styles.postMeta}>Download YT Thumbnail</Typography>
              <Typography sx={styles.postMeta}>Oct 12, 2024</Typography>
            </Box>
            <Typography variant="body2">In the realm of online video creation,
              standing out on YouTube demands attention-grabbing thumbnails.
            </Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">Comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">6</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">GO TO COMMUNITY TAB</Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h4">4,144</Typography>
            <Typography variant="h7" sx={{ color: "neutral.dark" }}>
              <Box component="span" sx={{ color: "green.main" }}>+77 </Box>
              in last 28 days
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Summary</Typography>
            <Typography variant="h8" sx={{ color: "neutral.dark" }}>
              last 28 days
            </Typography>
            <Box sx={styles.videoStatRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7">225</Typography>
            </Box>
            <Box sx={styles.videoStatRow}>
              <Typography variant="h7">Watch Time (hours)</Typography>
              <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.videoStatRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">$450.00</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Top Videos </Typography>
            <Typography variant="h8" sx={{ color: "neutral.dark" }}>
              last 48 hours. Views
            </Typography>
            <Box sx={styles.videoStatRow}>
              <Typography variant="h7">10 Best YouTube Thumbnail Downloaders </Typography>
              <Typography variant="h7">285</Typography>
            </Box>
            <Box sx={styles.videoStatRow}>
              <Typography variant="h7">How to Download YouTube Thumbnails?</Typography>
              <Typography variant="h7">370</Typography>
            </Box>
            <Box sx={styles.videoStatRow}>
              <Typography variant="h7">YouTube Thumbnail SEO Guide</Typography>
              <Typography variant="h7">742</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">latest Comments</Typography>
            <Typography variant="h7" sx={{ color: "neutral.dark" }} mb={2}>
              Channel comments I haven't responded to
            </Typography>
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="./src/assets/avatar.png" />
              <Box>
                <Box sx={styles.commentDetailSection}>
                  <Typography sx={styles.postMeta}>Download YT Thumbnail</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>these websites are great for downloading yt thumbnail.</Typography>
              </Box>
              <Box component="img" sx={styles.videoThumbnail}
                   src="./src/assets/YouTube-Thumbnail-Download-Get-noticed.jpg" />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="./src/assets/avatar.png" />
              <Box>
                <Box sx={styles.commentDetailSection}>
                  <Typography sx={styles.postMeta}> YT Thumbnail</Typography>
                  <Typography sx={styles.postMeta}>3 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>keep going 😍😎</Typography>
              </Box>
              <Box component="img" sx={styles.videoThumbnail}
                   src="./src/assets/YouTube-Thumbnail-Download-Get-noticed.jpg" />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="./src/assets/avatar.png" />
              <Box>
                <Box sx={styles.commentDetailSection}>
                  <Typography sx={styles.postMeta}>What is Thumbnail?</Typography>
                  <Typography sx={styles.postMeta}>4 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>really helpful.👍🏻👍🏻</Typography>
              </Box>
              <Box component="img" sx={styles.videoThumbnail}
                   src="./src/assets/YouTube-Thumbnail-Download-Get-noticed.jpg" />
            </Box>
            <Typography sx={styles.cardAction} variant="link">VIEW MORE</Typography>
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas For You</Typography>
              <Typography sx={styles.ideasQuestion}>Ready to get business savvy?</Typography>
              <Typography variant="h7">Get tips from a successful creator on how to design eye-catching YouTube
                thumbnails.</Typography>
              <Typography sx={styles.cardAction} variant="link">GET STARTED NOW</Typography>
            </Box>
            <Box sx={styles.ideaImage} component={"img"} src="./src/assets/book.jpg" />
          </CardContent>
        </Card>
        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
            <Box sx={styles.insiderImage} component={"img"} src="./src/assets/YouTube-Thumbnail-Download-Get-noticed.jpg" />
              <Typography sx={styles.ideasQuestion}>Ready to boost your skills using AI tools?</Typography>
              <Typography variant="h7">Get tips from a successful creator on how to design eye-catching YouTube
                thumbnails.</Typography>
              <Typography sx={styles.cardAction} variant="link">WATCH ON YOUTUBE</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashboard;
