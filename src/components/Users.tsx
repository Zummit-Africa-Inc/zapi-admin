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

const Users = () => {
  const [data, setData] = useState<any>([]);
  const { sendRequest } = useHttpRequest();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const response = async () => {
      const user = await sendRequest(
        "/users/all-registered-users",
        "get",
        "VITE_IDENTITY_URL"
      );
      setData(user.data);
    };
    response();
  }, []);

  return (
    <div className="w-full">
      <div className="font-bold text-xl text-primary">Total number of registered Users:{data?.userCount}</div>
      <div className="w-full text-center">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-bold text-black">Number</TableCell>
              <TableCell className="font-bold text-black">Name</TableCell>
              <TableCell className="font-bold text-black">Email</TableCell>
              <TableCell className="font-bold text-black">Date Registered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.users
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
        <TablePagination
          className="font-extrabold text-lg"
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={data?.users?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Users;
