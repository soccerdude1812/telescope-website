import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SponsorButton from "@/components/SponsorButton";

export const metadata: Metadata = {
  title: "Our Sponsors — MVHS Astronomy Telescope Project",
  description:
    "Thank you to the organizations supporting our student-built autonomous telescope. Interested in sponsoring? Get in touch.",
};

const sponsors = [
  {
    name: "SendCutSend",
    logo: "/sponsors/sendcutsend.svg",
    url: "https://sendcutsend.com",
    description:
      "Online laser cutting, waterjet cutting, and metal fabrication services. SendCutSend is helping us manufacture precision telescope components.",
  },
];

export default function SponsorsPage() {
  return (
    <section className="relative min-h-screen bg-[#030712] pt-28 sm:pt-32 pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-slate-300">Sponsors</span>
        </div>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Sponsors
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            This project wouldn&apos;t be possible without the generous support of
            these organizations. Thank you for helping us bring the night sky to
            the Bay Area community.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${sponsor.name} website`}
              className="group p-8 rounded-2xl bg-[#0a0f1a] border border-white/[0.08] hover:border-white/[0.15] hover:bg-[#0d1420] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-full h-20 flex items-center justify-center mb-6">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={200}
                  height={60}
                  className="max-h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {sponsor.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {sponsor.description}
              </p>
              <span className="mt-4 text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-200 flex items-center gap-1">
                Visit website
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Interested in Sponsoring CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0a0f1a] border border-white/[0.08] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Interested in Sponsoring?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            We&apos;re always looking for partners who believe in STEM education and
            community astronomy. Whether it&apos;s financial support, in-kind
            donations, or materials, every contribution helps us build something
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SponsorButton
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </SponsorButton>
            <Link
              href="/#support"
              className="px-8 py-3.5 text-sm font-medium text-slate-300 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
