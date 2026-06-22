"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { mainNav, type NavNode, type NavLink } from "@/lib/content";
import { Logo } from "./Logo";

/* Small chevron used on dropdown triggers. */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-0.5 h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(base + "/");
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

/* Renders an external <a> (new tab) or an internal <Link> as appropriate. */
function PanelLink({
  item,
  className,
  children,
}: {
  item: NavLink;
  className: string;
  children: ReactNode;
}) {
  if (item.external || isExternalHref(item.href)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop dropdown panel                                              */
/* ------------------------------------------------------------------ */
/* Shared light card styling for every dropdown panel. */
const PANEL_CARD =
  "animate-nav-pop overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.22)]";

function DesktopPanel({ node }: { node: NavNode }) {
  const alignRight = node.align === "right";

  // Three-column audience mega menu — compact.
  if (node.panel === "mega" && node.columns) {
    return (
      <div
        className={`absolute top-full z-50 pt-2.5 ${
          alignRight ? "right-0" : "left-1/2 -translate-x-1/2"
        }`}
      >
        <div className={`${PANEL_CARD} w-[min(44rem,calc(100vw-2rem))]`}>
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {node.columns.map((col) => (
              <div key={col.title} className="p-4">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-bio-teal">
                  {col.title}
                </p>
                <ul className="mt-2 space-y-0.5">
                  {col.items.map((item) => (
                    <li key={item.label + item.href}>
                      <PanelLink
                        item={item}
                        className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-[13px] font-medium text-slate-600 transition hover:bg-mist hover:text-bio-teal"
                      >
                        {item.label}
                        {(item.external || isExternalHref(item.href)) && (
                          <span aria-hidden className="text-slate-400">
                            ↗
                          </span>
                        )}
                      </PanelLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!node.children) return null;

  // Platforms — compact 2x2 portal cards (icon + title + one-line description).
  if (node.panel === "cards") {
    return (
      <div
        className={`absolute top-full z-50 pt-2.5 ${alignRight ? "right-0" : "left-0"}`}
      >
        <div className={`${PANEL_CARD} w-[min(34rem,calc(100vw-2rem))] p-2`}>
          <div className="grid grid-cols-2 gap-1">
            {node.children.map((item) => (
              <PanelLink
                key={item.label + item.href}
                item={item}
                className="group/item block rounded-xl p-3 transition hover:bg-mist"
              >
                <span className="block text-[13px] font-semibold text-slate-800 transition group-hover/item:text-bio-teal">
                  {item.label}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                    {item.description}
                  </span>
                )}
              </PanelLink>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Rich panel: titles + one-line descriptions, two compact columns.
  if (node.panel === "rich") {
    return (
      <div
        className={`absolute top-full z-50 pt-2.5 ${alignRight ? "right-0" : "left-0"}`}
      >
        <div className={`${PANEL_CARD} w-[min(36rem,calc(100vw-2rem))] p-2`}>
          <div className="grid grid-cols-2 gap-0.5">
            {node.children.map((item) => (
              <PanelLink
                key={item.label + item.href}
                item={item}
                className="group/item rounded-lg px-3 py-2 transition hover:bg-mist"
              >
                <span className="block text-[13px] font-semibold text-slate-800 transition group-hover/item:text-bio-teal">
                  {item.label}
                </span>
                {item.description && (
                  <span className="mt-0.5 block truncate text-xs text-slate-500">
                    {item.description}
                  </span>
                )}
              </PanelLink>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Compact list panel (two columns for tidy spacing).
  return (
    <div
      className={`absolute top-full z-50 pt-2.5 ${alignRight ? "right-0" : "left-0"}`}
    >
      <div className={`${PANEL_CARD} w-[min(26rem,calc(100vw-2rem))] p-2`}>
        <div className="grid grid-cols-2 gap-0.5">
          {node.children.map((item) => (
            <PanelLink
              key={item.label + item.href}
              item={item}
              className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-mist hover:text-bio-teal"
            >
              {item.label}
            </PanelLink>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop top-level item (link or hover/click dropdown trigger)       */
/* ------------------------------------------------------------------ */
function DesktopItem({
  node,
  active,
  open,
  onOpen,
  onClose,
  onToggle,
}: {
  node: NavNode;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const hasPanel = Boolean(node.children || node.columns);

  if (!hasPanel) {
    return (
      <li>
        <Link
          href={node.href}
          className={`rounded-full px-3 py-2 text-sm font-medium transition ${
            active
              ? "bg-bio-cyan/10 text-bio-teal"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          {node.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={onToggle}
        className={`inline-flex items-center gap-0.5 rounded-full px-3 py-2 text-sm font-medium transition ${
          active || open
            ? "bg-bio-cyan/10 text-bio-teal"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        {node.label}
        <Chevron open={open} />
      </button>
      {open && <DesktopPanel node={node} />}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile accordion item                                               */
/* ------------------------------------------------------------------ */
function MobileItem({ node }: { node: NavNode }) {
  const [open, setOpen] = useState(false);
  const hasPanel = Boolean(node.children || node.columns);

  if (!hasPanel) {
    return (
      <Link
        href={node.href}
        className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100"
      >
        {node.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100"
      >
        {node.label}
        <Chevron open={open} />
      </button>

      {open && (
        <div className="pb-2 pl-3">
          {node.columns
            ? node.columns.map((col) => (
                <div key={col.title} className="mb-3">
                  <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-bio-teal">
                    {col.title}
                  </p>
                  {col.items.map((item) => (
                    <PanelLink
                      key={item.label + item.href}
                      item={item}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-mist hover:text-bio-teal"
                    >
                      {item.label}
                      {(item.external || isExternalHref(item.href)) && (
                        <span aria-hidden className="ml-1 text-slate-400">
                          ↗
                        </span>
                      )}
                    </PanelLink>
                  ))}
                </div>
              ))
            : node.children!.map((item) => (
                <PanelLink
                  key={item.label + item.href}
                  item={item}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-mist hover:text-bio-teal"
                >
                  {item.label}
                  {(item.external || isExternalHref(item.href)) && (
                    <span aria-hidden className="ml-1 text-slate-400">
                      ↗
                    </span>
                  )}
                </PanelLink>
              ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change.
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  // Close desktop dropdowns on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  // Small delay so moving the cursor into the panel doesn't close it.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };
  const toggleMenu = (label: string) =>
    setActiveMenu((cur) => (cur === label ? null : label));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        scrolled || activeMenu
          ? "border-b border-slate-200 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-content items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <Logo priority className="h-11 w-auto sm:h-12" />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {mainNav.map((node) => (
            <DesktopItem
              key={node.label}
              node={node}
              active={isActive(pathname, node.href)}
              open={activeMenu === node.label}
              onOpen={() => openMenu(node.label)}
              onClose={scheduleClose}
              onToggle={() => toggleMenu(node.label)}
            />
          ))}
        </ul>

        <div className="hidden xl:block">
          <Link
            href="/contact#request-information"
            className="btn-primary !px-4 !py-2 !text-[13px]"
          >
            Request Info
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 xl:hidden"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white/97 backdrop-blur-xl xl:hidden">
          <div className="mx-auto max-w-content px-6 py-4">
            {mainNav.map((node) => (
              <MobileItem key={node.label} node={node} />
            ))}
            <Link
              href="/contact#request-information"
              className="btn-primary mt-4 w-full"
            >
              Request Info
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
