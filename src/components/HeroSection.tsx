import React from 'react';
import coverImage from '../assets/images/cover_image.jpg';
import { 
  ArrowRight, Scale, Database, ChevronRight, FileText, Activity, 
  ExternalLink, Network, AlertTriangle, ShieldAlert, CheckCircle2, 
  Search, Lock, Download, Share2
} from 'lucide-react';

interface HeroSectionProps {
  onSelectCase: (caseId: string) => void;
  onNavigate: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectCase, onNavigate }) => {
  return (
    <section className="bg-white">
      {/* =========================================================================
          PROPUBLICA "THE BIG STORY" - LEAD INVESTIGATION PACKAGE
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {/* Editorial Series Kicker & Dateline */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#111111] pb-2.5 mb-6">
          <div className="flex items-center gap-2">
            <span className="pp-kicker text-[11px] font-bold">
              Criminal Justice & Systems Failure
            </span>
            <span className="text-stone-300">/</span>
            <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider font-sans-body">
              Special Forensic Investigation
            </span>
          </div>
          <div className="text-[11px] font-mono-data text-[#666666] uppercase">
            Seattle & King County, Washington • 2021–2026 Audit
          </div>
        </div>

        {/* Lead Headline and Subhead (Dek) */}
        <div className="max-w-5xl mb-6">
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-[3.65rem] font-bold text-[#111111] leading-[1.08] tracking-tight mb-4">
            The Competency Loophole: How King County Processed an Accused Litigant Through 283 Days of Confinement Without a Trial
          </h1>

          <p className="font-headline text-lg sm:text-xl lg:text-2xl text-[#333333] leading-relaxed italic max-w-4xl">
            An exhaustive forensic examination of eight interconnected proceedings reveals how administrative compression, unverified police CAD databases, and recursive RCW 10.77 restoration orders systematically displaced adversarial trials in Seattle courts.
          </p>
        </div>

        {/* Byline & Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#E5E5E1] mb-8 text-xs text-[#555555]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-sans-body">
            <span className="font-bold text-[#111111]">
              By Shane Lozenich & The Demopocrisy Investigative Task Force
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span>October 2026 Edition</span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="font-mono-data text-[#888888]">28 min read</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('vault')}
              className="text-[#E53935] hover:underline font-bold flex items-center gap-1 cursor-pointer text-xs uppercase tracking-wider"
            >
              <Database className="w-3.5 h-3.5" />
              <span>75+ Primary Exhibits</span>
            </button>
            <span className="text-stone-300">|</span>
            <span className="font-mono-data font-bold text-[#111111] bg-[#FAF9F6] border border-[#E5E5E1] px-1.5 py-0.5">
              D̄ = 89.75 / 100
            </span>
          </div>
        </div>

        {/* =========================================================================
            PROPUBLICA 2-COLUMN SPLIT FRONT PAGE GRID (65% / 35%)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          {/* LEFT COLUMN: Main Investigative Feature & Findings (Col 1-8) */}
          <div className="lg:col-span-8">
            {/* Primary Documentary Image with Broadsheet Caption */}
            <div className="mb-6">
              <div className="relative aspect-16/9 bg-stone-100 overflow-hidden border border-[#111111]">
                <img
                  src="https://images.unsplash.com/photo-1736773544038-532c8a6024fb?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  srcSet="https://images.unsplash.com/photo-1736773544038-532c8a6024fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D 500w, https://images.unsplash.com/photo-1736773544038-532c8a6024fb?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D 1200w"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  alt="Investigative Cover - Washington State Judicial Oversight Audit"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = coverImage;
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#111111] text-white px-2.5 py-1 text-[10px] font-mono-data uppercase font-bold tracking-wider">
                  Investigative Dossier
                </div>
              </div>
              <div className="pt-2 text-[11px] text-[#666666] font-sans-body flex items-baseline justify-between">
                <span>
                  Washington State justice system procedural audit and constitutional compliance investigation (2021–2026).
                </span>
                <span className="text-[10px] text-[#888888] font-mono-data shrink-0 ml-2">
                  Documentary Archive
                </span>
              </div>
            </div>

            {/* ProPublica "WHAT WE FOUND" Callout Box */}
            <div className="pp-callout mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#E53935]"></span>
                <h3 className="font-sans-body text-xs font-bold uppercase tracking-wider text-[#E53935]">
                  What the 5-Year Forensic Audit Found
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[#222222] font-sans-body">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#E53935] text-sm leading-none mt-0.5">1.</span>
                  <div>
                    <strong className="text-[#111111] font-bold">283 Days Incarceration Without Trial:</strong>{' '}
                    In Cause No. 22-1-05705-7, consecutive RCW 10.77 restoration orders reset the CrR 3.3 speedy trial clock, resulting in nearly ten months in King County Jail before the charge was dismissed without prejudice.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#E53935] text-sm leading-none mt-0.5">2.</span>
                  <div>
                    <strong className="text-[#111111] font-bold">Harborview Lumbar Puncture Discordance:</strong>{' '}
                    Spinal fluid analysis showed 87 white blood cells with 95% neutrophils—a cellular differential incompatible with neurosyphilis—yet cited in clinical notes to justify a 22-day involuntary psychotropic hold.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#E53935] text-sm leading-none mt-0.5">3.</span>
                  <div>
                    <strong className="text-[#111111] font-bold">The 'Extraction Bridge':</strong>{' '}
                    Unfiled municipal bookings and dismissed dockets were systematically imported across jurisdictions into subsequent Superior Court arraignments to justify elevated bail schedules and pretrial restrictions.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#E53935] text-sm leading-none mt-0.5">4.</span>
                  <div>
                    <strong className="text-[#111111] font-bold">Pre-Signed Judicial Restoration Orders:</strong>{' '}
                    Discovered court records reveal template restoration orders prepared and executed prior to evidentiary competency hearings, bypassing substantive judicial inquiry.
                  </div>
                </li>
              </ul>
            </div>

            {/* Broadsheet Narrative Article Body with Drop Cap */}
            <div className="prose max-w-none text-stone-800 font-sans-body leading-relaxed text-sm sm:text-base space-y-4">
              <p className="pp-dropcap">
                Between February 2021 and February 2026, Shane Lozenich was arrested six times, subjected to two involuntary psychiatric detentions, and held for more than 365 cumulative days in custodial facilities across King County, Washington. Yet across all eight interconnected proceedings, not a single charge was resolved through an adversarial jury trial.
              </p>

              <p>
                Instead, court transcripts, jail records, and hospital files obtain through public records and direct litigation show how the Washington criminal justice system deployed administrative alternatives—pre-charge booking holds, unverified law enforcement computer-aided dispatch (CAD) alerts, and consecutive 45-day competency evaluations under RCW 10.77—that effectively superseded substantive due process.
              </p>

              {/* ProPublica Broadsheet Pull Quote */}
              <div className="my-8 py-5 border-y-2 border-[#111111] bg-[#FAF9F6] px-6">
                <p className="font-headline italic text-lg sm:text-xl text-[#111111] leading-relaxed mb-2">
                  “The electronic database became the unimpeachable reality; the physical exculpatory evidence in our hands was treated by the court as a hallucination.”
                </p>
                <div className="text-xs font-mono-data text-[#666666] uppercase tracking-wider font-semibold">
                  — Demopocrisy Monograph, Chapter IV: Epistemic Inversion
                </div>
              </div>

              <p>
                The case study introduces the <strong>Stratigraphic Model</strong> of procedural analysis: treating legal proceedings as layered geological strata where flawed initial entries (such as a clerical miscoding of an expired civil order) harden into administrative dogma that subsequent judges, prosecutors, and public defenders treat as verified fact.
              </p>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#E5E5E1] mt-8">
              <button
                onClick={() => onNavigate('cases')}
                className="px-5 py-2.5 bg-[#E53935] hover:bg-[#C62828] text-white text-xs font-bold uppercase tracking-wider rounded-none transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Read All 8 Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('vault')}
                className="px-4 py-2.5 bg-white hover:bg-[#FAF9F6] border border-[#111111] text-[#111111] text-xs font-bold uppercase tracking-wider rounded-none transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Database className="w-3.5 h-3.5 text-[#E53935]" />
                <span>Search Evidence Vault (75+ Exhibits)</span>
              </button>

              <button
                onClick={() => onNavigate('reforms')}
                className="px-4 py-2.5 bg-[#FAF9F6] hover:bg-stone-200 text-[#111111] text-xs font-bold uppercase tracking-wider border border-[#E5E5E1] rounded-none transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>The 4 Directives (RCW 10.77)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: ProPublica "Investigation Dossier & Disclosures" (Col 9-12) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Box 1: ProPublica Ranked Disclosures List */}
            <div className="border border-[#111111] bg-[#FAF9F6] p-5">
              <div className="border-b border-[#111111] pb-2 mb-4 flex items-center justify-between">
                <span className="font-mono-data text-xs uppercase font-bold tracking-wider text-[#111111]">
                  Case Dossier Files
                </span>
                <span className="text-[10px] font-mono-data text-[#E53935] font-bold">
                  8 PROCEEDINGS
                </span>
              </div>

              <div className="space-y-4">
                {/* Item 1 */}
                <div
                  onClick={() => onSelectCase('case-22-1-04242-3')}
                  className="group cursor-pointer pb-3.5 border-b border-[#E5E5E1]"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline text-2xl font-bold text-[#E53935] leading-none">
                      01
                    </span>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider text-[#666666]">
                      King County Superior Court
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug">
                    Cause No. 22-1-04242-3: The 283-Day Pretrial Loop
                  </h4>
                  <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                    Alleged phone threat where audio was never produced; 10 months continuous detention under consecutive restoration stays.
                  </p>
                </div>

                {/* Item 2 */}
                <div
                  onClick={() => onSelectCase('case-658959')}
                  className="group cursor-pointer pb-3.5 border-b border-[#E5E5E1]"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline text-2xl font-bold text-[#E53935] leading-none">
                      02
                    </span>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider text-[#666666]">
                      Clinical Diagnostic Audit
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug">
                    Harborview Medical Center: 87-Cell CSF Discrepancy
                  </h4>
                  <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                    Spinal fluid neutrophilia incompatible with documented diagnosis; 22 days of involuntary Haldol administration.
                  </p>
                </div>

                {/* Item 3 */}
                <div
                  onClick={() => onSelectCase('case-21-1-04347-2')}
                  className="group cursor-pointer pb-3.5 border-b border-[#E5E5E1]"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline text-2xl font-bold text-[#E53935] leading-none">
                      03
                    </span>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider text-[#666666]">
                      King County Superior Court
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug">
                    Cause No. 21-1-04347-2: Unmarked Felony Seizure
                  </h4>
                  <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                    Warrantless phone seizure by unbadged agents; restoration order signed without appointed defense counsel present.
                  </p>
                </div>

                {/* Item 4 */}
                <div
                  onClick={() => onNavigate('analysis')}
                  className="group cursor-pointer pb-3.5 border-b border-[#E5E5E1]"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline text-2xl font-bold text-[#E53935] leading-none">
                      04
                    </span>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider text-[#666666]">
                      Social Network Analysis
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug">
                    The 6-Phase Institutional Defense Loop (57 Nodes)
                  </h4>
                  <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                    Network mapping showing extreme outdegree asymmetry (18:1) between prosecutors/agencies and the defense.
                  </p>
                </div>

                {/* Item 5 */}
                <div
                  onClick={() => onSelectCase('case-25-2-17456-5')}
                  className="group cursor-pointer"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline text-2xl font-bold text-[#E53935] leading-none">
                      05
                    </span>
                    <span className="text-[10px] font-mono-data uppercase tracking-wider text-[#666666]">
                      Civil Housing Proceeding
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug">
                    Retaliatory Eviction Post-KIRO 7 News Broadcast
                  </h4>
                  <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                    Unlawful detainer initiated 8 days after televised interview regarding public safety and police non-response.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: ProPublica "BY THE NUMBERS" Data Widget */}
            <div className="border border-[#E5E5E1] p-5 bg-white">
              <div className="border-b border-[#111111] pb-2 mb-4">
                <span className="font-mono-data text-xs uppercase font-bold tracking-wider text-[#111111]">
                  Investigation by the Numbers
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-[#E5E5E1] pb-3">
                  <div className="font-headline text-3xl font-black text-[#E53935]">
                    89.75
                  </div>
                  <div className="text-[11px] font-bold text-[#111111] font-sans-body uppercase">
                    Mean Dₖ Score
                  </div>
                  <div className="text-[10px] text-[#666666]">
                    Scale of 0–100
                  </div>
                </div>

                <div className="border-b border-[#E5E5E1] pb-3">
                  <div className="font-headline text-3xl font-black text-[#111111]">
                    283
                  </div>
                  <div className="text-[11px] font-bold text-[#111111] font-sans-body uppercase">
                    Detention Days
                  </div>
                  <div className="text-[10px] text-[#666666]">
                    Single cause without trial
                  </div>
                </div>

                <div>
                  <div className="font-headline text-3xl font-black text-[#E53935]">
                    75+
                  </div>
                  <div className="text-[11px] font-bold text-[#111111] font-sans-body uppercase">
                    Court Exhibits
                  </div>
                  <div className="text-[10px] text-[#666666]">
                    Primary source documents
                  </div>
                </div>

                <div>
                  <div className="font-headline text-3xl font-black text-[#111111]">
                    31
                  </div>
                  <div className="text-[11px] font-bold text-[#111111] font-sans-body uppercase">
                    Statutory Reforms
                  </div>
                  <div className="text-[10px] text-[#666666]">
                    Across 4 key directives
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: ProPublica Public Interest / Tip Line Box */}
            <div className="border border-[#111111] bg-[#111111] text-white p-5">
              <div className="flex items-center gap-2 mb-2 text-[#E53935]">
                <ShieldAlert className="w-4 h-4 text-[#E53935]" />
                <span className="font-mono-data text-xs uppercase font-bold tracking-wider text-white">
                  Public Interest Whistleblower
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Do you have records, transcripts, or information regarding RCW 10.77 pre-signed competency orders or database sync failures in Washington state courts?
              </p>
              <button
                onClick={() => onNavigate('vault')}
                className="w-full py-2 bg-[#E53935] hover:bg-[#C62828] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center block"
              >
                Access Public Evidence Vault →
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROPUBLICA "DATA APPS & FORENSIC TOOLS" SECTION
        ========================================================================= */}
        <div className="border-t-2 border-[#111111] pt-8 mb-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <span className="pp-kicker text-xs">Interactive Journalism & Methodology</span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
                Forensic Data Apps & Investigative Tools
              </h2>
            </div>
            <span className="text-xs font-mono-data text-[#666666]">
              Explore Primary Datasets & Mathematical Models
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Tool 1: Evidence Vault */}
            <div 
              onClick={() => onNavigate('vault')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-[#FAF9F6] p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-3">
                  <span className="font-bold text-[#E53935] flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>APP: VAULT EXPLORER</span>
                  </span>
                  <span className="text-[#888888]">75+ PDFs</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#111111] group-hover:text-[#E53935] mb-2 leading-snug">
                  Primary Source Evidence Vault
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Full text archive of initial complaints, dismissal orders, CSF laboratory panels, unfiled booking sheets, and the complete 2026 Master Monograph.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E1] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#E53935]">
                <span>Launch Search Tool</span>
                <span>→</span>
              </div>
            </div>

            {/* Tool 2: Discrepancy Formula */}
            <div 
              onClick={() => onNavigate('analysis')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-[#FAF9F6] p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-3">
                  <span className="font-bold text-[#E53935] flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5" />
                    <span>METRIC: Dₖ FORMULA</span>
                  </span>
                  <span className="text-[#888888]">D̄ = 89.75</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#111111] group-hover:text-[#E53935] mb-2 leading-snug">
                  Systemic Discrepancy Calculator
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Mathematical indexing of due process violations across predictability, accountability, and constitutional deviation vectors.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E1] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#E53935]">
                <span>View Formula & Matrix</span>
                <span>→</span>
              </div>
            </div>

            {/* Tool 3: Theoretical Models */}
            <div 
              onClick={() => onNavigate('models')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-[#FAF9F6] p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-3">
                  <span className="font-bold text-[#E53935] flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>THEORY: 4 MODELS</span>
                  </span>
                  <span className="text-[#888888]">Stratigraphic</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#111111] group-hover:text-[#E53935] mb-2 leading-snug">
                  Procedural Hardening Models
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Stratigraphic 6-layer hardening, 7-step institutional processing cycle, and epistemic inversion split-screen framework.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E1] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#E53935]">
                <span>Explore Theoretical Models</span>
                <span>→</span>
              </div>
            </div>

            {/* Tool 4: SNA Network Graph */}
            <div 
              onClick={() => onNavigate('network')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-[#FAF9F6] p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-3">
                  <span className="font-bold text-[#E53935] flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5" />
                    <span>NETWORK: 57 NODES</span>
                  </span>
                  <span className="text-[#888888]">18:1 Asymmetry</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#111111] group-hover:text-[#E53935] mb-2 leading-snug">
                  Systems Topology & Network Map
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Interactive D3/Kumu topological graph exposing structural bridges, diagnostic epicenters, and harm vectors.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E5E5E1] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#E53935]">
                <span>Launch Interactive Map</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROPUBLICA SERIES ARCHIVE: THE 8 CASE DOCKETS
        ========================================================================= */}
        <div className="border-t-2 border-[#111111] pt-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="pp-kicker text-xs">Series Index // Complete Case Docket</span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
                The Eight Case Studies in Detail
              </h2>
            </div>
            <button
              onClick={() => onNavigate('cases')}
              className="text-xs font-bold text-[#E53935] hover:underline flex items-center gap-1 cursor-pointer uppercase tracking-wider font-sans-body"
            >
              <span>View Master Case Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Case 1 */}
            <div
              onClick={() => onSelectCase('case-658931')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">CASE 658931</span>
                  <span className="text-[#E53935] font-bold">D: 88</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  Seattle Municipal Court • 2021
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  Pre-Charge Custodial Arrest
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  Overnight hold executed for alleged order violation, but City Attorney never filed an initiating complaint.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>

            {/* Case 2 */}
            <div
              onClick={() => onSelectCase('case-658959')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">CASE 658959</span>
                  <span className="text-[#E53935] font-bold">D: 92</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  Harborview / SMC • 2021
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  Undocumented Medical Hold
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  Dismissed without prejudice followed by undocumented transfer to Harborview for 22 days of involuntary Haldol.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>

            {/* Case 3 */}
            <div
              onClick={() => onSelectCase('case-660121')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">CASE 660121</span>
                  <span className="text-[#E53935] font-bold">D: 85</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  Seattle Municipal Court • 2021
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  CAD Database Sync Error
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  Multi-vehicle tactical arrest executed on database flag showing expired order as active. Real-time consent ignored.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>

            {/* Case 4 */}
            <div
              onClick={() => onSelectCase('case-664676')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">CASE 664676</span>
                  <span className="text-[#E53935] font-bold">D: 89</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  Seattle Municipal Court • 2022
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  Grocery Store Interception
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  Arrested leaving apartment despite roommate's explicit in-person consent. Stricken arraignment, no complaint filed.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>

            {/* Case 5 */}
            <div
              onClick={() => onSelectCase('case-21-1-04347-2')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">21-1-04347-2</span>
                  <span className="text-[#E53935] font-bold">D: 90</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  King County Superior Court • 2021
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  Anonymous Felony Seizure
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  Unmarked vehicles, warrantless phone seizure. 45-day restoration order signed without defense counsel present.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>

            {/* Case 6 */}
            <div
              onClick={() => onSelectCase('case-22-1-04242-3')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">22-1-04242-3</span>
                  <span className="text-[#E53935] font-bold">D: 94</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  King County Superior Court • 2022
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  The Governor's Threat Case
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  10 months continuous pretrial detention for alleged voicemail never produced in discovery. Contaminated water and cellmate assault.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>

            {/* Case 7 */}
            <div
              onClick={() => onSelectCase('case-25-2-17456-5')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">25-2-17456-5</span>
                  <span className="text-[#E53935] font-bold">D: 87</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  KCSC Civil Housing • 2025
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  Retaliatory Eviction
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  PDA landlord blocked third-party rent funds. Eviction served 8 days after KIRO 7 investigative neighborhood broadcast.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>

            {/* Case 8 */}
            <div
              onClick={() => onSelectCase('case-26-2-01443-4')}
              className="border border-[#E5E5E1] hover:border-[#111111] bg-white p-5 cursor-pointer group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">26-2-01443-4</span>
                  <span className="text-[#E53935] font-bold">D: 95</span>
                </div>
                <div className="text-[10px] font-mono-data uppercase text-[#888888] mb-1">
                  KCSC Quiet Title • 2026
                </div>
                <h3 className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] leading-snug mb-2">
                  Seattle-Bremerton Majorat
                </h3>
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  Quiet Title action asserting recorded ancestral covenants, challenging quasi-governmental immunity shields (Port of Seattle, KCRHA).
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#111111] group-hover:text-[#E53935] pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <span>Read Full Docket</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
