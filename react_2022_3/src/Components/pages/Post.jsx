import React, { useEffect, useState } from "react";
import { useFeching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import PostService from "D:/Web_programing/My_Progects_WEB/react_2022_3/src/API/PostService";
import { getPageCount } from "./../utils/pages";
import MyButton from "./../UI/button/MyButton";
import PostForm from "./../PostForm";
import MyModal from "./../UI/MyModal/MyModal";
import PostFilter from "./../PostFilter";
import PostList from "./../Postlist";
import Loader from "./../UI/Loader/Loader";
import Pagination from "./../UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSorchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPagest, setTotalPagest] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFeching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPagest(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Створити користувача
      </MyButton>
      <MyModal viseble={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Сталась помилка</h1>}

      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSorchedPosts}
          title="Список постів 1"
        />
      )}
      <Pagination
        page={page}
        changePage={changePage}
        totalPagest={totalPagest}
      />
    </div>
  );
}

export default Posts;
