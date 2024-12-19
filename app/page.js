"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "@/components/usersList";
import UserDetails from "@/components/userDetails";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import UsersListLoader from "@/components/skeletons/usersList-loader";
import UserDetailsLoader from "@/components/skeletons/userDetails-loader";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users");
        setUsers(response.data);
        setSelectedUser(response.data[0]);
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <Grid container>
      {/* User List Section */}
      <Grid size={3}>
        {loading ? (
          <UsersListLoader />
        ) : error ? (
          <Typography variant="h6" color="error" textAlign="center">
            {error}
          </Typography>
        ) : (
          <div className="user-list-wrapper">
            <UserList users={users} onSelectUser={handleSelectUser} />
          </div>
        )}
      </Grid>

      {/* User Details Section */}
      <Grid size="grow">
        <div className="user-detail-wrapper">
          <div className="user-detail-box">
            {loading ? <UserDetailsLoader /> : selectedUser && <UserDetails user={selectedUser} />}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
