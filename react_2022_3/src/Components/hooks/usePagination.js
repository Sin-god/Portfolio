import { useMemo } from "react";

export const usePagination = (totalPagest) => {
  const arrPages = [];
  const allPagest = useMemo(() => {
    for (let i = 0; i < totalPagest; i++) {
      arrPages.push(i + 1);
    }
    return arrPages;
  }, [totalPagest]);
  return allPagest;
};
