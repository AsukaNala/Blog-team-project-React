import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListItemSecondaryAction } from "@mui/material";
import e from "express";

const UsersManager = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((json) => {
        //console.log(data);
        if (!ignore) {
          setUsers(json.data);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  const UserList = () => {
    const handleListItemClick = (e) => {
      e.preventDefault();
      const id = e.currentTarget.dataset.id;
      setSelectedUser(id);
    };

    const handleDelete = (e) => {
      const deleteUser = confirm("Are you sure you want to delete this user?");
      if (!deleteUser) return false;
    };

    const id = e.currentTarget.dataset.id;
    fetch(`http://localhost:3000/api/users/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status === "200") {
          setUsers(users.filter((user) => user.id != parseInt(id)));
        }
      });

    return (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users.map((user) => (
          <ListItemButton
            key={user.id}
            selected={selectedUser === user.id.toString()}
            onClick={handleListItemClick}
            data-id={user.id}
          >
            <ListItemText primary={user.name} secondary={user.email} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                data-id={user.id}
                onClick={handleDelete}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItemButton>
        ))}
      </List>
    );
  };

  return (
    <div>
      <UserList />
    </div>
  );
};
export default UsersManager;
