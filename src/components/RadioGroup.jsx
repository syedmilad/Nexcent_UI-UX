import React, { useState } from "react";

const RadioGroup = () => {
const [value, setValue] = useState('female')
  const items = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.label + index}>
          <input
            type="radio"
            name="gender"
            value={item.value}
            checked={value === item.value}
            onChange={(e) => setValue(e.target.value)}
            id={item.name + item.value}
          />
          <label htmlFor={item.name + item.value}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
