import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
    return (
        <SonnerToaster
            position="top-right"
            toastOptions={{
                style: {
                    background: "var(--surface-1)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-color)",
                },
                classNames: {
                    success: "!bg-emerald-500/10 !border-emerald-500/20",
                    error: "!bg-red-500/10 !border-red-500/20",
                },
            }}
            richColors
            closeButton
        />
    );
}
