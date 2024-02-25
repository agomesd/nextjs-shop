import React from "react";

interface ListBoxProps {
  header: string;
  items: { title: string; description: string }[];
  footer: string;
}

export default function ListBox({ footer, header, items }: ListBoxProps) {
  return (
    <section className="bg-secondary p-8">
      <div className="w-2/3 mx-auto flex flex-col items-center">
        <h2 className="text-secondary-foreground font-bold text-4xl mb-4">
          {header}
        </h2>
        <ul className="grid grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="p-4">
              <h3 className="text-secondary-foreground text-xl">
                {item.title}
              </h3>
              <p className="text-secondary-foreground-muted text-lg">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-secondary-foreground-muted mt-4">{footer}</p>
      </div>
    </section>
  );
}
