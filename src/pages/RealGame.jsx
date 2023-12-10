import React, { useState } from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';

const createInitialData = () => {
  const teams = [];
  for (let i = 1; i <= 6; i++) {
    teams.push({ id: i, answers: Array(20).fill(false), totalPoints: 0, rating: 0});
  }
  return teams;
};

const RealGame = () => {
  const [teams, setTeams] = useState(createInitialData());

  const handleCheckboxChange = (teamId, questionIndex) => {
    const updatedTeams = teams.map(team => {
      if (team.id === teamId) {
        const updatedAnswers = [...team.answers];
        updatedAnswers[questionIndex] = !updatedAnswers[questionIndex];

        // Calculate total points and rating based on the updated answers
        const totalPoints = updatedAnswers.reduce((sum, current) => sum + (current ? 1 : 0), 0);
        const rating = Math.floor(Math.random() * 99) + 1 ; // Implement this function based on your rating logic

        return { ...team, answers: updatedAnswers, totalPoints, rating };
      }
      return team;
    });

    setTeams(updatedTeams);
  };

  // Placeholder function for rating calculation
  const calculateRating = (answers) => {
    // Implement your rating calculation logic here
    return 0; // Return calculated rating
  };

  return (
    <Box mt={16} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
    <Typography variant="h4" gutterBottom>
    Oyun 1
    </Typography> 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{padding: 0}}>Komanda/Sual</TableCell>
            {Array.from({ length: 20 }, (_, i) => (
              <TableCell key={i}>S{i + 1}</TableCell>
            ))}
            <TableCell style={{padding: 0, paddingRight:10}}>Xal</TableCell>
            <TableCell style={{padding: 0, paddingRight:10,}}>Reytinq</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell component="th" scope="row" style={{padding: 0, paddingLeft:10}}>
              Komanda {team.id}
              </TableCell>
              {team.answers.map((answer, index) => (
                <TableCell key={index} style={{padding: 0}}>
                  <Checkbox
                    style={{color: 'purple', '&$checked': {color: 'purple'}, padding: 0, paddingLeft:10}}
                    checked={answer}
                    onChange={() => handleCheckboxChange(team.id, index)}
                  />
                </TableCell>
              ))}
              <TableCell>{team.totalPoints}</TableCell>
              <TableCell>{team.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default RealGame;
