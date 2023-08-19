import React from "react";
import Table from "../component/table";

export const Report = () => {
  const headers = [
    { title: "User", value: "user" },
    { title: "WE-Time Session", value: "time" },
    { title: "Post", value: "user_comments" },
    { title: "Pics", value: "picture" },
  ];

  return (
    <div className="Container">
      <Table headers={headers} />
    </div>
  );
}