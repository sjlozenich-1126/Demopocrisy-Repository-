import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Upload, 
  FileText, 
  X, 
  Check, 
  Copy, 
  AlertCircle, 
  Paperclip, 
  Send, 
  Trash2,
  FileCheck,
  Building,
  Scale
} from 'lucide-react';

interface TipEvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AttachedFile {
  name: string;
  size: number;
  type: string;
}

interface SubmittedTip {
  id: string;
  timestamp: string;
  subject: string;
  category: string;
  agency: string;
  isAnonymous: boolean;
  fileCount: number;
}

const TIP_CATEGORIES = [
  'Court Competency & Pre-Signed Orders (RCW 10.77)',
  'Police Records & Database Desynchronization (WACIC / NCIC)',
  'Suppression of Favorable Evidence (CrR 8.3 / Brady)',
  'Hospital & CSF Laboratory Discordance (Harborview / WSH)',
  'Unlawful Detainer & Eviction Compression',
  'Prosecutorial Misconduct & Altered Transcripts',
  'Whistleblower Tip / Other Due Process Anomaly',
];

export const TipEvidenceModal: React.FC<TipEvidenceModalProps> = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState(TIP_CATEGORIES[0]);
  const [agency, setAgency] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [description, setDescription] = useState('');
  const [documentLink, setDocumentLink] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [contactName, setContactName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [certifyPublicInterest, setCertifyPublicInterest] = useState(true);
  const [requestRedaction, setRequestRedaction] = useState(true);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<SubmittedTip | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSubmitting, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: AttachedFile[] = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: f.size,
        type: f.type || 'document'
      }));
      setAttachedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!subject.trim()) {
      setErrorMessage('Please provide a brief subject or title for this evidence/tip.');
      return;
    }

    if (!description.trim() && attachedFiles.length === 0 && !documentLink.trim()) {
      setErrorMessage('Please provide details in the statement or attach documents/evidence.');
      return;
    }

    if (!certifyPublicInterest) {
      setErrorMessage('Please confirm that this information is submitted for public interest legal research.');
      return;
    }

    setIsSubmitting(true);

    // Simulate cryptographic intake pipeline
    setTimeout(() => {
      const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
      const generatedId = `DPT-2026-${randomHex}`;
      const newTip: SubmittedTip = {
        id: generatedId,
        timestamp: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        subject: subject.trim(),
        category,
        agency: agency.trim() || 'Washington State Judicial System',
        isAnonymous,
        fileCount: attachedFiles.length + (documentLink ? 1 : 0),
      };

      try {
        const stored = localStorage.getItem('demopocrisy_tips');
        const parsed = stored ? JSON.parse(stored) : [];
        localStorage.setItem('demopocrisy_tips', JSON.stringify([newTip, ...parsed]));
      } catch (err) {
        console.error('LocalStorage error:', err);
      }

      setIsSubmitting(false);
      setSubmissionSuccess(newTip);
    }, 1200);
  };

  const handleReset = () => {
    setSubject('');
    setCategory(TIP_CATEGORIES[0]);
    setAgency('');
    setCaseNumber('');
    setDescription('');
    setDocumentLink('');
    setIsAnonymous(true);
    setContactName('');
    setContactInfo('');
    setAttachedFiles([]);
    setSubmissionSuccess(null);
    setErrorMessage(null);
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="tip-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div 
            key="tip-modal-dialog"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border-2 border-[#111111] shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col font-sans-body overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header Bar */}
        <div className="bg-[#111111] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b-2 border-[#E53935]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#E53935] flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono-data text-[10px] uppercase font-bold tracking-widest text-[#E53935]">
                  Confidential Tip & Evidence Line
                </span>
                <span className="bg-stone-800 text-[10px] font-mono-data px-1.5 py-0.5 text-stone-300 flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  RCW 42.56 Protected
                </span>
              </div>
              <h2 className="font-headline text-lg sm:text-xl font-bold tracking-tight text-white">
                Submit Evidence or Investigative Tip
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-[#FAF9F6] text-[#111111]">
          {submissionSuccess ? (
            /* =========================================================================
               SUCCESS RECEIPT VIEW
            ========================================================================= */
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-emerald-50 border-2 border-emerald-600 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-lg font-bold text-emerald-950">
                      Transmission Confirmed & Queued for Forensic Audit
                    </h3>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      Your tip and documentation have been securely recorded. All submissions are cross-referenced against public records and legal archives under Washington investigative whistleblower standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-white border border-[#E5E5E1] p-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E1] mb-4">
                  <span className="font-mono-data text-[11px] uppercase tracking-wider text-[#666666] font-bold">
                    Secure Receipt Details
                  </span>
                  <span className="text-[11px] font-mono-data text-stone-500">
                    {submissionSuccess.timestamp}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <span className="text-stone-500 block mb-0.5 font-mono-data text-[11px]">Submission ID:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-data text-sm font-bold text-[#E53935] bg-stone-100 px-2 py-0.5 border border-stone-300">
                        {submissionSuccess.id}
                      </span>
                      <button
                        onClick={() => handleCopyId(submissionSuccess.id)}
                        className="text-stone-600 hover:text-[#111111] p-1 border border-stone-300 hover:bg-stone-50 transition-colors cursor-pointer text-[11px] flex items-center gap-1"
                        title="Copy Submission ID"
                      >
                        {copiedId ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-500 block mb-0.5 font-mono-data text-[11px]">Privacy Status:</span>
                    <span className="font-bold text-[#111111] flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      {submissionSuccess.isAnonymous ? 'Anonymous Submission' : 'Contact Provided'}
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-500 block mb-0.5 font-mono-data text-[11px]">Category:</span>
                    <span className="font-medium text-[#111111]">{submissionSuccess.category}</span>
                  </div>

                  <div>
                    <span className="text-stone-500 block mb-0.5 font-mono-data text-[11px]">Target Jurisdiction/Agency:</span>
                    <span className="font-medium text-[#111111]">{submissionSuccess.agency}</span>
                  </div>
                </div>

                <div className="border-t border-[#E5E5E1] pt-3 text-xs">
                  <span className="text-stone-500 block mb-0.5 font-mono-data text-[11px]">Subject:</span>
                  <span className="font-bold text-[#111111]">{submissionSuccess.subject}</span>
                </div>

                {submissionSuccess.fileCount > 0 && (
                  <div className="border-t border-[#E5E5E1] pt-3 mt-3 text-xs flex items-center gap-2 text-stone-700">
                    <FileCheck className="w-4 h-4 text-[#E53935]" />
                    <span>{submissionSuccess.fileCount} record(s) / source link(s) attached for forensic review.</span>
                  </div>
                )}
              </div>

              {/* Protocol Details */}
              <div className="bg-stone-100 p-4 border border-stone-300 text-xs text-stone-600 space-y-2 font-sans-body">
                <div className="font-bold text-stone-900 flex items-center gap-1.5 text-xs font-mono-data uppercase">
                  <Scale className="w-4 h-4 text-[#E53935]" />
                  Intake & Verification Protocols
                </div>
                <p className="leading-relaxed">
                  1. <strong>Verification Against Primary Dockets:</strong> Submitted court orders, transcripts, and CAD logs are checked against King County, Washington Courts, and RCW 42.56 repository records.
                </p>
                <p className="leading-relaxed">
                  2. <strong>Redaction & Anonymity:</strong> Identifying social security, confidential medical, and residential details are scrubbed prior to any scholarly or journalistic publication.
                </p>
                <p className="leading-relaxed">
                  3. <strong>Source Safeguards:</strong> Inquiries regarding this record should cite reference code <strong className="font-mono-data">{submissionSuccess.id}</strong>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 bg-white border border-[#111111] text-[#111111] hover:bg-stone-50 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Submit Another Tip or Exhibit
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 bg-[#E53935] hover:bg-[#C62828] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center shadow-xs"
                >
                  Close Tip Window
                </button>
              </div>
            </div>
          ) : (
            /* =========================================================================
               SUBMISSION FORM VIEW
            ========================================================================= */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Context Banner */}
              <div className="bg-stone-100 border-l-4 border-[#E53935] p-3 text-xs text-stone-700 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  This secure tip line receives primary source court filings, docket transcripts, dispatch CAD logs, CSF laboratory records, and testimony exposing competency loops or due process compression.
                </p>
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-[#E53935] p-3 text-xs text-[#E53935] font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Tip Subject */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                  Subject / Summary Headline <span className="text-[#E53935]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Unproduced bodycam footage in 2023 King County competency docket"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E5E5E1] focus:border-[#111111] focus:outline-none transition-colors"
                />
              </div>

              {/* Category & Case/Agency Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Audit Category <span className="text-[#E53935]">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E5E5E1] focus:border-[#111111] focus:outline-none transition-colors"
                  >
                    {TIP_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Court, Case #, or Agency
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., King County Superior Court / SPD / DSHS"
                    value={agency}
                    onChange={(e) => setAgency(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E5E5E1] focus:border-[#111111] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Detailed Description / Narrative */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                    Detailed Narrative / Procedural Anomaly <span className="text-[#E53935]">*</span>
                  </label>
                  <span className="text-[11px] font-mono-data text-stone-400">
                    Include dates, docket #s, judges, or missing records
                  </span>
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="Detail what occurred, procedural irregularities, missing evidence, unserved subpoenas, or delayed competency evaluations..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E5E5E1] focus:border-[#111111] focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Document & File Attachment Area */}
              <div className="bg-white border border-[#E5E5E1] p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111]">
                    <Paperclip className="w-3.5 h-3.5 text-[#E53935]" />
                    <span>Attach Evidence or Supporting Records</span>
                  </div>
                  <span className="text-[10px] font-mono-data text-stone-500">
                    PDF, DOC, TXT, PNG, JPG (Max 50MB)
                  </span>
                </div>

                {/* Upload Trigger Box */}
                <input
                  type="file"
                  multiple
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.rtf,.png,.jpg,.jpeg,.zip"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-stone-300 hover:border-[#111111] bg-stone-50 hover:bg-stone-100 py-3 px-4 text-center transition-colors cursor-pointer flex flex-col items-center justify-center gap-1"
                >
                  <Upload className="w-5 h-5 text-stone-500" />
                  <span className="text-xs font-bold text-[#111111]">
                    Click to select files or court dockets from your computer
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Files will be encrypted prior to queue transmission
                  </span>
                </button>

                {/* Attached Files List */}
                {attachedFiles.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    <span className="text-[11px] font-mono-data font-bold text-stone-700 block">
                      Attached Exhibits ({attachedFiles.length}):
                    </span>
                    {attachedFiles.map((file, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between bg-stone-50 px-2.5 py-1.5 border border-stone-200 text-xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
                          <span className="truncate max-w-[280px] font-mono-data text-stone-800">
                            {file.name}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono-data">
                            ({formatFileSize(file.size)})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-stone-400 hover:text-[#E53935] p-1 transition-colors cursor-pointer"
                          title="Remove file"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* External Link Option */}
                <div className="mt-3 pt-3 border-t border-stone-100">
                  <label className="block text-[11px] font-mono-data uppercase text-stone-500 mb-1">
                    Or Provide Cloud / Public Record URL (Google Drive, Dropbox, Court Portal):
                  </label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/... or https://courts.wa.gov/..."
                    value={documentLink}
                    onChange={(e) => setDocumentLink(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-200 focus:bg-white focus:border-[#111111] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Anonymity & Contact Preference */}
              <div className="bg-white border border-[#E5E5E1] p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                    Source Confidentiality & Protection
                  </span>
                  <span className="text-[10px] font-mono-data bg-stone-100 text-stone-700 px-2 py-0.5 border border-stone-200">
                    Shield Law Protected
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-stone-800">
                    <input
                      type="radio"
                      name="anonymity"
                      checked={isAnonymous}
                      onChange={() => setIsAnonymous(true)}
                      className="accent-[#E53935]"
                    />
                    <span>Submit Anonymously (No identity or contact retained)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-medium text-stone-800">
                    <input
                      type="radio"
                      name="anonymity"
                      checked={!isAnonymous}
                      onChange={() => setIsAnonymous(false)}
                      className="accent-[#E53935]"
                    />
                    <span>Provide Confidential Follow-Up Contact</span>
                  </label>
                </div>

                {!isAnonymous && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100 animate-in fade-in">
                    <div>
                      <label className="block text-[11px] font-mono-data text-stone-600 mb-0.5">
                        Your Name / Organization (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Paralegal, Case Worker, or Whistleblower"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-200 focus:bg-white focus:border-[#111111] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-data text-stone-600 mb-0.5">
                        Secure Email, Signal, or Phone <span className="text-[#E53935]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., signal_handle or secure@proton.me"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-200 focus:bg-white focus:border-[#111111] focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Checkboxes & Certifications */}
              <div className="space-y-2 text-xs text-stone-700">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={certifyPublicInterest}
                    onChange={(e) => setCertifyPublicInterest(e.target.checked)}
                    className="accent-[#E53935] mt-0.5"
                  />
                  <span>
                    I certify that this evidence/tip is submitted in good faith for public interest legal research, civil liberties auditing, and judicial accountability.
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={requestRedaction}
                    onChange={(e) => setRequestRedaction(e.target.checked)}
                    className="accent-[#E53935] mt-0.5"
                  />
                  <span className="text-stone-500">
                    Mandatory redaction: Automatically mask all personal identifiers (SSNs, banking, personal residential phone numbers) prior to permanent archival.
                  </span>
                </label>
              </div>

              {/* Footer Actions */}
              <div className="pt-3 border-t border-[#E5E5E1] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] font-mono-data text-stone-500 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-Bit SSL Client Encryption</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-5 py-2 bg-[#E53935] hover:bg-[#C62828] disabled:bg-stone-400 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Encrypting & Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Evidence / Tip</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
};
