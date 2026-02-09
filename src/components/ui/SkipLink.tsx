interface SkipLinkProps {
    href?: string;
    children?: React.ReactNode;
}

export function SkipLink({ href = "#main-content", children = "Saltar al contenido principal" }: SkipLinkProps) {
    return (
        <a
            href={href}
            className="
        sr-only focus:not-sr-only
        focus:absolute focus:top-4 focus:left-4 focus:z-[9999]
        focus:px-4 focus:py-2
        focus:bg-[var(--accent-primary)] focus:text-[var(--surface-0-dark)]
        focus:rounded-lg focus:font-bold focus:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-secondary)]
        transition-all
      "
        >
            {children}
        </a>
    );
}
