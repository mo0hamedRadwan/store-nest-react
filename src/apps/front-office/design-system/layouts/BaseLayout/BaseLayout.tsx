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
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
