import { Button } from 'apps/front-office/design-system/components/ui/button';

interface FeaturedCategoryCardProps {
    backgroundImage: string;
}

const FeaturedCategoriesBanner = ({ backgroundImage }: FeaturedCategoryCardProps) => {
    return (
        <div
            className="relative h-[65vh] max-h-[35vh] rounded-lg shadow-md p-6 m-4 w-full sm:w-1/2 lg:w-1/3"
            style={{ background: `url(${backgroundImage}) no-repeat center center / cover` }}
        >
            {/* <div className="absolute z-[2] top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 py-0">
                <h4 className="font-bold min-h-[100px] mb-[15px]" style={{ whiteSpace: 'pre-line' }}>
                    {title}
                </h4>
                <Button className="bg-primary-default hover:bg-primary-dark font-custom leading-[1.3] pl-3 pr-2 py-[7px] text-sm h-9">
                    shop now
                </Button>
            </div> */}
        </div>
    );
};

export default FeaturedCategoriesBanner;
