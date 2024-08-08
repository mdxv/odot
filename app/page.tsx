import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <div>
          <p>Odot</p>
          <p className="text-muted-foreground">Task management made simple.</p>
        </div>

        <div className="my-10">
          <p className="flex"><Plus /> Add a new task</p>
        </div>
      </div>

    </main>
  );
}
