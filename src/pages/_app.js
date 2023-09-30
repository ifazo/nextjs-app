import "@/styles/globals.css";
import RootLayout from "@/layouts/RootLayout";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={inter.className}>
      <SessionProvider session={session}>
        <RootLayout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </RootLayout>
      </SessionProvider>
    </main>
  );
}
