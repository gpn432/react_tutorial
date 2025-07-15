export default function InputField({ label, value, onChange }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="border rounded p-2 w-full"
      />
    </div>
  );
}