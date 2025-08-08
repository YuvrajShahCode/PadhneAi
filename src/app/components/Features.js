export default function Features() {
  return (
    <section className="px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Key Features</h2>
      <p className="text-center text-gray-600 mb-10">
        PadhneAi offers a suite of tools to help you excel in your SEE exams.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 border rounded-lg">
          <h3 className="font-bold mb-2">AI Q&amp;A</h3>
          <p className="text-gray-600">
            Get instant answers to your questions with our AI-powered assistant.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-bold mb-2">Comprehensive Subject Library</h3>
          <p className="text-gray-600">
            Access a vast library of study materials covering all subjects.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-bold mb-2">Past Paper Archive</h3>
          <p className="text-gray-600">
            Practice with a comprehensive archive of past SEE papers.
          </p>
        </div>
      </div>
    </section>
  );
}
