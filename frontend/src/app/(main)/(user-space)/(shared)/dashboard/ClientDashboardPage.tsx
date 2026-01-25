"use client";
import LatestProjects from "@/components/user-space/shared/dashboard/LatestProjects";
import MyServices from "@/components/user-space/freelancer-specific/dashboard/MyServices";
import SkillsPie from "@/components/user-space/freelancer-specific/dashboard/SkillsPie";
import CardWrapper from "@/components/user-space/shared/CardWrapper";
import NumberCard from "@/components/user-space/shared/NumberCard";
import MyActiveNeeds from "@/components/user-space/client-specific/dashboard/MyActiveNeeds";
import useUserRole from "@/hooks/useUserRole";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { PortfolioDto, SignUpDto } from "@/utils/types/validation/user";
import { getProfile } from "@/api/rest/services/user";
import { getProjects } from "@/api/rest/services/project";
import { set } from "zod";
import { ProjectEntity } from "@/utils/types/ProjectEntity";

export default function ClientDashboardPage() {
  const [profile , setProfile] = useState<SignUpDto>({} as SignUpDto);
  const [projects , setProjects] = useState<ProjectEntity[]>([]);
  const now = new Date();
  const currentMonth  = now.getMonth()
  const currentYear = now.getFullYear();

  const previousDate = new Date(now)
  previousDate.setMonth(now.getMonth() -1)
  const previousMonth = previousDate.getMonth()
  const previousYear = previousDate.getFullYear();

  let currentMonthCount = 0;
  let previousMonthCount = 0;
  projects.forEach((project) =>{
    const date = new Date(project.createdAt)
    const month = date.getMonth();
    const year = date.getFullYear();

    if (year === currentYear && month === currentMonth) currentMonthCount++;
    else if (year === previousYear && month === previousMonth) previousMonthCount++;

  })
  const projectCount = projects.length
  console.log("Projects: ", projects);
  const growth = previousMonthCount > 0
  ? ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100
  : 100;

  
  const userRole = useUserRole();
  
  useEffect(()=>{
    const fetch = async () => {
    const ProfileResponse = await getProfile() as SignUpDto | {error : {message : string}};
    if((ProfileResponse as any).error){
      toast.error((ProfileResponse as any).error.message)
    } else {
      setProfile(ProfileResponse as SignUpDto);
    }
     
     
    const Projectsresponse = await getProjects((ProfileResponse as SignUpDto).id || 0) as ProjectEntity[] | {error : {message : string}};
      if((Projectsresponse as any).error){
        toast.error((Projectsresponse as any).error.message)
      }
      else {
        setProjects(Projectsresponse as ProjectEntity[]);
      }
  }
    
    fetch();
    
  },[])
  
  return (
    <>
      <NumberCard
        header={userRole === "freelancer" ? `Profit` : "Spendings"}
        value={`$${profile.portfolio?.thisMonthAmount || 0}`}
        margin={`${((profile.portfolio?.thisMonthAmount || 0) - (profile.portfolio?.previousMonthAmount || 0)) / (profile.portfolio?.previousMonthAmount || 1) >= 0 ? "+" : ""}${Math.abs(((profile.portfolio?.thisMonthAmount || 0) - (profile.portfolio?.previousMonthAmount || 0)) / (profile.portfolio?.previousMonthAmount || 1) * 100).toFixed(2)}%`}
        href=""
      />
      <NumberCard header="Projects" value={projectCount} margin={`${growth >= 0 ? "+" : ""}${growth.toFixed(2)}%`} href={"/account"} />
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
