"use client";
import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Typography, Box } from "@mui/material";

const UserList = ({ users, onSelectUser }) => {
  if (users.length === 0) {
    return (
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <Typography variant="h6" color="text.secondary">
          No users found
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {users.map((user, idx) => (
        <React.Fragment key={idx}>
          <ListItem sx={{ cursor: "pointer" }} button="true" onClick={() => onSelectUser(user)}>
            <ListItemAvatar>
              <Avatar src={user.avatar.replace('cloudflare-ipfs.com', 'gateway.pinata.cloud')} alt={user.profile.firstName} />
            </ListItemAvatar>
            <ListItemText
              primary={`${user.profile.firstName} ${user.profile.lastName}`}
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                    {user.jobTitle}
                  </Typography>
                  <Typography component="span" variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                    {user.profile.email}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default UserList;
