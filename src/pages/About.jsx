import TitleBar from '../components/TitleBar';

export default function About() {
  return (
    <div>
      <TitleBar heading="About Us" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Learn more about us on this page.</h2>
      </div>
    </div>
  );
}