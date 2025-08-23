export default function Dashboard() {
    return (
        <>
            <div className="bg-white shadow px-7 py-6 rounded-4xl flex flex-col gap-2">
                <h6 className="font-primary text-primary opacity-40 text-sm">
                    Profit
                </h6>
                <h4 className="font-primary font-bold text-primary text-5xl mb-3">
                    $1700
                </h4>
                <div className="flex items-center gap-2">
                    <div className="w-9 aspect-square rounded-full bg-green" />
                    <div className="flex flex-col">
                        <h4 className="font-primary font-medium text-green text-lg -mb-1">
                            +25%
                        </h4>
                        <p className="font-primary text-xs opacity-20">
                            Over last month
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}