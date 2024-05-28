import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/usersApi';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Users = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        getAllUsers().then(res => setUsers(res.data.users)).catch(error => console.log(error))
    }, [])      
      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 30, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'image', headerName: 'Image', width: 60, headerClassName: 'bg-[skyblue] text-[white]',
            renderCell: (params) => (
                <img src={params.value} width={50} height={50} />
            ),
        },
        { field: 'name', headerName: 'Name', width: 150, headerClassName: 'bg-[skyblue] text-[white]',
            renderCell: (params) => (
                params.row.firstName + ' ' + params.row.maidenName + ' ' + params.row.lastName
            ),
        },
        { field: 'username', headerName: 'UserName', width: 100, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'email', headerName: 'Email', width: 280, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'password', headerName: 'Password', width: 120, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'gender', headerName: 'Gender', width: 80, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'birthDate', headerName: 'Birthday', width: 100, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'age', headerName: 'Age', width: 50, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'phone', headerName: 'Ph Number', width: 140, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'role', headerName: 'Role', width: 90, headerClassName: 'bg-[skyblue] text-[white]' },
        { field: 'address', headerName: 'Address', width: 150, headerClassName: 'bg-[skyblue] text-[white]' },
        
      ];
  return (
    <>
        <Paper elevation={1} sx={{p: 3}}>
            <Stack flexDirection={'row'} alignContent={'center'} justifyContent={'end'} mb={2}>
                {/* <Typography variant="h5" fontWeight={600} my={3}>User Listing</Typography> */}
                <Link to='/dashboard/user/create' style={{margin: 'auto 0'}}>
                    <Button>
                        + Create Users
                    </Button>
                </Link>
            </Stack>
        
            <DataGrid rows={users} columns={columns} sx={{border: 0}} />
        </Paper>
    </>
  )
}

export default Users