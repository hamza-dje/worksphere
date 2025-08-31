"use client";
import { formatValue } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect, Fragment } from "react";
import CardWrapper from "../CardWrapper";
import StatusLabel from "../StatusLabel";
import { ProjectsType } from "@/utils/types";

export default function ProjectsContainer({ projects }: { projects: ProjectsType }) {
    return (
        <CardWrapper
            header="Latest Projects"
            className="col-span-full lg:max-h-[460px] overflow-auto no-scrollbar"
        >
            <table>
                <thead>
                    <tr>
                        <th className="w-[240px]">Project name</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Start date</th>
                        <th>Deadline</th>
                        <th>Final cost</th>
                        <th>Client</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, i) => {
                            const router = useRouter();

                            const infosRef = useRef<HTMLDivElement>(null);
                            const [isExpanded, setIsExpanded] = useState<boolean>(false);
                            useEffect(() => {
                                if (infosRef.current) {
                                    if (isExpanded) {
                                        infosRef.current.style.height = `${infosRef.current.scrollHeight + 8}px`;
                                    } else {
                                        infosRef.current.style.height = `0px`;
                                    }
                                }
                            }, [isExpanded])

                            return <Fragment key={i}>
                                <tr
                                    className={`z-[1] cursor-pointer ${isExpanded
                                        ? 'after:shadow-[0px_0px_0px_2px_var(--color-white)]'
                                        : ''
                                        } before:content-[""] before:absolute before:bg-white before:-left-4 before:-right-4 before:top-0 before:bottom-0 before:h-full before:rounded-full before:-z-[1] ${isExpanded
                                            ? 'after:bg-[oklch(from_var(--color-primary)_l_c_h_/_.15)]'
                                            : ''
                                        }`}
                                    onClick={() => {
                                        if (project.status === 'Done') {
                                            setIsExpanded(i => !i);
                                        } else {
                                            router.push('/working-on');
                                        }
                                    }}
                                >
                                    <td className="truncate block w-[200px]">{project.name}</td>
                                    <td><StatusLabel status={project.status} /></td>
                                    <td className="opacity-60">{project.type}</td>
                                    <td>{project.date}</td>
                                    <td>{project.deadline}</td>
                                    <td className="font-bold text-green">+${formatValue(project.cost)}</td>
                                    <td>{project.client}</td>
                                </tr>

                                <tr
                                    className={`relative -top-2 after:bg-[oklch(from_var(--color-primary)_l_c_h_/_.15)] after:rounded-t-none`}
                                >
                                    <td
                                        colSpan={7}
                                        className={`${isExpanded ? 'py-2' : 'py-0'}`}
                                    >
                                        <div
                                            ref={infosRef}
                                            className={`flex justify-between [&>span]:flex [&>span]:flex-col [&>span]:gap-1 transition-[height_padding] duration-150 ease-out overflow-hidden ${isExpanded
                                                ? 'pt-2'
                                                : 'pt-0'
                                                }`}
                                        >
                                            <span>
                                                <span>
                                                    <span className="font-primary font-medium text-xs">
                                                        Delivered on:
                                                    </span>
                                                    <span className="font-primary"> Siuuuu</span>
                                                </span>
                                                <span>
                                                    <span className="font-primary font-medium text-xs">
                                                        Delay time:
                                                    </span>
                                                    <span className="font-primary"> Siuuuu</span>
                                                </span>
                                            </span>

                                            <span>
                                                <span>
                                                    <span className="font-primary font-medium text-xs">
                                                        Update times:
                                                    </span>
                                                    <span className="font-primary"> Siuuuu</span>
                                                </span>
                                                <span>
                                                    <span className="font-primary font-medium text-xs">
                                                        Type:
                                                    </span>
                                                    <span className="font-primary"> Service</span>
                                                </span>
                                            </span>

                                            <span>
                                                <span className="flex gap-1">
                                                    <span className="font-primary font-medium text-xs">
                                                        Deliverables:
                                                    </span>
                                                    <span className="flex flex-col gap-1.5">
                                                        <span className="font-primary text-blue">Siuuuu</span>
                                                        <span className="font-primary text-blue">Siuuuu</span>
                                                        <span className="font-primary text-blue">Siuuuu</span>
                                                    </span>
                                                </span>
                                            </span>

                                            <div
                                                className="grid grid-cols-[auto_auto] auto-rows-max gap-x-1 gap-y-1.5 [&>span]:font-primary [&>span]:odd:font-medium [&>span]:even:font-bold"
                                            >
                                                <span>
                                                    Initial cost:
                                                </span>
                                                <span className="text-green">
                                                    +{formatValue('$1000')}
                                                </span>

                                                <span>
                                                    Delay tax:
                                                </span>
                                                <span className="text-green">
                                                    -{formatValue('$0')}
                                                </span>

                                                <span>
                                                    Updates cost:
                                                </span>
                                                <span className="text-yellow">
                                                    +{formatValue('$0')}
                                                </span>

                                                <span className="mt-1">Final cost:</span>
                                                <span className="mt-1 text-green">+{formatValue('$1000')}</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </Fragment>
                        })
                    }
                </tbody>
            </table>
        </CardWrapper>
    );
}