export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-black"></div>
        <span className="font-bold text-lg">PadhneAi</span>
      </div>
      <div className="flex gap-6 text-sm text-gray-600">
        <a href="#">Subject Library</a>
        <a href="#">Past Paper Archive</a>
        <a href="#">AI Assistant</a>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
    </nav>
  );
}
