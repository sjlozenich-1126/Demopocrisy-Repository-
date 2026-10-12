import React, { useState } from 'react';
import { 
  COMPARATIVE_LEGAL_MATRIX, HARBORVIEW_CSF_AUDIT, TOP_SNA_NODES, 
  INSTITUTIONAL_DEFENSE_LOOP 
} from '../data/forensicAnalysisData';
import { 
  Scale, Activity, Network, AlertOctagon, CheckCircle2, XCircle, 
  FileText, ShieldCheck, Cpu, ArrowRight, Layers, BarChart3, Database
} from 'lucide-react';

export const SystemsAnalysisView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discrepancy' | 'harborview' | 'sna' | 'defense_loop' | 'precedents'>('discrepancy');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Editorial Header */}
      <div className="border-b-2 border-[#111111] pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="pp-kicker mb-1.5 block">Investigative Data & Forensic Methodology</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#111111]">
              Systems Failure & Institutional Mapping
            </h2>
          </div>
          <div className="text-xs font-mono-data bg-[#FAF9F6] border border-[#E5E5E1] px-2.5 py-1 text-[#111111] font-bold">
            Mean Discrepancy Index: D̄ = 89.75 / 100
          </div>
        </div>
        <p className="text-sm text-[#444444] mt-2 max-w-3xl font-sans-body">
          Rigorous mathematical, clinical, and network investigations examining how the King County justice system converts procedural and technical disclosures into psychiatric diagnoses, sustaining indefinite state control without adversarial trial.
        </p>
      </div>

      {/* Internal Navigation Ribbon */}
      <div className="flex border-b border-[#111111] mb-8 overflow-x-auto gap-2 sm:gap-6 font-mono-data text-xs uppercase tracking-wider">
        {[
          { id: 'discrepancy', label: '1. Discrepancy Index (D̄=89.75)' },
          { id: 'harborview', label: '2. Harborview CSF Audit' },
          { id: 'sna', label: '3. Network Chokepoints (SNA)' },
          { id: 'defense_loop', label: '4. 6-Phase Defense Loop' },
          { id: 'precedents', label: '5. Federal Circuit Precedents' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-3 px-2 font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'border-[#E53935] text-[#E53935]'
                : 'border-transparent text-[#666666] hover:text-[#111111]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: DISCREPANCY SCORE MATHEMATICAL FORMULATION */}
      {activeTab === 'discrepancy' && (
        <div className="space-y-8">
          <div className="bg-white p-6 lg:p-8 border border-[#111111]">
            <h3 className="font-headline text-3xl font-bold text-[#111111] mb-3">
              Mathematical Formulation of Systemic Discrepancy (D)
            </h3>
            <p className="text-sm text-[#333333] leading-relaxed mb-6 font-sans-body">
              To rigorously measure institutional deviation from constitutional standards, this research monograph formulates the Systemic Discrepancy Score (D), a weighted mathematical index evaluated for each legal docket in King County:
            </p>

            {/* Formula Block */}
            <div className="p-6 bg-[#FAF9F6] border border-[#111111] text-center my-6">
              <div className="font-mono-data text-xl sm:text-2xl font-bold text-[#111111]">
                D<sub>k</sub> = ∑<sub>i=1</sub><sup>m</sup> (ω<sub>1</sub>P<sub>k,i</sub> + ω<sub>2</sub>C<sub>k,i</sub> + ω<sub>3</sub>D<sub>k,i</sub> + ω<sub>4</sub>R<sub>k,i</sub>) × 100
              </div>
              <div className="text-xs text-[#666666] mt-2 font-mono-data">
                Normalized Weighting Vectors: ∑ ω<sub>j</sub> = 1.0 • Evaluated Mean: D̄ = 89.75 / 100
              </div>
            </div>

            {/* Variable Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-xs font-sans-body">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                <div className="font-bold text-[#E53935] font-mono-data mb-1 uppercase">
                  P<sub>k,i</sub> ∈ [0, 1] — Procedural Deviations
                </div>
                <p className="text-[#444444] leading-relaxed">
                  Measures the magnitude of procedural skips, such as unfiled complaints, unrepresented hearings, cancelled arraignments, and unexecuted court referrals.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                <div className="font-bold text-[#E53935] font-mono-data mb-1 uppercase">
                  C<sub>k,i</sub> ∈ [0, 1] — Constitutional Deprivations
                </div>
                <p className="text-[#444444] leading-relaxed">
                  Direct infringements of Fourth Amendment privacy, Fifth Amendment Miranda rights, Sixth Amendment speedy trial, and Fourteenth Amendment due process.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                <div className="font-bold text-[#E53935] font-mono-data mb-1 uppercase">
                  D<sub>k,i</sub> ∈ [0, 1] — Prosecutorial Discovery Withholding
                </div>
                <p className="text-[#444444] leading-relaxed">
                  Quantifies non-production of foundational audio recordings, metadata, or dispatch logs under Brady v. Maryland while tolling trial clocks.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                <div className="font-bold text-[#E53935] font-mono-data mb-1 uppercase">
                  R<sub>k,i</sub> ∈ [0, 1] — Bodily Autonomy Infringements
                </div>
                <p className="text-[#444444] leading-relaxed">
                  Measures forced psychotropic administration, involuntary medical transfers, physical restraints, and detention in unsafe facilities under Sell v. US.
                </p>
              </div>
            </div>
          </div>

          {/* D-Score Comparative Bar Chart Table */}
          <div className="bg-white p-6 border border-[#E5E5E1]">
            <h4 className="font-headline text-2xl font-bold text-[#111111] mb-4">
              Discrepancy Score Evaluation Across King County Dockets
            </h4>
            <div className="space-y-4">
              {[
                { caseNum: 'Case No. 26-2-01443-4 SEA', forum: 'Seattle-Bremerton Majorat Quiet Title', score: 95, mechanism: 'Sovereign quiet title action challenging immunity' },
                { caseNum: 'Case No. 22-1-04242-3 SEA', forum: 'King County Superior Court (Felony)', score: 94, mechanism: '4-year competency loop; 10-mo. detention without discovery' },
                { caseNum: 'Case No. 658959', forum: 'Seattle Municipal Court / Harborview', score: 92, mechanism: '"Dismiss and defer" forced medication pipeline' },
                { caseNum: 'Case No. 2:26-cv-00261-tl', forum: 'U.S. District Court (W.D. Wash)', score: 91, mechanism: 'Federal civil rights action challenging interlocal immunity' },
                { caseNum: 'Case No. 21-1-04347-2 SEA', forum: 'King County Superior Court (Felony)', score: 90, mechanism: 'Anonymous arrest; unrepresented 45-day hold' },
                { caseNum: 'Case No. 664676', forum: 'Seattle Municipal Court', score: 89, mechanism: 'Mechanical order enforcement; unrepresented dismissal' },
                { caseNum: 'Case No. 658931', forum: 'Seattle Municipal Court', score: 88, mechanism: 'Pre-charge custodial arrest; unfiled complaint' },
                { caseNum: 'Case No. 25-2-17456-5 SEA', forum: 'KCSC Civil Eviction (SCIDpda)', score: 87, mechanism: 'PDA retaliatory eviction post-KIRO News safety interview' },
                { caseNum: 'Case No. 660121', forum: 'Seattle Municipal Court', score: 85, mechanism: 'Automated database error; stale order execution' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111111] font-mono-data">{item.caseNum}</span>
                    <span className="font-mono-data text-[#E53935] font-bold">D = {item.score} / 100</span>
                  </div>
                  <div className="w-full bg-[#E5E5E1] h-2">
                    <div
                      className="bg-[#E53935] h-full transition-all"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-[#666666] flex justify-between font-mono-data">
                    <span>{item.forum}</span>
                    <span className="italic">{item.mechanism}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HARBORVIEW MEDICAL LABORATORY AUDIT */}
      {activeTab === 'harborview' && (
        <div className="space-y-8">
          <div className="bg-white p-6 lg:p-8 border border-[#111111]">
            <div className="flex items-center gap-2 text-xs font-mono-data text-[#E53935] font-bold mb-2">
              <Activity className="w-4 h-4" />
              <span>CLINICAL DIAGNOSTIC AUDIT • HARBORVIEW MEDICAL CENTER (MARCH 27 – APRIL 7, 2021)</span>
            </div>
            <h3 className="font-headline text-3xl font-bold text-[#111111] mb-3">
              Cerebrospinal Fluid (CSF) Analysis vs Diagnostic Inversion
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed mb-6 font-sans-body">
              Harborview medical records assigned severe permanent diagnoses—including Neurosyphilis, Psychosis, and Sepsis—which were directly accepted by Seattle Municipal Court to justify legal incompetency under RCW 10.77. However, an objective forensic audit of the actual laboratory results demonstrates severe clinical discordance:
            </p>

            {/* Audit Table */}
            <div className="overflow-x-auto border border-[#111111]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#111111] text-[#111111] font-mono-data uppercase">
                    <th className="py-3 px-4 font-bold">Parameter</th>
                    <th className="py-3 px-4 font-bold">Patient Result</th>
                    <th className="py-3 px-4 font-bold">True Neurosyphilis Standard</th>
                    <th className="py-3 px-4 font-bold">Forensic Significance</th>
                    <th className="py-3 px-4 text-center font-bold">Concordance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E1]">
                  {HARBORVIEW_CSF_AUDIT.map((row, idx) => (
                    <tr key={idx} className={row.concordant ? 'bg-white' : 'bg-[#FBEAE8]/40'}>
                      <td className="py-3 px-4 font-bold text-[#111111]">
                        {row.parameter}
                      </td>
                      <td className="py-3 px-4 font-mono-data font-bold text-[#E53935]">
                        {row.patientResult}
                      </td>
                      <td className="py-3 px-4 text-[#444444] font-sans-body">
                        {row.typicalNeurosyphilis}
                      </td>
                      <td className="py-3 px-4 text-xs text-[#444444] leading-relaxed font-sans-body">
                        {row.clinicalSignificance}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.concordant ? (
                          <span className="text-emerald-700 font-bold text-xs uppercase font-mono-data">Concordant</span>
                        ) : (
                          <span className="text-[#E53935] font-bold text-xs bg-[#FBEAE8] px-2 py-0.5 font-mono-data uppercase">Discordant</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Critical Clinical Takeaway */}
            <div className="mt-6 bg-[#FAF9F6] p-5 border-l-4 border-[#E53935] border border-[#E5E5E1]">
              <h4 className="font-headline text-base font-bold text-[#111111] mb-2">
                Forensic Legal Significance of Diagnostic Inflation
              </h4>
              <p className="text-xs text-[#444444] leading-relaxed font-sans-body">
                The laboratory data proves that the court's finding of legal incompetency on March 24, 2021 was based on diagnostic assumptions rather than objective clinical evidence. The hospital lab itself explicitly warned: <em>“antibodies may reflect blood contamination or blood-brain barrier disruption, not true CNS infection.”</em> Despite this, the defendant was subjected to forced Haloperidol and Risperdal, resulting in acute dystonia, while his insurance provider's discharge recommendation was overridden for 10 days without a court order.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SOCIAL NETWORK ANALYSIS (SNA) */}
      {activeTab === 'sna' && (
        <div className="space-y-8">
          <div className="bg-white p-6 lg:p-8 border border-[#111111]">
            <div className="flex items-center gap-2 text-xs font-mono-data text-[#E53935] font-bold mb-2">
              <Network className="w-4 h-4" />
              <span>KUMU GRAPH SOCIAL NETWORK ANALYSIS (57 NODES • 80 CONNECTIONS)</span>
            </div>
            <h3 className="font-headline text-3xl font-bold text-[#111111] mb-3">
              Institutional Chokepoints & Outdegree Asymmetry
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed mb-6 font-sans-body">
              Network mapping across all seven King County case dockets reveals a justice system structured around an extreme concentration of authority. Rather than functioning as an adversarial system of checks and balances, the network exhibits severe information bottlenecks:
            </p>

            {/* Key Findings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                <div className="text-[10px] uppercase font-mono-data font-bold text-[#666666] mb-1">
                  Sole Structural Bridge
                </div>
                <div className="font-headline text-xl font-bold text-[#E53935] mb-2">
                  Seattle Police Dept (0.0040)
                </div>
                <p className="text-xs text-[#555555] leading-relaxed font-sans-body">
                  SPD is the ONLY node in the entire network with meaningful betweenness centrality. It bridges case intake to prosecution and courts. Reforming SPD handoffs has disproportionate system-wide leverage.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                <div className="text-[10px] uppercase font-mono-data font-bold text-[#666666] mb-1">
                  Network Connectivity Leader
                </div>
                <div className="font-headline text-xl font-bold text-[#111111] mb-2">
                  Case 21-1-04347-2 (Degree 15)
                </div>
                <p className="text-xs text-[#555555] leading-relaxed font-sans-body">
                  Touches 6 agencies, 5 failure modes, and reaches 35.2% of the entire network. Cases, not agencies, function as the true connective tissue of systemic pressure.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E1]">
                <div className="text-[10px] uppercase font-mono-data font-bold text-[#666666] mb-1">
                  Most Efficient Harm Pipeline
                </div>
                <div className="font-headline text-xl font-bold text-[#E53935] mb-2">
                  Case 658959 (Reach Eff. 0.025)
                </div>
                <p className="text-xs text-[#555555] leading-relaxed font-sans-body">
                  With only 11 connections, the medicalization case reaches 29.6% of all nodes. The competency-to-hospital pipeline is the most economical mechanism for rights suspension.
                </p>
              </div>
            </div>

            {/* Centrality Metrics Table */}
            <h4 className="font-headline text-lg font-bold text-[#111111] mb-3">
              Centrality & Graph Metrics Across Priority Nodes
            </h4>
            <div className="overflow-x-auto border border-[#E5E5E1]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#111111] text-[#111111] font-mono-data uppercase">
                    <th className="py-2.5 px-3 font-bold">Node</th>
                    <th className="py-2.5 px-3 font-bold">Type</th>
                    <th className="py-2.5 px-3 text-center font-bold">Degree</th>
                    <th className="py-2.5 px-3 text-center font-bold">Betweenness</th>
                    <th className="py-2.5 px-3 text-center font-bold">Closeness</th>
                    <th className="py-2.5 px-3 text-center font-bold">Reach</th>
                    <th className="py-2.5 px-3 text-center font-bold">Efficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E1]">
                  {TOP_SNA_NODES.map((n, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F6]">
                      <td className="py-2.5 px-3 font-bold text-[#111111]">
                        {n.nodeName}
                      </td>
                      <td className="py-2.5 px-3 text-[#666666]">
                        {n.category}
                      </td>
                      <td className="py-2.5 px-3 font-mono-data text-center font-bold">
                        {n.degree}
                      </td>
                      <td className="py-2.5 px-3 font-mono-data text-center text-[#E53935] font-bold">
                        {n.betweenness.toFixed(4)}
                      </td>
                      <td className="py-2.5 px-3 font-mono-data text-center">
                        {n.closeness.toFixed(3)}
                      </td>
                      <td className="py-2.5 px-3 font-mono-data text-center">
                        {(n.reach * 100).toFixed(1)}%
                      </td>
                      <td className="py-2.5 px-3 font-mono-data text-center">
                        {n.reachEfficiency.toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: THE 6-PHASE INSTITUTIONAL DEFENSE LOOP */}
      {activeTab === 'defense_loop' && (
        <div className="space-y-8">
          <div className="bg-white p-6 lg:p-8 border border-[#111111]">
            <h3 className="font-headline text-3xl font-bold text-[#111111] mb-3">
              The 6-Phase Institutional Defense Loop
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed mb-6 font-sans-body">
              When administrative systems encounter structural exposure or citizen whistleblowing regarding state errors, they deploy a recurring institutional defense mechanism:
            </p>

            <div className="space-y-4">
              {INSTITUTIONAL_DEFENSE_LOOP.map((loop) => (
                <div key={loop.phaseNumber} className="p-5 border border-[#E5E5E1] bg-[#FAF9F6] flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-9 h-9 bg-[#111111] text-white flex items-center justify-center font-mono-data font-bold shrink-0 text-sm">
                    0{loop.phaseNumber}
                  </div>
                  <div className="flex-1 font-sans-body">
                    <h4 className="font-headline text-lg font-bold text-[#111111] mb-1">
                      {loop.phaseName}
                    </h4>
                    <p className="text-xs text-[#444444] leading-relaxed mb-2">
                      <strong className="text-[#111111]">Operational Tactic: </strong>
                      {loop.operationalTactic}
                    </p>
                    <div className="p-3 bg-white border border-[#E5E5E1] text-xs text-[#555555]">
                      <span className="font-bold text-[#E53935] font-mono-data uppercase text-[10px] block mb-0.5">
                        King County Manifestation
                      </span>
                      {loop.kingCountyManifestation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: FEDERAL CIRCUIT PRECEDENTS */}
      {activeTab === 'precedents' && (
        <div className="space-y-8">
          <div className="bg-white p-6 lg:p-8 border border-[#111111]">
            <h3 className="font-headline text-3xl font-bold text-[#111111] mb-3">
              Comparative Matrix: King County Dockets vs. Federal Precedents
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed mb-6 font-sans-body">
              To determine whether these cases reflect isolated local errors or systemic constitutional conflicts, this comparative matrix contrasts King County practices against governing U.S. Supreme Court and Federal Circuit doctrines:
            </p>

            <div className="space-y-4">
              {COMPARATIVE_LEGAL_MATRIX.map((item, idx) => (
                <div key={idx} className="p-5 border border-[#E5E5E1] bg-[#FAF9F6] hover:border-[#111111] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-data mb-2 border-b border-[#E5E5E1] pb-2">
                    <span className="font-bold text-[#111111]">{item.caseDocket}</span>
                    <span className="text-[#E53935] font-bold">{item.constitutionalAxis}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans-body">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-1">
                        Operational Mechanism
                      </div>
                      <p className="text-stone-800 font-medium leading-relaxed">
                        {item.operationalMechanism}
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#666666] mb-1">
                        Governing Federal Precedents
                      </div>
                      <p className="text-stone-800 font-headline italic leading-relaxed">
                        {item.governingPrecedents}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#E5E5E1] text-xs text-[#444444] leading-relaxed font-sans-body">
                    <strong className="text-[#111111]">Doctrinal Conflict: </strong>
                    {item.doctrinalConflictSummary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
