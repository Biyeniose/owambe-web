"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/client"; // Adjust the import if necessary
import Image from "next/image";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check for an active Supabase session
    const checkUserSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      
      setIsSignedIn(!!session); // Set isSignedIn to true if session exists
    };

    checkUserSession();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">Owambe web</h1>

        <Image
          src="/OWAMBE LOGO.svg"
          alt="Owambe logo"
          width={180}
          height={38}
          priority
        />

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Import your native calendar (or Gmail Calendar)</li>
          <li>Invite your friends!</li>
          <li className="mb-2">
            Get started with the{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Schedule Optimizer
            </code>
            .
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {isSignedIn ? (
            <button
              className="rounded-full bg-green-500 text-white border border-transparent transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              disabled
            >
              Signed In
            </button>
          ) : (
            <a
              className="rounded-full bg-orange-500 text-white border border-transparent transition-colors flex items-center justify-center hover:bg-orange-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/signin"
            >
              Sign In
            </a>
          )}
        </div>
      </main>
    </div>
  );
}
