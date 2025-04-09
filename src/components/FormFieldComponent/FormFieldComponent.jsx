import React, { memo } from "react";
import { Input } from "@/components/ui/input";

const FormFieldComponent = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="form-item">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input"
      />

      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default memo(FormFieldComponent);
