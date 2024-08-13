import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Plus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default function Home() {
  return (
    <main className="flex flex-col flex-cols-1 justify-center items-center h-screen">
      <div className="w-5/12">
        <div>
          <p className="font-medium">Odot</p>
          <p className="text-muted-foreground">Task management made simple.</p>
        </div>

        <div className="mt-10 mb-2">
          <Button variant={"ghost"} className="flex itedms-center justify-start gap-2 w-full text-base font-normal"><Plus className="text-gray-500" size={18} /> Add a new task</Button>
        </div>
        <Separator />

        {/* TASK */}
        <div>
          <div className="flex gap-4 mx-4 my-2 items-center">
            <Checkbox className="rounded-full" />
            <h2 className="truncate">Temporalorem tempora harum sunt ipsum, laborum autem tempora in cumque quis ullam.</h2>
          </div>
          <div className="mx-4 ml-12 my-2">
            <h3 className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta repellendus voluptatibus ducimus. Non ducimus quo quia eligendi, corporis rem enim tenetur reprehenderit minus exercitationem nulla, unde repudiandae, nostrum fugiat.</h3>
          </div>
        </div>

        <Separator />

        {/* TASK */}
        <div>
          <div className="flex gap-4 mx-4 my-2 items-center">
            <Checkbox className="rounded-full" />
            <h2 className="truncate">Say hello 👋</h2>
          </div>
        </div>
        <Separator />
        {/* TASK */}
        <div>
          <div className="flex gap-4 mx-4 my-2 items-center">
            <Checkbox className="rounded-full" />
            <h2 className="truncate">First prototype by mdxv</h2>
          </div>
        </div>
        <Separator />

        <div className="justify-start my-5">
          <Collapsible>
            <CollapsibleTrigger className="flex gpa-2 items-center text-gray-500 hover:bg-gray-100 w-full p-2 rounded">
              <ChevronRight size={20} /> <p>Completed</p>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {/* TASK COMPLETED */}
              <div>
                <div className="flex gap-4 mx-4 my-2 items-center">
                  <Checkbox className="rounded-full" checked={true} />
                  <h2 className="truncate line-through">🧼 Clean the house</h2>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

    </main >
  );
}