import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function JsonServer() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/user")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default JsonServer;
