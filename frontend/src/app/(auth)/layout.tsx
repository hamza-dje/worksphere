import AuthLogo from "@/components/auth/AuthLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sign up",
    template: "Sign up - %s",
  },
};

export default function AuthLayout(props: LayoutProps<"/">) {
  return (
    <body  className="min-h-screen flex flex-col">
      {props.children}
      <AuthLogo />
    </body>
  );
}
