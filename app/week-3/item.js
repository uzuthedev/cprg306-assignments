export default function Item({ name, quantity, category }) {
    return (
      <li className="flex items-center justify-between p-4 border-b border-gray-300">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{category}</span>
        <span className="font-bold">{quantity}</span>
      </li>
    );
  }
  