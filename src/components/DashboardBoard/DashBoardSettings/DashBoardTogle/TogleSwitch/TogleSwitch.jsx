import React, { useState } from 'react';
import  "./TogleSwitch.css"
const TogleSwitch  = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`switch ${isChecked ? 'switch-on' : ''}`} >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider"></span>
    </label>
  );
};

export default TogleSwitch;
