import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadButton({ content }: { content: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
    setIsOpen(true);
    console.log(isOpen);
    setTimeout(() => {
      setIsOpen(false);
      console.log(isOpen);
    }, 500);
  };
    
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = () => setIsOpen(false);

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={handleCopy}
          title="Copiar conteúdo"
        >
          <Download className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="absolut left-1/2 top-9/10 -translate-x-1/2 -translate-y-1/2 text-sm w-max flex flex-row rounded-2xl transition duration-150 ease-in-out" >
        <Download className="h-4 w-4"/> Baixando ...
      </AlertDialogContent>
    </AlertDialog>
  );
}
