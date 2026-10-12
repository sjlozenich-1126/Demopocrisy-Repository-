import React, { useState } from 'react';
import { MASTER_TIMELINE, TimelineEvent } from '../data/timelineData';
import { DOCUMENTS_ARCHIVE, LegalDocument } from '../data/documentsData';
import { CASES_DATA } from '../data/casesData';
import { 
  Calendar, ShieldAlert, AlertTriangle, FileText, ExternalLink, 
  Clock, MapPin, Building, Activity, Quote
} from 'lucide-react';

interface TimelineViewProps {
  onInspectDocumentByTitle: (title: string) => void;
  onSelectCase: (caseId: string) => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  onInspectDocumentByTitle,
  onSelectCase,
}) => {
  const [selectedYearRange, setSelectedYearRange] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredEvents = MASTER_TIMELINE.filter((ev) => {
    if (selectedYearRange === '2020_2021' && ev.year > 2021) return false;
    if (selectedYearRange === '2022_2023' && (ev.year < 2022 || ev.year > 2023)) return false;
    if (selectedYearRange === '2024_2025' && (ev.year < 2024 || ev.year > 2025)) return false;
    if (selectedYearRange === '2026' && ev.year !== 2026) return false;

    if (selectedCategory !== 'all' && ev.category !== selectedCategory) return false;

    return true;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'arrest':
        return 'text-[#E53935] bg-[#FFEBEE] border-[#E53935]/30';
      case 'medical':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'judicial':
        return 'text-stone-800 bg-stone-100 border-stone-300';
      case 'housing':
        return 'text-indigo-700 bg-indigo-50 border-indigo-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Editorial Section Header */}
      <div className="border-b-2 border-[#111111] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="pp-kicker mb-1.5 block">Chronology / Investigative Sequence</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#111111]">
              The Master Forensic Timeline (2020–2026)
            </h2>
          </div>
          <div className="text-xs font-mono-data bg-[#FAF9F6] border border-[#E5E5E1] px-2.5 py-1 text-[#111111] font-bold">
            5+ Years Mapped • 20+ Key Milestones
          </div>
        </div>
        <p className="text-sm text-[#444444] mt-2 max-w-3xl font-sans-body">
          An immutable, chronological account reconstructing six arrests, two involuntary psychiatric detentions, serial competency loops, retaliatory eviction proceedings, and subsequent sovereign quiet title and federal filings.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-[#FAF9F6] p-5 border border-[#111111] mb-8 space-y-4">
        {/* Year Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 font-mono-data text-xs">
          <span className="uppercase tracking-wider text-[#666666] font-bold mr-1">
            Epoch:
          </span>
          {[
            { id: 'all', label: 'All Years (2020–2026)' },
            { id: '2020_2021', label: '2020–2021: Lockdown & First Arrests' },
            { id: '2022_2023', label: '2022–2023: Governor Case & 10 Mo. Jail' },
            { id: '2024_2025', label: '2024–2025: KIRO News & Eviction Whiplash' },
            { id: '2026', label: '2026: Restored Competency & Title' },
          ].map((epoch) => (
            <button
              key={epoch.id}
              onClick={() => setSelectedYearRange(epoch.id)}
              className={`px-3 py-1.5 uppercase font-bold text-[11px] transition-colors cursor-pointer whitespace-nowrap ${
                selectedYearRange === epoch.id
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-[#555555] hover:text-[#111111] border border-[#E5E5E1]'
              }`}
            >
              {epoch.label}
            </button>
          ))}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E5E5E1] font-mono-data text-xs">
          <span className="uppercase tracking-wider text-[#666666] font-bold mr-1">
            Category:
          </span>
          {[
            { id: 'all', label: 'All Event Types' },
            { id: 'arrest', label: 'Custodial Arrests' },
            { id: 'judicial', label: 'Court Dockets & Competency' },
            { id: 'medical', label: 'Hospitalization & Treatment' },
            { id: 'housing', label: 'Housing & Eviction' },
            { id: 'investigation', label: 'Surveillance & Breaches' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 uppercase tracking-wider text-[11px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#E53935] text-white'
                  : 'bg-white text-[#666666] hover:text-[#111111] border border-[#E5E5E1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-[#111111] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {filteredEvents.map((event) => {
          return (
            <div key={event.id} className="relative group">
              {/* Timeline Node Bullet */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 border border-white transition-transform group-hover:scale-125 ${
                event.category === 'arrest' ? 'bg-[#E53935]' :
                event.category === 'medical' ? 'bg-amber-600' :
                event.category === 'housing' ? 'bg-indigo-600' :
                'bg-[#111111]'
              }`} />

              {/* Event Card */}
              <div className="bg-white p-6 border border-[#E5E5E1] hover:border-[#111111] transition-all font-sans-body">
                {/* Meta Top Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-data text-[#666666] mb-2 border-b border-[#E5E5E1] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#111111]">{event.date}</span>
                    <span>•</span>
                    <span className="capitalize">{event.category}</span>
                    {event.caseNumber && (
                      <>
                        <span>•</span>
                        <span className="text-[#E53935] font-bold">{event.caseNumber}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#888888]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-headline text-2xl font-bold text-[#111111] mb-3 leading-snug">
                  {event.title}
                </h3>

                {/* Narrative Description */}
                <p className="text-sm text-[#444444] leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Procedural Anomaly Callout Box */}
                {event.proceduralAnomaly && (
                  <div className="pp-callout mb-3 text-xs">
                    <div className="font-bold text-[#E53935] uppercase font-mono-data mb-0.5">
                      Procedural Anomaly Observed:
                    </div>
                    <div className="text-[#111111] leading-relaxed">
                      {event.proceduralAnomaly}
                    </div>
                  </div>
                )}

                {/* Litigant Quote if available */}
                {event.quote && (
                  <div className="italic font-headline text-base text-[#333333] border-l-3 border-[#E53935] pl-3 py-1 my-3 bg-[#FAF9F6]">
                    "{event.quote}"
                  </div>
                )}

                {/* Footer linking to document or case */}
                <div className="pt-3 border-t border-[#E5E5E1] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-data">
                  {event.evidenceRef && (
                    <button
                      onClick={() => onInspectDocumentByTitle(event.evidenceRef!)}
                      className="text-[#E53935] hover:underline font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Evidence Reference: {event.evidenceRef}</span>
                    </button>
                  )}
                  {event.caseNumber && (
                    <button
                      onClick={() => {
                        const matchedCase = CASES_DATA.find((c) => 
                          c.caseNumber.includes(event.caseNumber!.split(' ')[0])
                        );
                        if (matchedCase) onSelectCase(matchedCase.id);
                      }}
                      className="text-[#111111] hover:text-[#E53935] font-bold font-sans-body uppercase tracking-wider text-[11px] ml-auto cursor-pointer"
                    >
                      Inspect Case Record →
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
