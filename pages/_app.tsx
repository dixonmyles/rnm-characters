import { rickAndMortyTheme } from '@/styles/app-theme';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={rickAndMortyTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
