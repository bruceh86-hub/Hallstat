import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white/80">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo shape="mark" className="h-16" />
          <p className="mt-3 max-w-sm text-sm">
            A nurse-designed Foley catheter system intended to reduce catheter-associated infection risk.
          </p>
          <p className="mt-4 text-sm">
            {site.legalName} — founded by{" "}
            <Link href={site.founder.path} className="text-white underline underline-offset-4 hover:text-navy-200">
              {site.founder.name}
            </Link>
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold text-white">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {site.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="max-w-3xl font-semibold text-white">{site.disclaimer}</p>
          <p className="shrink-0">
            © {year} {site.legalName}
          </p>
        </Container>
      </div>
    </footer>
  );
}
