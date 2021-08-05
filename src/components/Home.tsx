import { Button, Container, FormControl, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { FC, useState } from 'react';
// import { Button } from './Button';

import { Header } from './Header';
import './Page.css';


export const Home : FC = () =>
{
  const [name,setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [amount,setAmount]= useState<any>();
  const [error,setError]= useState<any>();
  const [TransactionType,setTransactiontype]= useState<string>();
  // const code ;
  async function  handleSumbit(e: any){
    e.preventDefault();
    let resp 
    setError('')
    resp = await  axios.post("http:/localhost:5001/api/Transaction/UpdateAmount",
       { Amount: amount,TransType: TransactionType} ,
       {headers: {
        'Authorization':'Basic xxxxx', 
        'Content-type': 'application/json'}})
       console.log(resp);
      if(resp.status === 200)
      {
        window.location.href = '/Home'
      }
      else{
        setError(e);
      }
  

}
  
  
  return(
   <article>
    <Header />

    <section>
    <Container component='div' maxWidth='xs' style={
            {
                background:'white',
                height:"350px",
                display:"flex",
                alignItems:"center",
                border:"1px solid white",
                borderRadius:"10px",
                borderColor: 'black ',
                justifyContent:"space-around", 
                flexDirection:"column",
            }
        }>
       <h1 style={{justifyContent:'center',alignSelf:'center'}}>
        Welcome to MyBank</h1>
       <form onSubmit={handleSumbit}>
            <FormControl fullWidth={true}>
              <TextField style={{ background: 'white' }} fullWidth={true} label='UserName' type='text' required={true} variant="outlined" onChange={(e)=> setName(e.target.value)} />
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField style={{ background: 'white', marginTop: 10 }} fullWidth={true} label='Password' type='password' required={true} variant="outlined" onChange={(e)=> setPassword(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField style={{ background: 'white', marginTop: 10 }} fullWidth={true} label='Amount' type='number' required={true} variant="outlined" onChange={(e)=> setAmount(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth={true}>
              <TextField style={{ background: 'white', marginTop: 10 }} fullWidth={true} label='Transaction Type' type='text' required={true} variant="outlined" onChange={(e)=> setTransactiontype(e.target.value)}/>
            </FormControl>
            {
                    (error)?(<Alert severity="error">{error}</Alert>):(<></>)
                }
       <Button variant='outlined' onClick={() => window.location.href = "/Register"}>RegisterNow</Button>
     </form>
      </Container>
    </section>
  </article>
);
      }