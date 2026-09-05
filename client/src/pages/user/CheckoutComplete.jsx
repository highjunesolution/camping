import { checkOutStatus } from "@/api/booking";
import { createAlert } from "@/utils/createAlert";
import { useAuth } from "@clerk/react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

const CheckoutComplete = () => {
  const { session } = useParams();
  const { getToken } = useAuth();
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  console.log(session);

  useEffect(() => {
    const fetchPayment = async () => {
      const token = await getToken();
      try {
        const res = await checkOutStatus(token, session);
        setStatus(res.data.status);
        createAlert("success", res.data?.message || "Payment Completed");
        navigate("/user/myorders")
      } catch (error) {
        console.log(error);
      }
    };
    fetchPayment();
  }, [getToken, session, navigate]);

  if (status === "open") {
    return <Navigate to={"/"} />;
  }
  return <div>Loading...</div>;
};
export default CheckoutComplete;
