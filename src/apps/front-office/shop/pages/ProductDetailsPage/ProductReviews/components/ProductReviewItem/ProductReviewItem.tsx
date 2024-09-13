export default function ProductReviewItem() {
  return (
    <>
      <li className="flex gap-2 md:gap-5">
        <div>
          <span className="inline-flex flex-0 items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary-light mb-1">
            <i className="bx bxs-user text-xl md:text-4xl text-white"></i>
          </span>
        </div>
        <div>
          <h3 className="block text-sm text-primary font-semibold">
            Eman Awaad
          </h3>
          <span className="date block text-xs md:text-sm text-gray-400 mb-1">
            December 4, 2024 at 3:12 pm
          </span>
          <p className="text-xs md:text-sm text-gray-500 font-semibold lg:leading-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            suscipit exercitationem accusantium obcaecati quos voluptate
            nesciunt facilis itaque modi commodi dignissimos sequi repudiandae
            minus ab deleniti totam officia id incidunt? Reply
          </p>
        </div>
      </li>
    </>
  );
}
