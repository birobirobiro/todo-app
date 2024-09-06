import React from "react";

function Button({ children, ...props }) {
  return (
    <button {...props} className="bg-slate-400 p-2 text-white rounded-md">
      {children}
    </button>
  );
}

export default Button;
