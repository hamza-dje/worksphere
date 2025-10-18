type ClientNeedCardProps = {
    title: string;
    priceRange: [start: number, end: number];
    category: string;
    time: number;
    bids: number;
    description: string;
    skills: string[];
    clientName: string;
};

export default ClientNeedCardProps;
