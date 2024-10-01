import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Recipe Organizer</h1>
        <Link href="/recipes" className="inline-block mt-4 text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition duration-300">
          Organize now!
        </Link>
      </div>
    </main>
  );
}