"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ActionButton } from "./ActionButton";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import { Sheet } from "./Sheet";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  const [showAddons, setShowAddons] = useState<string[]>([]);

  const handleShowSearch = () => {
    if (showAddons.includes("search")) {
      setShowAddons(showAddons.filter((addon) => addon !== "search"));
    } else {
      setShowAddons((prevState) => [...prevState, "search"]);
    }
  };

  return (
    <>
      <div
        className={`relative z-20 flex border-b border-border ${
          !showAddons.length && "shadow-md"
        } divide-x divide-border`}
      >
        <nav className="bg-background p-8 flex items-center justify-between flex-1">
          <ul className="flex gap-8 items-center">
            <Link href="/" className="font-black text-2xl">
              Your Logo
            </Link>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
          <ActionButton label="DO SOMETHING!" />
        </nav>
        <div className="flex gap-8 items-center p-8">
          <Button variant={"ghost"} size={"icon"}>
            <Search size={24} onClick={handleShowSearch} />
          </Button>
          <Sheet
            titleProps={{ children: `Shopping Cart` }}
            descriptionProps={{
              children: <span>View and manage your shopping items.</span>,
            }}
            contentProps={{
              children: (
                <ul className="p-4">
                  <li className="text-muted-foreground font-semibold">
                    Your shopping cart is currently empty.
                    <Button variant={"link"} asChild>
                      <Link href={"/products"}>Go to products list.</Link>
                    </Button>
                  </li>
                </ul>
              ),
            }}
            triggerProps={{
              children: (
                <Button variant={"ghost"} size={"icon"}>
                  <ShoppingBag size={24} />
                </Button>
              ),
            }}
          />
          <Sheet
            titleProps={{ children: `User Profile` }}
            descriptionProps={{
              children: <span>View and manage your user settings.</span>,
            }}
            contentProps={{
              children: (
                <div className="p-4">
                  <Button variant={"link"} asChild>
                    <Link href={"/"}>Login</Link>
                  </Button>
                </div>
              ),
            }}
            triggerProps={{
              children: (
                <Button variant={"ghost"} size={"icon"}>
                  <UserRound size={24} />
                </Button>
              ),
            }}
          />
        </div>
      </div>
      <AnimatePresence>
        {showAddons.length && (
          <motion.div
            className="absolute z-10 bg-background py-4 px-8 w-full shadow-md"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.2, ease: "circInOut" }}
          >
            <SearchBar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}

const links = [
  {
    href: "/about",
    label: "ABOUT",
  },
  {
    href: "/products",
    label: "PRODUCTS",
  },
  {
    href: "/portfolio",
    label: "PORTFOLIO",
  },
  {
    href: "/contact",
    label: "CONTACT US",
  },
];
