import SkillAcc from "@/components/sub-components/skill-accs";
import React from "react";
import {
  languages,
  frameworks,
  devAndDesign,
  toolbox,
  backend,
} from "./skillList";
export default function Page() {
  return (
    <main className="p-4 grid grid-cols-3 gap-4 font-afacad auto-rows-min">
      <div className="col-span-3 text-center">
        <h1 className="text-5xl font-extrabold uppercase">Skills I mastered</h1>
      </div>
      <div className="grid gap-y-4 auto-rows-min">
        <SkillAcc
          title="Languages I speak of (As a developer)"
          val="itemA"
          skills={languages}
        />
        <SkillAcc title="The Toolbox" val="itemE" skills={toolbox} />
      </div>
      <div className="grid gap-y-4 auto-rows-min">
        <SkillAcc
          title="Frameworks of the true professionalism"
          val="itemB"
          skills={frameworks}
        />
      </div>
      <div className="grid gap-y-4 auto-rows-min">
        <SkillAcc
          title="Design and Developments"
          val="itemC"
          skills={devAndDesign}
        />
        <SkillAcc title="Backend Sorcery" val="itemD" skills={backend} />
      </div>
    </main>
  );
}
