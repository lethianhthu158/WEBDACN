import "./DetailAdminBill.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import LogoWeb from "../assets/Logoweb.png"



function createData(
    ID,
  Name,
  Price,
  Quantity,
  Total,
  
) { 

  return {
    ID,
  Name,
  Price,
  Quantity,
  Total,
  };
}
const dataExample = [
  {
    ID: "#123",
    Name: "Half n Half Water Glow Season 1 ",    
    Price: "$150",
    Quantity: 1,
    Total:25,
    
  },
  {
    ID: "#123",
    Name: "Half n Half Water Glow Season 1 ",    
    Price: "$150",
    Quantity: 2,
    Total:30,
  },
  {
    ID: "#123",
    Name: "Half n Half Water Glow Season 1 ",    
    Price: "$150",
    Quantity: 3,
    Total:50,
  },
  
];
const Userexample = [
    {
      NameUser: "ABC",
      Email: "ABC@gmail.com ",    
      Phone:"0123456789",
      Address:"Dd,tp,Bt"
            
    },]
 




export default function DetailAdminBill() {
  const [isAddingProduct, setIsAddingProduct] = React.useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(()=>setPosts(dataExample),[])
  

 
  


  
  return (
    <div className="Table">
        <div className="Admin-Info-User">
            <div className="Wrapper-avatar-user-admin">
            <img className="avatar-user-admin"src={LogoWeb}></img></div>
            <div className="In-Info-User">
                <hr></hr>
                {Userexample.map((info)=>(<>
                <div className="wrapper-info-user">Name: {info.NameUser}</div>
                <div className="wrapper-info-user">Email: {info.Email}</div>
                <div className="wrapper-info-user">Phone: {info.Phone}</div>
                <div className="wrapper-info-user">Address: {info.Address}</div>
                <hr></hr>
                
                </>
                
 
                ))
                }
            </div>

        </div>
     
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Total</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {posts.map((item) => (
              <TableRow
                key={item.Name}               
              >
                
                <TableCell align="left">{item.ID}</TableCell>
                <TableCell align="left">{item.Name}</TableCell>
                <TableCell align="left">{item.Price}</TableCell>
                <TableCell align="left">{item.Quantity}</TableCell>
                <TableCell align="left">{item.Total}</TableCell>
              
              
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      
    </div>
  );
};
