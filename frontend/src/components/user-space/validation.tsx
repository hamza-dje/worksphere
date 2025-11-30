// Validation.tsx
import React from "react";

interface ValidationProps {
  error?: { message?: string };
}

export const Validation: React.FC<ValidationProps> = ({ error }) => {
  if (!error) return null;
  return <div className="text-red-500 text-sm col-span-full">{error.message}</div>;
};
