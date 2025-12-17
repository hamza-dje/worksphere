"use client";
import { getPortfolio } from "@/api/rest/services/portfolio";
import { getProfile } from "@/api/rest/services/user";
import EditProfileModal from "@/components/profile/EditProfileModal";
import { UserRole } from "@/store/store";
import { PortfolioDto, SignUpDto } from "@/utils/types/validation/user";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<SignUpDto>({
    firstName: "",
    lastName: "",
    email: "",
    role: UserRole.FREELANCER,
    id: undefined,
  });
  const [portfolio, setPortfolio] = useState<{
    dto: PortfolioDto;
    photo: string;
  }>({
    dto: { mobile: "", description: "", location: "", portfolioLink: "" },
    photo: "",
  });

  const fetchData = async () => {
    const profileResult = await getProfile();
    if ((profileResult as any).error) {
      toast.error(`Can't get profile: ${(profileResult as any).error}`);
      return;
    }
    setProfile(profileResult as SignUpDto);

    const userId = (profileResult as SignUpDto).id;
    if (!userId) return;

    try {
      const portfolioResult = await getPortfolio(userId);
      if ((portfolioResult as any).error) {
        console.log(`Can't get portfolio: ${(portfolioResult as any).error}`);
      } else {
        const result = portfolioResult as any;
        if (result.dto) {
          setPortfolio(result);
        } else {
          setPortfolio({
            dto: {
              mobile: result.mobile,
              description: result.description,
              location: result.location,
              portfolioLink: result.portfolioLink,
            },
            photo: result.photo,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-white)] p-4 md:p-8 font-[family-name:var(--font-secondary)] col-span-full">
      <EditProfileModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        profile={profile}
        portfolio={portfolio.dto}
        onUpdate={fetchData}
      />
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Section with Gradient */}
        <div className="h-48 bg-gradient-to-r from-[var(--color-green)] to-[var(--color-dark-green)] relative">
          <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')]"></div>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all shadow-lg group z-10"
            title="Edit Profile"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>

        <div className="px-8 pb-12">
          <div className="relative flex flex-col md:flex-row justify-between items-end -mt-20 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 w-full">
              {/* Profile Image */}
              <div className="relative w-40 h-40 rounded-full border-[6px] border-white bg-gray-50 overflow-hidden shadow-lg shrink-0">
                {portfolio.photo ? (
                  <Image
                    src={portfolio.photo}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="rounded-full w-full h-full"
                    width={200}
                    height={200}
                    unoptimized={true}
                    onError={(e) => console.error("Image failed to load:", e)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl text-[var(--color-green)] font-bold bg-[var(--color-white)]">
                    {profile.firstName?.[0]?.toUpperCase()}
                    {profile.lastName?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Name and Role */}
              <div className="mb-4 text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold text-[var(--color-black)] font-[family-name:var(--font-primary)] mb-2">
                  {profile.firstName} {profile.lastName}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-gray-600">
                  <span className="px-3 py-1 bg-[var(--color-green)]/10 text-[var(--color-green)] rounded-full text-sm font-bold uppercase tracking-wider">
                    {profile.role}
                  </span>
                  {portfolio?.dto?.location && (
                    <span className="flex items-center gap-1 text-sm font-medium">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {portfolio?.dto?.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div className="bg-[var(--color-white)] p-6 rounded-2xl border border-gray-100 ">
                <h3 className="text-xl font-bold text-[var(--color-black)] mb-6 font-[family-name:var(--font-primary)] flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[var(--color-green)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                  Contact Info
                </h3>
                <div className="space-y-5">
                  <div className="group">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
                      Email
                    </p>
                    <p className="text-[var(--color-black)] font-medium break-all flex items-center gap-2 ">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {profile.email}
                    </p>
                  </div>
                  {portfolio?.dto?.mobile && (
                    <div className="group">
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
                        Phone
                      </p>
                      <p className="text-[var(--color-black)] font-medium flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        {portfolio?.dto?.mobile}
                      </p>
                    </div>
                  )}
                  {portfolio?.dto?.portfolioLink && (
                    <div className="group">
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
                        Portfolio
                      </p>
                      <a
                        href={portfolio?.dto?.portfolioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-blue)] hover:text-[var(--color-dark-blue)] font-medium break-all flex items-center gap-2 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - About & Details */}
            <div className="lg:col-span-2 space-y-6">
              {portfolio?.dto?.description ? (
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[var(--color-black)] mb-6 font-[family-name:var(--font-primary)] flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[var(--color-green)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    About Me
                  </h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-lg">
                    {portfolio?.dto?.description}
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300 text-center">
                  <p className="text-gray-500">No description provided yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
