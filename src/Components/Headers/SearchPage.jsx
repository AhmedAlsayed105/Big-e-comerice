import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
// 
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchPage() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
<Box   onClick={toggleDrawer("top", true)} className="flex gap-2">
   <SearchOutlinedIcon />
   <Typography sx={{fontSize:"16px", color:"black" }} className='font-thine' variant="p">
    Search
   </Typography>
</Box>
<Drawer
  anchor={"top"}
  open={state["top"]}
  onClose={toggleDrawer("top", false)}
>
  <>
    <IconButton
      sx={{
        ":hover": { rotate: "180deg", transition: "0.3s ", color: "red" },
        position: "absolute",
        right: 10,
        top: 8,
      }}
      onClick={toggleDrawer("top", false)}
    >
      <CloseIcon />
    </IconButton>
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1 ,alignItems:"center"}}>
      <AppBar sx={{background:"#fdfdfd",color:"black", height:"50px"}} position="static">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </AppBar>
    </Box>
























      <Divider />
    </Box>
  </>
</Drawer>
    
  </>
  
    )
}







