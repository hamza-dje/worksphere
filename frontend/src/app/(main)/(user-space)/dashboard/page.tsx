import CardWrapper from "@/components/user-space/CardWrapper";
import LatestProjects from "@/components/user-space/dashboard/LatestProjects";
import MyServices from "@/components/user-space/dashboard/MyServices";
import SkillsPie from "@/components/user-space/dashboard/SkillsPie";
import NumberCard from "@/components/user-space/NumberCard";

export default function Dashboard() {
    return (
        <>
            <NumberCard
                header="Profit"
                value='$1700'
                margin="+25%"
                href=""
            />
            <NumberCard
                header="Projects"
                value={214}
                margin="-25%"
                href="/history"
            />
            <SkillsPie skills={[
                { 'Graphic design': 12 },
                { 'Graphic design': 12 },
                { 'Graphic design': 12 }
            ]} />
            <MyServices
                services={[
                    {
                        name: 'Lorem ipsum dolor sit amet, elit elit elit elit elit elit',
                        skill: 'Packaging Design',
                        sold: 4,
                        cost: 120
                    },
                    {
                        name: 'Lorem ipsum dolor sit amet, elit elit elit elit elit elit',
                        skill: 'Packaging Design',
                        sold: 4,
                        cost: 120
                    },
                    {
                        name: 'Lorem ipsum dolor sit amet, elit elit elit elit elit elit',
                        skill: 'Packaging Design',
                        sold: 4,
                        cost: 120
                    }
                ]}
            />
            <LatestProjects
                projects={[
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Pending",
                        type: "Service",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 120,
                        client: "string"
                    },
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Done",
                        type: "Service",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 1000,
                        client: "string"
                    },
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Done",
                        type: "Need",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 200,
                        client: "string"
                    },
                    {
                        name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
                        status: "Done",
                        type: "Service",
                        date: "Apr 14 2024",
                        deadline: "Apr 14 2024",
                        cost: 500,
                        client: "string"
                    },
                ]}
            />
        </>
    );
}