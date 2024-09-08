import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/nisabmohd/Aria-Docs"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
      Complete SEO Road Map From Zero To Hero By Learning SEO
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
      Learning SEO Is A Complete Beginner-Friendly SEO Roadmap Aiming To Learn And Tech Real SEO That Works. Learning SEO Was Created By <a className="px-1 underline underline-offset-2" href="https://www.linkedin.com/in/diaab/" target="_blank">Mohamed Diab</a>, SEO Specialist With More Than 13 Years Of Practical  And Accumulative Work Experience In SEO Building, And Together We Will Learn SEO Here.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/learn-seo${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="#"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Customize
        </Link>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> ~ npx this-library-name@latest
      </span>
    </div>
  );
}
