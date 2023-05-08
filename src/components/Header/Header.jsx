import { Navbar } from '@material-tailwind/react';
// import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  //   const [openNav, setOpenNav] = React.useState(false);

  //   useEffect(() => {
  //     window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  //   }, []);

  //   const navList = (
  //     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="blue-gray"
  //         className="p-1 font-normal">
  //         <Link
  //           href="#"
  //           className="flex items-center">
  //           Home
  //         </Link>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="blue-gray"
  //         className="p-1 font-normal">
  //         <Link
  //           href="#"
  //           className="flex items-center">
  //           About Us
  //         </Link>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="blue-gray"
  //         className="p-1 font-normal">
  //         <a
  //           href="#"
  //           className="flex items-center">
  //           Blocks
  //         </a>
  //       </Typography>
  //       <Typography
  //         as="li"
  //         variant="small"
  //         color="blue-gray"
  //         className="p-1 font-normal">
  //         <a
  //           href="#"
  //           className="flex items-center">
  //           Docs
  //         </a>
  //       </Typography>
  //     </ul>
  //   );

  return (
    <>
      <Navbar className="bg-cover bg-no-repeat sticky inset-0 z-10 h-max max-w-full rounded-none border-none bg-[url('/more/header-bg.jpg')]  px-4">
        <div className="flex items-center justify-center text-white">
          <div>
            <Link
              to={'/'}
              className="flex items-center gap-4">
              <img
                src="/more/logo1.png"
                alt=""
                className="h-12 w-12 md:h-20 md:w-20"
              />
              <span className="mr-4 cursor-pointer py-1.5 font-title text-3xl md:text-6xl">Beans & Blends</span>
            </Link>
          </div>
          {/* Menu */}

          {/* <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block">
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div> */}
        </div>
        {/* <Collapse open={openNav}>
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse> */}
      </Navbar>
    </>
  );
};

export default Header;
