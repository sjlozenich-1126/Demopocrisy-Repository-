import React, { useState, useMemo } from 'react';
import { DOCUMENTS_ARCHIVE, LegalDocument } from '../data/documentsData';
import { 
  Search, Filter, ExternalLink, FileText, Download, Eye, Calendar, 
  Tag, Shield, ArrowUpDown, Check, FileCheck, FolderOpen, Scale
} from 'lucide-react';

interface EvidenceVaultViewProps {
  onInspectDocument: (doc: LegalDocument) => void;
  initialSearchQuery?: string;
}

export const EvidenceVaultView: React.FC<EvidenceVaultViewProps> = ({
  onInspectDocument,
  initialSearchQuery = '',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCaseFilter, setSelectedCaseFilter] = useState<string>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'date_desc' | 'date_asc' | 'title'>('date_desc');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  // Distinct case list
  const casesList = useMemo(() => {
    const set = new Set(DOCUMENTS_ARCHIVE.map((d) => d.caseNumber));
    return Array.from(set).sort();
  }, []);

  const categories = [
    { id: 'all', label: 'All Document Types' },
    { id: 'court_doc', label: 'Court Filings & Orders' },
    { id: 'medical_record', label: 'Medical & Hospital Records' },
    { id: 'police_report', label: 'Police Reports' },
    { id: 'forensic_analysis', label: 'Forensic Analyses & Audits' },
    { id: 'briefing_or_memo', label: 'Briefs & Memoranda' },
    { id: 'journal_entry', label: 'Personal Narratives & Journals' },
    { id: 'covenant_or_property', label: 'Covenants & Title Deeds' },
  ];

  const filteredDocuments = useMemo(() => {
    return DOCUMENTS_ARCHIVE.filter((doc) => {
      // Case filter
      if (selectedCaseFilter !== 'all' && doc.caseNumber !== selectedCaseFilter) {
        return false;
      }
      // Category filter
      if (selectedCategoryFilter !== 'all' && doc.category !== selectedCategoryFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = doc.fileName.toLowerCase().includes(query);
        const matchesCase = doc.caseNumber.toLowerCase().includes(query);
        const matchesDesc = (doc.description || '').toLowerCase().includes(query);
        const matchesHighlight = (doc.highlightText || '').toLowerCase().includes(query);
        if (!matchesName && !matchesCase && !matchesDesc && !matchesHighlight) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortOrder === 'title') {
        return a.fileName.localeCompare(b.fileName);
      }
      const dateA = new Date(a.dateCreated).getTime() || 0;
      const dateB = new Date(b.dateCreated).getTime() || 0;
      return sortOrder === 'date_desc' ? dateB - dateA : dateA - dateB;
    });
  }, [searchQuery, selectedCaseFilter, selectedCategoryFilter, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans-body">
      {/* Editorial Header */}
      <div className="border-b-2 border-[#111111] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="pp-kicker mb-1.5 block">Forensic Records Archive / Document Cloud</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#111111]">
              The Evidence Vault
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-data bg-[#FAF9F6] border border-[#E5E5E1] px-2.5 py-1 text-[#111111] font-bold">
              {DOCUMENTS_ARCHIVE.length} Primary Source Exhibits
            </span>
          </div>
        </div>
        <p className="text-sm text-[#444444] mt-2 max-w-3xl font-sans-body">
          Complete, uncompressed evidentiary repository of original court filings, hospital charts, CSF laboratory analyses, police reports, and forensic case studies. Every document includes verifiable dates and direct access to original Google Drive PDF files.
        </p>
      </div>

      {/* Search and Filters Strip */}
      <div className="bg-[#FAF9F6] p-5 border border-[#111111] mb-8 space-y-4">
        {/* Row 1: Search Bar & View Mode */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by filename, case number, diagnostic finding, or legal topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#CCCCCC] focus:outline-none focus:border-[#BA1A1A] text-[#111111] font-sans-body"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono-data text-[#888888] hover:text-[#111111]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0 font-mono-data text-xs">
            <div className="flex items-center border border-[#CCCCCC] bg-white">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 uppercase font-bold transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-[#111111] text-white' : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 uppercase font-bold transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-[#111111] text-white' : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                Card Grid
              </button>
            </div>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="py-1.5 px-3 bg-white border border-[#CCCCCC] text-[#111111] focus:outline-none focus:border-[#BA1A1A] font-sans-body text-xs"
            >
              <option value="date_desc">Newest First</option>
              <option value="date_asc">Oldest First</option>
              <option value="title">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Row 2: Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#E5E5E1] font-mono-data text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryFilter(cat.id)}
              className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors cursor-pointer whitespace-nowrap font-bold ${
                selectedCategoryFilter === cat.id
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-[#555555] hover:text-[#111111] border border-[#E5E5E1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Row 3: Case Number Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E5E5E1] text-xs font-mono-data">
          <span className="text-[#666666] uppercase tracking-wider text-[10px] font-bold">
            Filter by Case Docket:
          </span>
          <button
            onClick={() => setSelectedCaseFilter('all')}
            className={`px-2 py-0.5 cursor-pointer uppercase font-bold ${
              selectedCaseFilter === 'all'
                ? 'bg-[#BA1A1A] text-white'
                : 'text-[#666666] hover:text-[#111111]'
            }`}
          >
            All Dockets
          </button>
          {casesList.map((cNum) => (
            <button
              key={cNum}
              onClick={() => setSelectedCaseFilter(cNum)}
              className={`px-2 py-0.5 cursor-pointer ${
                selectedCaseFilter === cNum
                  ? 'bg-[#BA1A1A] text-white font-bold'
                  : 'text-[#666666] hover:text-[#111111] hover:underline'
              }`}
            >
              {cNum}
            </button>
          ))}
        </div>
      </div>

      {/* Active Results Counter */}
      <div className="flex items-center justify-between text-xs text-[#666666] mb-4 font-mono-data">
        <span>
          Showing {filteredDocuments.length} of {DOCUMENTS_ARCHIVE.length} documents
        </span>
        {searchQuery && (
          <span>
            Search query: "{searchQuery}"
          </span>
        )}
      </div>

      {/* VIEW: TABLE MODE */}
      {viewMode === 'table' ? (
        <div className="bg-white border border-[#111111] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-[#111111] text-[#111111] font-mono-data uppercase tracking-wider">
                  <th className="py-3 px-4 font-bold">Case Docket</th>
                  <th className="py-3 px-4 font-bold">Document Title</th>
                  <th className="py-3 px-4 font-bold hidden md:table-cell">Category</th>
                  <th className="py-3 px-4 font-bold hidden sm:table-cell">Date Created</th>
                  <th className="py-3 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E1]">
                {filteredDocuments.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-[#666666] font-sans-body">
                      No documents match your filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredDocuments.map((doc) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-[#FAF9F6] transition-colors group cursor-pointer"
                      onClick={() => onInspectDocument(doc)}
                    >
                      <td className="py-3 px-4 font-mono-data text-[#111111] font-bold whitespace-nowrap">
                        {doc.caseNumber}
                      </td>

                      <td className="py-3 px-4">
                        <div className="font-headline text-base font-bold text-[#111111] group-hover:text-[#BA1A1A] transition-colors leading-snug">
                          {doc.fileName}
                        </div>
                        {doc.highlightText && (
                          <div className="text-[11px] text-[#666666] mt-0.5 line-clamp-1 font-sans-body">
                            {doc.highlightText}
                          </div>
                        )}
                      </td>

                      <td className="py-3 px-4 hidden md:table-cell text-[#555555] capitalize font-mono-data text-[11px]">
                        {doc.category.replace(/_/g, ' ')}
                      </td>

                      <td className="py-3 px-4 hidden sm:table-cell font-mono-data text-[#666666] whitespace-nowrap">
                        {doc.dateCreated.split(' ')[0]}
                      </td>

                      <td className="py-3 px-4 text-right whitespace-nowrap font-mono-data">
                        <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => onInspectDocument(doc)}
                            className="px-2 py-1 text-xs text-[#111111] hover:text-[#BA1A1A] font-bold cursor-pointer font-sans-body uppercase tracking-wider"
                            title="Inspect metadata"
                          >
                            Details
                          </button>
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-white bg-[#BA1A1A] hover:bg-[#991414] transition-colors"
                            title="Open Google Drive PDF"
                          >
                            <span>Drive PDF</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* VIEW: CARD GRID MODE */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onInspectDocument(doc)}
              className="bg-white p-5 border border-[#E5E5E1] hover:border-[#111111] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data text-[#666666] mb-2 border-b border-[#E5E5E1] pb-2">
                  <span className="font-bold text-[#111111]">Case {doc.caseNumber}</span>
                  <span>{doc.dateCreated.split(' ')[0]}</span>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-wider text-[#BA1A1A] mb-1 capitalize font-mono-data">
                  {doc.category.replace(/_/g, ' ')}
                </div>

                <h3 className="font-headline text-lg font-bold text-[#111111] group-hover:text-[#BA1A1A] transition-colors leading-snug mb-2">
                  {doc.fileName}
                </h3>

                <p className="text-xs text-[#555555] line-clamp-3 mb-4 leading-relaxed font-sans-body">
                  {doc.description || doc.highlightText}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E5E1] flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => onInspectDocument(doc)}
                  className="text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#BA1A1A] cursor-pointer font-sans-body"
                >
                  View Abstract
                </button>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#BA1A1A] hover:bg-[#991414] transition-colors"
                >
                  <span>Drive PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
