import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBarsArrowDown } from "react-icons/hi2";
import { HiBarsArrowUp } from "react-icons/hi2";

function Header(props) {
  const [openNavbar, setOpenNavbar] = useState(false);
  useEffect(() => {
    props.navbarHandler(openNavbar);
  }, [openNavbar]);

  return (
    <>
      <header className="hidden lg:flex items-center justify-between py-4 px-8 border-b-4 border-blue-400">
        <Link to={"/"}>
          <section className="text-xl md:text-3xl text-white  p-2 bg-blue-2 max-w-sm roboto-bold rounded-lg">
            MindGuard
          </section>
        </Link>
        <nav className="flex justify-around md:gap-x-12 items-center text-blue-2 roboto-medium md:text-lg">
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/articles"}>Articles</Link>
          <Link to={"/dass"}>DASS-42</Link>
          <Link to={"/community"}>Community</Link>
        </nav>
        <Link to={"/signin"}>
          <Button variant="contained">Sign In</Button>
        </Link>
      </header>

      {/* Mobile View */}

      <header className="flex relative lg:hidden items-center justify-between py-4 px-8 border-b-4 border-blue-400">
        <Link to={"/"}>
          <section className="text-xl md:text-3xl text-white  p-2 bg-blue-2 max-w-sm roboto-bold rounded-lg">
            MindGuard
          </section>
        </Link>
        <div className="flex items-center gap-6">
          <Link to={"/signin"}>
            <Button variant="contained">Sign In</Button>
          </Link>
          {openNavbar ? (
            <>
              <HiBarsArrowUp
                size={"39px"}
                color="#0693e3"
                className="cursor-pointer"
                onClick={() => setOpenNavbar((state) => !state)}
              />
              <nav
                className="flex absolute z-10 right-3 top-16 py-6 px-10 rounded-lg shadow-xl flex-col justify-around gap-y-4 items-center roboto-medium  text-white"
                style={{ backgroundColor: "#18191a" }}
              >
                <Link
                  to={"/"}
                  className="w-full hover:bg-gray-hover cursor-pointer py-1 px-3 rounded-lg "
                >
                  Home
                </Link>
                <Link
                  to={"/profile"}
                  className=" w-full cursor-pointer py-1 px-3 rounded-lg hover:bg-gray-hover "
                >
                  Profile
                </Link>
                <Link
                  to={"/articles"}
                  className=" w-full cursor-pointer py-1 px-3 rounded-lg hover:bg-gray-hover "
                >
                  Articles
                </Link>
                <Link
                  to={"/dass"}
                  className=" w-full cursor-pointer py-1 px-3 rounded-lg hover:bg-gray-hover "
                >
                  DASS-42
                </Link>
                <Link
                  to={"/community"}
                  className=" w-full cursor-pointer py-1 px-3 rounded-lg hover:bg-gray-hover "
                >
                  Community
                </Link>
              </nav>
            </>
          ) : (
            <HiBarsArrowDown
              size={"39px"}
              color="#0693e3"
              className="cursor-pointer"
              onClick={() => setOpenNavbar((state) => !state)}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
