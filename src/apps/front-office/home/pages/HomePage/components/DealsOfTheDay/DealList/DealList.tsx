import DealCard from "../DealCard";
const DealList = ({ deals }) => {
  return (
    <div className="flex flex-wrap -m-2 gap-4">
      {deals.map((deal, index) => (
        <DealCard key={index} {...deal} />
      ))}
    </div>
  );
};

export default DealList;
