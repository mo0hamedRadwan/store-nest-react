import Breadcrumb from "src/apps/front-office/design-system/layouts/Breadcrumb";

export default function AboutUsPage() {
  return (
    <section className="w-full">
      <div className="absolute w-full border-b-2 border-b-gray-200 top-full"></div>
      <div className="breadcrump">
        <div className="nav-links w-full">
          <Breadcrumb
            navItems={[
              { name: "pages" },
              { name: "about-us", url: "/about-us" },
            ]}
            attributes={{
              className: "justify-end items-end py-4 my-0",
            }}
          />
        </div>
      </div>
      
      <main className="about-body">
        
      </main>
    </section>
  );
}
