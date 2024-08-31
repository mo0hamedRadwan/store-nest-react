export default function ProductQuantity() {
  return (
    <div className="qty flex items-center justify-between w-16 lg:w-24 h-11 md:h-12 text-gray-400 border border-primary-default bg-white rounded-lg">
      <span className="w-80 px-2 text-center">1</span>
      <div className="flex flex-col items-center justify-center h-full gap-1 text-xl text-primary-default">
        <i className="bx bx-chevron-up px-1 cursor-pointer"></i>
        <i className="bx bx-chevron-down px-1 cursor-pointer"></i>
      </div>
    </div>
  );
}
