import "./ProductWarehouse.css";
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



function createData(
  Name,
  Price,
  Image,
  Category,
  Brand,
  Origin,
  Description
) { 

  return {
    Name,
    Price,
    Image,
    Category,
    Brand,
    Origin,
    Description,
  };
}
const dataExample = [
  {
    Name: "Half n Half Water Glow Season 1 ",    
    Price: "$150",
    Image: "Product.png",
    Brand: "3CE",
    Origin:"Korea",
    Description:"Beautiful",
  },
  {
    Name: "Half n Half Water Glow Season 2",    
    Price: "$150",
    Image: "Product.png",
    Brand: "3CE",
    Origin:"Korea",
    Description:"Beautiful",
  },
  {
    Name: "Half n Half Water Glow Season ",    
    Price: "$150",
    Image: "Product.png",
    Brand: "3CE",
    Origin:"Korea",
    Description:"Beautiful",
  },
  
];



const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function ProductWarehouse() {
  const [isAddingProduct, setIsAddingProduct] = React.useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(()=>setPosts(dataExample),[])
 
  


  const handleAddProduct = () => {
        setIsAddingProduct(!isAddingProduct);
  };

  

  const handleDelete = (postIndex) => {
    setPosts((prevPosts) =>
      prevPosts.filter((_, index) => index !== postIndex)
    );
  };
  return (
    <div className="Table">
      <h1 className="tile-admin">Product</h1>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">Origin</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {posts.map((item,postIndex) => (
              <TableRow
                key={item.Name}               
              >
                
                <TableCell align="left">{item.Name}</TableCell>
                <TableCell align="left">{item.Price}</TableCell>
                <TableCell align="left">{item.Image}</TableCell>
                <TableCell align="left">{item.Category}</TableCell>
                <TableCell align="left">{item.Brand}</TableCell>
                <TableCell align="left">{item.Origin}</TableCell>
                <TableCell align="left">{item.Description}</TableCell>
                <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(postIndex)}
            >
              Delete
            </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <div className="wrapper-Addmin-Add-Product">
        <button className="Addmin-Add-Product" onClick={handleAddProduct}>
          {isAddingProduct ? "Close" : "Add Product"}
        </button>
      </div>
      {isAddingProduct ? <AddProduct /> : null}
    </div>
  );
}