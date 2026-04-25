import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-xl text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-300 mb-3">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4"> Not Found</h1>
        <p className="text-slate-300 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-sky-500 hover:bg-sky-400 transition-colors px-6 py-3 font-medium"
        >
          Go back home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
