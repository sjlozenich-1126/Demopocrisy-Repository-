import React, { useState } from 'react';
import { LegalDocument } from '../data/documentsData';
import { CASES_DATA } from '../data/casesData';
import { 
  X, ExternalLink, FileText, Calendar, Building, Copy, Check, Scale, 
  ShieldCheck, Tag, Info
} from 'lucide-react';

interface DocumentModalProps {
  document: LegalDocument | null;
  onClose: () => void;
  onSelectCase: (caseId: string) => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  document,
  onClose,
  onSelectCase,
}) => {
  const [copied, setCopied] = useState(false);

  if (!document) return null;

  const matchedCase = CASES_DATA.find((c) =>
    c.caseNumber.includes(document.caseNumber.split(' ')[0])
  );

  const handleCopyCitation = () => {
    const citation = `Demopocrisy Forensic Archive: "${document.fileName}", Case No. ${document.caseNumber}, Dated ${document.dateCreated}. Source: King County Judicial Docket.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white border border-[#111111] shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden font-sans-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#111111] bg-[#FAF9F6] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono-data text-[#555555]">
            <FileText className="w-4 h-4 text-[#BA1A1A]" />
            <span className="font-bold text-[#111111]">CASE {document.caseNumber}</span>
            <span>•</span>
            <span>{document.dateCreated.split(' ')[0]}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#555555] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#BA1A1A] mb-1 font-mono-data">
              {document.category.replace(/_/g, ' ')}
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#111111] leading-snug">
              {document.fileName}
            </h3>
          </div>

          {/* Highlight Callout */}
          {document.highlightText && (
            <div className="pp-callout text-xs">
              <span className="font-bold text-[#BA1A1A] uppercase font-mono-data block mb-1">
                Forensic Evidentiary Significance:
              </span>
              <p className="text-[#111111] leading-relaxed">
                {document.highlightText}
              </p>
            </div>
          )}

          {/* Description */}
          {document.description && (
            <div>
              <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#666666] mb-2 font-mono-data">
                Document Summary & Context
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed font-sans-body">
                {document.description}
              </p>
            </div>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-[#FAF9F6] border border-[#E5E5E1] text-xs">
            <div>
              <span className="text-[#666666] block font-mono-data text-[10px] uppercase">File Type</span>
              <span className="font-mono-data font-bold text-[#111111]">{document.fileType}</span>
            </div>
            <div>
              <span className="text-[#666666] block font-mono-data text-[10px] uppercase">Created / Timestamp</span>
              <span className="font-mono-data font-medium text-[#111111]">{document.dateCreated}</span>
            </div>
            <div>
              <span className="text-[#666666] block font-mono-data text-[10px] uppercase">Archive ID</span>
              <span className="font-mono-data text-[#888888]">{document.id}</span>
            </div>
            <div>
              <span className="text-[#666666] block font-mono-data text-[10px] uppercase">Storage Source</span>
              <span className="text-[#111111] font-medium">Verified Cloud Repository</span>
            </div>
          </div>

          {/* Related Case Link */}
          {matchedCase && (
            <div className="p-3 bg-white border border-[#111111] flex items-center justify-between text-xs font-mono-data">
              <div>
                <span className="text-[#666666] block text-[10px] uppercase font-bold">Associated Proceeding</span>
                <span className="font-bold text-[#111111] font-sans-body">{matchedCase.title}</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onSelectCase(matchedCase.id);
                }}
                className="text-[#BA1A1A] font-bold hover:underline cursor-pointer uppercase tracking-wider"
              >
                Inspect Case →
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E5E5E1] bg-[#FAF9F6] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyCitation}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans-body font-bold uppercase tracking-wider text-[#111111] hover:text-[#BA1A1A] bg-white border border-[#CCCCCC] transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Citation Copied' : 'Copy Citation'}</span>
          </button>

          <a
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-sans-body uppercase font-bold text-white bg-[#BA1A1A] hover:bg-[#991414] transition-colors"
          >
            <span>Open in Google Drive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
