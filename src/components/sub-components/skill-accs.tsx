import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface SkillDatas {
  icon: React.ReactNode;
  title: string;
  desc: string;
}
interface SkillAccProps {
  title: string;
  skills: SkillDatas[];
  val: string;
}

export default function SkillAcc({ title, val, skills }: SkillAccProps) {
  return (
    <div className="w-full border-primary border-2 rounded-md bg-background p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value={val}>
          <AccordionTrigger className="text-lg">{title}</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              {skills.map((item, index) => (
                <div
                  className="py-2 grid grid-cols-7 items-center text-lg"
                  key={index}
                >
                  <div className="col-span-1 w-full flex justify-center">
                    {item.icon}
                  </div>
                  <div className="col-span-3 flex justify-center">
                    {item.title}
                  </div>
                  <div className="col-span-3 flex justify-center">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
