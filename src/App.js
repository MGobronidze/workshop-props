import React, { useState } from "react";
import Child from "./components/Child";

function App() {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25, city: "New York", job: "Engineer" },
    { name: "Bob", age: 30, city: "Los Angeles", job: "Designer" },
    { name: "Charlie", age: 35, city: "Chicago", job: "Developer" },
  ]);

  const [showDetails, setShowDetails] = useState(false);
  const [minAge, setMinAge] = useState(0);

  // Function to toggle user details visibility
  const toggleDetails = () => setShowDetails(!showDetails);

  // Function to filter users by age
  const filteredUsers = users.filter(user => user.age >= minAge);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Advanced Props in React</h1>

      {/* Age Filter */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Minimum Age:</strong>
          <input
            type="number"
            value={minAge}
            onChange={(e) => setMinAge(Number(e.target.value))}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>

      {/* Toggle Details Button */}
      <button
        onClick={toggleDetails}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {/* User List */}
      {filteredUsers.map((user, index) => (
        <Child
          key={index}
          name={user.name}
          age={user.age}
          city={user.city}
          job={user.job}
          showDetails={showDetails}
        />
      ))}
    </div>
  );
}

export default App;
