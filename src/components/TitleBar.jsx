// components/TitleBar.jsx
import { Link } from 'react-router-dom';

export default function TitleBar({ heading }) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{heading}</h1>
      <nav className="space-x-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/about">About</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
      </nav>
    </div>
  );
}