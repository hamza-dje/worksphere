import ClientNeedCard from "@/components/ClientNeedCard";
import FilterBar from "@/components/navbar/authenticated/FilterBar";

export default function HomePage() {
	return (
		<>
			<FilterBar />
			<div className="w-[1100px] max-xl:w-[900px] max-lg:w-full max-lg:px-8 max-md:px-2 mx-auto mt-10">
				<ClientNeedCard
					title="Lorem ipsum dolor sit ametx"
					priceRange={[100, 200]}
					category="Design & Creativity"
					time={5}
					bids={5}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					skills={[
						'Logo Design',
						'Branding',
						'Illustration',
						'Print Design',
						'Packaging Design',
						'Digital Art',
						'Creative Direction',
						'Typography Design'
					]}
					clientName="M. M."
				/>
				<ClientNeedCard
					title="Lorem ipsum dolor sit amet"
					priceRange={[100, 200]}
					category="Design & Creativity"
					time={5}
					bids={5}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					skills={[
						'Logo Design',
						'Branding',
						'Illustration',
						'Print Design',
						'Packaging Design',
						'Digital Art',
						'Creative Direction',
						'Typography Design'
					]}
					clientName="M. M."
				/>
				<ClientNeedCard
					title="Lorem ipsum dolor sit amet"
					priceRange={[100, 200]}
					category="Design & Creativity"
					time={5}
					bids={5}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					skills={[
						'Logo Design',
						'Branding',
						'Illustration',
						'Print Design',
						'Packaging Design',
						'Digital Art',
						'Creative Direction',
						'Typography Design'
					]}
					clientName="M. M."
				/>
			</div>
		</>
	);
}
