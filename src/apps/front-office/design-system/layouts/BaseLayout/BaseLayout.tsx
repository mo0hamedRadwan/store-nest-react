import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      {/* <Portal containerId="root">
        <QuickView />
      </Portal> */}
<<<<<<< Updated upstream
      <main className="relative">{children}</main>
=======
      <main className="container">{children}</main>
>>>>>>> Stashed changes
      <Footer />
    </>
  );
}
