import React from 'react'
import Seo from "./Seo";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ title, description, image, content, children }: LayoutProps) => {
  return (
    <main>
      <Seo title={title} description={description} image={image} content={content} />
      <Navbar />
        {children}
      <Footer />
    </main>
  );
};

export default Layout;

type LayoutProps = {
  title: string
  description: string
  image?: string
  content?: string
  children?: React.ReactNode
}