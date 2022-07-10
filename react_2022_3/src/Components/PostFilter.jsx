import React, { Component } from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="пошук"
      />
      <MySelect
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        value={filter.sort}
        defoultValue="Сортування по"
        options={[
          { value: "title", name: "По назві" },
          { value: "body", name: "По опису" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
