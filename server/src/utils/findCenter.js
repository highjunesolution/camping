import * as turf from "@turf/turf";
export const findCenter = (data) => {
  if (data.length === 0) {
    return null;
  }
  
  const feature = data.map((item) => {
    return turf.point([item.lng, item.lat]);
  });
  
  const collection = turf.featureCollection(feature);
  const center = turf.center(collection)
  const [lng, lat] = center.geometry.coordinates

  return [lat, lng]
};
