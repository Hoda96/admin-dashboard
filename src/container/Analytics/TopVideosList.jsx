import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';


const rows = [
  { thumbnail: 'src/assets/thumbnail1.jpg', name: 'How to become a software developer', averageViewDuration: '2:25 (41.0%)', views: 3211 },
  { thumbnail: 'src/assets/thumbnail2.jpg', name: 'React Native Crash Course in 4 hours', averageViewDuration: '9:45 (30.5%)', views: 3102 },
  { thumbnail: 'src/assets/thumbnail1.jpg', name: 'ReactJs SearchBar in 5 minutes', averageViewDuration: '3:10 (25.5%)', views: 1900 },
  { thumbnail: 'src/assets/thumbnail2.jpg', name: 'JavaScript Crash Course including real world projects', averageViewDuration: '8:10 (15.5%)', views: 1201 },
  { thumbnail: 'src/assets/thumbnail2.jpg', name: 'How to build an admin panel using React and TypeScript', averageViewDuration: '2:10 (34.1%)', views: 1195 },
  { thumbnail: 'src/assets/thumbnail1.jpg', name: 'TypeScript Crash Course for beginners', averageViewDuration: '5:20 (14.1%)', views: 1037 },
];

function TopVideosList({ }) {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">
        Your top content in this period
      </Typography>
      <TableContainer sx={styles.tableContainer} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell align="center">Average view duration</TableCell>
              <TableCell align="center">Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
              >
                <TableCell component="th" sx={styles.contentCell}>
                  <Box sx={styles.videoThumbnail} component={'img'} src={row.thumbnail} />

                  {row.name}
                </TableCell>
                <TableCell align="center">{row.averageViewDuration}</TableCell>
                <TableCell align="center">{row.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>);
}

export default TopVideosList;


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  container: {
    mt: 4,
    width: '100%',
    textAlign: 'center'
  },
  tableContainer: {
    mt: 8
  },
  contentCell: {
    display: 'flex',
    alignItems: 'center'
  },
  videoThumbnail: {
    width: '100%',
    maxWidth: 100,
    marginRight: 1,
  },
}