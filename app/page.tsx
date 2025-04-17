import Play from "@/components/Play";
import HowToPlay from "@/components/HowToPlay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#1a1625]">
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Hi, This is Money Mayhem
      </div> */}
        <Play />
      <div>
        <HowToPlay />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    
  );
}
