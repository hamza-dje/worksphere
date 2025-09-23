"use client";
import LatestProjects from "@/components/user-space/shared/dashboard/LatestProjects";
import MyServices from "@/components/user-space/freelancer-specific/dashboard/MyServices";
import SkillsPie from "@/components/user-space/freelancer-specific/dashboard/SkillsPie";
import CardWrapper from "@/components/user-space/shared/CardWrapper";
import NumberCard from "@/components/user-space/shared/NumberCard";
import { useEffect } from "react";
import MyActiveNeeds from "@/components/user-space/client-specific/dashboard/MyActiveNeeds";
import useUserRole from "@/hooks/useUserRole";

export default function DashboardPage() {
    const userRole = useUserRole();

    return (
        <>
            <NumberCard
                header={userRole === "freelancer" ? `Profit` : "Spendings"}
                value="$1700"
                margin="+25%"
                href=""
            />
            <NumberCard
                header="Projects"
                value={214}
                margin="-25%"
                href="/history"
            />
            {userRole === "freelancer" ? (
                <SkillsPie
                    skills={[
                        { "Graphic design": 12 },
                        { "Graphic design": 12 },
                        { "Graphic design": 12 },
                    ]}
                />
            ) : (
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
                        href="/my-needs"
                    >
                        <div className="font-primary font-bold text-4xl text-primary flex items-center gap-2 max-sm:text-2xl">
                            25
                        </div>
                    </CardWrapper>
                </div>
            )}
            {userRole === "freelancer" ? (
                <MyServices
                    services={[
                        {
                            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                            skill: "Packaging Design",
                            sold: 4,
                            cost: 120,
                        },
                        {
                            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                            skill: "Packaging Design",
                            sold: 4,
                            cost: 120,
                        },
                        {
                            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                            skill: "Packaging Design",
                            sold: 4,
                            cost: 120,
                        },
                    ]}
                />
            ) : (
                <MyActiveNeeds
                    needs={[
                        {
                            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                            category: "Engineering & Architecture",
                            skills: [
                                "Packaging Design",
                                "Packaging Design",
                                "Packaging Design",
                            ],
                            budget: [200, 300],
                        },
                        {
                            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                            category: "Engineering & Architecture",
                            skills: [
                                "Packaging Design",
                                "Packaging Design",
                                "Packaging Design",
                            ],
                            budget: [200, 300],
                        },
                        {
                            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                            category: "Engineering & Architecture",
                            skills: [
                                "Packaging Design",
                                "Packaging Design",
                                "Packaging Design",
                            ],
                            budget: [200, 300],
                        },
                    ]}
                />
            )}
            <LatestProjects
                userRole={userRole}
                projects={[
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Pending",
                        type: "Service",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 120,
                        client: "string",
                    },
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Done",
                        type: "Service",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 1000,
                        client: "string",
                    },
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Done",
                        type: "Need",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 200,
                        client: "string",
                    },
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Done",
                        type: "Service",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 500,
                        client: "string",
                    },
                ]}
            />
        </>
    );
}
