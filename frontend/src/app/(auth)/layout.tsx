import AuthLogo from "@/components/Auth/AuthLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sign up",
    template: "Sign up - %s",
  },
};

export default function AuthLayout(props: LayoutProps<"/">) {
  return (
    <div  className="min-h-screen flex flex-col">
      {props.children}
      <AuthLogo />
    </div>
  );
}
