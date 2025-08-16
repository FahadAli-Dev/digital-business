import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Digital Business - The Knowledge Creating Company",
    template: "%s | Fahad Ali",
  },
  description:
    "Digital Business was a leading Caribbean management and technology consulting company committed to helping companies create knowledge and deliver innovation.",
  authors: [{ name: "Fahad Ali", url: "fa6084904@gmail.com" }],
  keywords: [
    "Digital Business",
    "Startup Funding",
    "Business Solutions",
    "Tech Investment",
    "Digital Entrepreneurship",
    "Startup Support",
    "Online Business Growth",
    "Business Acceleration",
    "Innovative Startups",
    "Business Strategy",
  ],
};

const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josef.className}>{children}</body>
    </html>
  );
}
