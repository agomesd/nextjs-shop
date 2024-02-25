import Link from "next/link";
import React from "react";
import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-black text-background  px-12 flex flex-col">
      <div className="p-12 justify-between flex items-center mb-12">
        <div className="flex flex-col gap-8 items-center">
          <Link href={"/"} className="text-4xl font bold">
            Logo
          </Link>
          <div>
            <p>Address line 1</p>
            <p>Address line 2</p>
          </div>
          <div>
            <p>P: 450-020-2398</p>
            <p>F: 450-020-2398</p>
            <p>TF: 450-020-2398</p>
          </div>
        </div>

        <ul className="flex gap-20">
          {footerLinks.map((link) => (
            <li key={link.link.href}>
              <Link
                href={link.link.href}
                className="text-muted-foreground mb-4 block"
              >
                {link.link.label}
              </Link>
              <ul className="flex flex-col gap-3">
                {link.link.sublinks.map((sublink) => (
                  <li key={sublink.hash}>
                    <Link href={`${link.link.href}${sublink.hash}`}>
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between border-t border-white py-6">
        <p>© 2024 Company Name. All Rights Reserved.</p>
        <ul className="flex gap-4 items-center">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </ul>
      </div>
    </div>
  );
}

const footerLinks = [
  {
    link: {
      href: "/about",
      label: "WHO WE ARE",
      sublinks: [
        {
          hash: "#our-story",
          label: "Our Story",
        },
        {
          hash: "#our-commitment",
          label: "Our Commitment",
        },
        {
          hash: "#core-values",
          label: "Core Values",
        },
        {
          hash: "#sister-companies",
          label: "Sister Companies",
        },
      ],
    },
  },
  {
    link: {
      href: "/solutions",
      label: "SOLUTIONS",
      sublinks: [
        {
          hash: "#printing",
          label: "Printing",
        },
        {
          hash: "#wide-format",
          label: "Wide Format",
        },
        {
          hash: "#menu",
          label: "Menu",
        },
        {
          hash: "#specialty",
          label: "Specialty",
        },
        {
          hash: "#fulfillment",
          label: "Fulfillment",
        },
      ],
    },
  },
  {
    link: {
      href: "/portfolio",
      label: "PORTFOLIO",
      sublinks: [
        {
          hash: "#gallery",
          label: "Gallery",
        },
        {
          hash: "#testimonials",
          label: "Testimonials",
        },
      ],
    },
  },
  {
    link: {
      href: "/connect",
      label: "CONNECT",
      sublinks: [
        {
          hash: "#get-a-quote",
          label: "Get a Quote",
        },
        {
          hash: "#upload-files",
          label: "Upload Files",
        },
        {
          hash: "#contact-us",
          label: "Contact Us",
        },
        {
          hash: "#faq",
          label: "FAQ",
        },
      ],
    },
  },
];
