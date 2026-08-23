import { readCamping } from "@/api/camping";
import Breadcrums from "@/components/campings/Breadcrums";
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
  return <div>
    <Breadcrums name={camping.title}/>
    {/* Header */}
    {/* Image */}
    {/* Description */}
  </div>;
}
export default CampingDetail;
