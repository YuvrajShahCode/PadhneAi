export default function Hero() {
  return (
    <section className="bg-white px-8 py-16 flex flex-col items-center text-center">
      <div
        className="max-w-4xl p-8 rounded-2xl bg-green-500 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('')" }} 
      >
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">
          Your AI Study Partner for SEE Success
        </h1>
        <p className="mb-6 drop-shadow-md">
          Unlock your potential with PadhneAi. Get instant answers, access a comprehensive subject library, and practice with past papers.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
            Subject Library
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded">
            Past Paper Archive
          </button>
        </div>
      </div>
    </section>
  );
}
