import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, fetchUsersAsync } from "./allUsersSlice";

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div>
      <ul>
        <h1>Users</h1>

        {users.map((user) => {
          return (
            <li key={user.id}>
              <h1>{user.username}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AllUsers;
