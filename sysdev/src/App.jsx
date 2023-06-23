import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import cat from "./css/bonggo.png";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => {
        const firstUser = data[0];
        setUser(firstUser);
      })
      .catch((error) => {
        console.error(error);
        console.log("Error fetching data");
      });
  }, []);

  return (
    <div className="App">
      {/* greeting section */}
      <div className="hello">
        <img src={cat} className="cat" />
        <p className="title">Hello! Please hover for card animation :)</p>
      </div>

      {user && (
        <div className="card">
          <div className="card-info">
            <div className="card-avatar">
              <img src={user.avatar} alt="Avatar" />
            </div>
            <div className="card-name">
              {user.first_name} {user.last_name}
            </div>
            <div className="card-id">ID number: {user.id}</div>
          </div>

          <hr />

          <div className="card-social-container">
            <ul className="card-social">
              <li className="card-social__item csi-p">
                <i className="fas fa-solid fa-envelope"></i>Contact:
              </li>
              <li className="card-social__item csi-p">
                <a href={`mailto:${user.email}`} className="tooltip">
                  {user.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
