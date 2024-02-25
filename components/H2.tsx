import React from "react";

interface H2Props {
  label: string;
}

export function H2({ label }: H2Props) {
  return <h2 className="text-3xl font-bold text-foreground">{label}</h2>;
}
