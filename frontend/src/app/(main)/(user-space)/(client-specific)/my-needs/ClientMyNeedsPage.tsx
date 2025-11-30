"use client";
import NumberCard from "@/components/user-space/shared/NumberCard";
import CardWrapper from "@/components/user-space/shared/CardWrapper";
import MyNeedsContainer from "@/components/user-space/client-specific/needs/MyNeedsContainer";

export default function ClientMyNeedsPage() {
  const skills = [
    { "Graphic design": 12 },
    { "Graphic design": 12 },
    { "Graphic design": 12 },
  ];
  const colors = ["green", "alternative-red", "blue"];
  const skillsAsNumber = skills.map(
    (skill) => Object.values(skill)[0] as number,
  );
  const total = skillsAsNumber.reduce((a, b) => a + b, 0);

  return (
    <>
      <NumberCard header="Finished Needs" value={214} margin="-25%" />

      <CardWrapper header="Most Demanded Skills">
        <div className="flex flex-col justify-between max-sm:gap-3 flex-1 mt-1">
          <div className="flex gap-1.5">
            {skillsAsNumber.map((skill, i) => (
              <span
                key={i}
                className="h-2 rounded-full"
                style={{
                  width: `${(skill / total) * 100}%`,
                  backgroundColor: `var(--color-${colors[i]})`,
                }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            {skills.map((skill, i) => {
              const [name, value] = Object.entries(skill)[0];
              return (
                <div key={i} className="flex justify-between">
                  <span className="flex items-center gap-2 font-primary text-xs">
                    <div
                      className="w-2.5 aspect-square rounded-full"
                      style={{
                        backgroundColor: `var(--color-${colors[i]})`,
                      }}
                    />
                    {name}
                  </span>
                  <span className="font-primary text-xs">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardWrapper>

      <div className="flex flex-col gap-2 max-lg:col-span-full max-lg:flex-row">
        <CardWrapper
          header="Pending Projects"
          className="flex-row justify-between items-center flex-1 lg:rounded-b-lg max-lg:rounded-r-lg max-sm:p-5"
          href="/pending"
        >
          <div className="font-primary font-bold text-4xl text-primary max-sm:text-2xl">
            3
          </div>
        </CardWrapper>
        <CardWrapper
          header="Active Needs"
          className="flex-row justify-between items-center flex-1 lg:rounded-t-lg max-lg:rounded-l-lg max-sm:p-5"
        >
          <div className="font-primary font-bold text-4xl text-primary flex items-center gap-2 max-sm:text-2xl">
            25
          </div>
        </CardWrapper>
      </div>

      <MyNeedsContainer />
    </>
  );
}
