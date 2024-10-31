"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabase/client"; // Adjust the import based on your structure
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    // Perform a simple check to see if input is an email (by presence of @ symbol)
    const isEmail = emailOrPhone.includes("@");
    
    let signInResult;
    if (isEmail) {
      // Sign in with email
      signInResult = await supabase.auth.signInWithPassword({
        email: emailOrPhone,
        password,
      });
    } else {
      // Sign in with phone (if phone sign-in is supported in your Supabase settings)
      signInResult = await supabase.auth.signInWithPassword({
        phone: emailOrPhone,
        password,
      });
    }

    const { error } = signInResult;
    if (error) {
      setError(error.message);
    } else {
      router.push("/home"); // Redirect to the home page or any other page after successful sign-in
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="flex flex-col items-center w-full max-w-md">
        <Image
          src="/owambe_logos/owmb_logo_title.png" // Assuming the logo is here in the public directory
          alt="Owambe Logo"
          width={260}
          height={260}
          className="mb-4"
        />
        
        <h2 className="text-3xl font-semibold mb-1">Login</h2>
        <p className="text-gray-500 mb-6">Welcome back! Your next hangout awaits!</p>

        <form onSubmit={handleSignIn} className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email/Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
            className="p-3 border-b border-orange-500 focus:outline-none text-base"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border-b border-orange-500 focus:outline-none text-base"
          />
          <div className="flex justify-end">
            <a href="#" className="text-orange-600 text-sm">
              Forgot Username/Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded text-lg font-semibold"
          >
            Login
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="relative w-full my-6">
          <hr className="border-gray-300" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
            or
          </span>
        </div>

        {/* Social Sign-In Options */}
        <div className="flex flex-col gap-3 w-full">
          <button className="flex items-center justify-center gap-3 border py-3 rounded text-sm hover:bg-gray-100">
            <Image src="/signin_buttons/google.png" alt="Google" width={35} height={35} />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-3 border py-3 rounded text-sm hover:bg-gray-100">
            <Image src="/signin_buttons/fb.png" alt="Facebook" width={35} height={35} />
            Sign in with Facebook
          </button>
          <button className="flex items-center justify-center gap-3 border py-3 rounded text-sm hover:bg-gray-100">
            <Image src="/signin_buttons/apple.png" alt="Apple" width={35} height={35} />
            Sign in with Apple
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don’t have an Account?{" "}
            <a href="/signup" className="text-orange-600 font-semibold">
              Sign Up
            </a>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm">
            <a href="/" className="text-orange-600 font-semibold">
              Back to Landing Page
            </a>
          </p>
        </div>
      </div>

      {/* Help Icon */}
      <a href="#" className="fixed bottom-4 right-4 text-orange-600 text-xl">
        <span>ℹ️</span>
      </a>
    </div>
  );
}
