
import "./App.css";
import { useState } from "react";
import LoginForm from "./LoginForm";
import data from "./data.json";

function App() {
  const adminUser = {
    username: "Employee_One@gmail.com",
    password: "Employee123",
  };

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const Login = (details) => {
    //console.log(details)

    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      //console.log('Logged in') ;
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      //console.log('details not match with admin')
      setError("Username and Password are not correct");
    }
  };

  const Logout = () => {
    //console.log('Logout')
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="App">
      {user.username !== "" ? (
        <div className="welocome">
          <h2>Welcome</h2>
          <button onClick={Logout}>Logout</button>
          <table>
            <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
            </tr>
            </thead>

            {data.map((item, index) => {
              return (
                <tbody>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNo}</td>
                </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
