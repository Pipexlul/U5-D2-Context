import Card from "./Card";

const CardGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((imgData) => (
        <Card imgData={imgData} key={imgData.id} />
      ))}
    </div>
  );
};

export default CardGrid;
