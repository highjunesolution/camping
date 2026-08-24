import { Calendar } from "@/components/ui/calendar";
import useBookingStore from "@/store/booking-store";
import { useEffect, useState } from "react";

const defaultSelected = {
  from: undefined,
  to: undefined,
};
const BookingCalendar = () => {
  const [range, setRange] = useState(defaultSelected);

  useEffect(() => {
    useBookingStore.setState({
      range,
    });
  }, [range]);
  
  return (
    <div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-lg border"
      />
    </div>
  );
};
export default BookingCalendar;
