import { motion } from "motion/react";
import { Link } from "react-router";
import FavoriteToggleButton from "./FavoriteToggleButton";

const CampingCard = ({ camping }) => {
  const { id, title, description, secure_url, price, lat, lng, isFavorite } = camping;
  // console.log(camping)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1, rotate: 10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.2 }}
    >
      <article className="relative border-slate-50 rounded-md shadow">
        <Link to={`/user/camping/${id}`}>
          <div className="h-75 rounded-md mb-2">
            <img
              src={secure_url}
              className="w-full h-full object-cover rounded-md transition-all duration-300"
            />
          </div>
          <div className="px-2">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          <p className="text-sm text-gray-600 px-2">
            {description.substring(0, 50)} ดูเพิ่มเติม...
          </p>

          <div className="flex justify-between items-end px-2 mb-2">
            <p className="font-semibold">THB {price}</p>
            <p className="text-xs">
              {lat.toFixed(4)}, {lng.toFixed(4)}
            </p>
          </div>
        </Link>
        {/* Favorite Button */}
        <div className="absolute top-4 right-4">
          <FavoriteToggleButton campingId={id} isFavorite={isFavorite} />
        </div>
      </article>
    </motion.div>
  );
};
export default CampingCard;
