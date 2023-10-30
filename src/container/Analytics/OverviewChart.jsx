import React, { forwardRef, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import AnalyticsTabHead from "./AnalyticsTabHead.jsx";
import { ArrowDropDownCircleSharp, CheckCircle } from "@mui/icons-material";
import TabPanel from "../../compnents/TabPanel.jsx";
import { Line } from "react-chartjs-2";
import { getMainChartData, mainChartOptions } from "./ChartConfig.jsx";


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  mainChart: {
    height: 250,
    border: 1,
    borderColor: "neutral.medium",
    pt: 4,
    borderTop: "none",
    borderRadius: 1

  },
  container: {
    mt: 4,
    width: "100%",
  }
};

const ViewsTabHead = forwardRef((props, ref) => <AnalyticsTabHead{...props}
                                                                 title="Views"
                                                                 ref={ref} icon={<ArrowDropDownCircleSharp />}
                                                                 value="21.4K" subtitle={"700 less than usual"} />);

const WatchTimeTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
                                                                      title="Watch Time"
                                                                      ref={ref}
                                                                      icon={<ArrowDropDownCircleSharp color="green"
                                                                                                      sx={{ transform: "rotate(180deg)" }} />}
                                                                      value="400" subtitle={"27 more than usual"} />);

const SubscribersTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
                                                                        ref={ref}
                                                                        title="Subscribers"
                                                                        icon={<CheckCircle color="green" />}
                                                                        value="+140"
                                                                        subtitle={"about the same as usual"} />);

const RevenueTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
                                                                    ref={ref}
                                                                    title="Revenue"
                                                                    icon={<ArrowDropDownCircleSharp color="green"
                                                                                                    sx={{ transform: "rotate(180deg)" }} />}
                                                                    value="$240.02"
                                                                    subtitle={"700 more than usual"} />);

function OverviewChart() {
  const [value, setValue] = useState(0);

  function handleChange(e, value) {
    setValue(value);
  }

  return (
    <>
      <Box sx={styles.container}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab component={ViewsTabHead} id="tab-0" />
          <Tab component={WatchTimeTabHead} id="tab-1" />
          <Tab component={SubscribersTabHead} id="tab-2" />
          <Tab component={RevenueTabHead} id="tab-3" />
        </Tabs>
        <TabPanel value={value} index={0} mt={0}>
          <Box sx={styles.mainChart}>
            <Line options={mainChartOptions} data={getMainChartData()} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} mt={0}>
          <Box sx={styles.mainChart}>
            <Line options={mainChartOptions} data={getMainChartData()} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} mt={0}>
          <Box sx={styles.mainChart}>
            <Line options={mainChartOptions} data={getMainChartData()} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3} mt={0}>
          <Box sx={styles.mainChart}>
            <Line options={mainChartOptions} data={getMainChartData()} />
          </Box>
        </TabPanel>
      </Box>
    </>
  );
}

export default OverviewChart;