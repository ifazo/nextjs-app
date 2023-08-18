import "@/styles/globals.css";
import RootLayout from "@/layouts/RootLayout";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={ session }>
      <RootLayout>
        <Component { ...pageProps } />
      </RootLayout>
    </SessionProvider>
  );
}
