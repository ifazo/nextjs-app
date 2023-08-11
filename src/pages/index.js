import Category from "@/components/Category";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Featured />
      <Category />
      <Footer />
    </main>
  )
}

// Home.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>
// }