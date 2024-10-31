"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be 8-12 characters, with at least one uppercase letter, one number, and one special character."
      );
      return;
    }

    // Supabase sign-up
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { phone } }, // Optional data for phone number
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/signin"); // Redirect to sign-in page after successful sign-up
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] p-6 pt-12"> {/* Adjusted height and padding */}
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Logo */}
        <Image
          src="/owambe_logos/owmb_logo_title.png" // Adjust path if necessary
          alt="Owambe Logo"
          width={270}
          height={270}
          className="mb-4"
        />

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-1">Sign Up</h2>
        <p className="text-gray-500 mb-6">
          Be part of the fun! Sign up in seconds.
        </p>

        {/* Sign-Up Form */}
        <form onSubmit={handleSignUp} className="w-full flex flex-col gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border-b border-orange-500 focus:outline-none text-base"
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 border-b border-orange-500 focus:outline-none text-base"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border-b border-orange-500 focus:outline-none text-base"
          />
          <p className="text-xs text-gray-500 mt-1">
            *Password must be 8-12 characters, including an uppercase letter, a
            special character, and a number.
          </p>

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="p-3 border-b border-orange-500 focus:outline-none text-base"
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Sign-Up Button */}
          <button
            type="submit"
            className="bg-black text-white py-3 rounded text-lg font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already Have an Account?{" "}
            <a href="/signin" className="text-orange-600 font-semibold">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
