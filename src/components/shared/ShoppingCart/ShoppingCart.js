
import React, {useState, useContext, useEffect} from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import './ShoppingCart.css';
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";

  
export default function ShoppingCart() {
  const { state: productDetailsState } = useContext(ProductDetailsContext)
  const [ itemIteration, setItemIteration ] = useState('')
  const iteration = productDetailsState.itemDetailsToCart
  
  useEffect(() => {
    async function fetchItemIteration() {
      if (iteration.id && iteration.colorCode && iteration.storageCode) {
        setItemIteration(+ 1)
      }
    }
    fetchItemIteration()
  },
  [productDetailsState.itemDetailsToCart])
  
  return (
    <div style={{ display: "block", }}>
      <div>
        {
          itemIteration > 0 ? 
            <Badge 
            sx={{
                "& .MuiBadge-badge": {
                color: "lightgreen",
                backgroundColor: "green"
                }
            }} 
            badgeContent={itemIteration}
        >
          <ShoppingCartIcon />{" "}
        </Badge>
        : 
        <div>
          <ShoppingCartIcon />{" "}            
        </div>
        }

      </div>
    </div>
  );
}