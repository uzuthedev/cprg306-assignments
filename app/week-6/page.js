'use client';

import ItemList from './item-list';

export default function Page() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Shopping List</h1>
      <ItemList />
    </main>
  );
}
