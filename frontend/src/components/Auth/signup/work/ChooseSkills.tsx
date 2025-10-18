"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SignUpFormWrapper from "../SignUpFormWrapper";

function CategoryCard({
    category,
    activeCategory,
    setActiveCategory,
}: {
    category: string;
    activeCategory: string;
    setActiveCategory: Dispatch<SetStateAction<string>>;
}) {
    return (
        <button
            onClick={() => setActiveCategory(category)}
            className={`font-primary font-bold text-xs px-[18px] py-2 rounded-full cursor-pointer border-1 duration-150 ${
                category === activeCategory
                    ? "bg-[oklch(from_var(--color-green)_l_c_h_/_.15)] text-green border-transparent"
                    : "border-[oklch(from_var(--color-black)_l_c_h_/_.1)] hover:-translate-y-1 hover:border-transparent hover:shadow-[0_4px_10px_rgba(0,0,0,.15)]"
            }`}
        >
            {category}
        </button>
    );
}

function SkillCard({
    skill,
    chosenSkills,
    setChosenSkills,
}: {
    skill: string;
    chosenSkills: string[];
    setChosenSkills: Dispatch<SetStateAction<string[]>>;
}) {
    return (
        <button
            onClick={() =>
                setChosenSkills((prev) => {
                    let skills = [...prev];
                    if (skills.includes(skill)) {
                        skills = skills.filter((s) => s !== skill);
                    } else if (skills.length < 3) {
                        skills.push(skill);
                    }
                    return skills;
                })
            }
            className={`font-primary font-bold text-xs px-[18px] py-2 rounded-full cursor-pointer border-1 duration-150 ${
                chosenSkills.includes(skill)
                    ? "bg-gradient-to-r from-green to-dark-green text-white border-transparent"
                    : "border-[oklch(from_var(--color-black)_l_c_h_/_.1)] hover:-translate-y-1 hover:border-transparent hover:shadow-[0_4px_10px_rgba(0,0,0,.15)]"
            }`}
        >
            {skill}
        </button>
    );
}

export default function ChooseSkills() {
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [chosenSkills, setChosenSkills] = useState<string[]>([]);

    useEffect(() => {
        setChosenSkills([]);
    }, [activeCategory]);

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
        <SignUpFormWrapper
            header="Setting up your profile"
            headerDescription="Choose your skills."
            submitButtonClassName="w-[400px] max-sm:w-full"
            formCustomClassName="w-[600px] max-sm:w-[calc(100%-32px)] flex flex-col items-center mx-auto"
            accountType="freelancer"
        >
            <div className="flex max-sm:flex-col max-sm:gap-6 w-full">
                <div className="flex-1 flex max-sm:flex-wrap sm:flex-col items-start gap-2">
                    {categories
                        .map((category) => category.name)
                        .map((categoryName, i) => (
                            <CategoryCard
                                key={i}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                category={categoryName}
                            />
                        ))}
                </div>
                <hr className="sm:hidden opacity-20" />
                <div className="flex-1 h-fit flex flex-wrap items-start gap-2">
                    {categories
                        .filter((category) => category.name === activeCategory)
                        .flatMap((category) => category.skills)
                        .map((skill, i) => (
                            <SkillCard
                                key={i}
                                skill={skill}
                                chosenSkills={chosenSkills}
                                setChosenSkills={setChosenSkills}
                            />
                        ))}
                </div>
            </div>
        </SignUpFormWrapper>
    );
}
