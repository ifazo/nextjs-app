import "@/styles/globals.css";
import RootLayout from "@/layouts/RootLayout";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={inter.className}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <RootLayout>
            <Component {...pageProps} />
            <Toaster />
          </RootLayout>
        </Provider>
      </SessionProvider>
    </main>
  );
}
