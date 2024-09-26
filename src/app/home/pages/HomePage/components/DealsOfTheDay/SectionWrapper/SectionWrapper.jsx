const SectionWrapper = ({ children }) => {
  return (
    <section className="py-10 pb-5">
      <div className="container mx-auto pr-4 pl-4">{children}</div>
    </section>
  );
};

export default SectionWrapper;
