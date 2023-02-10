import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useHttpRequest } from "../hooks";
import { ApiResponse } from "../interfaces";

const Analytics = () => {
  const { error, loading, sendRequest } = useHttpRequest();
  const [apis, setApis] = useState<ApiResponse | null>(null);
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

  const getAllApis = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await sendRequest(
        "/api/api/admin-data",
        "get",
        "VITE_CORE_URL",
        undefined,
        headers
      );
      if (!data || data === undefined) return;
      // setApis(data.data);
      setApis(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllApis();
  }, []);

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);

  return (
    <div className="w-full">
      <div className="font-bold text-xl text-primary">
        Total number of APIs : {apis?.apiCount}
      </div>
      <div className="w-full text-center">
        <Table className="my-4">
          <TableHead>
            <TableRow>
              <TableCell className="font-bold text-black">API Name</TableCell>
              <TableCell className="font-bold text-black">
                Subscriptions
              </TableCell>
              <TableCell className="font-bold text-black">
                Total Calls
              </TableCell>
              <TableCell className="font-bold text-black">
                Total Success
              </TableCell>
              <TableCell className="font-bold text-black">
                Ttoal Errors
              </TableCell>
              <TableCell className="font-bold text-black">
                Total Latency
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apis?.apis
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((api, index: number) => (
                <TableRow key={index}>
                  <TableCell>{api?.name || "API Name"}</TableCell>
                  <TableCell>{api?.subscriptionCount}</TableCell>
                  <TableCell>{api?.totalCalls}</TableCell>
                  <TableCell>{api?.successfulCalls}</TableCell>
                  <TableCell>{api?.totalErrors}</TableCell>
                  <TableCell>{api?.totalLatency}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {apis && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={apis.apiCount}
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

export default Analytics;
