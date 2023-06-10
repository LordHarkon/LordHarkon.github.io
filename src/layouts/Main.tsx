import React from "react";
import Navbar from "~/components/Navbar";
import SEO from "~/components/SEO";

type MainLayoutProps = {
  title: string;
  description: string;
  cover?: string;
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className="text-black dark:text-white">
      <SEO title={props.title} description={props.description} image={props.cover} />
      <Navbar />
      <div className="container mx-auto mb-0 mt-20 flex min-h-[calc(100vh-80px)] flex-col bg-slate-900/70 backdrop-blur-lg transition-all duration-500">
        <div className="flex h-full min-h-[calc(100vh-80px)] w-full flex-col space-y-2 bg-white/10 px-4 pb-4 dark:bg-inherit lg:px-8 lg:py-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
