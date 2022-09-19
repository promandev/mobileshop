
import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import './ShoppingCart.css'
  
export default function ShoppingCart() {
  const [itemCount, setItemCount] = React.useState(1);
  
  return (
    <div style={{ display: "block", }}>
      <div>
        <Badge 
            sx={{
                "& .MuiBadge-badge": {
                color: "lightgreen",
                backgroundColor: "green"
                }
            }} 
            badgeContent={itemCount}
        >
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup sx={{}}>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
            sx={{color: 'black',
            border: '1px solid black'}}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
            sx={{color: 'black',
            border: '1px solid black'}}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}