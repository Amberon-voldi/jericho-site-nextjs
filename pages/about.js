import Navbar from "../components/navbar";

function About() {
  return (
    <div className="bg-black">
   <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">About</h1>
      </main>
    </div>
  );
}
export default About;