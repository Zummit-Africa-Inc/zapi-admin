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
import { Spinner } from "../components";
import { useContextProvider } from "../context/ContextProvider";
import Popup from "./Popup";

const Feedbacks = () => {
  const { error, loading, sendRequest } = useHttpRequest();
  const [feedbacks, setFeedbacks] = useState<Array<FeedbackType>>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [feedback, setFeedback] = useState<any>({});
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  // const { isClicked, handleClicked } = useContextProvider();

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
  const getAllApis = async () => {
    try {
      const data = await sendRequest(
        "/feedback",
        "get",
        "VITE_CORE_URL",
        undefined,
        headers
      );
      if (!data || data === undefined) return;
      setFeedbacks(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllApis();
  }, []);

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);

  const handleClick = async (id: any) => {
    try {
      const data = await sendRequest(
        `/feedback/${id}`,
        "get",
        "VITE_CORE_URL",
        undefined,
        headers
      );
      if (!data || data === undefined) return;
      //console.log(data);
      setFeedback(data.data);
      setShowFeedback(true);
    } catch (error) {}
  };

  return (
    <div className="w-full">
      <div className="font-bold text-xl text-primary">
        Total number of Feedbacks:{" "}
      </div>
      <div className="w-full text-center">
        {showFeedback && (
          <div className="w-[400px]">
            <Popup
              title={feedback.title}
              subtitle={feedback.body}
              handleClose={() => setShowFeedback(false)}
            />
          </div>
        )}
        <Table className="my-4">
          <TableHead>
            <TableRow>
              <TableCell className="font-bold text-black">Name</TableCell>
              <TableCell className="font-bold text-black">Email</TableCell>
              <TableCell className="font-bold text-black">Title</TableCell>
              <TableCell className="font-bold text-black">Body</TableCell>
              <TableCell className="font-bold text-black">Added On</TableCell>
              <TableCell className="font-bold text-black">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbacks
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((feedback, index: number) => (
                <TableRow key={feedback.id}>
                  <TableCell>
                    {feedback.name ? feedback.name : "No name Supplied"}
                  </TableCell>
                  <TableCell>
                    {feedback.email ? feedback.email : "No email Supplied"}
                  </TableCell>
                  <TableCell>
                    {feedback.title
                      ? feedback.title?.length > 18
                        ? feedback.title.substring(0, 17) + "..."
                        : feedback.title
                      : "No title Supplied"}
                  </TableCell>
                  <TableCell>
                    {feedback.body
                      ? feedback.body?.length > 20
                        ? feedback.body.substring(0, 29) + "..."
                        : feedback.body
                      : "No body Supplied"}
                  </TableCell>
                  <TableCell>
                    {new Date(feedback?.createdOn).toLocaleDateString()}
                  </TableCell>
                  <TableCell
                    className="cursor-pointer"
                    onClick={() => handleClick(feedback.id)}
                  >
                    View
                  </TableCell>
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
