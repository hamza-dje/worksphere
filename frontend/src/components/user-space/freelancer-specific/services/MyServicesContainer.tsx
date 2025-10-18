import Link from "next/link";
import CardWrapper from "../../shared/CardWrapper";
import Service from "./Service";

export default function MyServicesContainer() {
    const services = [
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            skills: [
                "Packaging Design",
                "Packaging Design",
                "Packaging Design",
            ],
            cost: "$120",
            sold: 4,
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            skills: [
                "Packaging Design",
                "Packaging Design",
                "Packaging Design",
            ],
            cost: "$120",
            sold: 4,
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            skills: [
                "Packaging Design",
                "Packaging Design",
                "Packaging Design",
            ],
            cost: "$120",
            sold: 4,
        },
    ];

    return (
        <CardWrapper
            header={"My Services"}
            className={"col-span-full overflow-x-auto no-scrollbar"}
        >
            {services.length ? (
                services.map((service, i) => (
                    <Service
                        key={i}
                        name={service.name}
                        description={service.description}
                        skills={service.skills}
                        cost={service.cost as `$${number}`}
                        sold={service.sold}
                    />
                ))
            ) : (
                <div
                    className={
                        "flex flex-col items-center font-primary text-sm gap-5"
                    }
                >
                    You have no services for now, but you can add up to 3
                    services!
                    <Link href={"/add-service"} className={"normal-button"}>
                        Add a service
                    </Link>
                </div>
            )}
        </CardWrapper>
    );
}
