import CardButton from "./CardButton";

const Card = ({ imgData }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        className="h-48 w-full object-cover"
        src={imgData.src.portrait}
        alt={imgData.alt}
      />
      <div className="p-4 bg-white/5 flex justify-center content-center">
        <CardButton linkedId={imgData.id} />
      </div>
    </div>
  );
};

export default Card;
