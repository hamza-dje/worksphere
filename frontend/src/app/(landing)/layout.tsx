import React from "react";

export default function LandingLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <body>{children}</body>;
}
