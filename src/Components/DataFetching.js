import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./DataTable";
import Input from "@material-ui/core/Input";
import "./styles.css";

function DataFetching() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/swagatikapanda123/mockjson/government"
      )
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function search(rows) {
    return rows.filter((row) => row.title.toLowerCase().indexOf(query) > -1);
  }

  return (
    <div>
      <Input
        className='Search'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='search by district'
      />
      {/* <ul>
                {posts.map(post => <li key={post.id}> {post.title} </li>)}
            </ul> */}
      <div>
        <DataTable data={search(data)} />
      </div>
    </div>
  );
}

export default DataFetching;
