import React, { useState, useEffect } from "react";

const PopUpMenu = ({ setData, setShowMenu, position }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleKeyPress = (e) => {
    if (e.key === "ArrowDown") {
      // Move highlight down
      setHighlightedIndex((prevIndex) =>
        prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      // Move highlight up
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      // Trigger action based on highlighted option
      handleAction(options[highlightedIndex], highlightedIndex);
    } else if (e.key === "W" || e.key === "w") {
      // Set highlighted index to 0 (Option 1)
      setHighlightedIndex(0);
      handleAction(options[0], 0); // Pass index directly
    } else if (e.key === "E" || e.key === "e") {
      // Set highlighted index to 1 (Option 2)
      setHighlightedIndex(1);
      handleAction(options[1], 1); // Pass index directly
    } else if (e.key === "R" || e.key === "r") {
      // Set highlighted index to 2 (Option 3)
      setHighlightedIndex(2);
      handleAction(options[2], 2); // Pass index directly
    }
  };

  const handleAction = (option, index) => {
    // Perform action based on selected option
    switch (option) {
      case "Option 1":
        console.log("This is a test of option 1");
        setData("This is a test of option 1");
        break;
      case "Option 2":
        console.log("This is a test of option 2");
        setData("This is a test of option 2");
        break;
      case "Option 3":
        console.log("This is a test of option 3");
        setData("This is a test of option 3");
        break;
      // case "Option 4":
      //   console.log("This is a test of option 4");
      //   setData("This is a test of option 4");
      //   break;
      default:
        break;
    }
    setShowMenu(false); // Hide the menu after action is selected
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [highlightedIndex]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setShowMenu(true); // Show the menu after two seconds
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  useEffect(() => {
    setVisible(true); // Set visible to true to trigger the delayed menu appearance
  }, []);

  return (
    <div
      className={`menu-container ${visible ? "visible" : ""}`}
      style={{
        left: position.left,
        top: position.top,
        padding: "1px",
      }}
    >
      <ul
        className="menu"
        style={{ listStyleType: "none", margin: "0", padding: "5px" }}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`${highlightedIndex === index ? "selected-item" : ""} ${
              highlightedIndex === index ? "selected" : ""
            }`}
            style={{
              color: "#008080",
              cursor: "pointer",
              padding: "5px",
              fontSize: "18px",
            }}
            onClick={() => handleAction(option, index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopUpMenu;
