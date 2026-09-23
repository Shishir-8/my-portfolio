import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FlickeringGrid } from "../ui/flickering-grid";

export default function ContactSection() {
  return (
    <section className="pb-24">
      <div>
        <div className="relative rounded-3xl border p-8 md:p-12 bg-white dark:bg-zinc-900 dark:border-zinc-700">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-black px-4 py-1 text-sm font-medium text-white dark:bg-white dark:text-black">
            Contact Me
          </div>

          <div className="absolute inset-0 top-0 left-0 right-0 h-45 overflow-hidden z-0 rounded-3xl">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Get in Touch
            </h2>

            <p className="mt-4 text-muted-foreground">
              I'm always excited to meet new people, collaborate on interesting
              projects, and learn about fresh ideas. Don't hesitate to reach
              out—let's start a conversation.
            </p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Gmail */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=srish821@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-2 text-sm font-normal text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              <FaEnvelope className="text-base" />
              Email Me
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9779806247212"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-2 text-sm font-normal text-white shadow-sm transition hover:opacity-90 dark:bg-green-500"
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
