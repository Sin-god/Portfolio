import { useState } from "react";

export const useFeching = (callback) => {
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetcking = async () => {
    try {
      setIsPostsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsPostsLoading(false);
    }
  };
  return [fetcking, isPostsLoading, error];
};
