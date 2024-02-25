import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { addProductToCart, delateProduct } from "../../../Redux/CartSlice";
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






export default function CarCartPage() {

  const cartData = useSelector(state => state.cart)
  const disPatch = useDispatch()

  const totalPrice = cartData.reduce((cur, acc) => (
    cur + acc.priceNews * acc.qty
  ), 0)

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Container>
      <h1 className="font-semibold mb-2">Total Price: <span className="text-red-600">{totalPrice}$</span></h1>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 0 }} aria-label="customized table">
          <TableHead>
            {
              cartData.length === 0 ? "" :
                (
                  <TableRow>
                    <StyledTableCell >Id</StyledTableCell>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell align="center">Img</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="center">Quantity</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                )
            }
          </TableHead>
          <TableBody>
            {
              cartData.length === 0 ? <h1 className="font-bold text-[25px] text-red-500 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"> Cart Is Empty </h1> :
                (
                  cartData.map((product, index) => (
                    <StyledTableRow key={product.id} >
                      <StyledTableCell>
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {product.name}
                      </StyledTableCell>
                      <StyledTableCell align="left" className="w-[140px] h-[140px] ">
                        <img className="w-full h-full" src={product.ImageOne} alt="photo" />
                      </StyledTableCell>
                      <StyledTableCell align="right">{product.priceNews}$</StyledTableCell>
                      <StyledTableCell align="center">{product.qty}</StyledTableCell>
                      <StyledTableCell align="right">
                        <button
                          onClick={() =>
                            disPatch(addProductToCart(product))
                          }
                          className="w-[70px]  mr-1 text-white font-semibold text-[14px] cursor-pointer rounded-2xl p-2 bg-[#0C19B7] hover:bg-black shadow-xl " >Add</button>
                        <button
                          onClick={() => disPatch(delateProduct(product))}
                          className="w-[70px] text-white font-semibold text-[14px] cursor-pointer rounded-2xl p-2 bg-red-500 hover:bg-red-600 shadow-xl ">Del</button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                )
}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}







