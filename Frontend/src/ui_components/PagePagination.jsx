import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PagePagination = ({ numOfPages, onPageChange, page }) => {
  const numbers = Array.from({ length: numOfPages }, (_, i) => i + 1);

  return (
    <Pagination className="my-6 dark:text-white">
      <PaginationContent>
        {page === 1 || (
          <PaginationItem
            onClick={() => {
              onPageChange(page - 1);
            }}
          >
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}

        {numbers.map((number) => (
          <PaginationItem
            key={number}
            onClick={() => {
              onPageChange(number);
            }}
          >
            {number === page ? (
              <PaginationLink href="#" isActive>
                {number}
              </PaginationLink>
            ) : (
              <PaginationLink href="#">{number}</PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}

        {page === numOfPages || (
          <PaginationItem
            onClick={() => {
              onPageChange(page + 1);
            }}
          >
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PagePagination;
