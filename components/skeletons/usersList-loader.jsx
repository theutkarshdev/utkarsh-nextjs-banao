import { Skeleton } from "@mui/material";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from "@mui/material";
import React from "react";

const UsersListLoader = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", borderRight: "1px solid #ccc" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
        <React.Fragment key={idx}>
          <ListItem>
            <ListItemAvatar>
              <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <ListItemText
              primary={<Skeleton variant="rounded" width={120} height={20} />}
              secondary={
                <React.Fragment>
                  <Skeleton variant="rounded" width={"100%"} height={10} sx={{ margin: "5px 0" }} />
                  <Skeleton variant="rounded" width={"100%"} height={10} />
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

export default UsersListLoader;
