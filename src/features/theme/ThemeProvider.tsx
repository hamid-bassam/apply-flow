"use client"
import { ThemeProviderProps } from 'next-themes';
// import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from 'next-themes';
import dynamic from 'next/dynamic';
const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
)
export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider enableSystem={true} attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
};

