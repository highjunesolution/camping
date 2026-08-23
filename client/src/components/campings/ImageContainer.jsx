const ImageContainer = ({ image, name }) => {
  return (
    <div className="h-75 md:h-125 mt-2">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
  );
};
export default ImageContainer;
