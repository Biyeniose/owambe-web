"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase/client";

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
      <h1 className="text-3xl font-bold text-center">Calendar</h1>
    </div>
  );
}
