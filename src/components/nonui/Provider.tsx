"use client"
import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components";
import { Toaster } from "@/components";

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export function Provider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
