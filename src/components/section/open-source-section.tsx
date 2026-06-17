/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight, GitPullRequest } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function OpenSourceSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.openSource?.map((item) => (
        <AccordionItem
          key={item.company}
          value={item.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={item.logoUrl} alt={item.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {item.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-sans text-sm text-muted-foreground">
                      {item.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.badges?.map((badge) => (
                        <Badge key={badge} variant="outline" className="text-[11px] font-medium h-7 px-2.5">
                          {badge}
                        </Badge>
                      ))}
                      {item.prs?.map((pr) => (
                        <Link
                          key={pr.label}
                          href={pr.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                          onClick={(e) => {e.stopPropagation(); trackEvent("pr_link_clicked", "Opensource Contribution", `${item.company}-${pr.label}`);}}>
                          <Badge variant="outline" className="group inline-flex items-center gap-2 text-[11px] font-medium h-7 px-2.5">
                            <GitPullRequest className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" />
                            {pr.label}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {item.start} - {item.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            <p>{item.description}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
