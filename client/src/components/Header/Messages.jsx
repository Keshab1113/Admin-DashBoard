import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import Switch from '@mui/material/Switch';
import green from "@mui/material/colors/green";

const messages = [
    {
        id: 1,
        primary: "Brunch this week?",
        secondary:
            "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: "/static/images/avatar/5.jpg",
        isRead: false,
    },
    {
        id: 2,
        primary: "Birthday Gift",
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: "/static/images/avatar/1.jpg",
        isRead: true,
    },
    {
        id: 3,
        primary: "Recipe to try",
        secondary:
            "I am try out this new BBQ recipe, I think this might be amazing",
        person: "/static/images/avatar/2.jpg",
        isRead: false,
    },
    {
        id: 4,
        primary: "Yes!",
        secondary: "I have the tickets to the ReactConf for this year.",
        person: "/static/images/avatar/3.jpg",
        isRead: false,
    },
    {
        id: 5,
        primary: "Doctor's Appointment",
        secondary:
            "My appointment for the doctor was rescheduled for next Saturday.",
        person: "/static/images/avatar/4.jpg",
        isRead: true,
    },
    {
        id: 6,
        primary: "Discussion",
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
        person: "/static/images/avatar/5.jpg",
        isRead: true,
    },
    {
        id: 7,
        primary: "Summer BBQ",
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
        person: "/static/images/avatar/1.jpg",
        isRead: true,
    },
];

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BottomAppBar() {
    const [showUnread, setShowUnread] = useState(false);

    const handleToggleUnread = () => {
        setShowUnread((prev) => !prev);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square sx={{ pb: "50px" }}>
                <div className=" flex justify-between px-4">
                    <h1 className=" text-3xl font-bold">Inbox</h1>
                    <h1 className=" text-sm font-bold text-slate-500">Only show unread<Switch {...label} checked={showUnread} onChange={handleToggleUnread} /></h1>
                </div>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, person, isRead }) => (
                        (!showUnread || !isRead) && 
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                                    Today
                                </ListSubheader>
                            )}

                            {id === 3 && (
                                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                                    Yesterday
                                </ListSubheader>
                            )}

                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary} />
                                {!isRead && <div className=" bg-blue-600 h-[7px] w-[9px] rounded-full"></div>}
                            </ListItemButton>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    );
}
