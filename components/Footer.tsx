import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav, links, contact, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-mist">
      <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              {site.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">
              {contact.region}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Explore</h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-500 transition hover:text-bio-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={links.eboGenesStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition hover:text-bio-teal"
                >
                  EboGenes Store ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              {contact.emails.map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="transition hover:text-bio-teal"
                  >
                    {e}
                  </a>
                </li>
              ))}
              {contact.phones.map((p) => (
                <li key={p}>{p}</li>
              ))}
              <li className="pt-1 leading-relaxed">
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {site.founded}–present {site.name}. All rights reserved.
          </p>
          <p>
            For product ordering, visit the{" "}
            <a
              href={links.eboGenesStore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 underline-offset-2 hover:text-bio-teal hover:underline"
            >
              EboGenes store
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
