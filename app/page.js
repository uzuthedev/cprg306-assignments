import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="text-lg">
        <ul>
          <li className="hover:text-green-400 hover:underline">
            <Link href="/week-2">Week 2 Assignment</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
