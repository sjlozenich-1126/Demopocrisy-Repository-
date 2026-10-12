import React from 'react';
import { X, AlertOctagon, CheckCircle2, ShieldAlert, FileText, FlaskConical, Pill } from 'lucide-react';
import { CSF_LAB_AUDIT_DATA } from '../data/forensicAnalysisData';

interface CSFModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDocument?: (docId: string) => void;
}

export const CSFModal: React.FC<CSFModalProps> = ({ isOpen, onClose, onOpenDocument }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans-body">
      <div 
        className="bg-[#F9F9F9] border border-[#111111] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#111111] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#E53935]/10 text-[#E53935] flex items-center justify-center">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold font-headline text-[#111111] leading-tight">
                Harborview CSF Spinal Fluid Audit & Clinical Discordance
              </h2>
              <p className="text-xs text-[#666666] font-mono-data">
                Harborview Medical Research Center · March 27 – April 7, 2021 · Case No. 658959
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#F9F9F9] text-[#666666] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Key Forensic Finding Callout */}
          <div className="bg-red-50/70 border border-[#E53935]/30 p-5">
            <div className="flex items-start gap-3">
              <AlertOctagon className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold font-mono-data text-[#E53935] uppercase tracking-wider mb-1">
                  Primary Forensic Finding: Acute Diagnostic Contradiction
                </h3>
                <p className="text-xs text-[#222222] leading-relaxed font-sans-body">
                  The hospital justified a 22-day involuntary psychiatric hold on a working diagnosis of <em>neurosyphilis</em> and <em>psychosis</em>. However, the cerebrospinal fluid (CSF) cell differential showed <strong>87 nucleated cells with 95% neutrophils</strong>. Neurosyphilis classically presents with <strong>lymphocytic predominance</strong>. Neutrophilic predominance indicates bacterial meningitis or traumatic tap—yet glucose was completely normal (62 mg/dL) and cultures were negative.
                </p>
                <div className="mt-3 p-2.5 bg-white/90 border border-[#E5E5E1] text-[11px] font-mono-data text-[#333333]">
                  <span className="font-bold text-[#111111]">LAB’S OWN WARNING:</span> “Detection of antibodies in the CSF may suggest CNS infection. However, these results are unable to distinguish between intrathecal antibodies and serum antibodies introduced into the CSF at the time of lumbar puncture or from blood-brain barrier breakdown.”
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Lab Differential Table */}
          <div className="bg-white border border-[#111111] overflow-hidden">
            <div className="px-5 py-3 border-b border-[#E5E5E1] flex items-center justify-between bg-[#F9F9F9]">
              <span className="text-xs font-bold font-mono-data uppercase text-[#111111]">
                CSF & Serology Parameter Comparison Matrix
              </span>
              <span className="text-[11px] font-mono-data text-[#666666]">10 Parameters Audited</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono-data">
                <thead>
                  <tr className="bg-neutral-50 border-b border-[#E5E5E1] text-[#666666] text-[11px]">
                    <th className="py-2.5 px-4 font-bold">TEST / PARAMETER</th>
                    <th className="py-2.5 px-4 font-bold">PATIENT RESULT</th>
                    <th className="py-2.5 px-4 font-bold">CLINICAL REFERENCE NORM</th>
                    <th className="py-2.5 px-4 font-bold">CONCORDANCE EVALUATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E1] text-[#222222]">
                  {CSF_LAB_AUDIT_DATA.diagnosticFlags.map((flag, idx) => {
                    const isSevere = flag.matchStatus.includes('Discordance') || flag.matchStatus.includes('Mismatch') || flag.matchStatus.includes('Inflation');
                    return (
                      <tr key={idx} className={isSevere ? 'bg-red-50/40' : 'hover:bg-neutral-50/60'}>
                        <td className="py-2.5 px-4 font-bold text-[#111111]">{flag.parameter}</td>
                        <td className="py-2.5 px-4 font-bold text-[#111111]">{flag.value}</td>
                        <td className="py-2.5 px-4 text-[#666666]">{flag.norm}</td>
                        <td className="py-2.5 px-4">
                          <span className={`inline-block px-2 py-0.5 text-[10px] font-bold ${
                            isSevere 
                              ? 'bg-[#E53935]/15 text-[#E53935]' 
                              : flag.matchStatus === 'Negative' 
                              ? 'bg-neutral-100 text-[#444444]' 
                              : 'bg-amber-100 text-amber-900'
                          }`}>
                            {flag.matchStatus}
                          </span>
                          <span className="block text-[10px] text-[#666666] mt-0.5 font-sans-body leading-tight">
                            {flag.note}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Forced Medications Table */}
          <div className="bg-white border border-[#111111] p-5">
            <div className="flex items-center gap-2 mb-3">
              <Pill className="w-4 h-4 text-[#E53935]" />
              <h3 className="text-xs font-bold font-mono-data uppercase text-[#111111]">
                Administered Pharmacological Regimen & Adverse Effects
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono-data divide-y divide-[#E5E5E1]">
                <thead>
                  <tr className="text-[#666666] text-[11px] pb-2">
                    <th className="py-2 pr-3 font-bold">MEDICATION</th>
                    <th className="py-2 pr-3 font-bold">DOSAGE & ROUTE</th>
                    <th className="py-2 pr-3 font-bold">CHARTED RATIONALE</th>
                    <th className="py-2 font-bold">INFORMED CONSENT STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E1] text-[#222222]">
                  {CSF_LAB_AUDIT_DATA.medicationsAdministered.map((med, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50">
                      <td className="py-2 pr-3 font-bold text-[#111111]">{med.drug}</td>
                      <td className="py-2 pr-3 text-[#555555]">{med.dosage}</td>
                      <td className="py-2 pr-3 text-[#444444]">{med.justification}</td>
                      <td className="py-2 text-[#E53935] font-bold">{med.consent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-[#F9F9F9] border border-[#E5E5E1] text-xs font-sans-body text-[#444444]">
              <strong className="font-bold text-[#111111]">Documented Acute Dystonic Reaction:</strong> Following co-administration of Haloperidol 5mg and Risperdal, patient experienced involuntary limb locking, twisting neck, and abdominal spasms lasting over two hours, necessitating rescue Benztropine. No screening or voluntary consent was obtained prior to injection.
            </div>
          </div>

          {/* Legal Implications */}
          <div className="bg-white border border-[#111111] p-5">
            <h3 className="text-xs font-bold font-mono-data uppercase text-[#111111] mb-2">
              Systemic & Legal Implications for June 2026 Civil Action
            </h3>
            <ul className="space-y-1.5 text-xs text-[#444444] font-sans-body list-disc list-inside">
              <li><strong>Medical Battery:</strong> Forced psychotropic injections and lumbar puncture administered under physical restraint without documented judicial authorization.</li>
              <li><strong>Substituted Adjudication:</strong> Harborview clinical findings were immediately accepted by Seattle Municipal Court to justify incompetency dismissal and subsequent administrative holds.</li>
              <li><strong>Apple Health Release Override:</strong> Insurer formally noted lack of medical necessity on April 5, 2021; detention continued until April 15 without reviewable order.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F9F9F9] border-t border-[#111111] px-6 py-3 flex items-center justify-between text-xs font-mono-data text-[#666666]">
          <span>Evidence Citation: Harborview Medical Docs HMRC (March 27 – April 7, 2021)</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#111111] hover:bg-[#E53935] text-white font-bold uppercase transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
