/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CaseStudiesView } from './components/CaseStudiesView';
import { EvidenceVaultView } from './components/EvidenceVaultView';
import { TimelineView } from './components/TimelineView';
import { SystemsAnalysisView } from './components/SystemsAnalysisView';
import { PolicyReformsView } from './components/PolicyReformsView';
import { SystemsNetworkMap } from './components/SystemsNetworkMap';
import { TheoreticalModels } from './components/TheoreticalModels';
import { DocumentModal } from './components/DocumentModal';
import { SearchModal } from './components/SearchModal';
import { TipEvidenceModal } from './components/TipEvidenceModal';
import { Footer } from './components/Footer';
import { DOCUMENTS_ARCHIVE, LegalDocument } from './data/documentsData';
import { ArrowRight, FileText, Database, Scale, ShieldCheck, Network, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [inspectingDocument, setInspectingDocument] = useState<LegalDocument | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [tipModalOpen, setTipModalOpen] = useState<boolean>(false);

  const handleSelectCase = (caseId: string | null) => {
    setSelectedCaseId(caseId);
    setActiveTab('cases');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    if (tab !== 'cases') {
      setSelectedCaseId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInspectDocumentByTitle = (title: string) => {
    const doc = DOCUMENTS_ARCHIVE.find((d) =>
      d.fileName.toLowerCase() === title.toLowerCase() ||
      d.fileName.toLowerCase().includes(title.toLowerCase())
    );
    if (doc) {
      setInspectingDocument(doc);
    } else {
      setActiveTab('vault');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] text-[#111111] font-sans-body selection:bg-[#E53935] selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenTipModal={() => setTipModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 bg-[#F9F9F9]">
        {activeTab === 'overview' && (
          <div>
            <HeroSection
              onSelectCase={handleSelectCase}
              onNavigate={handleNavigate}
              onOpenTipModal={() => setTipModalOpen(true)}
            />

            {/* ProPublica "Impact & Accountability" Editorial Section */}
            <section className="bg-[#FAF9F6] border-t border-b border-[#E5E5E1] py-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-b border-[#111111] pb-3 mb-8 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <span className="pp-kicker text-xs">Public Accountability & Remedial Jurisprudence</span>
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
                      The Impact of the Demopocrisy Forensic Audit
                    </h2>
                  </div>
                  <span className="text-xs font-mono-data text-[#666666]">
                    Four Core Legislative & Administrative Remedies
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Panel 1: Evidence Vault Feature */}
                  <div className="bg-white p-6 border border-[#E5E5E1] hover:border-[#111111] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#E53935] mb-2 font-sans-body uppercase tracking-wider">
                        <Database className="w-4 h-4" />
                        <span>OPEN DATA ARCHIVE</span>
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-[#111111] mb-2 leading-tight">
                        75+ Primary Source Dockets & Exhibits
                      </h3>
                      <p className="text-xs text-[#555555] leading-relaxed mb-6 font-sans-body">
                        Direct public access to unredacted initial complaints, stricken arraignment dockets, CSF laboratory reports, unfiled booking sheets, and the complete 2026 Demopocrisy Monograph.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('vault')}
                      className="pt-3 border-t border-[#E5E5E1] text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E53935] flex items-center justify-between group cursor-pointer"
                    >
                      <span>Explore Evidence Vault</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Panel 2: Forensic Medical Audit Feature */}
                  <div className="bg-white p-6 border border-[#E5E5E1] hover:border-[#111111] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#E53935] mb-2 font-sans-body uppercase tracking-wider">
                        <Scale className="w-4 h-4" />
                        <span>CLINICAL & LAB AUDIT</span>
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-[#111111] mb-2 leading-tight">
                        Harborview CSF Spinal Fluid Discordance
                      </h3>
                      <p className="text-xs text-[#555555] leading-relaxed mb-6 font-sans-body">
                        Forensic analysis demonstrating how an abnormal 87-cell count with 95% neutrophils contradicted neurosyphilis, yet justified an unconsented 22-day involuntary psychotropic hold.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('analysis')}
                      className="pt-3 border-t border-[#E5E5E1] text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E53935] flex items-center justify-between group cursor-pointer"
                    >
                      <span>Read Laboratory Audit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Panel 3: Policy Directives */}
                  <div className="bg-white p-6 border border-[#E5E5E1] hover:border-[#111111] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#E53935] mb-2 font-sans-body uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        <span>LEGISLATIVE REMEDIES</span>
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-[#111111] mb-2 leading-tight">
                        Four Statutory Policy Directives
                      </h3>
                      <p className="text-xs text-[#555555] leading-relaxed mb-6 font-sans-body">
                        Concrete statutory proposals: banning pre-signed competency orders, requiring human-in-the-loop database verification, mandatory CrR 8.3(b) dismissal for discovery suppression, and PDA civil oversight.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('reforms')}
                      className="pt-3 border-t border-[#E5E5E1] text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E53935] flex items-center justify-between group cursor-pointer"
                    >
                      <span>View Reform Directives</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'cases' && (
          <CaseStudiesView
            selectedCaseId={selectedCaseId}
            onSelectCase={handleSelectCase}
            onInspectDocument={(doc) => setInspectingDocument(doc)}
          />
        )}

        {activeTab === 'network' && (
          <SystemsNetworkMap
            onSelectCase={handleSelectCase}
          />
        )}

        {activeTab === 'models' && (
          <TheoreticalModels />
        )}

        {activeTab === 'vault' && (
          <EvidenceVaultView
            onInspectDocument={(doc) => setInspectingDocument(doc)}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineView
            onInspectDocumentByTitle={handleInspectDocumentByTitle}
            onSelectCase={handleSelectCase}
          />
        )}

        {activeTab === 'analysis' && (
          <SystemsAnalysisView />
        )}

        {activeTab === 'reforms' && (
          <PolicyReformsView />
        )}
      </main>

      {/* Global Document Inspection Modal */}
      <DocumentModal
        document={inspectingDocument}
        onClose={() => setInspectingDocument(null)}
        onSelectCase={handleSelectCase}
      />

      {/* Global ⌘K Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectDocument={(doc) => setInspectingDocument(doc)}
        onSelectCase={handleSelectCase}
      />

      {/* Global Whistleblower Tip & Evidence Modal */}
      <TipEvidenceModal
        isOpen={tipModalOpen}
        onClose={() => setTipModalOpen(false)}
      />

      {/* Institutional Broadsheet Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenTipModal={() => setTipModalOpen(true)}
      />
    </div>
  );
}
