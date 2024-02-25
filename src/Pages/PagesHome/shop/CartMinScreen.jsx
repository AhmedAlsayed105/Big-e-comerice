import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { addProductToCart, delateProduct } from '../../../Redux/CartSlice';
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CartMinScreen() {
  
  const cartData = useSelector(state => state.cart)
  const disPatch = useDispatch()

  const totalPrice = cartData.reduce((cur,acc)=> (
      cur + acc.priceNews * acc.qty
  ),0)

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
          <Button onClick={toggleDrawer("left", true)}>
          <ShoppingCartIcon/>

          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            sx={{
            ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper":{
              Width:"345px",
              maxWidth:"345px",
            }
            }}
          >
          {/*  */}
          <div>
<div className='flex items-center justify-between'>
  
            <h1 className="font-semibold mb-2">Total Price: <span className="text-red-600">{totalPrice}$</span> </h1>
            <IconButton
        sx={{
          ":hover": { rotate: "180deg", transition: "0.3s ", color: "red" },
        }}
        onClick={toggleDrawer("left", false)}
      >
        <CloseIcon />
      </IconButton>
      
</div>
          {/*  */}
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 0 }} aria-label="customized table">
        <TableHead>
          {
            cartData.length === 0 ? "":
            (
                <TableRow
                sx={{
                  ".css-1nslmh4-MuiTableCell-root.MuiTableCell-head":{
                    width:"3px",
                    padding:" 15px 5px",
                  }
                }}
                >
                <StyledTableCell >Id</StyledTableCell>
                <StyledTableCell >Title</StyledTableCell>
                <StyledTableCell >Img</StyledTableCell>
                <StyledTableCell >Price</StyledTableCell>
                <StyledTableCell >Quantity</StyledTableCell>
                <StyledTableCell >Action</StyledTableCell>
              </TableRow> 
            )
          }
        </TableHead>
        <TableBody>
        {
          cartData.length === 0 ? <h1 className="font-bold text-[25px] text-red-500 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"> Cart Is Empty </h1> :
          (
            cartData.map((product ,index)=>(
              <StyledTableRow key={product.id} >
              <StyledTableCell>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell >
                {product.name.slice(0,7)+"..."}
              </StyledTableCell>
              <StyledTableCell className="w-[120px] h-[120px] ">
                <img className="w-full h-full" src={product.ImageOne} alt="photo" />
              </StyledTableCell>
              <StyledTableCell >{product.priceNews}$</StyledTableCell>
              <StyledTableCell >{product.qty}</StyledTableCell>
              <StyledTableCell >
                <button
                  onClick={()=>
                      disPatch(addProductToCart(product))
                    }
                className="w-[70px]  mr-1 text-white font-semibold text-[14px] cursor-pointer rounded-2xl p-2 bg-[#0C19B7] hover:bg-black shadow-xl " >Add</button>
                <button
                  onClick={()=> disPatch(delateProduct(product))}
                  className="w-[70px] text-white font-semibold text-[14px] cursor-pointer rounded-2xl p-2 bg-red-500 hover:bg-red-600 shadow-xl ">Del</button>
              </StyledTableCell>
            </StyledTableRow>
            ))
          )
        }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
          {/*  */}
          </Drawer>
    </div>
  );
}