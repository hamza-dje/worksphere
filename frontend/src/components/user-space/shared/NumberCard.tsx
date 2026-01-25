"use client";

import { useRouter } from "next/navigation";
import CardWrapper from "./CardWrapper";
import formatValue from "@/utils/functions/formatValue";

type NumberCardProps = {
  header: string;
  value: number | `$${number}`;
} & ({ href?: undefined } | { href: string }) &
  (
    | { customFooter?: undefined; margin: any }
    | { customFooter: React.ReactNode; margin?: undefined }
  );

export default function NumberCard({
  header,
  value,
  href,
  margin,
  customFooter,
}: NumberCardProps) {
  const router = useRouter();

  return (
    <CardWrapper header={header} href={href}>
      <h4 className="font-primary font-bold text-primary text-5xl mb-3">
        {formatValue(value)}
      </h4>
      {customFooter === undefined ? (
        <div className="flex items-center gap-2">
          <div
            className={`w-9 aspect-square rounded-full flex items-center justify-center
                    ${
                      margin!.startsWith("+")
                        ? "bg-green"
                        : "bg-alternative-red rotate-180"
                    }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              className="fill-white size-[18px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.520413 9.07107L8.47536 1.11612C8.96352 0.627962 9.75498 0.627962 10.2431 1.11612L18.1981 9.07107C18.6862 9.55922 18.6862 10.3507 18.1981 10.8388C17.7099 11.327 16.9185 11.327 16.4303 10.8388L10.6092 5.01777L10.6092 18C10.6092 18.6904 10.0496 19.25 9.35925 19.25C8.66889 19.25 8.10925 18.6904 8.10925 18L8.10925 5.01777L2.28818 10.8388C1.80002 11.327 1.00857 11.327 0.520413 10.8388C0.0322576 10.3507 0.0322576 9.55922 0.520413 9.07107Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4
              className={`font-primary font-medium text-lg -mb-1
                        ${
                          margin!.startsWith("+")
                            ? "text-green"
                            : "text-alternative-red"
                        }`}
            >
              {margin}
            </h4>
            <p className="font-primary text-xs opacity-20">Over last month</p>
          </div>
        </div>
      ) : (
        customFooter
      )}
    </CardWrapper>
  );
}
