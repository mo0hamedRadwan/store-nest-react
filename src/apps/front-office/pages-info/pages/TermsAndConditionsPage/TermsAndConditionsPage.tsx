import Banner from "src/apps/front-office/design-system/components/Banner";
import CategorySidebar from "src/apps/front-office/shop/components/CategorySidebar";
import TrendingProducts from "src/apps/front-office/shop/pages/components/TrendingProducts";
import GoverningLaw from "../../components/GoverningLaw";
import Restrictions from "../../components/Restrictions";
import SearchInput from "../../components/SearchInput";
import Termination from "../../components/Termination";
import TermsOfService from "../../components/TermsOfService";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-[40px] pt-6">
      <div className="w-full lg:w-[75%] lg:flex-grow">
        <TermsOfService />
        <Restrictions />
        <Termination />
        <GoverningLaw />
      </div>
      <div className="w-full lg:w-[25%] lg:max-w-[500px] flex flex-col h-full justify-stretch">
        <SearchInput />
        <div className="relative flex flex-col gap-10">
          <CategorySidebar />
          <TrendingProducts className="block max-w-56" />
        </div>
        <div className="hidden lg:block">
          <Banner
            imageUrl="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-11.png"
            title="Oraganic"
            Subtitle={() => (
              <>
                Save 17% on <span className="text-primary">Oganic</span> Juice
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}
