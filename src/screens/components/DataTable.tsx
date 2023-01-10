import React, { useEffect, useState } from "react";
import {
  DatatableWrapper,
  TableBody,
  TableColumnType,
  TableHeader,
} from "react-bs-datatable";
import { Table } from "react-bootstrap";

import axios from "axios";

function DataTable({data, header}:any) {
  const URL = "https://619b61042782760017445573.mockapi.io/api/v1/bookings";
//   const [data, setData] = useState([]);

//   const header: TableColumnType<any>[] = [
//     { title: "Name", prop: "name" },
//     { title: "Booking Number", prop: "booking_no" },
//     { title: "Client Name", prop: "client_name" },
//     { title: "Client Phone number", prop: "client_phone" },
//     { title: "Date of booking", prop: "date_of_booking" },
//     { title: "Payment term", prop: "payment_id" },
//     { title: "Number of truck", prop: "no_of_trucks" },
//   ];

  const body = data.map((item: any) => {
    return {
        truck_no: item.truck_no,
        driver_name: item.driver_name,
        phone_number: item.phone_number,
        id_no: item.id_no,
        transit_no: item.transit_no,
        loading_time: 0
    };
  });

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