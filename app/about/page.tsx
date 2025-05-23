import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <Accordion type="single" collapsible className="w-md m-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer text-2xl">
          Who are you?
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          Hi, I&apos;m web full stack developer based Japan and student!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="cursor-pointer text-2xl">
          What can you do?
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          I can do general web work, including website development
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="cursor-pointer text-2xl">
          Stacks
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          JS / TS / Py / Go
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
