"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/landing/Navbar";
import Image from "next/image";
import WhyCard from "@/components/landing/WhyCard";
import { CategoryCard } from "@/components/landing/CategoryCard";
import HowCard from "@/components/landing/HowCard";
import { HowCardProps } from "@/utils/types";

export default function LandingPage() {
    const [isFreelancer, setIsFreelancer] = useState<boolean>(true);
    useEffect(() => {
        if (isFreelancer) {
            document.body.classList.remove("role-client");
        } else {
            document.body.classList.add("role-client");
        }
    }, [isFreelancer]);

    const categoryCards = [
        {
            name: "Design & Creativity",
            imageTitle: "design",
        },
        {
            name: "Multimedia",
            imageTitle: "multimedia",
        },
        {
            name: "Digital Marketing",
            imageTitle: "marketing",
        },
        {
            name: "Writing & Translation",
            imageTitle: "writing",
        },
        {
            name: "Development",
            imageTitle: "development",
        },
    ];

    const howCards: Record<string, Array<Omit<HowCardProps, "index">>> = {
        firstSection: [
            {
                color: isFreelancer ? "green" : "blue",
                title: "Share an offer",
                paragraph:
                    "Share an offer of a service in our services marketplace, and wait for a client to hire you.",
                buttonContent: "Share an offer",
            },
            {
                color: isFreelancer ? "green" : "blue",
                title: "Make a deal",
                paragraph: isFreelancer
                    ? "The client tells you about what you wil do, so you use your skills and make his needs into reality, then you upload your work, so the client take it, once he approves it, you are good to go."
                    : "Once a freelancer applies for it, he can start working on your project, you can contact him by our messaging system, to update him about the project he is working on.",
            },
            {
                color: isFreelancer ? "green" : "blue",
                title: isFreelancer ? "Get paid" : "Pay the fee",
                paragraph: isFreelancer
                    ? "Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in WorkWave, so you can withdraw it with the method you want, by the payment method you desire."
                    : "Once you approve the freelancer’s final delivery, the service fee will be extracted from your balance, so the freelancer gets paid.",
            },
        ],
        secondSection: [
            {
                color: isFreelancer ? "blue" : "green",
                title: `Choose a ${isFreelancer ? "need" : "service"}`,
                paragraph: isFreelancer
                    ? "Consult client needs and choose one you are capable of doing within the client terms, then apply for it."
                    : "Consult freelancers services and choose the one you need for your business.",
                buttonContent: `Consult ${isFreelancer ? "needs" : "services"}`,
            },
            {
                color: isFreelancer ? "blue" : "green",
                title: "Make a deal",
                paragraph: isFreelancer
                    ? "Once you get chosen by the client, you start working on his project, when you finalize it, you upload it so the client can take it, when the client approves it, you are good to go."
                    : "Send the freelancer a brief of what you need so he can start working on your project, you can contact him by our messaging system, to update him about the project he is working on.",
            },
            {
                color: isFreelancer ? "blue" : "green",
                title: isFreelancer ? "Get paid" : "Pay the fee",
                paragraph: isFreelancer
                    ? "Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in WorkWave, so you can withdraw it with the method you want, by the payment method you desire."
                    : "Once you approve the freelancer’s final delivery, the service fee will be extracted from your balance, so the freelancer gets paid.",
            },
        ],
    };

    return (
        <>
            <Navbar
                isFreelancer={isFreelancer}
                setIsFreelancer={setIsFreelancer}
            />

            {/* Hero section */}
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

                {/* Why section */}
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

                {/* Categories section */}
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
                    {categoryCards.map((category, i) => (
                        <CategoryCard
                            key={i}
                            name={category.name}
                            imageTitle={category.imageTitle}
                        />
                    ))}
                    <div className="col-span-2 flex items-center justify-center">
                        <button className="font-primary font-bold text-sm text-white opacity-30 cursor-pointer">
                            View more
                        </button>
                    </div>
                </section>

                {/* How section */}
                <section className="landing-container">
                    <div className="col-span-full flex justify-center mb-8">
                        <h1 className="col-span-full bg-gradient-to-r from-blue to-green w-fit bg-clip-text text-transparent">
                            How it works?
                        </h1>
                    </div>
                    {howCards.firstSection.map((card, i) => (
                        <HowCard
                            key={i}
                            index={i + 1}
                            color={card.color}
                            title={card.title}
                            paragraph={card.paragraph}
                            buttonContent={card.buttonContent}
                        />
                    ))}
                    <p className="col-span-full text-[21px] leading-6 tracking-wide mb-4 mt-16">
                        You don’t want to get through this process? Well, we
                        made you another choice :
                    </p>
                    {howCards.secondSection.map((card, i) => (
                        <HowCard
                            key={i}
                            index={i + 1}
                            color={card.color}
                            title={card.title}
                            paragraph={card.paragraph}
                            buttonContent={card.buttonContent}
                        />
                    ))}
                </section>

                <section className="landing-container bg-gradient-to-br from-primary to-dark-primary py-20 rounded-[36px] mb-28 relative overflow-hidden">
                    <div className="absolute left-0 top-0 rotate-[-15deg] scale-[150%] opacity-10">
                        <Image
                            src="/landing/free-section/pattern.png"
                            alt=""
                            width={1300}
                            height={0}
                        />
                    </div>
                    <div className="flex flex-col gap-5 col-start-2 col-span-4 z-[1]">
                        <h1 className="text-white">
                            WorkWave is totally free!
                        </h1>

                        <p className="text-[21px] tracking-wide text-white">
                            And finally, you don’t have to pay on additional
                            services on WorkWave. Every user gets the full
                            functionalities of WorkWave platform, which means
                            that every user has the same chances, no pay for
                            certification, no advertising services...
                        </p>

                        <button className="mt-10 stroke-button w-fit border-4 border-white text-[21px] text-white opacity-100 hover:bg-white hover:text-primary hover:translate-0 hover:drop-shadow-none">
                            Join us now
                        </button>
                    </div>

                    <Image
                        src="/landing/free-section/image.png"
                        alt="WorkWave is totally free!"
                        width={1000}
                        height={0}
                        className="my-auto col-start-7 col-span-5 z-[2]"
                    />
                </section>
            </div>
        </>
    );
}
