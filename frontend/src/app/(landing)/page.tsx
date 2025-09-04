"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/landing/Navbar";
import Image from "next/image";
import WhyCard from "@/components/landing/WhyCard";
import { CategoryCard } from "@/components/landing/CategoryCard";

export default function LandingPage() {
    const [isFreelancer, setIsFreelancer] = useState<boolean>(true);
    useEffect(() => {
        if (isFreelancer) {
            document.body.classList.remove("role-client");
        } else {
            document.body.classList.add("role-client");
        }
    }, [isFreelancer]);

    return (
        <>
            <Navbar
                isFreelancer={isFreelancer}
                setIsFreelancer={setIsFreelancer}
            />
            <div className="flex flex-col gap-[200px]">
                <section className="h-screen bg-black flex items-center rounded-b-[36px] relative overflow-hidden">
                    {[1, 2, 3].map((imageId, i) => (
                        <Image
                            key={i}
                            src={`/landing/hero/${
                                isFreelancer ? "freelancer" : "client"
                            }/${imageId}.png`}
                            alt="Background"
                            width={1000}
                            height={1000}
                            className="object-cover absolute left-0 top-0 w-full h-full animate-hero-images"
                            style={{
                                animationDelay: `${i * 3000}ms`,
                                zIndex: 2 - i,
                            }}
                        />
                    ))}
                    <div className="absolute z-[2] left-0 top-0 w-full h-full bg-gradient-to-r from-25% from-[rgba(0,0,0,.75)] to-[rgba(0,0,0,0)]" />
                    <div className="landing-container mx-auto z-[2]">
                        <div className="flex flex-col col-span-6 [&_*]:text-white gap-5">
                            <span className="font-primary font-extrabold text-[43px] leading-14">
                                Ride the WorkWave and Catch the Perfect{" "}
                                <span className="font-primary font-extrabold bg-gradient-to-r from-blue to-green bg-clip-text text-transparent!">
                                    Wave of Opportunities!
                                </span>
                            </span>
                            <p className="font-secondary text-white text-[21.33px] tracking-[0.4px] mb-10">
                                {isFreelancer
                                    ? "Unlock opportunities to earn reliable income, all while working from home."
                                    : "Connect with reliable talented freelances, and grow your business, just from home."}
                            </p>
                            <div className="flex gap-[43px] items-center">
                                <button className="normal-button">
                                    {isFreelancer
                                        ? "Find work opportunities"
                                        : "Find freelance services"}
                                </button>
                                <button
                                    className="font-primary font-bold cursor-pointer"
                                    onClick={() => setIsFreelancer((i) => !i)}
                                >
                                    I want to {isFreelancer ? "hire" : "work"}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="landing-container gap-y-14">
                    <div className="col-span-full flex justify-center mb-8">
                        <h1 className="col-span-full bg-gradient-to-r from-blue to-green w-fit bg-clip-text text-transparent">
                            Why WorkWave?
                        </h1>
                    </div>

                    {/* Security */}
                    <WhyCard
                        title="Security"
                        paragraph="Reliable and secure payment system ensures timely transactions between freelancers and clients."
                        color="green"
                    />
                    <Image
                        src="/landing/why-section/security.png"
                        width={1000}
                        height={0}
                        alt="Security"
                        className="col-span-7 rounded-[36px]"
                    />

                    {/* Freedom */}
                    <Image
                        src="/landing/why-section/freedom-1.png"
                        width={1000}
                        height={0}
                        alt="Freedom"
                        className="col-span-4 rounded-[36px]"
                    />
                    <Image
                        src="/landing/why-section/freedom-2.png"
                        width={1000}
                        height={0}
                        alt="Freedom"
                        className="col-span-3 rounded-[36px]"
                    />
                    <WhyCard
                        title="Freedom"
                        paragraph="Withdraw earnings at anytime, with multiple payment methods, we give full control of your earnings."
                        color="blue"
                    />

                    {/* Toolbox */}
                    <WhyCard
                        title="Toolbox"
                        paragraph="Variety of easy-to-use tools, such as our IMS (Integrated Messaging System) which makes the communication easier, financial tracker which allows you to check your account balance and track your account movements..."
                        color="purple"
                    />
                    <Image
                        src="/landing/why-section/toolbox-1.png"
                        width={1000}
                        height={0}
                        alt="Freedom"
                        className="col-span-4 rounded-[36px]"
                    />
                    <Image
                        src="/landing/why-section/toolbox-2.png"
                        width={1000}
                        height={0}
                        alt="Freedom"
                        className="col-span-3 rounded-[36px]"
                    />
                </section>

                <section className="landing-container bg-gradient-to-br from-primary to-dark-primary py-20 rounded-[36px]">
                    <div className="flex flex-col gap-5 col-start-2 col-span-4 row-span-2">
                        <h1 className="text-white">
                            Many categories just to set you up!
                        </h1>

                        <p className="text-[21px] tracking-wide text-white">
                            We offer all the categories and fields that are
                            available on the freelance market, you can start
                            working in the field that you are skilled in, in
                            just few clicks.
                        </p>

                        <button className="mt-10 stroke-button w-fit border-4 border-white text-[21px] text-white opacity-100 hover:bg-white hover:text-primary hover:translate-0 hover:drop-shadow-none">
                            Join us
                        </button>
                    </div>

                    {/* Category Cards */}
                    <CategoryCard
                        name="Design & Creativity"
                        imageTitle="design"
                    />
                    <CategoryCard name="Multimedia" imageTitle="multimedia" />
                    <CategoryCard
                        name="Digital Marketing"
                        imageTitle="marketing"
                    />
                    <CategoryCard
                        name="Writing & Translation"
                        imageTitle="writing"
                    />
                    <CategoryCard name="Development" imageTitle="development" />
                    <div className="col-span-2 flex items-center justify-center">
                        <button className="font-primary font-bold text-sm text-white opacity-30 cursor-pointer">
                            View more
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
