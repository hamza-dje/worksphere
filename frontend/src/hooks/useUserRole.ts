import { useEffect } from "react";

export default function useUserRole() {
    const getUserRole = (): "freelancer" | "client" => {
        return "client";
    };

    const userRole = getUserRole();

    useEffect(() => {
        document.body.classList.add(`role-${userRole}`);
    }, []);

    return userRole;
}
