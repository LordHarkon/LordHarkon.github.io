import clsx from "clsx";
import { useState } from "react";
import { GiBurningBook } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx("fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur-lg", {
        "h-20": !isOpen,
        "h-min": isOpen,
      })}
    >
      <div className="bg-white/10 dark:bg-inherit">
        <div className="grid h-20 w-full grid-cols-6 gap-4">
          <div className="flex items-center justify-center">
            <GiBurningBook className="mr-1 block h-10 w-10 text-harry md:hidden" />
          </div>
          <div className="col-span-4 flex items-center justify-center text-center">
            <p className="-mt-2 hidden cursor-default items-center justify-center bg-gradient-to-r from-harry to-sky-400 bg-clip-text font-sans text-4xl font-black leading-snug text-transparent selection:bg-transparent lg:flex">
              <GiBurningBook className="mr-1 h-10 w-10 text-harry" />
              Hooshu's Static Interactive CYOAs
            </p>
            <p className="-mt-2 flex cursor-default items-center justify-center bg-gradient-to-r from-harry to-sky-400 bg-clip-text font-sans text-3xl font-black leading-snug text-transparent selection:bg-transparent lg:hidden">
              <GiBurningBook className="mr-1 hidden h-10 w-10 text-harry md:block" />
              Hooshu's S.I. CYOAs
            </p>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <ThemeSwitch />
          </div>
          <div className="flex items-center justify-center md:hidden">
            <SiBurgerking className="h-8 w-8 text-slate-500" onClick={() => setIsOpen((prev) => !prev)} />
          </div>
        </div>
        <div
          className={clsx("flex flex-col items-center justify-center space-y-2 px-4 pt-2 pb-4", { hidden: !isOpen })}
        >
          <div className="w-full rounded bg-slate-800 px-2 py-1">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
