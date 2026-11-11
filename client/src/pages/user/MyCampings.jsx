import { listMyCamping } from "@/api/admin";
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
import { formatNumber } from "@/utils/formats";
const MyCampings = () => {
  const [campings, setCampings] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchCampings = async () => {
      const token = await getToken();
      try {
        const res = await listMyCamping(token);
        setCampings(res.data?.result ?? []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCampings();
  }, [getToken]);

  useEffect(() => {
    console.log(campings);
  }, [campings]);
  return (
    <div>
      <h1>Totals Camping : {campings.length}</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>รหัสการจอง</TableHead>
            <TableHead>ชื่อ</TableHead>
            <TableHead>จำนวนคืน</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campings?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{formatNumber(item.price)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default MyCampings;
