import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-4">Please Sign In to Access This Page</h1>
      <p className="text-gray-600 mb-6">
        You must be signed in to view this page.
      </p>
      <Link href="/">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Go back to Landing Page
        </button>
      </Link>
    </div>
  );
}
