import useBookingStore from "@/store/booking-store";
import Buttons from "../form/Buttons";
import { SignInButton, useAuth } from "@clerk/react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createBooking } from "@/api/booking";
import { useNavigate } from "react-router";

const BookingConfirm = () => {
  // Zustand
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;
  const campingId = useBookingStore((state) => state.campingId);

  // Clerk
  const { getToken, userId } = useAuth();

  // Hook form
  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) return;
    if (campingId) setValue("campingId", campingId);
    if (checkIn) setValue("checkIn", checkIn);
    if (checkOut) setValue("checkOut", checkOut);
  }, [campingId, checkIn, checkOut, setValue, userId]);

  if (!userId) {
    return (
      <div className="flex justify-center">
        <SignInButton
          mode="modal"
          forceRedirectUrl={`/user/camping/${campingId}`}
        >
          <Button>Sign in</Button>
        </SignInButton>
      </div>
    );
  }

  const hdlBooking = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();

    try {
      const res = await createBooking(token, value);
      console.log(res.data.result);
      const bookingId = res.data.result
      navigate(`/user/checkout/${bookingId}`)
    } catch (error) {
      console.log(error);
    }

    // console.log(token);
    // console.log(value);

  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(hdlBooking)}>
        <Buttons text={"Comfirm Booking"} isPending={isSubmitting} />
      </form>
    </div>
  );
};
export default BookingConfirm;
