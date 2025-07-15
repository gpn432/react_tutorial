import { useState } from 'react';
import InputField from './InputField';
import Result from './Result';

export default function NumberAdder() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <div className="max-w-md p-4 border rounded-lg shadow-md">
      <form onSubmit={handleAdd} className="space-y-4">
        <InputField label="First Number" value={num1} onChange={e => setNum1(e.target.value)} />
        <InputField label="Second Number" value={num2} onChange={e => setNum2(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add
        </button>
      </form>
      {result !== null && <Result valuezz={result} />}
    </div>
  );
}