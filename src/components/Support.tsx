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
import { SupportZum } from "../interfaces";

const ZumSupport = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const { error, loading, sendRequest } = useHttpRequest();
  const [supportMessages, setSupportMessages] = useState<
    Array<SupportZum> | any
  >([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const headers = {
    "Content-Type": "application/json",
  };
  useEffect(() => {
    const getZumSupport = async () => {
      try {
        const data = await sendRequest(
          "/demo_requests",
          "get",
          "VITE_WEB_URL",
          undefined,
          headers
        );
        if (!data || data === undefined) return;
        setSupportMessages(data.data);
      } catch (error) {}
    };
    getZumSupport();
  }, []);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="font-bold text-black">FullName</TableCell>
            <TableCell className="font-bold text-black">Company Name</TableCell>
            <TableCell className="font-bold text-black">Email</TableCell>
            <TableCell className="font-bold text-black">Message</TableCell>
            <TableCell className="font-bold text-black">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {supportMessages
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((msg: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{msg.fullName}</TableCell>
                <TableCell>{msg.companyName}</TableCell>
                <TableCell>{msg.email}</TableCell>
                <TableCell>{msg.message}</TableCell>
                <TableCell>
                  {new Date(msg.createdOn).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={supportMessages?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ZumSupport;
