"use client"

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { FilmIcon, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderSearch } from "./search/Search";

export const Header = ({ searchValue }: {searchValue: string}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="h-15 flex justify-between items-center p-5  md:max-w-[1800px] mx-auto">
      <Link href={"/"}>
        <div className="flex gap-2 items-center text-sky-800">
          <FilmIcon className="h-5 w-5" />

          <b>
            <i>MovieZ</i>
          </b>
        </div>
      </Link>

      <div className="hidden md:flex gap-[12px]">
        {/* <Genre /> */}

        {/* <HeaderSearch /> */}
      </div>

      <div className="flex gap-3  ">
        <div className="md:hidden flex">
          <Button
            variant="outline"
            className="flex gap-3 "
            onClick={() => setVisible(!visible)}
          >
            <Search />
          </Button>
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute  left-25  px-4"
              >
                <div className=" w-full  rounded-xl ">
                  <HeaderSearch />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ModeToggle />
      </div>
    </div>
  );
};
