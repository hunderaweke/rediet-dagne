import { Navbar } from "flowbite-react";
function NavBar() {
  return (
    <>
      <Navbar className="flex sticky text-3xl top-0 z-10 justify-between  bg-transparent  backdrop-blur-lg supports-backdrop-blur:bg-white/75 dark:bg-[#02141C]/80 ">
        <Navbar.Brand href="#">
          <h1 className="font-brand text-transparent bg-clip-text bg-gradient-to-br from-[#0BE4CC] to-sky-500 text-4xl">
            Rediet Dagne
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="font-normal text-center">
          <Navbar.Link className="navbar-links" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className="navbar-links" href="#">
            Projects
          </Navbar.Link>{" "}
          <Navbar.Link className="navbar-links" href="#">
            Portfolio
          </Navbar.Link>{" "}
          <Navbar.Link className="navbar-links" href="#">
            Testimonial
          </Navbar.Link>
          <Navbar.Link className="navbar-links" href="#">
            Hire Me
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavBar;
