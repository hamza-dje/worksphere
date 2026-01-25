export default function CategorySection({
  name,
  skills,
}: {
  name: string;
  skills: Array<string>;
}) {
  return (
    <section className="my-20 max-sm:my-5 px-20 py-16 max-sm:px-16 max-sm:py-12 rounded-4xl border-1 border-[oklch(from_var(--color-black)_l_c_h_/_.1)] w-[1000px] max-lg:w-[calc(100%-40px)] mx-auto">
      <h2 className="font-primary font-extrabold text-3xl max-md:text-2xl pb-10 max-sm:pb-6">
        {name}
      </h2>

      <ul className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-4 gap-x-20 list-disc [&>li]:text-[20px]">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
