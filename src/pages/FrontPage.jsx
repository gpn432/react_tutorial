import TitleBar from '../components/TitleBar';

export default function FrontPage() {
  return (
    <div>
      <TitleBar heading="Welcome to the Front Page" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">This is the front page content.</h2>
      </div>
    </div>
  );
}