import { useAuth } from "@clerk/react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatNumber } from "@/utils/formats";
import ReservationsContainer from "@/components/admin/ReservationsContainer";
import { listAllReservations } from "@/api/admin";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchBooking = async () => {
      const token = await getToken();
      try {
        const res = await listAllReservations(token);
        console.log(res.data)
        setReservations(res.data?.result ?? []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, [getToken]);
  return (
    <div>
      <ReservationsContainer />

      {/* Table */}
      <div className="mt-8">
        <h1>Total Reservation : {reservations.length}</h1>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>รหัสการจอง</TableHead>
              <TableHead>ชื่อ</TableHead>
              <TableHead>จำนวนคืน</TableHead>
              <TableHead>ราคารวม</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Check Out</TableHead>
              {/* <TableHead>Invoice</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.landmark.title}</TableCell>
                  <TableCell>{item.totalNights}</TableCell>
                  <TableCell>{formatNumber(item.total)}</TableCell>
                  <TableCell>{formatDate(item.checkIn)}</TableCell>
                  <TableCell>{formatDate(item.checkOut)}</TableCell>
                  {/* <TableCell></TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default MyReservations;
