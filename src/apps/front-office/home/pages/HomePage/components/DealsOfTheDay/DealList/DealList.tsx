import DealCard from "../DealCard";
const DealList = ({ deals, timeCards }) => {
  return (
    <div className="flex flex-wrap -m-2 gap-4">
      {deals.map((deal, index) => (
        <DealCard
          key={index}
          {...deal}
          timeCards={timeCards[index].timeCards}
        />
      ))}
    </div>
  );
};

export default DealList;
