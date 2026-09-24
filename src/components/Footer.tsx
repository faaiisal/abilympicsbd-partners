import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/abilympicsbd",
    icon: "facebook",
  },
  {
    label: "X",
    href: "https://x.com/abilympicsbd",
    icon: "x",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abilympicsbd/",
    icon: "instagram",
  },
  {
    label: "YouTube",
    href: "#",
    icon: "youtube",
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/abilympics-logo.png"
                alt="Abilympics Bangladesh"
                width={52}
                height={52}
                className="h-12 w-12 rounded-full object-contain"
              />

              <div>
                <p className="font-heading font-bold text-white">
                  Abilympics Bangladesh
                </p>
                <p className="text-xs text-emerald-300">
                  Road to Helsinki 2027
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6">
              “Empowering Ability. Inspiring Excellence. Representing
              Bangladesh.”
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-brand-green px-4 py-2 text-xs font-black uppercase tracking-wider text-white"
            >
              Become a Partner
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "14px" }}
                aria-hidden="true"
              >
                arrow_outward
              </span>
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About Abilympics
                </a>
              </li>

              <li>
                <a href="#journey" className="hover:text-white">
                  Metz 2023 Journey
                </a>
              </li>

              <li>
                <a href="#helsinki2027" className="hover:text-white">
                  Helsinki 2027
                </a>
              </li>

              <li>
                <a href="#champions" className="hover:text-white">
                  The Champions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Partnerships
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#partners" className="hover:text-white">
                  Corporate CSR
                </a>
              </li>

              <li>
                <a href="#partners" className="hover:text-white">
                  Technology Allies
                </a>
              </li>

              <li>
                <a href="#media" className="hover:text-white">
                  Media Endorsement
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Secretariat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Commitment to inclusion
            </p>

            <p className="mt-4 text-sm leading-6">
              Abilympics Bangladesh is dedicated to representing persons with
              disabilities in international vocational skills under the
              charter of the International Abilympics Federation.
            </p>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-10 flex flex-col gap-5 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">
            © 2023–2027 Abilympics Bangladesh. All rights reserved.
          </p>

          {/* Social links */}
          <div
            className="flex items-center gap-2"
            aria-label="Abilympics Bangladesh social media"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abilympics Bangladesh on ${social.label}`}
                title={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                {social.icon === "facebook" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
                  </svg>
                )}

                {social.icon === "x" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                )}

                {social.icon === "instagram" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current"
                    strokeWidth="1.8"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      className="fill-current stroke-none"
                    />
                  </svg>
                )}

                {social.icon === "youtube" && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}