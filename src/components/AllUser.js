import { useEffect, React, useState } from 'react';
import { Table, TableCell, TableHead, TableRow, TableBody, Button } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

export default function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <>
      <div className="w-11/12 mx-auto mt-12">
        <Table className="w-full table-auto border-collapse shadow-lg rounded-lg">
          <TableHead>
            <TableRow className="bg-black text-white">
              <TableCell className="text-white text-lg">ID</TableCell>
              <TableCell className="text-white text-lg">Name</TableCell>
              <TableCell className="text-white text-lg">Username</TableCell>
              <TableCell className="text-white text-lg">Email</TableCell>
              <TableCell className="text-white text-lg">Phone</TableCell>
              <TableCell className="text-white text-lg">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user._id} className="border-b hover:bg-gray-100">
                <TableCell className="text-md">{user._id}</TableCell>
                <TableCell className="text-md">{user.name}</TableCell>
                <TableCell className="text-md">{user.username}</TableCell>
                <TableCell className="text-md">{user.email}</TableCell>
                <TableCell className="text-md">{user.phone}</TableCell>
                <TableCell>
                  <Button
                    variant='contained'
                    className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 mr-2"
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant='contained'
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-4"
                    onClick={() => deleteUserDetails(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
