import React, { useState } from "react";
import Menu from "./Menu";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-cover bg-no-repeat text-white p-2 border-b-2 border-gray-700 z-50"
        style={{ backgroundImage: "url('/photo.jpg')"}}
      >
        <div className="relative container mx-auto flex justify-between items-center">
          <Typography variant="h4" className="relative"></Typography>

          <button
            className="md:hidden text-white relative"
            onClick={openDrawer}
          >
            <span className="text-xl">☰</span>
          </button>
          <div className="hidden md:flex relative">
            <Menu />
          </div>
        </div>
      </header>

      <Drawer open={drawerOpen} onClose={closeDrawer}>
        <div className="mb-6 flex items-center justify-between text-right">
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Menu isDrawer={true} />
      </Drawer>
    </>
  );
};

export default Header;
