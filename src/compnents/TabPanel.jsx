import { Box } from "@mui/material";

function TabPanel({ children, value, index, mt = 4 }) {
  return (
    <div hidden={value !== index} id={`simple-tsbPanel-${index}`}>
      {value === index &&
        (<Box sx={{ mt }}>
            {children}
          </Box>
        )
      }
    </div>
  );
}

export default TabPanel;