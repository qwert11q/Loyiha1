import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-green-600">JobPortal</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/jobs">Jobs</Link>
      </div>
    </nav>
  );
}