import React, { useState } from 'react';
import { Search, Menu, X, ShieldAlert, ArrowRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Lead Investigation' },
    { id: 'cases', label: 'The 8 Dockets' },
    { id: 'vault', label: 'Evidence Vault (75+)' },
    { id: 'analysis', label: 'Forensic Audit (Dₖ)' },
    { id: 'timeline', label: 'Chronology' },
    { id: 'reforms', label: 'Policy Reforms' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E1] transition-all shadow-xs">
      {/* Tier 1: ProPublica Top Utility Bar */}
      <div className="bg-[#FAF9F6] border-b border-[#E5E5E1] text-[11px] font-sans-body py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[#555555]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#BA1A1A] tracking-wider uppercase text-[10px]">
              Forensic Legal Investigation
            </span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="hidden md:inline text-[#666666]">
              King County, WA Due Process & Competency Loop Audit (2021–2026)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden lg:inline text-[#666666]">
              Shane Lozenich Case Study
            </span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <button
              onClick={() => handleNavClick('vault')}
              className="text-[#111111] hover:text-[#BA1A1A] font-medium transition-colors cursor-pointer hidden sm:inline"
            >
              75+ Court Documents & Exhibits
            </button>
            <span className="text-stone-300">|</span>
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 font-medium text-[#111111] hover:text-[#BA1A1A] transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3 text-[#BA1A1A]" />
              <span>Search Vault</span>
              <kbd className="hidden md:inline bg-stone-200/80 px-1 py-0.2 rounded-xs text-[9px] text-stone-600 font-mono-data">⌘K</kbd>
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: ProPublica Main Broadsheet Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#E5E5E1]">
        <div>
          <button
            onClick={() => handleNavClick('overview')}
            className="text-left group cursor-pointer focus:outline-none block"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-headline text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#111111] group-hover:text-[#BA1A1A] transition-colors uppercase leading-none">
                Demopocrisy
              </span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#BA1A1A] inline-block mb-1 ml-0.5"></span>
            </div>
          </button>
          <p className="font-headline italic text-xs sm:text-sm text-[#444444] mt-1.5 max-w-2xl leading-snug">
            Forensic Legal Case Study & Due Process Systems Analysis in the Public Interest
          </p>
        </div>

        {/* Right side Masthead actions & series marker */}
        <div className="hidden sm:flex items-center gap-3 self-end pb-1">
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#888888] font-mono-data">
              Project Series
            </div>
            <div className="text-xs font-semibold text-[#111111]">
              King County Competency Loop
            </div>
          </div>
          <button
            onClick={() => handleNavClick('reforms')}
            className="px-3.5 py-1.5 bg-[#BA1A1A] hover:bg-[#991414] text-white text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
          >
            <span>Reform Agenda</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tier 3: ProPublica Sticky Section Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 border-b border-[#111111]">
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-bold uppercase tracking-wider">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-3.5 transition-colors cursor-pointer whitespace-nowrap text-[11px] lg:text-xs ${
                    isActive
                      ? 'text-[#BA1A1A] font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#BA1A1A]'
                      : 'text-[#111111] hover:text-[#BA1A1A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Stats or Tag */}
          <div className="hidden md:flex items-center gap-3 text-xs font-mono-data">
            <span className="text-[#888888]">MEAN Dₖ:</span>
            <span className="font-bold text-[#BA1A1A] bg-[#FAF9F6] border border-[#E5E5E1] px-1.5 py-0.5">89.75 / 100</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center justify-between w-full">
            <span className="text-[11px] uppercase font-bold text-[#BA1A1A] tracking-wider">
              {navItems.find((n) => n.id === activeTab)?.label || 'Sections'}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111111] hover:text-[#BA1A1A] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b-2 border-[#111111] px-5 py-4 shadow-md animate-in slide-in-from-top-1">
          <div className="flex flex-col gap-2.5 text-xs font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-1 transition-colors cursor-pointer border-b border-[#E5E5E1] ${
                  activeTab === item.id
                    ? 'text-[#BA1A1A] pl-2 border-l-2 border-[#BA1A1A] bg-white'
                    : 'text-[#111111] hover:text-[#BA1A1A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-[#555555]">
              <span>75+ Evidence Exhibits</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="text-[#BA1A1A] font-bold flex items-center gap-1"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search (⌘K)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
