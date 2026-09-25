function AboutLayout({ children }: LayoutProps<"/about">) {
  return (
    <div>
      <h1>about layout</h1>
      {children}
    </div>
  );
}

export default AboutLayout;

// LayoutProps is a generic type that takes a string literal type representing the route path.
// In this case, it is set to "/about",
// which means that the children prop will be of type ReactNode and will be rendered within the AboutLayout component.

// The AboutLayout component is a functional component that
// serves as a layout for the "/about" route in a Next.js application.
// It takes a single prop, children, which represents the content that will be rendered inside the layout.
// The component renders a div containing an h1 element with the text "about layout" and the children prop,
// allowing for dynamic content to be displayed within the layout.
// This structure helps maintain a consistent layout across different pages
// of the application while allowing for specific content to be injected as needed.