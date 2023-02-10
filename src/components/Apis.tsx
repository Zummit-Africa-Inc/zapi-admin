import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useHttpRequest } from "../hooks";
import { Spinner } from "../components";
import { ApiType } from "../types";

const statusColor:any = {
  verified: "text-green-600",
  unverified: "text-red-600",
}

const Apis = () => {
  const { error, loading, sendRequest } = useHttpRequest();
  const [apis, setApis] = useState<Array<ApiType>>([]);
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

  const getAllApis = async() => {
    const headers = {
      "Content-Type": "application/json",
    }
    try {
      const data = await sendRequest("/api/api/admin-data", "get", "VITE_CORE_URL", undefined, headers)
      if(!data || data === undefined) return;
      setApis(data.data.apis);
    } catch (error) {}
  }

  useEffect(() => {
    getAllApis()
  },[]);

  useEffect(() => {
    error && toast.error(`${error}`);
  },[error]);
  
  
  return (
    <div className="w-full">
      <div className="font-bold text-xl text-primary">Total number of APIs : {apis?.length}</div>
      <div className="w-full text-center">
        {loading ? (
          <div className="w-full h-[600px] grid place-items-center">
            <Spinner size="large" thickness="thick" color="#081F4A" />
          </div>
        ):(

          <Table className="my-4">
          <TableHead>
              <TableRow>
                <TableCell className="font-bold text-black">Name</TableCell>
                <TableCell className="font-bold text-black">Status</TableCell>
                <TableCell className="font-bold text-black">Category</TableCell>
                <TableCell className="font-bold text-black">Visibility</TableCell>
                <TableCell className="font-bold text-black">Rating</TableCell>
                <TableCell className="font-bold text-black">Subscriptions</TableCell>
                <TableCell className="font-bold text-black">Created On</TableCell>
                <TableCell className="font-bold text-black">Created By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apis?.
                slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((api, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="capitalize">{api?.name}</TableCell>
                    <TableCell className={`capitalize ${statusColor[api?.status]}`}>{api?.status}</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="capitalize">{api?.visibilty}</TableCell>
                    <TableCell>{parseInt(api?.rating)}</TableCell>
                    <TableCell>{api?.subscriptions.length}</TableCell>
                    <TableCell>{new Date(api?.createdOn).toLocaleDateString()}</TableCell>
                    <TableCell className="capitalize"></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
        {apis && (
          <TablePagination
            className="font-extrabold text-lg"
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={apis.length}
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

export default Apis;
  