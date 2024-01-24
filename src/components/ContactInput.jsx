import React from "react";

export const ContactInput = ({
  value,
  label,
  onChange,
  className,
  name,
  placeholder,
  type = "text",
  multiline = false,
  rows = 3
}) => {
  return (
    <div className={className}>
      <p className="input-texts">{label}</p>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          className="contact-input"
          rows={rows}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          className="contact-input"
        />
      )}
    </div>
  );
};
