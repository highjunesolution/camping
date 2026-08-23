import { readCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CampingDetail() {
  const [camping, setCamping] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchCampingDetail = async () => {
      try {
        const res = await readCamping(id);
        setCamping(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCampingDetail();
  }, [id]);
  return <div>CampingDetail</div>;
}
export default CampingDetail;
