import Image from "next/image";
import WhyCard from "@/components/landing/WhyCard";
import { CategoryCard } from "@/components/landing/CategoryCard";
import HowCard from "@/components/landing/HowCard";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Client",
  description: "Grow your business just from home",
};

type HowCardProps = {
  index: number;
  color: "green" | "blue";
  title: string;
  paragraph: string;
  buttonContent?: string;
};

export default function ClientLandingPage() {
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
        color: "blue",
        title: "Share an offer",
        paragraph:
          "Share an offer of a service in our services marketplace, and wait for a client to hire you.",
        buttonContent: "Share an offer",
      },
      {
        color: "blue",
        title: "Make a deal",
        paragraph:
          "Once a freelancer applies for it, he can start working on your project, you can contact him by our messaging system, to update him about the project he is working on.",
      },
      {
        color: "blue",
        title: "Pay the fee",
        paragraph:
          "Once you approve the freelancer’s final delivery, the service fee will be extracted from your balance, so the freelancer gets paid.",
      },
    ],
    secondSection: [
      {
        color: "green",
        title: "Choose a service",
        paragraph:
          "Consult freelancers services and choose the one you need for your business.",
        buttonContent: "Consult services",
      },
      {
        color: "green",
        title: "Make a deal",
        paragraph:
          "Send the freelancer a brief of what you need so he can start working on your project, you can contact him by our messaging system, to update him about the project he is working on.",
      },
      {
        color: "green",
        title: "Pay the fee",
        paragraph:
          "Once you approve the freelancer’s final delivery, the service fee will be extracted from your balance, so the freelancer gets paid.",
      },
    ],
  };

  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col gap-[200px] max-md:gap-[120px]">
        <section className="h-screen bg-black flex items-center rounded-b-[36px] relative overflow-hidden">
          {[1, 2, 3].map((imageId, i) => (
            <Image
              key={i}
              src={`/landing/hero/client/${imageId}.png`}
              alt="Background"
              width={1000}
              height={1000}
              className="object-cover absolute left-0 top-0 w-full h-full animate-hero-images max-md:object-[70%_50%]"
              style={{
                animationDelay: `${i * 3000}ms`,
                zIndex: 2 - i,
              }}
            />
          ))}
          <div className="absolute z-[2] left-0 top-0 w-full h-full bg-gradient-to-r from-25% from-[rgba(0,0,0,.75)] to-[rgba(0,0,0,0)]" />
          <div className="landing-container mx-auto z-[2]">
            <div className="flex flex-col col-span-6 max-xl:col-span-4 max-md:col-span-full [&_*]:text-white gap-5">
              <span className="font-primary font-extrabold text-[43px] max-md:text-3xl leading-14 max-md:leading-normal">
                Ride the WorkSphere and Catch the Perfect{" "}
                <span className="font-primary font-extrabold bg-gradient-to-r from-blue to-green bg-clip-text text-transparent!">
                  Spher of Opportunities!
                </span>
              </span>
              <p className="font-secondary text-white text-[21.33px] max-md:text-lg tracking-[0.4px] mb-10">
                Connect with reliable talented freelances, and grow your
                business, just from home.
              </p>
              <div className="flex gap-[43px] max-sm:flex-col max-sm:gap-5 sm:items-center">
                <Link href={"/signup"} className="normal-button">
                  Find freelance services
                </Link>
                <Link
                  href={"/freelancer"}
                  className="font-primary font-bold cursor-pointer max-md:text-sm"
                >
                  I want to work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="landing-container md:gap-y-14 md:max-xl:gap-y-10 ">
          <div className="col-span-full flex justify-center mb-8">
            <h1 className="col-span-full bg-gradient-to-r from-blue to-green w-fit bg-clip-text text-transparent max-md:text-3xl">
              Why WorkSphere?
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
            className="col-span-7 max-xl:col-span-2 rounded-[36px] h-full object-cover max-md:hidden"
          />

          {/* Freedom */}
          <Image
            src="/landing/why-section/freedom-1.png"
            width={1000}
            height={0}
            alt="Freedom"
            className="col-span-4 max-xl:col-span-2 rounded-[36px] h-full object-cover max-md:hidden"
          />
          <Image
            src="/landing/why-section/freedom-2.png"
            width={1000}
            height={0}
            alt="Freedom"
            className="col-span-3 max-xl:hidden rounded-[36px] h-full object-cover max-md:hidden"
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
            className="col-span-4 max-xl:col-span-2 rounded-[36px] h-full object-cover max-md:hidden"
          />
          <Image
            src="/landing/why-section/toolbox-2.png"
            width={1000}
            height={0}
            alt="Freedom"
            className="col-span-3 max-xl:hidden rounded-[36px] h-full object-cover max-md:hidden"
          />
        </section>

        {/* Categories section */}
        <section className="landing-container bg-gradient-to-br from-primary to-dark-primary py-20 max-xl:py-12 max-xl:px-16 max-sm:px-9 max-sm:py-8 rounded-[36px]">
          <div className="flex flex-col gap-5 max-xl:gap-2 col-start-2 col-span-4 max-xl:col-span-full xl:row-span-2">
            <h1 className="text-white max-md:text-3xl max-sm:text-2xl">
              Many categories just to set you up!
            </h1>

            <p className="text-[21px] max-md:text-lg tracking-wide text-white">
              We offer all the categories and fields that are available on the
              freelance market, you can start working in the field that you are
              skilled in, in just few clicks.
            </p>

            <div className="flex items-center gap-6 max-sm:gap-4 mt-10 lg:max-xl:mb-12 max-xl:mt-6">
              <Link
                href={"/signup"}
                className="stroke-button border-4 border-white text-[21px] text-white opacity-100 hover:bg-white hover:text-primary hover:translate-0 hover:drop-shadow-none max-sm:text-lg max-sm:px-3 max-sm:flex-1 max-sm:max-w-[180px] max-sm:py-3"
              >
                Join us
              </Link>

              <Link
                href={"/categories"}
                className="lg:hidden font-primary font-bold cursor-pointer h-fit text-white opacity-40 hover:opacity-100 transition-opacity duration-150 max-sm:text-sm max-sm:text-center"
              >
                View categories
              </Link>
            </div>
          </div>

          {/* Category Cards */}
          {categoryCards.map((category, i) => (
            <CategoryCard key={i} {...category} />
          ))}
          <div className="col-span-2 flex items-center justify-center max-lg:hidden">
            <Link
              href={"/categories"}
              className="font-primary font-bold text-sm text-white opacity-30 cursor-pointer"
            >
              View more
            </Link>
          </div>
        </section>

        {/* How section */}
        <section className="landing-container">
          <div className="col-span-full flex justify-center mb-8">
            <h1 className="col-span-full bg-gradient-to-r from-blue to-green w-fit bg-clip-text text-transparent max-md:text-3xl">
              How it works?
            </h1>
          </div>
          {howCards.firstSection.map((card, i) => (
            <HowCard key={i} index={i + 1} {...card} />
          ))}
          <p className="col-span-full text-[21px] max-md:text-[16px] leading-6 max-md:leading-snug tracking-wide mb-4 mt-16">
            You don’t want to get through this process? Well, we made you
            another choice :
          </p>
          {howCards.secondSection.map((card, i) => (
            <HowCard key={i} index={i + 1} {...card} />
          ))}
        </section>

        {/* Free Section */}
        <section className="landing-container bg-gradient-to-br from-primary to-dark-primary py-20 max-xl:py-12 max-xl:px-16 max-sm:px-9 max-sm:py-8 rounded-[36px] mb-28 relative overflow-hidden">
          <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
            <Image
              src="/landing/free-section/pattern.png"
              alt=""
              width={1300}
              height={1300}
              className="rotate-[-15deg] scale-[150%] max-md:scale-[300%] opacity-10"
            />
          </div>
          <div className="flex flex-col gap-5 max-xl:gap-2 xl:col-start-2 col-span-4 max-xl:col-span-3 max-lg:col-span-full z-[1]">
            <h1 className="text-white max-md:text-3xl max-sm:text-2xl">
              WorkSphere is totally free!
            </h1>

            <p className="text-[21px] max-md:text-lg tracking-wide text-white">
              And finally, you don’t have to pay on additional services on
              WorkSphere. Every user gets the full functionalities of WorkSphere
              platform, which means that every user has the same chances, no pay
              for certification, no advertising services...
            </p>

            <Link
              href={"/signup"}
              className="mt-10 max-xl:mt-6 stroke-button sm:w-fit border-4 border-white text-[21px] max-sm:text-lg max-sm:px-3 max-sm:flex-1 max-sm:py-3 text-white opacity-100 hover:bg-white hover:text-primary hover:translate-0 hover:drop-shadow-none"
            >
              Join us now
            </Link>
          </div>

          <Image
            src="/landing/free-section/image.png"
            alt="WorkSphere is totally free!"
            width={1000}
            height={0}
            className="my-auto xl:col-start-7 col-span-5 max-xl:col-span-3 max-lg:hidden z-[2]"
          />
        </section>
      </div>
    </>
  );
}
