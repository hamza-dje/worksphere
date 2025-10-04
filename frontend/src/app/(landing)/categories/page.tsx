import CategorySection from "@/components/categories/CategorySection";
import Navbar from "@/components/navbar/landing/Navbar";
import Image from "next/image";

export default function CategoriesPage() {
    const categories: Array<{ name: string; skills: Array<string> }> = [
        {
            name: "Writing & Translation",
            skills: [
                "Article Writing",
                "Blogging",
                "Copywriting",
                "Content Editing",
                "Creative Writing",
                "Proofreading",
                "Technical Writing",
                "Ghostwriting",
                "Translation",
                "Transcription",
                "Subtitling",
                "Interpretation",
                "Academic Writing",
                "Resume/CV Writing",
                "Localization",
            ],
        },
        {
            name: "Design & Creativity",
            skills: [
                "Logo Design",
                "Branding",
                "Illustration",
                "Infographics",
                "UI/UX Design",
                "Print Design",
                "Packaging Design",
                "Creative Direction",
                "Concept Art",
                "Typography Design",
                "Fashion Design",
                "Digital Art",
            ],
        },
        {
            name: "Multimedia",
            skills: [
                "Animation",
                "Video Editing",
                "Photography",
                "Motion Graphics",
                "Music Production",
                "Sound Design",
                "Mixing and Mastering",
                "Voiceover",
                "Audio Editing",
            ],
        },
        {
            name: "Development",
            skills: [
                "Web Development",
                "Mobile App Development",
                "Software Development",
                "Game Development",
                "Database Management",
                "Scripting",
                "API Development",
                "WordPress Development",
                "Data Analytics",
            ],
        },
        {
            name: "Digital Marketing",
            skills: [
                "SEO (Search Engine Optimization)",
                "SEM (Search Engine Marketing)",
                "Social Media Management",
                "Email Marketing",
                "Content Marketing",
                "Influencer Marketing",
                "PPC (Pay-Per-Click) Advertising",
                "Affiliate Marketing",
            ],
        },
        {
            name: "Administrative Support",
            skills: [
                "Data Entry",
                "Virtual Assistance",
                "Research Assistance",
                "Email Management",
                "Appointment Setting",
                "Customer Support",
            ],
        },
        {
            name: "Consulting and Business Services",
            skills: [
                "Business Planning",
                "Financial Consulting",
                "Legal Consulting",
                "HR Consulting",
                "Management Consulting",
                "Market Research",
                "Business Analysis",
            ],
        },
        {
            name: "Engineering and Architecture",
            skills: ["CAD Design", "3D Modeling", "Interior Design"],
        },
    ];
    return (
        <>
            <Navbar />
            <section className="bg-gradient-to-r from-blue to-green rounded-b-[36px] mb-40 max-sm:mb-10 pt-[160px] pb-[80px] relative overflow-hidden">
                <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
                    <Image
                        src="/landing/free-section/pattern.png"
                        alt=""
                        width={1300}
                        height={1300}
                        className="rotate-[-15deg] scale-[150%] max-md:scale-[300%] opacity-10"
                    />
                </div>

                <div className="w-[800px] max-lg:w-[700px] max-md:w-2/3 flex items-center mx-auto relative z-[1]">
                    <h1 className="text-white text-[43px] max-sm:text-3xl max-sm:leading-10">
                        WorkWave Skill Categories
                    </h1>
                    <Image
                        src="/categories/logo.svg"
                        alt="WorkWave"
                        width={1300}
                        height={1300}
                        className="size-[250px] max-md:hidden"
                    />
                </div>
            </section>

            {categories.map((category, i) => (
                <CategorySection key={i} {...category} />
            ))}
        </>
    );
}
