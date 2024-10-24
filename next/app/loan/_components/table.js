import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import dayjs from 'dayjs';

const CreditTable = ({ data, startDate }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    generateRows();
  }, [data, startDate]);

  const generateRows = () => {
    const { kreditMuddeti, kreditMebleqi, faiz } = data;

    if (isNaN(kreditMebleqi) || kreditMebleqi <= 0) {
        setRows([]);
        return;
      }

    const monthlyInterestRate = faiz / 12 / 100;
    const monthlyPayment = (kreditMebleqi * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -kreditMuddeti));

    let beginningBalance = kreditMebleqi;
    let cumulativeInterest = 0;
    const generatedRows = [];

    for (let i = 0; i < kreditMuddeti; i++) {
      const interestPayment = beginningBalance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      const endBalance = beginningBalance - principalPayment;
      cumulativeInterest += interestPayment;

      generatedRows.push({
        month: i + 1,
        date: dayjs(startDate).add(i, 'month').format('YYYY-MM-DD'),
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        scheduledPayment: monthlyPayment.toFixed(2),
        cumulativeInterest: cumulativeInterest.toFixed(2),
        beginningBalance: beginningBalance.toFixed(2),
        endBalance: endBalance.toFixed(2),
      });

      beginningBalance = endBalance;
    }

    setRows(generatedRows);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 5,
        borderRadius: 2,
        overflow: 'hidden',
        maxWidth: '100%',
        margin: 'auto',
        overflowX: 'auto', // Enables horizontal scrolling
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#000046' }}>
            {['Ödəniş Sayı', 'Tarix', 'Başlanğıc Balans', 'Aylıq Ödəniş', 'Əsas Məbləğ', 'Faiz Ödənişi', 'Qalıq Balans', 'Kumulyativ Faiz'].map((header) => (
              <TableCell key={header} sx={{ color: 'white', fontWeight: 'bold', padding: '10px', borderRight: '1px solid #ffffff30', textAlign: 'center' }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' },
                '&:hover': { backgroundColor: '#e0f7fa' },
                transition: 'background-color 0.3s ease',
              }}
            >
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.month}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.date}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.beginningBalance}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.scheduledPayment}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.principalPayment}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.interestPayment}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.endBalance}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '10px' }}>{row.cumulativeInterest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CreditTable;
