export default function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About Me
        </h1>
        <p className="text-xl leading-relaxed">
          Hello, I am <span className="font-semibold">Parag Bokde</span> and I
          have <span className="font-semibold">3 years of experience</span> in
          developing robust, scalable and performant applications.
        </p>
      </div>
    </div>
  );
}
