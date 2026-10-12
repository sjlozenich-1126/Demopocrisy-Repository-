import React from 'react';
import { Shield, Database, Scale, ExternalLink, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#111111] text-[#CCCCCC] border-t-4 border-[#BA1A1A] pt-12 pb-8 font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: ProPublica Mission Statement & Wordmark */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-headline text-3xl font-black text-white tracking-tight uppercase">
                Demopocrisy
              </span>
              <span className="w-2 h-2 bg-[#BA1A1A] inline-block mb-1"></span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-4 max-w-md">
              An independent forensic legal investigation in the public interest, dedicated to exposing systemic due process failures, administrative compression, unverified police databases, and competency loops in Washington state courts.
            </p>
            <div className="text-[11px] font-mono-data text-stone-500">
              Published by the Demopocrisy Forensic Task Force • Seattle, Washington
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            {/* Col 1: Investigations */}
            <div>
              <h4 className="font-mono-data text-[11px] uppercase tracking-wider text-white font-bold mb-3 border-b border-stone-800 pb-1.5 text-[#BA1A1A]">
                Investigations
              </h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <button
                    onClick={() => onNavigate('overview')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    The 283-Day Competency Loop
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('cases')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    The 8 Court Proceedings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('analysis')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Harborview CSF Lab Audit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('analysis')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    The 6-Phase Institutional Loop
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('timeline')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Master Chronology (2020–2026)
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Data & Vault */}
            <div>
              <h4 className="font-mono-data text-[11px] uppercase tracking-wider text-white font-bold mb-3 border-b border-stone-800 pb-1.5 text-[#BA1A1A]">
                Forensic Data
              </h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <button
                    onClick={() => onNavigate('vault')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Evidence Vault (75+ Exhibits)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('analysis')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Systemic Discrepancy Index (Dₖ)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('analysis')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Social Network Graph (57 Nodes)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('reforms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Four Statutory Directives
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('reforms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    31 Policy Recommendations
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Public Interest */}
            <div>
              <h4 className="font-mono-data text-[11px] uppercase tracking-wider text-white font-bold mb-3 border-b border-stone-800 pb-1.5 text-[#BA1A1A]">
                Public Interest
              </h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <span className="text-stone-300 font-semibold block">RCW 42.56 Public Records</span>
                  <span className="text-[11px] text-stone-500">All court orders verified</span>
                </li>
                <li className="pt-1">
                  <span className="text-stone-300 font-semibold block">Mean Discrepancy Index</span>
                  <span className="text-[11px] font-mono-data text-[#BA1A1A] font-bold">D̄ = 89.75 / 100</span>
                </li>
                <li className="pt-1">
                  <button
                    onClick={() => onNavigate('vault')}
                    className="text-[#BA1A1A] hover:underline font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>Send Evidence / Tip</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier: ProPublica Colophon & Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-sans-body">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 Demopocrisy Forensic Task Force.</span>
            <span className="hidden sm:inline">•</span>
            <span>Journalism & Forensic Legal Research in the Public Interest.</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-data">
            <button
              onClick={() => onNavigate('overview')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              TOP
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('vault')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              VAULT
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('reforms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              REFORMS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
