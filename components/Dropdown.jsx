import { useState } from "react";

export default function Dropdown({ title, options, multiSelect, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(multiSelect ? [] : "");



  const handleSelect = (option) => {
    if (multiSelect) {
      setSelected((prev) => {
        if (prev.includes(option)) {
          return prev.filter((item) => item !== option);
        } else {
          return [...prev, option];
        }
      });
    } else {
      setSelected(option);
    }
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option}>
              <button className="dropdown-option" onClick={() => handleSelect(option)}>
                {multiSelect ? (selected.includes(option) ? "❌" : "✅") : (selected.includes(option) ? "✅" : "❌")} {option} 
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
