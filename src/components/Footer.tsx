"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
              R
            </div>
            <span className="text-base font-bold tracking-tight">
              Recept<span className="text-primary-light">io</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: "課題", href: "#problem" },
              { label: "仕組み", href: "#how-it-works" },
              { label: "できること", href: "#capabilities" },
              { label: "技術", href: "#tech-stack" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Receptio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
