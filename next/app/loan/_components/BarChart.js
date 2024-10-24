import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartComponent = ({ data }) => {
  const { kreditMebleqi, kreditMuddeti, faiz } = data;

  const monthlyInterestRate = faiz / 12 / 100;
  const monthlyPayment = (kreditMebleqi * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -kreditMuddeti));

  let beginningBalance = kreditMebleqi;
  const chartData = [];

  for (let i = 0; i < kreditMuddeti; i++) {
    const interestPayment = beginningBalance * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    const endBalance = beginningBalance - principalPayment;

    chartData.push({
      month: `Month ${i + 1}`,
      interestPayment: parseFloat(interestPayment.toFixed(2)),
      principalPayment: parseFloat(principalPayment.toFixed(2)),
    });

    beginningBalance = endBalance;
  }

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <Stack direction="row" gap={2} alignItems="center">
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 20,
              height: 20,
              bgcolor: '#5F5D9C',
              borderRadius: '50%',
              marginRight: '0.5rem',
            }}
          />
          <Typography variant="subtitle1" className="inline">
            Əsas Məbləğ
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 20,
              height: 20,
              bgcolor: '#6196A6',
              borderRadius: '50%',
              marginRight: '0.5rem',
            }}
          />
          <Typography variant="subtitle1" className="inline">
            Faiz
          </Typography>
        </Box>
      </Stack>
      <BarChart
        series={[
          {
            name: 'Interest Payment',
            data: chartData.map((item) => item.principalPayment),
            stack: 'stack1',
            color: '#5F5D9C',
          },
          {
            name: 'Principal Payment',
            data: chartData.map((item) => item.interestPayment),
            stack: 'stack1',
            color: '#6196A6',
          },
        ]}
        categories={chartData.map((item) => item.month)}
        height={400}
      />
    </Stack>
  );
};

export default BarChartComponent;
