import "@/styles/globals.css";
import RootLayout from "@/layouts/RootLayout";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const inter = Inter({ subsets: ["latin"] });

let persistor = persistStore(store);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={inter.className}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootLayout>
              <Component {...pageProps} />
              <Toaster />
            </RootLayout>
          </PersistGate>
        </Provider>
      </SessionProvider>
    </main>
  );
}
