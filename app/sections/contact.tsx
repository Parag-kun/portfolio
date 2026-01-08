import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-32 px-4 md:px-24 text-center" id="contact">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, my inbox is always open.
      </p>
      <a href="mailto:hello@example.com">
        <Button size="lg" className="px-8">
          Say Hello
        </Button>
      </a>
    </section>
  );
}
