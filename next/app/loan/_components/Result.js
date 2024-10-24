import React from "react";
import {
  Stack,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const Result = ({ data }) => {
  const { kreditMebleqi, kreditMuddeti, faiz } = data;

  const monthlyInterestRate = faiz / 12 / 100;
  const principal = kreditMebleqi + monthlyInterestRate;

  const monthlyPayment =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, kreditMuddeti)) /
    (Math.pow(1 + monthlyInterestRate, kreditMuddeti) - 1);

  const pieChartData = [
    {
      label: "Əsas Məbləğ",
      value: parseFloat((monthlyPayment * kreditMuddeti).toFixed(2)),
      color: "#000046",
    },
    {
      label: "Faiz",
      value: parseFloat(kreditMuddeti * monthlyPayment - data.kreditMebleqi).toFixed(2),
      color: "#71a1d5",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const cx = isMobile ? 139 : 280; // Adjust cx position for mobile
  const cy = isMobile ? 120 : 160; // Adjust cy position for mobile

  return (
    <Stack gap={2} justifyContent="center" alignItems="center">
      <Box
        p={3}
        bgcolor="white"
        boxShadow={5}
        borderRadius={2}
        style={{ marginBottom: 0 }}
      >
        <Typography textAlign="center" variant="h6" gutterBottom>
          Aylıq Ödəniş: ₼ <b>{monthlyPayment.toFixed(2)}</b>
        </Typography>
        <Typography textAlign="center" variant="h6" gutterBottom>
          Cəmi Məbləğ: ₼ <b>{(kreditMuddeti * monthlyPayment).toFixed(2)}</b>
        </Typography>
        <Typography textAlign="center" variant="h6" >
          Cəmi Faiz: ₼{" "}
          <b>
            {(kreditMuddeti * monthlyPayment - data.kreditMebleqi).toFixed(2)}
          </b>
        </Typography>
      </Box>

      <Stack direction="row" gap={2} alignItems="center">
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 20,
              height: 20,
              bgcolor: pieChartData[0].color,
              borderRadius: "50%",
              marginRight: "0.5rem", // Adjust margin as needed
            }}
          />
          <Typography variant="subtitle1" className="inline">
            Cəmi Məbləğ
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 20,
              height: 20,
              bgcolor: pieChartData[1].color,
              borderRadius: "50%",
              marginRight: "0.5rem", // Adjust margin as needed
            }}
          />
          <Typography variant="subtitle1" className="inline">
            Cəmi Faiz
          </Typography>
        </Box>
      </Stack>

      <Grid container justifyContent="center">
        <PieChart
          series={[
            {
              data: pieChartData,
              cx: cx,
              cy: cy,
              innerRadius: 90,
              outerRadius: isMobile ? 120 : 150,
            },
          ]}
          height={isMobile ? 300 : 450}
          slotProps={{
            legend: { hidden: true },
          }}
        />
      </Grid>
    </Stack>
  );
};

export default Result;
