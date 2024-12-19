import React from "react";
import { Typography, Avatar, Box, Skeleton } from "@mui/material";

const UserDetailsLoader = () => {
  return (
    <>
      <Box className="user-detail-bg"></Box>
      <Box sx={{ px: 5 }}>
        <Box className="avatar-box">
          <Skeleton variant="circular" width={"100%"} height={"100%"} className="user-avatar" />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Skeleton width="50%" height={30} />
          <Skeleton width="30%" height={20} sx={{ marginTop: 1 }} />
          <Skeleton width="80%" height={20} sx={{ marginTop: 2 }} />
          <Skeleton width="90%" height={20} />
        </Box>
      </Box>
    </>
  );
};

export default UserDetailsLoader;
