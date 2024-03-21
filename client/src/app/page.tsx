import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-3xl">What would you like to do?</h1>
      <ul className="flex space-x-4 my-12">
        <li>
          <a href="/submit">
            <Button>Submit code</Button>
          </a>
        </li>
        <li>
          <a href="/submissions">
            <Button>View submissions</Button>
          </a>
        </li>
      </ul>
    </main>
  );
}
