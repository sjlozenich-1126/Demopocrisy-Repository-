import React, { useState } from 'react';
import { CONSOLIDATED_REFORMS_LIST } from '../data/forensicAnalysisData';
import { Landmark, BookOpen, CheckCircle2, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

export const PolicyReformsView: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('A');

  const activeDomain = CONSOLIDATED_REFORMS_LIST.find((d) => d.domainLetter === selectedDomain) || CONSOLIDATED_REFORMS_LIST[0];

  return (
    <div className="w-full bg-white font-sans-body min-h-[calc(100vh-140px)] flex flex-col">
      {/* ProPublica Dual-Column Editorial Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 border-b border-[#E5E5E1]">
        {/* Left Column: The 4 Core Directives (lg:col-span-7) */}
        <div className="lg:col-span-7 px-6 sm:px-10 lg:px-12 py-10 lg:py-14 border-r border-[#E5E5E1] overflow-y-auto">
          <div className="max-w-2xl">
            <span className="pp-kicker mb-2 block">Legislative & Remedial Agenda // Directive Framework</span>
            <h1 className="font-headline text-3xl sm:text-5xl font-bold text-[#111111] leading-tight mb-4">
              Four Statutory Policy Directives to Dismantle Competency Loops
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#333333] mb-10 font-sans-body">
              Concrete legislative proposals to amend the Revised Code of Washington (RCW) and Washington Court Rules (CrR) to prevent the substitution of administrative detention for constitutional due process.
            </p>

            {/* Directive Stack with ProPublica Bold Numbering */}
            <div className="space-y-8">
              <div className="border-t border-[#E5E5E1] pt-6 grid grid-cols-[60px_1fr] sm:grid-cols-[70px_1fr] gap-3 items-start">
                <div className="font-headline text-3xl sm:text-4xl font-bold text-[#BA1A1A] leading-none">
                  01
                </div>
                <div>
                  <div className="text-[10px] font-mono-data font-bold text-[#BA1A1A] uppercase tracking-wider mb-1">
                    Statutory Amendment • RCW 10.77
                  </div>
                  <h3 className="font-headline text-xl font-bold text-[#111111] mb-2 leading-snug">
                    Prohibition of Pre-Signed Competency Orders
                  </h3>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Statutory amendment to RCW Chapter 10.77 explicitly banning template or ex parte competency restoration orders, mandating physical defense counsel presence and substantive on-the-record judicial findings prior to any restoration commitment.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E5E1] pt-6 grid grid-cols-[60px_1fr] sm:grid-cols-[70px_1fr] gap-3 items-start">
                <div className="font-headline text-3xl sm:text-4xl font-bold text-[#BA1A1A] leading-none">
                  02
                </div>
                <div>
                  <div className="text-[10px] font-mono-data font-bold text-[#BA1A1A] uppercase tracking-wider mb-1">
                    Administrative Mandate • Law Enforcement CAD
                  </div>
                  <h3 className="font-headline text-xl font-bold text-[#111111] mb-2 leading-snug">
                    Human-in-the-Loop Database Verification
                  </h3>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Statutory requirement that dispatch personnel and arresting officers perform real-time human verification of protection order expiration and modification dates before executing tactical custodial arrests based on automated electronic flags.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E5E1] pt-6 grid grid-cols-[60px_1fr] sm:grid-cols-[70px_1fr] gap-3 items-start">
                <div className="font-headline text-3xl sm:text-4xl font-bold text-[#BA1A1A] leading-none">
                  03
                </div>
                <div>
                  <div className="text-[10px] font-mono-data font-bold text-[#BA1A1A] uppercase tracking-wider mb-1">
                    Criminal Procedure Rule • CrR 8.3(b)
                  </div>
                  <h3 className="font-headline text-xl font-bold text-[#111111] mb-2 leading-snug">
                    Mandatory Dismissal for Discovery Suppression
                  </h3>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Automatic dismissal with prejudice under Washington CrR 8.3(b) if prosecuting agencies fail to produce foundational digital evidence (such as initiating voicemail audio or CAD logs) 30 days prior to seeking a competency stay.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E5E1] pt-6 grid grid-cols-[60px_1fr] sm:grid-cols-[70px_1fr] gap-3 items-start">
                <div className="font-headline text-3xl sm:text-4xl font-bold text-[#BA1A1A] leading-none">
                  04
                </div>
                <div>
                  <div className="text-[10px] font-mono-data font-bold text-[#BA1A1A] uppercase tracking-wider mb-1">
                    Quasi-Governmental Oversight • RCW 35.21
                  </div>
                  <h3 className="font-headline text-xl font-bold text-[#111111] mb-2 leading-snug">
                    Public Development Authority (PDA) Civil Rights Oversight
                  </h3>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Prohibiting municipal Public Development Authorities (such as SCIDpda) from blocking third-party rental relief funds or executing retaliatory unlawful detainer actions against tenants exercising First Amendment protected speech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 31 Institutional Recommendations (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-[#FAF9F6] px-6 sm:px-10 lg:px-12 py-10 lg:py-14 overflow-y-auto">
          {/* Pane Title Bar */}
          <div className="border-b border-[#111111] pb-3 mb-6 flex items-center justify-between">
            <span className="font-mono-data text-xs uppercase font-bold tracking-wider text-[#111111]">
              Consolidated Reform Agenda
            </span>
            <span className="text-xs font-mono-data text-[#BA1A1A] font-bold">
              31 RECOMMENDATIONS
            </span>
          </div>

          {/* Domain Selector Ribbon */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {CONSOLIDATED_REFORMS_LIST.map((d) => (
              <button
                key={d.domainLetter}
                onClick={() => setSelectedDomain(d.domainLetter)}
                className={`px-2.5 py-1 text-xs font-mono-data font-bold transition-colors cursor-pointer ${
                  selectedDomain === d.domainLetter
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-[#555555] hover:text-[#111111] border border-[#E5E5E1]'
                }`}
              >
                Domain {d.domainLetter}
              </button>
            ))}
          </div>

          {/* Active Domain Section */}
          <div className="mb-8">
            <h4 className="font-headline text-xl font-bold text-[#111111] border-l-4 border-[#BA1A1A] pl-3 mb-4 leading-tight">
              {activeDomain.domainTitle}
            </h4>

            <ul className="space-y-3 font-sans-body">
              {activeDomain.reforms.map((reform, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm leading-relaxed text-[#333333] pb-3 border-b border-[#E5E5E1] flex gap-2.5"
                >
                  <span className="text-[#BA1A1A] font-bold select-none shrink-0 font-mono-data">→</span>
                  <span>{reform}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ProPublica Broadsheet Quote Box */}
          <div className="border border-[#111111] bg-[#111111] text-white p-6 mt-8">
            <span className="pp-kicker text-white mb-2 block text-[10px]">
              Forensic Monograph • Chapter VI
            </span>
            <blockquote className="font-headline text-lg italic text-[#F9F8F6] leading-relaxed mb-3">
              “When institutions compress the docket to flat entries, the citizen's counter-archive preserves the missing texture: the real-time text invitations and the unbroken chain of custody.”
            </blockquote>
            <div className="text-[10px] font-mono-data text-[#888888] tracking-widest uppercase">
              Re-Inflating the Z-Axis of Judicial Dockets
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
