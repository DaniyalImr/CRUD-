import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

// No need for Material-UI's styled component for container, use Tailwind utility classes instead.

const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
};

export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);

  const userDetails = async () => {
    await addUser(user);
    navigate('/all');
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex justify-center mt-12">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <Typography variant="h4" className="text-center mb-6 text-blue-600">
          ADD USER
        </Typography>
        <FormControl className="w-full mb-4">
          <InputLabel>Name</InputLabel>
          <Input onChange={onValueChange} name="name" className="w-full" />
        </FormControl>
        <FormControl className="w-full mb-4">
          <InputLabel>Username</InputLabel>
          <Input onChange={onValueChange} name="username" className="w-full" />
        </FormControl>
        <FormControl className="w-full mb-4">
          <InputLabel>Email</InputLabel>
          <Input onChange={onValueChange} name="email" className="w-full" />
        </FormControl>
        <FormControl className="w-full mb-4">
          <InputLabel>Phone</InputLabel>
          <Input onChange={onValueChange} name="phone" className="w-full" />
        </FormControl>
        <FormControl className="w-full">
          <Button onClick={userDetails} variant="contained" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2">
            ADD USER
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
