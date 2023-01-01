import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo1.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionBtn from "@/shared/ActionBtn";

type Props = {
  topPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ topPage, selectedPage, setSelectedPage }: Props) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const abvMedScrn = useMediaQuery("(min-width: 1080px)");

  const navBkg = topPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div className={`${navBkg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Left side */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />

            {/* right side:hidden */}
            {abvMedScrn ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <ActionBtn setSelectedPage={setSelectedPage}>
                    Sign In
                  </ActionBtn>
                  <ActionBtn setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionBtn>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Model Menu */}
      {!abvMedScrn && menuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            {/* Close button */}
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
