import React from "react";
import { Button } from "./ui/button";

interface ActionButtonProps {
  label: string;
}

export function ActionButton({ label }: ActionButtonProps) {
  return (
    <Button className="bg-accent text-accent-foreground px-6 py-2 rounded-full">
      {label}
    </Button>
  );
}
