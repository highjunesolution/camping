import { listReservations } from "@/api/admin";
import StateCard from "./StateCard";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/react";

const ReservationsContainer = () => {
  const { getToken } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchReservations = async () => {
      const token = await getToken();
      try {
        const res = await listReservations(token);
        console.log(res.data)
        setData(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservations();
  }, [getToken]);

  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StateCard label={"Campings"} value={data?.campings || 0} />
      <StateCard label={"Nights"} value={data?.totalNights || 0} />
      <StateCard label={"Totals"} value={data?.total || 0} />
    </div>
  );
};
export default ReservationsContainer;
