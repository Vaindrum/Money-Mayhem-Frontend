import Image from "next/image";
import Play from "@/components/Play";
import HowToPlay from "@/components/HowToPlay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Hi, This is Money Mayhem
        <Play />
      </div>
      <div>
        <HowToPlay />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    
  );
}
