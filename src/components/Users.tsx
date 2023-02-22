import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useHttpRequest } from "../hooks";
import { Spinner } from "../components";
import { UserType } from "../types";

const Users = () => {
  const [registeredUsers, setRegisteredUsers] = useState<Array<UserType>>([]);
  const [totalUsers, setTotalUsers] = useState<string>("");
  const { error, loading, sendRequest } = useHttpRequest();
  const [page, setPage] = useState<number>(1);
  const [date, setDate] = useState<string>("1/1/2020");
  const limit = 10;

  useEffect(() => {
    const getAllUsers = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const data = await sendRequest(
          `/users/all-registered-users?page=${page}&limit=${limit}&start_date=${date}`,
          "get",
          "VITE_IDENTITY_URL",
          undefined,
          headers
        );
        if (!data || data === undefined) return;
        setTotalUsers(data.data.userCount);
        setRegisteredUsers(data.data.data);
      } catch (error) {}
    };
    getAllUsers();
  }, [date, page]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="font-bold text-xl text-primary">
          Total number of registered Users: {totalUsers}
        </div>
        <div className="flex items-center gap-[1rem]">
          <div className="font-bold">Filter By Date: </div>
          <div className="">
            <TextField
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        {loading ? (
          <div className="w-full h-[600px] grid place-items-center">
            <Spinner size="large" thickness="thick" color="#081F4A" />
          </div>
        ) : (
          <Table className="my-4">
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-black">Number</TableCell>
                <TableCell className="font-bold text-black">Name</TableCell>
                <TableCell className="font-bold text-black">Email</TableCell>
                <TableCell className="font-bold text-black">
                  Date Registered
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registeredUsers?.map((user: any, i: number) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell className="capitalize">{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {new Date(user.createdOn).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <div className="flex items-center gap-[1rem] justify-center">
          <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Previous
          </Button>
          <Button
            disabled={registeredUsers?.length < limit}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Users;
