import { AllTables } from "@/components/dataTable";
import { Separator } from "@/components/ui/separator";

export default function Dados() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 gap-8 pt-20">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Dados
      </h1>
      <Separator />
      <AllTables />
    </div>
  );
}
