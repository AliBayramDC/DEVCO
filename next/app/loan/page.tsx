"use client";

import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Diqqet from "./_components/diqqet";
import Result from "./_components/Result";
import SliderSelect from "./_components/SliderSelect";
import CreditTable from "./_components/table"; // Update this path if necessary
import BarChartComponent from "./_components/BarChart"; // Import the BarChart component

const Loan = ({}) => {
  const [data, setData] = useState({
    umumiMebleq: 3000,
    ilkinOdenis: 3000 * 0.2,
    kreditMebleqi: 3000 * 0.8,
    kreditMuddeti: 36,
    faiz: 14,
  });
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm")); // Adjust breakpoint as needed

  const startDate = new Date(); // Assume the user starts from today

  return (
    <div>
      <Navbar />
      <div style={{marginTop: isDesktop ? -50 : -220 ,marginBottom: isDesktop ? -170 : 90 }}>
        {/* Add margin to create space */}
        <FirstSection />
      </div>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        {/* Add margin to create space */}
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ marginLeft: isDesktop ? 4 : -5 }}
        >
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            {/* Ensure data and setData are properly defined */}
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginTop: isDesktop ? 10 : 0 }}>
            <Result data={data} />
            {/* Ensure data is passed properly */}
          </Grid>
        </Grid>
        <Box sx={{ marginBottom: 10 }}>
          {/* Add margin bottom */}
          <BarChartComponent data={data} />
          {/* Add BarChart component */}
        </Box>
        <Box sx={{ marginBottom: 10 }}>
          {/* Add margin bottom */}
          <CreditTable data={data} startDate={startDate} />
          {/* Add CreditTable component */}
        </Box>
      </Container>
      <Diqqet />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Loan;
