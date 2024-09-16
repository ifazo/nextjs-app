import "@/styles/globals.css";
import RootLayout from "@/layouts/RootLayout";
import { SessionProvider } from "next-auth/react";
import { Playfair_Display } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Toaster } from "react-hot-toast";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "500",
});


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={playfairDisplay.className}>
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
