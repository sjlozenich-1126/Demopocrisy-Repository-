import React, { useState, useEffect, useRef } from 'react';
import { DOCUMENTS_ARCHIVE, LegalDocument } from '../data/documentsData';
import { CASES_DATA, CaseStudy } from '../data/casesData';
import { Search, X, FileText, ArrowRight, ExternalLink, Scale } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDocument: (doc: LegalDocument) => void;
  onSelectCase: (caseId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDocument,
  onSelectCase,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingCases = q === '' ? [] : CASES_DATA.filter((c) =>
    c.caseNumber.toLowerCase().includes(q) ||
    c.title.toLowerCase().includes(q) ||
    c.cause.toLowerCase().includes(q) ||
    c.judges.some((j) => j.toLowerCase().includes(q))
  ).slice(0, 3);

  const matchingDocs = q === '' 
    ? DOCUMENTS_ARCHIVE.slice(0, 6) 
    : DOCUMENTS_ARCHIVE.filter((d) =>
        d.fileName.toLowerCase().includes(q) ||
        d.caseNumber.toLowerCase().includes(q) ||
        (d.description || '').toLowerCase().includes(q) ||
        (d.highlightText || '').toLowerCase().includes(q)
      ).slice(0, 8);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white border border-[#111111] shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col font-sans-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#111111] flex items-center gap-3 bg-[#FAF9F6]">
          <Search className="w-5 h-5 text-[#E53935] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search all 75+ court documents, dockets, judges, or medical findings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base bg-transparent focus:outline-none text-[#111111] placeholder-[#777777] font-sans-body"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#666666] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Stream */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Matched Cases */}
          {matchingCases.length > 0 && (
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#E53935] font-mono-data mb-2">
                Matching Case Dockets
              </div>
              <div className="space-y-1.5">
                {matchingCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCase(c.id);
                      onClose();
                    }}
                    className="w-full p-2.5 text-left hover:bg-[#FAF9F6] border border-transparent hover:border-[#111111] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-mono-data text-[#E53935] font-bold">
                        {c.caseNumber} · {c.court}
                      </div>
                      <div className="font-headline text-lg font-bold text-[#111111]">
                        {c.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#E53935] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Documents */}
          <div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-[#666666] font-mono-data mb-2">
              {q === '' ? 'Featured Evidentiary Records' : `Matching Evidentiary Documents (${matchingDocs.length})`}
            </div>
            {matchingDocs.length === 0 ? (
              <div className="p-6 text-center text-xs text-[#666666] font-mono-data">
                No files found matching "{query}".
              </div>
            ) : (
              <div className="space-y-1.5">
                {matchingDocs.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => {
                      onSelectDocument(doc);
                      onClose();
                    }}
                    className="p-2.5 hover:bg-[#FAF9F6] border border-transparent hover:border-[#111111] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-[#777777] group-hover:text-[#E53935] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-headline text-base font-bold text-[#111111] group-hover:text-[#E53935] transition-colors leading-tight">
                          {doc.fileName}
                        </div>
                        <div className="text-[11px] text-[#666666] font-mono-data mt-0.5">
                          Case {doc.caseNumber} · {doc.dateCreated.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-[#888888] hover:text-[#E53935] transition-colors"
                      title="Open in Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAF9F6] border-t border-[#E5E5E1] text-center text-[11px] text-[#666666] font-mono-data flex items-center justify-between">
          <span>Search spans 75+ primary documents and 8 forensic case dockets</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
