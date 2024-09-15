import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isLTR } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { ArrowBigLeft, ArrowBigRight, HomeIcon } from "lucide-react";
import React from "react";
import styles from "./_Breadcrumb.module.scss";

export type BreadcrumbProps = {
  title?: string;
  navItems: { name: string; url?: string }[] | undefined;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};

export default function Breadcrumb({
  title,
  navItems,
  attributes,
}: BreadcrumbProps) {
  const isLtr = isLTR();

  return (
    <div
      className={`${styles.breadcrumb} flex items-center py-10 my-4 ${attributes?.className || ""}`}>
      <div className="container">
        {title && (
          <h1 className="title font-bold text-[52px] mb-1 max-md:text-[42px] max-sm:text-[32px]">
            {trans(title)}
          </h1>
        )}
        <nav className="flex">
          <ol className="inline-flex text-sm">
            <li className="flex items-center ">
              <Link to={URLS.home} className="font-bold">
                <div className="flex items-center gap-1 text-primary hover:text-secondary group transition-colors">
                  <HomeIcon className="stroke-primary group-hover:stroke-secondary" />{" "}
                  {trans("home")}
                </div>
              </Link>
              {isLtr ? (
                <ArrowBigRight strokeWidth="2" className="mx-1" />
              ) : (
                <ArrowBigLeft strokeWidth="2" className="mx-1" />
              )}
            </li>
            {navItems?.map((item, index) => {
              return (
                <li className="font-normal flex items-center group" key={index}>
                  {item.url ? (
                    <Link
                      to={item.url}
                      className="text-black font-bold group-hover:text-primary transition-colors line-clamp-1">
                      {trans(item.name)}
                    </Link>
                  ) : (
                    <span className="inline-block text-gray-800">
                      {item.name}
                    </span>
                  )}
                  {index !== navItems.length - 1 &&
                    (isLtr ? (
                      <ArrowBigRight strokeWidth="2" className="mx-1" />
                    ) : (
                      <ArrowBigLeft strokeWidth="2" className="mx-1" />
                    ))}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
