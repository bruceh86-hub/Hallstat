import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">404</p>
      <h1 className="mt-2 text-4xl font-bold">We couldn’t find that page</h1>
      <p className="mt-4 max-w-xl text-muted">This page may still be in progress, or the link may be out of date.</p>
      <Button asChild variant="dark" className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </Container>
  );
}
