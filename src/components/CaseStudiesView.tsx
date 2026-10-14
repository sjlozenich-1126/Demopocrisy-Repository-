import React, { useState } from 'react';
import { CASES_DATA, CaseStudy } from '../data/casesData';
import { DOCUMENTS_ARCHIVE, LegalDocument } from '../data/documentsData';
import { 
  FileText, ExternalLink, ShieldAlert, AlertTriangle, Scale, CheckCircle2, 
  ArrowLeft, Search, Calendar, User, Building, Clock, ChevronRight
} from 'lucide-react';

interface CaseStudiesViewProps {
  selectedCaseId: string | null;
  onSelectCase: (caseId: string | null) => void;
  onInspectDocument: (doc: LegalDocument) => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({
  selectedCaseId,
  onSelectCase,
  onInspectDocument,
}) => {
  const [filterCourt, setFilterCourt] = useState<string>('all');
  const [activeSectionTab, setActiveSectionTab] = useState<'summary' | 'collapse' | 'violations' | 'documents' | 'reforms'>('summary');

  const selectedCase = selectedCaseId
    ? CASES_DATA.find((c) => c.id === selectedCaseId) || CASES_DATA[0]
    : null;

  const filteredCases = CASES_DATA.filter((c) => {
    if (filterCourt === 'all') return true;
    if (filterCourt === 'municipal') return c.court.includes('Municipal');
    if (filterCourt === 'superior') return c.court.includes('Superior') && !c.cause.includes('Unlawful Detainer') && !c.cause.includes('Quiet Title');
    if (filterCourt === 'civil') return c.cause.includes('Unlawful Detainer') || c.cause.includes('Quiet Title');
    if (filterCourt === 'federal') return c.jurisdiction.includes('Federal');
    return true;
  });

  // Get documents for selected case
  const caseDocuments = selectedCase
    ? DOCUMENTS_ARCHIVE.filter(
        (doc) =>
          doc.caseNumber === selectedCase.caseNumber ||
          doc.caseNumber.includes(selectedCase.caseNumber.split(' ')[0]) ||
          (selectedCase.caseNumber.includes('664676') && doc.caseNumber.includes('664676')) ||
          (selectedCase.caseNumber.includes('21-1-04347-2') && doc.caseNumber.includes('21-1-04347-2')) ||
          (selectedCase.caseNumber.includes('22-1-04242-3') && doc.caseNumber.includes('22-1-04242'))
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Editorial Header */}
      <div className="border-b-2 border-[#111111] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="pp-kicker mb-1.5 block">Investigative Series / Docket Mapping</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#111111]">
              The Eight Interconnected Proceedings
            </h2>
          </div>
          {selectedCase && (
            <button
              onClick={() => onSelectCase(null)}
              className="text-xs font-sans-body uppercase font-bold text-[#111111] hover:text-[#E53935] flex items-center gap-1.5 py-1.5 px-3 bg-white border border-[#111111] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Master Index (8 Proceedings)</span>
            </button>
          )}
        </div>
        <p className="text-sm text-[#444444] mt-2 max-w-3xl font-sans-body">
          Detailed procedural reconstructions of eight interconnected proceedings across Seattle Municipal Court, King County Superior Court, and Federal District Court (2021–2026), documenting how administrative shortcuts, unfiled complaints, and competency loops displaced substantive trials.
        </p>
      </div>

      {!selectedCase ? (
        /* MASTER CASE GRID VIEW */
        <div>
          {/* ProPublica Filter segment */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-2 border-b border-[#E5E5E1]">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Proceedings (8+)' },
                { id: 'municipal', label: 'Seattle Municipal (SMC)' },
                { id: 'superior', label: 'King County Superior (Felony)' },
                { id: 'civil', label: 'Civil / Housing / Title' },
                { id: 'federal', label: 'U.S. Federal Court' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setFilterCourt(filter.id)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                    filterCourt === filter.id
                      ? 'bg-[#111111] text-white'
                      : 'bg-[#FAF9F6] text-[#555555] hover:text-[#111111] border border-[#E5E5E1]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#666666] font-mono-data">
              Showing {filteredCases.length} mapped dockets
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((cs) => {
              return (
                <div
                  key={cs.id}
                  onClick={() => onSelectCase(cs.id)}
                  className="bg-white border border-[#E5E5E1] hover:border-[#111111] p-6 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between text-xs font-mono-data mb-3 border-b border-[#E5E5E1] pb-2">
                      <span className="text-[#111111] font-bold">{cs.caseNumber}</span>
                      <div className="flex items-center gap-1.5 text-[#E53935] font-bold">
                        <span>Score D:</span>
                        <span className="bg-[#FFEBEE] px-1.5 py-0.5 text-xs">{cs.discrepancyScore}/100</span>
                      </div>
                    </div>

                    <h3 className="font-headline text-xl font-bold text-[#111111] group-hover:text-[#E53935] transition-colors leading-tight mb-2">
                      {cs.title}
                    </h3>

                    <div className="text-xs text-[#777777] mb-3 flex flex-wrap gap-x-2 gap-y-1 font-mono-data">
                      <span>{cs.court}</span>
                      <span>•</span>
                      <span>{cs.yearRange}</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-[10px] font-bold font-mono-data uppercase tracking-wider text-[#666666] mb-1">
                        Primary Mechanism
                      </div>
                      <p className="text-xs text-[#444444] leading-relaxed line-clamp-2 font-sans-body">
                        {cs.primaryMechanism}
                      </p>
                    </div>

                    <div className="bg-[#FAF9F6] p-3 border-l-3 border-[#E53935] mb-4 text-xs">
                      <div className="text-[10px] font-bold font-mono-data uppercase tracking-wider text-[#E53935] mb-1">
                        Key Due Process Breach
                      </div>
                      <p className="text-xs text-[#222222] line-clamp-2 leading-relaxed font-sans-body">
                        {cs.violations[0]?.violation || cs.proceduralBreach}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E1] flex items-center justify-between text-xs font-mono-data text-[#666666]">
                    <span className="font-medium">{cs.documentCount} Linked Files</span>
                    <span className="text-[#E53935] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span className="font-sans-body uppercase tracking-wider text-[11px]">Examine Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* INDIVIDUAL CASE DOSSIER DEEP DIVE */
        <div>
          {/* Lead Header Banner */}
          <div className="bg-white border border-[#111111] p-6 lg:p-8 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono-data text-[#666666] mb-2">
                  <span className="text-[#E53935] font-bold">CASE FILE: {selectedCase.caseNumber}</span>
                  <span>•</span>
                  <span>{selectedCase.court}</span>
                  <span>•</span>
                  <span>{selectedCase.yearRange}</span>
                </div>
                <h1 className="font-headline text-3xl sm:text-4xl font-bold text-[#111111] leading-tight mb-3">
                  {selectedCase.title}
                </h1>
                <p className="text-sm sm:text-base text-[#333333] leading-relaxed font-sans-body">
                  {selectedCase.executiveSummary}
                </p>
              </div>

              {/* Discrepancy Score Meter */}
              <div className="bg-[#FAF9F6] border border-[#111111] p-4 text-center min-w-[170px]">
                <div className="text-[10px] uppercase tracking-widest text-[#666666] font-bold font-mono-data">
                  Discrepancy Score
                </div>
                <div className="font-headline text-4xl font-bold text-[#E53935] my-1">
                  {selectedCase.discrepancyScore}
                  <span className="text-sm text-[#888888] font-normal font-mono-data">/100</span>
                </div>
                <div className="text-[11px] text-[#666666] font-mono-data">
                  Operational Deviation
                </div>
              </div>
            </div>

            {/* Quick Metadata Definition Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E5E1] text-xs font-sans-body">
              <div>
                <span className="text-[#666666] block uppercase tracking-wider text-[10px] font-bold font-mono-data">Presiding Judge</span>
                <span className="text-[#111111] font-bold font-headline text-base mt-0.5 block">
                  {selectedCase.judges.join(', ')}
                </span>
              </div>
              <div>
                <span className="text-[#666666] block uppercase tracking-wider text-[10px] font-bold font-mono-data">Cause / Accusation</span>
                <span className="text-[#111111] font-medium mt-0.5 block">
                  {selectedCase.cause}
                </span>
              </div>
              <div>
                <span className="text-[#666666] block uppercase tracking-wider text-[10px] font-bold font-mono-data">Incarceration Window</span>
                <span className="text-[#111111] font-medium mt-0.5 block">
                  {selectedCase.incarcerationDates}
                </span>
              </div>
              <div>
                <span className="text-[#666666] block uppercase tracking-wider text-[10px] font-bold font-mono-data">Formal Disposition</span>
                <span className="text-[#E53935] font-bold mt-0.5 block">
                  {selectedCase.disposition}
                </span>
              </div>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex border-b border-[#111111] mb-8 overflow-x-auto gap-2 sm:gap-6 font-mono-data text-xs uppercase tracking-wider">
            {[
              { id: 'summary', label: 'Narrative & Origins' },
              { id: 'collapse', label: 'Procedural Collapse' },
              { id: 'violations', label: 'Constitutional Matrix' },
              { id: 'documents', label: `Evidentiary Files (${caseDocuments.length})` },
              { id: 'reforms', label: 'Required Reforms' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSectionTab(tab.id as any)}
                className={`py-3 px-2 font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeSectionTab === tab.id
                    ? 'border-[#E53935] text-[#E53935]'
                    : 'border-transparent text-[#666666] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: NARRATIVE & ORIGINS */}
          {activeSectionTab === 'summary' && (
            <div className="space-y-8">
              <div className="bg-white p-6 lg:p-8 border border-[#E5E5E1]">
                <h3 className="font-headline text-2xl font-bold text-[#111111] mb-4">
                  Contextual Origins & Trigger Mechanics
                </h3>
                <p className="text-base text-[#444444] leading-relaxed mb-6 font-sans-body">
                  {selectedCase.contextualOrigins}
                </p>

                <h4 className="font-headline text-xl font-bold text-[#111111] mb-3">
                  Narrative Sequence of Events
                </h4>
                <div className="bg-[#FAF9F6] p-5 border border-[#E5E5E1] text-[#111111] leading-relaxed text-sm pp-dropcap font-sans-body">
                  {selectedCase.narrativeSummary}
                </div>
              </div>

              {/* Systemic Variables Table */}
              <div className="bg-white p-6 border border-[#E5E5E1]">
                <h4 className="font-headline text-lg font-bold text-[#111111] mb-4">
                  Recorded Systemic Variables
                </h4>
                <div className="divide-y divide-[#E5E5E1] text-xs">
                  {Object.entries(selectedCase.systemicVariables).map(([k, v]) => (
                    <div key={k} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-[#111111]">{k}</span>
                      <span className="text-[#444444] font-mono-data sm:text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROCEDURAL COLLAPSE */}
          {activeSectionTab === 'collapse' && (
            <div className="space-y-8">
              <div className="bg-white p-6 lg:p-8 border border-[#E5E5E1]">
                <div className="flex items-center gap-2 text-xs font-mono-data text-[#E53935] uppercase font-semibold mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Breakdown of Due Process Chain</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#111111] mb-4">
                  The Specific Mechanical Failure of Justice
                </h3>
                <p className="text-base text-[#444444] leading-relaxed mb-6 font-sans-body">
                  {selectedCase.proceduralCollapse}
                </p>

                <div className="bg-[#FFEBEE]/60 border-l-4 border-[#E53935] p-4 mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#E53935] mb-1 font-mono-data">
                    Operative Procedural Breach
                  </h4>
                  <p className="text-sm text-[#111111] leading-relaxed font-sans-body">
                    {selectedCase.proceduralBreach}
                  </p>
                </div>

                <h4 className="font-headline text-xl font-bold text-[#111111] mb-3">
                  Interaction Model: Asymmetrical Authority
                </h4>
                <p className="text-sm text-[#444444] leading-relaxed bg-[#FAF9F6] p-4 border border-[#E5E5E1] font-sans-body">
                  {selectedCase.interactionModel}
                </p>
              </div>

              {/* Systemic Vulnerability Vectors */}
              <div className="bg-white p-6 border border-[#E5E5E1]">
                <h4 className="font-headline text-lg font-bold text-[#111111] mb-4">
                  Identified Institutional Vulnerability Vectors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCase.systemicVulnerabilities.map((v, idx) => (
                    <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                      <div className="text-xs font-bold text-[#E53935] mb-1 font-mono-data">
                        Vector: {v.vector}
                      </div>
                      <p className="text-xs text-[#444444] leading-relaxed font-sans-body">
                        {v.manifestation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONSTITUTIONAL VIOLATIONS */}
          {activeSectionTab === 'violations' && (
            <div className="bg-white p-6 lg:p-8 border border-[#E5E5E1]">
              <h3 className="font-headline text-2xl font-bold text-[#111111] mb-2">
                Documented Constitutional & Statutory Violations
              </h3>
              <p className="text-sm text-[#666666] mb-6 font-sans-body">
                Operational deviations evaluated against governing Federal Bill of Rights provisions and Washington State Constitutional guarantees.
              </p>

              <div className="space-y-4">
                {selectedCase.violations.map((vio, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#E5E5E1] flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#FFEBEE] text-[#E53935] flex items-center justify-center shrink-0 mt-0.5">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#E53935] font-mono-data">
                        {vio.amendment}
                      </div>
                      <p className="text-sm font-medium text-[#111111] mt-1 leading-relaxed font-sans-body">
                        {vio.violation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5E1]">
                <h4 className="font-headline text-lg font-bold text-[#111111] mb-2">
                  Evidentiary Landscape Status
                </h4>
                <p className="text-sm text-[#444444] leading-relaxed font-sans-body">
                  {selectedCase.evidenceAndInformation}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: CASE DOCUMENTS IN VAULT */}
          {activeSectionTab === 'documents' && (
            <div className="space-y-6">
              <div className="bg-white p-6 border border-[#E5E5E1]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-[#111111]">
                      Original Court Filings & Exhibits ({caseDocuments.length})
                    </h3>
                    <p className="text-xs text-[#666666] font-sans-body">
                      Full scanned PDF court documents and forensic filings accessible directly from Google Drive.
                    </p>
                  </div>
                </div>

                {caseDocuments.length === 0 ? (
                  <div className="p-8 text-center text-[#666666] bg-[#FAF9F6] border border-[#E5E5E1] font-sans-body text-xs">
                    No specific documents isolated for this sub-case; see master repository.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseDocuments.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-4 bg-[#FAF9F6] border border-[#E5E5E1] hover:border-[#111111] transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] font-mono-data text-[#666666] mb-2">
                            <span>Case {doc.caseNumber}</span>
                            <span>{doc.dateCreated.split(' ')[0]}</span>
                          </div>
                          <h4 className="font-headline text-base font-bold text-[#111111] leading-snug mb-1">
                            {doc.fileName}
                          </h4>
                          <p className="text-xs text-[#444444] line-clamp-2 mb-3 font-sans-body">
                            {doc.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#E5E5E1] flex items-center justify-between gap-2">
                          <button
                            onClick={() => onInspectDocument(doc)}
                            className="text-xs font-semibold text-[#111111] hover:text-[#E53935] cursor-pointer font-sans-body"
                          >
                            Examine Metadata
                          </button>
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#C62828] transition-colors"
                          >
                            <span>Open Drive PDF</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: PROPOSED REFORMS */}
          {activeSectionTab === 'reforms' && (
            <div className="bg-white p-6 lg:p-8 border border-[#E5E5E1]">
              <h3 className="font-headline text-2xl font-bold text-[#111111] mb-2">
                Directives & Remedial Mandates
              </h3>
              <p className="text-sm text-[#666666] mb-6 font-sans-body">
                Specific statutory and administrative interventions designed to eliminate the systemic failure modes exposed in this docket.
              </p>

              <div className="space-y-4">
                {selectedCase.proposedReforms.map((rf, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                    <div className="text-xs font-bold text-[#E53935] font-mono-data mb-1">
                      Reform {idx + 1}: {rf.name}
                    </div>
                    <p className="text-sm text-[#111111] leading-relaxed font-sans-body">
                      {rf.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
