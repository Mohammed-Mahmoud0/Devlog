/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../ui_components/Header";
import BlogContainer from "../ui_components/BlogContainer";
import { getBlogs } from "@/services/apiBlog";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import PagePagination from "@/ui_components/PagePagination";
import { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const numOfBlogsPerPage = 3;

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["blogs", page],
    queryFn: () => getBlogs(page),
    placeholderData: keepPreviousData,
  });

  const blogs = data?.results || [];
  const numOfPages = Math.ceil(data?.count / numOfBlogsPerPage);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <>
      <Header />
      <BlogContainer isPending={isPending} blogs={blogs} />
      <PagePagination numOfPages={numOfPages} onPageChange={handlePageChange} page={page} />
    </>
  );
};

export default HomePage;
