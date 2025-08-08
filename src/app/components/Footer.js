export default function Footer() {
  return (
    <footer className="py-6 border-t flex flex-col md:flex-row justify-between items-center px-8 text-sm text-gray-600">
      <div className="flex gap-4">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <p className="mt-2 md:mt-0">©2024 PadhneAi. All rights reserved.</p>
    </footer>
  );
}
