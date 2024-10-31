"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase/client"; // Adjust the path if necessary

export default function ProfilePage() {
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/"); // Redirect to the homepage after signing out
  };

  if (!isAuthenticated) return null; // Prevent rendering until authenticated

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
      <button
        onClick={handleSignOut}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}
