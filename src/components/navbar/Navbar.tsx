"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navs = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Login", link: "/login" },
  ];

  const clickHandler = () => {
    // router.back();
    // router.push("/register");
    // router.replace("/register");
    router.refresh();
  };

  return (
    <div>
      <div className="p-4 border-b">
        <nav>
          <ul className="flex">
            {navs.map((item) => (
              <li key={item.link} className="mr-4">
                <Link
                  className={item.link === pathname ? "text-blue-500" : "#333"}
                  href={`${item.link}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={clickHandler}
            className="bg-amber-50 text-blue-500 p-1 rounded"
          >
            Click
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

// use client: This directive is used in Next.js to indicate that a component should be rendered on the client side.

// useRouter: This hook is used to programmatically navigate between routes in a Next.js application.
// It provides methods like push, replace, back, and refresh to control navigation.

// usePathname: This hook is used to get the current pathname of the URL in a Next.js application.
// It allows you to determine which route is currently active
// and can be useful for highlighting active navigation links or performing conditional rendering based on the current route.

// Link: This component is used to create client-side navigation links in a Next.js application.

// <nav>: This HTML element represents a section of a page that links to other pages or sections within the same page.
// It is typically used for navigation menus.

// back: This method is used to navigate back to the previous route in a Next.js application.

// push: This method is used to navigate to a new route in a Next.js application.
// It adds a new entry to the browser's history stack,
// allowing users to go back to the previous page using the browser's back button.

// replace: This method is used to navigate to a new route in a Next.js application,
// replacing the current entry in the browser's history stack.
// This means that users won't be able to go back to the previous page using the browser's back button.

// refresh: This method is used to refresh the current route in a Next.js application.

// prefetch: This method is used to prefetch a route in a Next.js application.
