import {
    Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useState ,useEffect} from "react";
import { editUser,getUser } from "../service/api";
import { useNavigate,useParams } from "react-router-dom";


const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`;


const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
};




export default function EditUser() {

const navigate=useNavigate();

const [user,setUser]=useState(defaultValue);
const {id}=useParams();   

useEffect(()=>{
    loadUserDetails();
},[])

const loadUserDetails =async()=>{
    const response = await getUser(id);
    console.log(response.data)
    setUser(response.data);
}

const editUserDetails=async()=>{
  await editUser(user,id)
  navigate('/all')
}

const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value}); 
}
  return (
    <>
    
      <Container>
        <Typography variant="h4">EDIT USER</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>{onValueChange(e)}} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=>{onValueChange(e)}} name="username" value={user.username} />
        </FormControl>
        <FormControl>
          <InputLabel>email</InputLabel>
          <Input onChange={(e)=>{onValueChange(e)}} name="email"  value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>phone</InputLabel>
          <Input onChange={(e)=>{onValueChange(e)}} name="phone"  value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>{editUserDetails()}} variant="contained">Edit USER</Button>
        </FormControl>
      </Container>
    </>
  );
}
