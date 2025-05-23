export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
      <h1 className="md:text-8xl text-6xl text-outline">The Next</h1>
      <h1 className="md:text-6xl text-4xl">
        I&apos;m{" "}
        <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
          DoraCord
        </span>
      </h1>
    </div>
  );
}
