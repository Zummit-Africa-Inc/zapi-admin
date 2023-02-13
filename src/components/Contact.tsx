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

const Contact = () => {
  const { error, loading, sendRequest } = useHttpRequest();
  const [contactMsg, setContactMsg] = useState<Array<ContactResponse> | null>(
    []
  );
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

  const getAllMessages = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
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

  useEffect(() => {
    getAllMessages();
  }, []);

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);
  return (
    <div className="">
      {loading ? (
        <div className="w-full h-[600px] grid place-items-center">
          <Spinner size="large" thickness="thick" color="#081F4A" />
        </div>
      ) : (
        <div>
          <div className="font-bold text-xl text-primary">
            Total number of Messages : {contactMsg?.length}
          </div>
          <div className="w-full text-center">
            <Table className="my-4">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold text-black">No</TableCell>
                  <TableCell className="font-bold text-black">Name</TableCell>
                  <TableCell className="font-bold text-black">
                    Organization Name
                  </TableCell>
                  <TableCell className="font-bold text-black">Email</TableCell>
                  <TableCell className="font-bold text-black">
                    Phone Call
                  </TableCell>
                  <TableCell className="font-bold text-black">
                    Message
                  </TableCell>
                  <TableCell className="font-bold text-black">Goal</TableCell>
                  <TableCell className="font-bold text-black">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contactMsg
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((msg, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
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
      )}
    </div>
  );
};

export default Contact;
