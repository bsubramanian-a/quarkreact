import React, { useEffect, useState } from "react";
import {
  DatatableWrapper,
  TableBody,
  TableColumnType,
  TableHeader,
} from "react-bs-datatable";
import { Table } from "react-bootstrap";

import axios from "axios";

function DataTable() {
  const URL = "https://619b61042782760017445573.mockapi.io/api/v1/bookings";
  const [data, setData] = useState([]);

  const header: TableColumnType<{
    name: string;
    booking_no: string;
    client_name: string;
    client_phone: number;
    date_of_booking: number;
    payment_id: number;
    no_of_trucks: string;
  }>[] = [
    { title: "Name", prop: "name" },
    { title: "Booking Number", prop: "booking_no" },
    { title: "Client Name", prop: "client_name" },
    { title: "Client Phone number", prop: "client_phone" },
    { title: "Date of booking", prop: "date_of_booking" },
    { title: "Payment term", prop: "payment_id" },
    { title: "Number of truck", prop: "no_of_trucks" },
  ];

  const body = data.map((item: any) => {
    return {
      name: item.name,
      booking_no: item.booking_no,
      client_name: item.client_name,
      client_phone: item.client_phone,
      date_of_booking: item.date_of_booking,
      payment_id: item.payment_id,
      no_of_trucks: item.no_of_trucks,
    };
  });

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
   await axios
      .get(URL)
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(error.response.data.error);
      });
    console.log(data);
  };

  return (
    <DatatableWrapper body={body} headers={header}>
      <Table
        style={{ boxShadow: "0px 2px 8px #0a288f12", backgroundColor: "white",color:"#0A288F" }}
      >
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
}

export default DataTable;
