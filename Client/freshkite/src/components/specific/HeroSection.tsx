export default function HeroSection() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white h-screen flex flex-col justify-center">
      <div className="container mx-auto px-8">
        <h1 className="text-8xl font-bold mb-6 font-sans">Freshkite</h1>
        <p className="text-4xl mb-8 font-bold font-sans">Earn When You Learn.</p>
        <a
          href="/course"
          className="inline-block px-6 py-3 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition duration-300"
        >
          Courses
        </a>
      </div>
    </section>
  );
}

