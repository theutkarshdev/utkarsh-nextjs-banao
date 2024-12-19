import React from "react";
import { Typography, Avatar, Box } from "@mui/material";

const UserDetails = ({ user }) => {
  return (
    <>
      <Box className="user-detail-bg"></Box>
      <Box sx={{ px: 5 }}>
        <Box className="avatar-box">
          <Avatar
            alt={user.profile.firstName}
            src={user.avatar.replace("cloudflare-ipfs.com", "gateway.pinata.cloud")}
            className="user-avatar"
          />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h5">{`${user.profile.firstName} ${user.profile.lastName}`}</Typography>
          <Typography variant="caption" color="text.secondary">
            {user.profile.email}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            {user.jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.Bio}
          </Typography>
        </Box>

        <Typography className="card-footer" variant="body2">
          made with ❤️ by Utkarsh Kushwaha
        </Typography>
      </Box>
    </>
  );
};

export default UserDetails;
