import React from "react";

function Child({ name, age, city, job, showDetails }) {
  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>

      {/* Conditional Rendering */}
      {showDetails && (
        <>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Job:</strong> {job}
          </p>
        </>
      )}
    </div>
  );
}

export default Child;
