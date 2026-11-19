import { componentSections } from "@/content/technology";
import { Container } from "@/components/Container";

export function SubNav() {
  return (
    <nav aria-label="System components" className="sticky top-16 z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container>
        <ul className="-mx-2 flex gap-1 overflow-x-auto py-2 text-sm font-semibold">
          {componentSections.map((c) => (
            <li key={c.slug} className="shrink-0">
              <a href={`#${c.slug}`} className="block rounded-md px-3 py-2 text-navy hover:bg-mist">
                {c.navLabel}
              </a>
            </li>
          ))}
          <li className="shrink-0">
            <a href="#status" className="block rounded-md px-3 py-2 text-muted hover:bg-mist">
              Status
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
