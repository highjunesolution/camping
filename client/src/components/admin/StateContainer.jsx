import { listStats } from "@/api/admin";
import StateCard from "./StateCard";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/react";

const StateContainer = () => {
  const { getToken } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchStats = async () => {
      const token = await getToken();
      try {
        const res = await listStats(token);
        setData(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, [getToken]);

  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StateCard label={"Users"} value={data?.usersCount || 0} />
      <StateCard label={"Campings"} value={data?.campingsCount || 0} />
      <StateCard label={"Bookings"} value={data?.bookingsCount || 0} />
    </div>
  );
};
export default StateContainer;
