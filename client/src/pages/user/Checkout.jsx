import { useParams } from "react-router";

const Checkout = () => {
    const { id } = useParams();
  return (
    <div>Checkout { id }</div>
  )
}
export default Checkout