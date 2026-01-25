import Link from "next/link";

type CardWrapperProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
} & (
  | { header: string; customHeader?: undefined }
  | { header?: undefined; customHeader: React.ReactNode }
);

export default function CardWrapper({
  children,
  header,
  customHeader,
  href,
  className,
}: CardWrapperProps) {
  return href === undefined ? (
    <div
      className={`bg-white shadow px-7 py-6 rounded-4xl flex flex-col gap-2 ${
        className ?? ""
      }`}
    >
      {customHeader ? (
        customHeader
      ) : (
        <h6 className="font-primary text-primary opacity-40 text-sm">
          {header}
        </h6>
      )}
      {children}
    </div>
  ) : (
    <Link
      className={`bg-white shadow px-7 py-6 rounded-4xl flex flex-col gap-2 ${
        className ?? ""
      }
                ${
                  href !== undefined
                    ? "hover:shadow-[0_10px_27px_oklch(from_var(--color-primary)_l_c_h_/_.3)] hover:-translate-y-2.5 transition-[box-shadow_translate] duration-300 ease-out"
                    : ""
                }`}
      href={href as any}
    >
      <h6 className="font-primary text-primary opacity-40 text-sm">{header}</h6>
      {children}
    </Link>
  );
}
