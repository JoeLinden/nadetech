import { useState } from "react";

export default function Toggle({ label, isOn, onToggle }: any) {
  const [isActive, setIsActive] = useState(isOn);

  // Do something when the button is toggled
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`toggle-button ${isActive ? "on" : ""}`}
      onClick={handleToggle}
    >
      {label}
    </button>
  );
}
