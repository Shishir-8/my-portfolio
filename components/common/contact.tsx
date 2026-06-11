import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="pb-24">
      {/* Content */}
      <div >
        <div className="border rounded-3xl p-8 md:p-12 relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 font-medium text-sm bg-black text-white rounded-md">
            Contact Me
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Get in Touch
            </h2>

            <p className="mt-4 text-muted-foreground">
             I'm always excited to meet new people, collaborate on interesting projects, and learn about fresh ideas. Don't hesitate to reach out—let's start a conversation.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center mt-10 gap-3">
            {/* Gmail */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=srish821@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2 text-sm rounded-md bg-black text-white font-normal hover:opacity-90 transition shadow-sm"
            >
              <FaEnvelope className="text-base" />
              Email Me
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9779806247212"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm items-center gap-2 px-6 py-2 rounded-md bg-green-600 text-white font-normal hover:opacity-90 transition shadow-sm"
            >
              <FaPhone className="text-base" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
