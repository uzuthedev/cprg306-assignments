import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">Shopping List</h1>
      <ItemList />
    </main>
  );
}
