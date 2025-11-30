import { useRouter } from "next/navigation";
import CardWrapper from "../../shared/CardWrapper";

type Need = {
  name: string;
  category: string;
  skills: Array<string>;
  budget: [number, number];
};

export default function MyActiveNeeds({ needs }: { needs: Array<Need> }) {
  const router = useRouter();
  const formatSkills = (need: Need) => {
    return [...need.skills.slice(0, 2), "more..."];
  };

  return (
    <CardWrapper
      header="My Active Needs"
      className="col-span-full overflow-auto no-scrollbar"
    >
      <table>
        <thead>
          <tr>
            <th className="w-[240px]">Name</th>
            <th>Category</th>
            <th>Skills</th>
            <th className="text-end">Budget</th>
          </tr>
        </thead>
        <tbody>
          {needs.map((need, i) => (
            <tr
              key={i}
              className="cursor-pointer"
              onClick={() => router.push("/my-needs")}
            >
              <td className="block w-[240px] truncate">{need.name}</td>
              <td className="opacity-40">{need.category}</td>
              <td className="opacity-40">{formatSkills(need).join(", ")}</td>
              <td className="font-bold text-primary text-end">
                ${need.budget[0]}-{need.budget[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardWrapper>
  );
}
