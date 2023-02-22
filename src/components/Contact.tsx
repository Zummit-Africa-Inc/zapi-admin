import React, { useEffect, useState } from "react";
import { useHttpRequest } from "../hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { ContactResponse } from "../interfaces";
import Spinner from "./shared/Spinner";
import { toast } from "react-toastify";
import Popup from "./Popup";

const Contact = () => {
  const { error, loading, sendRequest } = useHttpRequest();
  const [contactMsg, setContactMsg] = useState<Array<ContactResponse> | null>(
    []
  );
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [message, setMessage] = useState<any>({});

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
    const getAllMessages = async () => {
      try {
        const data = await sendRequest(
          "/contactUs",
          "get",
          "VITE_CORE_URL",
          undefined,
          headers
        );
        if (!data || data === undefined) return;
        setContactMsg(data.data);
      } catch (error) {}
    };
    getAllMessages();
  }, []);

  const handleClick = async (id: any) => {
    try {
      const data = await sendRequest(
        `/contactUs/${id}`,
        "get",
        "VITE_CORE_URL",
        undefined,
        headers
      );
      if (!data || data === undefined) return;
      setMessage(data.data);
      setShowModal(true);
    } catch (error) {}
  };

  const handleClose = () => {
    setShowModal(false);
    setMessage({});
  };

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);
  return (
    <div className="">
      {showModal && (
        <Popup
          title={`${message.firstname} from ${message.org_name} sent:`}
          subtitle={message.message}
          handleClose={handleClose}
        />
      )}
      <div>
        <div className="font-bold text-xl text-primary">
          Total number of Messages : {contactMsg?.length}
        </div>
        <div className="w-full text-center">
          <Table className="my-4">
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-black">Name</TableCell>
                <TableCell className="font-bold text-black">
                  Organization Name
                </TableCell>
                <TableCell className="font-bold text-black">Email</TableCell>
                <TableCell className="font-bold text-black">
                  Phone Call
                </TableCell>
                <TableCell className="font-bold text-black">Message</TableCell>
                <TableCell className="font-bold text-black">Goal</TableCell>
                <TableCell className="font-bold text-black">Date</TableCell>
                <TableCell className="font-bold text-black">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactMsg
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((msg, index: number) => (
                  <TableRow key={index}>
                    <TableCell>
                      {msg.firstname} {msg.lastname}
                    </TableCell>
                    <TableCell>
                      {msg.org_name ? msg.org_name : "Not Provided"}
                    </TableCell>
                    <TableCell>{msg.email}</TableCell>
                    <TableCell>{msg.phone_call ? "Yes" : "No"}</TableCell>
                    <TableCell>{msg.message}</TableCell>
                    <TableCell>{msg.goal}</TableCell>
                    <TableCell>
                      {new Date(msg.createdOn).toLocaleDateString()}
                    </TableCell>
                    <TableCell
                      className="cursor-pointer"
                      onClick={() => handleClick(msg.id)}
                    >
                      View
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {contactMsg && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={contactMsg.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
