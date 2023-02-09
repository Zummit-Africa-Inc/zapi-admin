import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useHttpRequest } from "../hooks";
import { Spinner } from "../components";
import { UserType } from "../types";

const Users = () => {
  const [data, setData] = useState<Array<UserType>>([]);
  const {error, loading, sendRequest } = useHttpRequest();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getAllUsers = async() => {
    const headers = {
      "Content-Type": "application/json",
    }
    try {
      const data = await sendRequest("/users/all-registered-users", "get", "VITE_IDENTITY_URL", undefined, headers);
      if(!data || data === undefined) return;
      const { data: { users }} = data
      setData(users);
    } catch (error) {}
  }

  useEffect(() => {
    getAllUsers()
  }, []);

  return (
    <div className="w-full">
      <div className="font-bold text-xl text-primary">Total number of registered Users: {data?.length}</div>
      <div className="w-full text-center">
      {loading ? (
          <div className="w-full h-[600px] grid place-items-center">
            <Spinner size="large" thickness="thick" color="#081F4A" />
          </div>
        ):(
          <Table className="my-4">
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-black">Number</TableCell>
                <TableCell className="font-bold text-black">Name</TableCell>
                <TableCell className="font-bold text-black">Email</TableCell>
                <TableCell className="font-bold text-black">Date Registered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((user: any, i: number) => (
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
        {data && (
          <TablePagination
            className="font-extrabold text-lg"
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
