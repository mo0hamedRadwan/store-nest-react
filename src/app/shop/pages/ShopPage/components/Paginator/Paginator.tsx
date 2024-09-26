import { queryString } from "@mongez/react-router";
import { shopAtom } from "app/shop/atoms/shopAtom";
import { createArray } from "app/shop/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "design-system/components/ui/pagination";

export type PaginatorProps = {
  totalPages: number;
  currentPage: number;
};

export default function Paginator({ totalPages, currentPage }: PaginatorProps) {
  // const totalPages = pagination.pages;
  if (totalPages < 2) return null;
  const pages = createArray(totalPages);

  const ChangePageNumber = (pageNumber: number) => {
    const query = queryString.toQueryString({
      ...queryString.all(),
      page: pageNumber,
    });
    queryString.update(query);
    shopAtom.getProducts();
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 ? (
            <PaginationPrevious
              className="rounded-full "
              onClick={() => ChangePageNumber(currentPage - 1)}
            />
          ) : (
            <PaginationPrevious aria-disabled="true" className="rounded-full" />
          )}
        </PaginationItem>

        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => ChangePageNumber(page)}
              isActive={page === currentPage}
              className="rounded-full w-10 h-10 ">
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && totalPages > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          {currentPage < totalPages ? (
            <PaginationNext
              className="rounded-full"
              onClick={() => ChangePageNumber(currentPage + 1)}
            />
          ) : (
            <PaginationNext aria-disabled="true" className="rounded-full" />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
