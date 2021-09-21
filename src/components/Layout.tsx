import React from 'react'
import Seo from "./Seo";

const Layout = ({ title, description, image, content, children }: LayoutProps) => {
  return (
    <main>
      <Seo title={title} description={description} image={image} content={content} />
        {children}
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