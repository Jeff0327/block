import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
