import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useHome } from "app/home/hooks/use-home";
import Error from "design-system/components/Error";
import Loader from "design-system/components/ui/Indicators/Indicators";

export default function HomePage() {
  const { rows, isLoading, error } = useHome();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      {rows}
    </>
  );
}
