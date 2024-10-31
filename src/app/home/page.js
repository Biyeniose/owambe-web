"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase/client";
import Image from "next/image";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        // Redirect to error page if no session found
        router.push("/error");
      } else {
        // Set authenticated status if session exists
        setIsAuthenticated(true);
      }
    };

    checkSession();
  }, [router]);

  if (!isAuthenticated) return null; // Prevent rendering until authenticated

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4"> {/* Stacks image and heading */}
        <Image
          src="/owambe_logos/owmb_logo_title.png" // Adjust path if necessary
          alt="Owambe Logo"
          width={270}
          height={270}
          className="mb-4"
        />
        <h1 className="text-3xl font-bold text-center">Home Page</h1>
      </div>
    </div>
  );
}
