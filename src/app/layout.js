import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <MenuBar />
      {children}
      <Footer />
    </>
  );
}
