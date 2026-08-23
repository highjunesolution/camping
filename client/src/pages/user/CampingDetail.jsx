import { readCamping } from "@/api/camping";
import Breadcrums from "@/components/campings/Breadcrums";
import Description from "@/components/campings/Description";
import ImageContainer from "@/components/campings/ImageContainer";
import MainMap from "@/components/map/MainMap";
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

  console.log(camping);
  return (
    <div>
      <Breadcrums name={camping.title} />

      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">{camping.title}</h1>
        <div className="flex gap-2">
          <p>Share</p>
          <p>Favorite</p>
        </div>
      </header>

      <ImageContainer image={camping.secure_url} name={camping.title} />

      <div>
        <Description text={camping.description} />
        {camping.lat && <MainMap location={[camping.lat, camping.lng]} />}
      </div>
    </div>
  );
}
export default CampingDetail;
