import { useMemo } from "react";

export const useStorePosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useStorePosts(posts, sort);
  const sortedAndSorchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSorchedPosts;
};
