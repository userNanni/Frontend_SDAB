import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 gap-8 pt-24">
      <div className="relative w-full aspect-[21/9] rounded-4xl overflow-hidden">
        <img
          className="w-full h-full scale-150"
          src="./src/assets/bg.jpg"
          alt="background"
          style={{
            transform: `translateY(${offsetY * 0.1}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-white drop-shadow-lg">
            Portal IEFA
          </h1>
        </div>
      </div>
      <Separator />
      <div className="w-full max-w-xl mx-auto">
      <h1 className="text-4xl font-bold drop-shadow-lg text-center mb-6">Opções</h1>
      <div className="flex flex-row items-center bg-background rounded-2xl shadow overflow-hidden">
        <NavLink
          to="/Dados"
          end
          className={({ isActive }) =>
            `flex-1 flex items-center justify-center text-3xl font-semibold py-6 transition-colors duration-150
            ${isActive ? "bg-accent text-primary" : "bg-background text-primary hover:bg-accent"} 
            rounded-l-2xl`
          }
        >
          Dados
        </NavLink>
        <Separator orientation="vertical" className="h-12" />
        <NavLink
          to="/Facilidades"
          end
          className={({ isActive }) =>
            `flex-1 flex items-center justify-center text-3xl font-semibold py-6 transition-colors duration-150
            ${isActive ? "bg-accent text-primary" : "bg-background text-primary hover:bg-accent"} 
            rounded-r-2xl`
          }
        >
          Facilidades
        </NavLink>
      </div>
    </div>
    </div>
  );
}
