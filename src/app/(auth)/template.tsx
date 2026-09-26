"use client";

import Link from "next/link";
import { useState } from "react";

function AuthLayout({ children }: LayoutProps<"/">) {
  const [value, setValue] = useState("");

  return (
    <div>
      AuthLayout
      <hr />
      <br />
      <Link className="mr-4" href="/login">
        Login
      </Link>
      <Link className="mr-4" href="/register">
        Register
      </Link>
      <Link href="/forget-password">Forget password</Link>
      <br />
      <hr />
      <input
        type="text"
        className="bg-amber-50 text-black"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {children}
    </div>
  );
}

export default AuthLayout;

// template vs layout:
// In Next.js, a layout component is used to define a consistent structure for a set of pages,
// while a template component is used to define a specific layout for a single page
// or a group of related pages. In this case,
// the AuthLayout component serves as a template for the authentication pages,
// providing a consistent structure and navigation links for login, registration, and password recovery.

//in layout When you move between sub-routes, the same instance of Layout is preserved and not remounted.

//in template But every time the route changes, the template is remounted.