import { Container, LogoutBtn, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="bg-white lg:py-8">
      <Container>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <Link to="/">
                <Logo width="70px" />
              </Link>
            </div>
            <ul className="flex ml-auto">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            <div className="hidden lg:flex lg:items-center lg:space-x-10 hover:bg-blue-100 rounded-full ">
              {authStatus && <LogoutBtn />}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;

{
  /* <header className="bg-white lg:py-8">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                    <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                    <Link to='/'>
              <Logo width='70px'   />
              </Link>
                </a>
            </div>

            <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg> 
            </button>
            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            

            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">{authStatus && (
                <LogoutBtn/>
            )} </a>
            </div>
        </nav>
        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
        <ul classNameName='flex ml-auto'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                  classNameName='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </nav>
    </div>
</header>

 */
}
