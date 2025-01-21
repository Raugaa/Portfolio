export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Garv Vyas. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/garv-vyas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vyasgarv1@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}