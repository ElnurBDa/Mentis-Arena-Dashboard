import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const initialUsers = [
    { id: 1, name: 'Elnur', surname: 'Badalov', email: 'bdaelnur@gmail.com', pointCapGame: 10, pointGame1: 15, pointGame2: 20 },
    { id: 2, name: 'Elcan', surname: 'Karimli', email: 'elcan@mail.com', pointCapGame: 12, pointGame1: 18, pointGame2: 24 },
    { id: 3, name: 'Leyla', surname: 'Mammadova', email: 'leyla@example.com', pointCapGame: 14, pointGame1: 20, pointGame2: 26 },
    { id: 4, name: 'Rashad', surname: 'Ismayilov', email: 'rashad@example.com', pointCapGame: 11, pointGame1: 17, pointGame2: 21 },
    { id: 5, name: 'Nigar', surname: 'Rahimova', email: 'nigar@example.com', pointCapGame: 13, pointGame1: 19, pointGame2: 23 },
    { id: 6, name: 'Tural', surname: 'Gurbanov', email: 'tural@example.com', pointCapGame: 10, pointGame1: 15, pointGame2: 25 },
    { id: 7, name: 'Zahra', surname: 'Aliyeva', email: 'zahra@example.com', pointCapGame: 16, pointGame1: 20, pointGame2: 28 },
    { id: 8, name: 'Fidan', surname: 'Hasanova', email: 'fidan@example.com', pointCapGame: 9, pointGame1: 14, pointGame2: 19 },
    { id: 9, name: 'Murad', surname: 'Muradov', email: 'murad@example.com', pointCapGame: 15, pointGame1: 18, pointGame2: 22 },
    { id: 10, name: 'Samir', surname: 'Jafarov', email: 'samir@example.com', pointCapGame: 12, pointGame1: 16, pointGame2: 20 },
    { id: 11, name: 'Sevinj', surname: 'Nurullayeva', email: 'sevinj@example.com', pointCapGame: 13, pointGame1: 17, pointGame2: 21 },
    { id: 12, name: 'Farid', surname: 'Mahmudov', email: 'farid@example.com', pointCapGame: 14, pointGame1: 19, pointGame2: 23 },
    { id: 13, name: 'Aytaj', surname: 'Shirinova', email: 'aytaj@example.com', pointCapGame: 11, pointGame1: 16, pointGame2: 22 },
    { id: 14, name: 'Orkhan', surname: 'Ibrahimov', email: 'orkhan@example.com', pointCapGame: 9, pointGame1: 14, pointGame2: 18 },
    { id: 15, name: 'Aygun', surname: 'Kazimova', email: 'aygun@example.com', pointCapGame: 17, pointGame1: 21, pointGame2: 26 },
    { id: 16, name: 'Ramin', surname: 'Aliyev', email: 'ramin@example.com', pointCapGame: 8, pointGame1: 13, pointGame2: 19 },
    { id: 17, name: 'Gunay', surname: 'Ismayilova', email: 'gunay@example.com', pointCapGame: 10, pointGame1: 15, pointGame2: 20 },
    { id: 18, name: 'Kamran', surname: 'Huseynov', email: 'kamran@example.com', pointCapGame: 13, pointGame1: 18, pointGame2: 24 },
    { id: 19, name: 'Lala', surname: 'Mustafayeva', email: 'lala@example.com', pointCapGame: 12, pointGame1: 17, pointGame2: 23 },
]  

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Placeholder function for update functionality
  const updateUser = (userId) => {
    console.log('Update functionality not implemented yet for user:', userId);
  };

  return (
    <>    
    <Typography mt={16} variant="h4" gutterBottom>
      Oyunçular siyahısı
    </Typography>   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Point Cap Game</TableCell>
            <TableCell>Point Game 1</TableCell>
            <TableCell>Point Game 2</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.surname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.pointCapGame}</TableCell>
              <TableCell>{user.pointGame1}</TableCell>
              <TableCell>{user.pointGame2}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => updateUser(user.id)}>Update</Button>
                <Button color="secondary" onClick={() => deleteUser(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default ManageUsers;
