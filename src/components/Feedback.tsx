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
import { FeedbackType } from "../types";

const Feedbacks = () => {
  const { error, loading, sendRequest } = useHttpRequest();
  const [feedbacks, setFeedbacks] = useState<Array<FeedbackType>>([]);
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
      const data = await sendRequest("/feedback", "get", "VITE_CORE_URL", undefined, headers)
      if(!data || data === undefined) return;
      setFeedbacks(data.data);
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
      <div className="font-bold text-xl text-primary">Total number of Feedbacks: </div>
      <div className="w-full text-center">
        <Table>
        <TableHead>
            <TableRow>
              <TableCell className="font-bold text-black">Name</TableCell>
              <TableCell className="font-bold text-black">Email</TableCell>
              <TableCell className="font-bold text-black">Title</TableCell>
              <TableCell className="font-bold text-black">Body</TableCell>
              <TableCell className="font-bold text-black">Added On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbacks?.
              slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((feedback, index: number) => (
                <TableRow key={index}>
                    <TableCell>{feedback?.name}</TableCell>
                    <TableCell>{feedback?.email}</TableCell>
                    <TableCell>{feedback?.title}</TableCell>
                    <TableCell>{feedback?.body.substring(0, 20)}</TableCell>
                    <TableCell>{feedback?.createdOn && new Date(feedback?.createdOn).toDateString()}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {feedbacks && (
          <TablePagination
            className="font-extrabold text-lg"
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={feedbacks.length}
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

export default Feedbacks;
  