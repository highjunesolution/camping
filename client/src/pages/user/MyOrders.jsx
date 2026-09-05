import { listBookings } from "@/api/booking";
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
import { formatNumber } from "@/utils/formatNumber";

const MyOrders = () => {
  const [bookings, setBookings] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchBooking = async () => {
      const token = await getToken();
      try {
        const res = await listBookings(token);
        setBookings(res.data?.result ?? []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, [getToken]);

  useEffect(() => {
    console.log(bookings);
  }, [bookings]);
  return (
    <div>
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((item) => {
            console.log(item)
           return <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.landmark.title}</TableCell>
              <TableCell>{item.totalNights}</TableCell>
              <TableCell>{formatNumber(item.total)}</TableCell>
              <TableCell>{item.checkIn}</TableCell>
              <TableCell>{item.checkOut}</TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default MyOrders;
