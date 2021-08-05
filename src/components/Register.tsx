import { Button, Container, FormControl, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { FC, useState } from 'react';
import  MockAdapter from 'axios-mock-adapter';

import { Header } from './Header';
import './Page.css';
import { storiesOf } from '@storybook/react';

const mock = new MockAdapter(axios);





export const Register : FC = () =>{
  
  const [name,setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [balance,setBalance]= useState<any>();
  const [error,setError]= useState<any>();

  async function  handleSumbit(e: any){
      e.preventDefault();
      let resp 
      setError('')
      resp = await  axios.post("http:/localhost:5001/api/User/InsertUser",
         {Username:name, Password: password , Balance: balance} ,
         {headers: {'Content-type': 'application/json'}})
         console.log(resp);
        if(resp.status === 200)
        {
          window.location.href = '/Home'
        }
        else{
          setError(e);
        }
    

  }
  
  
  return (

    <div>
      <Header />

      <section>
        <Container component='div' maxWidth='xs' style={{
          
          height: "350px",
          display: "flex",
          alignItems: "center",
          border: "1px solid white",
          borderRadius: "10px",
          borderColor: 'black ',
          justifyContent: "space-around",
          flexDirection: "column",
        }}>
          <h1 style={{ justifyContent: 'center', alignSelf: 'center' }}>REGISTER</h1>
          <form onSubmit={handleSumbit}>
            <FormControl fullWidth={true}>
              <TextField style={{ background: 'white' }} fullWidth={true} label='UserName' type='Name' required={true} variant="outlined" onChange={(e)=> setName(e.target.value)} />
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField style={{ background: 'white', marginTop: 10 }} fullWidth={true} label='Password' type='password' required={true} variant="outlined" onChange={(e)=> setPassword(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField style={{ background: 'white', marginTop: 10 }} fullWidth={true} label='Balance' type='Balance' required={true} variant="outlined" onChange={(e)=> setBalance(e.target.value)}/>
            </FormControl>
            {
                    (error)?(<Alert severity="error">{error}</Alert>):(<></>)
                }
            <Button style={{ marginTop: 20 }} color='secondary' type="submit" variant="outlined">CREATE ACCOUNT</Button>


          </form>
        </Container>
      </section>
    </div>
  );
};

storiesOf('Mocking Api responses with Axios and axios-mock-adapter', module)
  .add('Register', () => {

    // 4. create the mock inside the story
    // if this is outside it'll mess up with other axios instances/requests
    mock.onPost("http:/localhost:5001/api/User/InsertUser").reply(200);

    return <Register />
  });