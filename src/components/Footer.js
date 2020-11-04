import React from "react"

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "2.5rem",
        textAlign: "center",
        marginTop: "2rem",
        backgroundColor: "#fdf8f5",
        position: "absolute",
        bottom: 0,
        boxShadow: "0px 2px 10px -5px rgba(21, 6, 5, 1)",
        backgroundImage: "linear-gradient(to right, #b7f8db, #50a7c2)",
      }}>
      <div
        style={{
          fontSize: ".8rem",
        }}>
        © 2020 Dan Gibbons
      </div>
    </div>
  )
}

export default Footer
