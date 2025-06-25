import { FacilidadesTable, FacilidadesTableProps } from "@/components/table";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import React from "react";
import OrientationWarning from "@/components/orientation-warning";
import { useWindowSize } from "@uidotdev/usehooks";


export default function Facilidades() {
  const size = useWindowSize();

  const [env, setEnv] = useState<FacilidadesTableProps>({
    OM: "o IEFA",
    Hour: "09:00h",
    Date: "15/04 (terça-feira)",
    Hour_limit: "2 (duas)"
  });
  const [isOpen, setIsOpen] = React.useState(false);

  if (size.width != null && size.width < 500) {
    return <OrientationWarning/>
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 gap-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 pt-20">
        Facilidades
      </h1>
      <Card className="w-full max-w-2xl p-4">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex flex-col gap-4"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex w-full items-center place-content-between"
            >
              <CardHeader className="flex items-center justify-between w-full">
                <CardTitle>Atributos</CardTitle>
                <ChevronsUpDown />
              </CardHeader>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-4">
            <CardContent className="flex flex-col items-start gap-2">
              <Label className="px-2 bold">OM</Label>
              <Input
                placeholder="Insira a OM"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                value={env.OM ?? "o IEFA"}
                onChange={(e) => setEnv({ ...env, OM: e.target.value })}
                className="w-full"
              />
            </CardContent>
            <CardContent className="flex flex-col items-start gap-2">
              <Label className="px-2 bold">Data</Label>
              <Input
                placeholder="Insira a Data"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                value={env.Date ?? "o IEFA"}
                onChange={(e) => setEnv({ ...env, Date: e.target.value })}
                className="w-full"
              />
            </CardContent>
            <CardContent className="flex flex-col items-start gap-2">
              <Label className="px-2 bold">Hora</Label>
              <Input
                placeholder="Insira a Hora"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                value={env.Hour ?? "o IEFA"}
                onChange={(e) => setEnv({ ...env, Hour: e.target.value })}
                className="w-full"
              />
            </CardContent>
            <CardContent className="flex flex-col items-start gap-2">
              <Label className="px-2 bold">Tempo limite</Label>
              <Input
                placeholder="Insira a Hora"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                value={env.Hour_limit ?? "2 (duas)"}
                onChange={(e) => setEnv({ ...env, Hour: e.target.value })}
                className="w-full"
              />
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      <FacilidadesTable OM={env.OM} Date={env.Date} Hour={env.Hour} Hour_limit={env.Hour_limit} />
    </div>
  );
}
