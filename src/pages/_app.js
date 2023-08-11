import '@/styles/globals.css'
import RootLayout from '@/layouts/RootLayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
