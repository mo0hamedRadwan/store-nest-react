import Card from "design-system/components/Card";
import React from "react";
import provide_mock from "../../../../mocks/we-provide.mock";

function _AboutProvideSection() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-7 py-10">
      {provide_mock.map((item, index) => (
        <div className="" key={index}>
          <Card
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </div>
      ))}
    </section>
  );
}

const AboutProvideSection = React.memo(_AboutProvideSection);
export default AboutProvideSection;
