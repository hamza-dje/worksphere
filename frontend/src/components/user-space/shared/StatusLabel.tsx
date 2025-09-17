export default function StatusLabel({
    status,
}: {
    status: "Done" | "Pending" | "Late";
}) {
    return (
        <span
            className={`font-primary px-2 py-0.5 rounded-full text-white
        ${
            status === "Done"
                ? "bg-green"
                : status === "Pending"
                ? "bg-yellow"
                : "bg-red"
        }`}
        >
            {status}
        </span>
    );
}
