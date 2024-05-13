import React, { useState, useEffect } from "react";
import PopUpMenu from "./PopUpMenu";

const CommandInterface = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [data, setData] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "/" && !showMenu) {
      setShowMenu(true);
      e.preventDefault(); // Prevent the "/" character from appearing in the input
    }

    if (e.key === "Escape") {
      setShowMenu(false);
      setData("");
      console.log("data", data);
      e.preventDefault();
    }
  };

  const handleMouseClick = (e) => {
    // if (e.target.tagName !== "INPUT") {
    // Check if the click is not on an input element
    const isInsideSecondDiv = e.target.closest("#showPopUP") !== null;
    if (isInsideSecondDiv) {
      setMenuPosition({ x: e.clientX, y: e.clientY });
      setShowMenu(false);
      if (showMenu) {
        setShowMenu(false);
        e.preventDefault(); // Prevent the "/" character from appearing in the input
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleMouseClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleMouseClick);
    };
  }, [showMenu]);

  return (
    <div
      style={{
        background: "#f0f9ff",
        padding: "10px",
        height: "100vh",
        display: "grid",
      }}
    >
      <div
        id="showPopUP"
        style={{
          background: "white",
          padding: "20px",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
          borderRadius: "5px",
          border: "2px solid rgb(238, 237, 237)",
        }}
      >
        <div className="flex items-center justify-center bg-slate-300/30 p-2 rounded-xl">
          <h1 className="font-medium text-lg">
            Note: Click anywhere on the screen and then press "/" to open the
            popup
          </h1>
        </div>
        {showMenu && (
          <PopUpMenu
            setData={setData}
            setShowMenu={setShowMenu}
            position={{ left: menuPosition.x, top: menuPosition.y }}
          />
        )}
        <div
          style={{
            position: "relative",
            // left: menuPosition.x, // Use the x-coordinate from the position prop
            // top: menuPosition.y, // Use the y-coordinate from the position prop
            minWidth: "150px",
            borderRadius: "5px",
            boxShadow: "none",
            border: "none",
            padding: "10px",
          }}
        >
          {data}
        </div>
      </div>
    </div>
  );
};

export default CommandInterface;
