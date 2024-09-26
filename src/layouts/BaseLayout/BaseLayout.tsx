import { type PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container relative">{children}</main>
      <Footer />
    </>
  );
}
