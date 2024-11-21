import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const user = useSelector(state => state.user.user);
    const isAdmin = useSelector((state) => state.user.isAdmin);
    
    const dispatch = useDispatch();
    

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logouthandle = () => {
        dispatch(logout());
    }

    return (
        <AppBar position="static" sx={{ width: "40px", backgroundColor: "white" }} className="bg-white rounded-full dark:bg-slate-600 ">
            <IconButton onClick={handleOpenUserMenu}>
                <AccountCircleIcon className="dark:text-white" />
            </IconButton>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <div onClick={handleCloseUserMenu} className="flex flex-col w-[150px] justify-center items-center divide-y divide-solid h-full">
                    <div className=" hover:bg-slate-100 w-full flex flex-col pl-6 h-full">
                        <h3 className=" font-bold capitalize"> {user ? user.username : "User"}</h3>
                        <h6> {isAdmin? "Admin" : "User"}</h6>
                    </div>
                    <div className="h-8 flex pl-6 items-center hover:bg-slate-100 w-full">
                        <Link to={"/profile"} className=" font-bold  "><AccountCircleIcon className="mr-2 " />Profile</Link>
                    </div>
                    <div className="h-8 flex pl-6 items-center hover:bg-slate-100 w-full">
                        <button onClick={logouthandle} className=" font-bold"><LogoutIcon className="mr-2 rotate-180 " />Logout</button>
                    </div>
                </div>
            </Menu>
        </AppBar>
    );
}
export default ResponsiveAppBar;
