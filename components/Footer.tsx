export function Footer() {
  return (
    <footer className="w-full border-t border-border py-8">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Designed & Developed by Atharv</p>
      </div>
    </footer>
  );
}