import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function GuideLists() {
  useEffect(() => {
    axios
      .get("https://api.github.com/users/shubham-singh-coder/repos?per_page=5")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const user = [
    {
      name: "John Smith",
      age: 32,
      email: "john.smith@example.com",
    },
    {
      name: "Alice Johnson",
      age: 27,
      email: "alice.johnson@example.com",
    },
    {
      name: "Bob Williams",
      age: 41,
      email: "bob.williams@example.com",
    },
  ];

  return (
    <div>
      {
        <div className="card-deck">
          {user.map((user) => (
            <div class="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Age: {user.age}</p>
                <p className="card-text">Email: {user.email}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
