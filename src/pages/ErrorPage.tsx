import React from "react";
import { Link, useRouteError } from "react-router-dom";
import SEO from "../components/SEO";

type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

const NotFoundPage: React.FC = () => {
  const error = useRouteError() as ErrorResponse;
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-slate-900">
      <SEO title="Error" description="An error has occured. Please try again later." />
      <h1 className="text-8xl font-bold text-red-600">Error!</h1>
      <p className="text-4xl font-medium text-white">{error?.statusText || error?.message}</p>
      <Link to="/" className="text-xl text-sky-400 underline">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
