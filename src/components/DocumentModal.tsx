import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const activeDocRef = useRef<LegalDocument | null>(null);

  if (document) {
    activeDocRef.current = document;
  }
  const displayDoc = document || activeDocRef.current;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && document) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [document, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (document) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'unset';
    }
    return () => {
      window.document.body.style.overflow = 'unset';
    };
  }, [document]);

  const matchedCase = displayDoc
    ? CASES_DATA.find((c) => c.caseNumber.includes(displayDoc.caseNumber.split(' ')[0]))
    : null;

  const handleCopyCitation = () => {
    if (!displayDoc) return;
    const citation = `Demopocrisy Forensic Archive: "${displayDoc.fileName}", Case No. ${displayDoc.caseNumber}, Dated ${displayDoc.dateCreated}. Source: King County Judicial Docket.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {document && displayDoc && (
        <motion.div 
          key="document-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div 
            key="document-modal-dialog"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border-2 border-[#111111] shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden font-sans-body"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-[#111111] bg-[#FAF9F6] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono-data text-[#555555]">
                <FileText className="w-4 h-4 text-[#E53935]" />
                <span className="font-bold text-[#111111]">CASE {displayDoc.caseNumber}</span>
                <span>•</span>
                <span>{displayDoc.dateCreated.split(' ')[0]}</span>
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
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#E53935] mb-1 font-mono-data">
              {displayDoc.category.replace(/_/g, ' ')}
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#111111] leading-snug">
              {displayDoc.fileName}
            </h3>
          </div>

          {/* Highlight Callout */}
          {displayDoc.highlightText && (
            <div className="pp-callout text-xs">
              <span className="font-bold text-[#E53935] uppercase font-mono-data block mb-1">
                Forensic Evidentiary Significance:
              </span>
              <p className="text-[#111111] leading-relaxed">
                {displayDoc.highlightText}
              </p>
            </div>
          )}

          {/* Description */}
          {displayDoc.description && (
            <div>
              <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#666666] mb-2 font-mono-data">
                Document Summary & Context
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed font-sans-body">
                {displayDoc.description}
              </p>
            </div>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-[#FAF9F6] border border-[#E5E5E1] text-xs">
            <div>
              <span className="text-[#666666] block font-mono-data text-[10px] uppercase">File Type</span>
              <span className="font-mono-data font-bold text-[#111111]">{displayDoc.fileType}</span>
            </div>
            <div>
              <span className="text-[#666666] block font-mono-data text-[10px] uppercase">Created / Timestamp</span>
              <span className="font-mono-data font-medium text-[#111111]">{displayDoc.dateCreated}</span>
            </div>
            <div>
              <span className="text-[#666666] block font-mono-data text-[10px] uppercase">Archive ID</span>
              <span className="font-mono-data text-[#888888]">{displayDoc.id}</span>
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
                className="text-[#E53935] font-bold hover:underline cursor-pointer uppercase tracking-wider"
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
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans-body font-bold uppercase tracking-wider text-[#111111] hover:text-[#E53935] bg-white border border-[#CCCCCC] transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Citation Copied' : 'Copy Citation'}</span>
          </button>

          <a
            href={displayDoc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-sans-body uppercase font-bold text-white bg-[#E53935] hover:bg-[#C62828] transition-colors"
          >
            <span>Open in Google Drive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
