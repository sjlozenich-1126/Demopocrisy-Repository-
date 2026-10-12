export interface ComparativePrecedent {
  caseDocket: string;
  operationalMechanism: string;
  governingPrecedents: string;
  constitutionalAxis: string;
  doctrinalConflictSummary: string;
}

export interface SNANodeMetric {
  nodeName: string;
  category: 'Agency' | 'Case' | 'Failure Mode' | 'Reform';
  degree: number;
  inDegree: number;
  outDegree: number;
  betweenness: number;
  closeness: number;
  reach: number;
  reachEfficiency: number;
  keyRole: string;
}

export interface CSFClinicalComparison {
  parameter: string;
  patientResult: string;
  typicalNeurosyphilis: string;
  clinicalSignificance: string;
  concordant: boolean; // false means contradictory / anomalous
}

export interface InstitutionalDefensePhase {
  phaseNumber: number;
  phaseName: string;
  operationalTactic: string;
  kingCountyManifestation: string;
}

export interface PolicyReformDomain {
  domainLetter: string;
  domainTitle: string;
  reforms: string[];
}

export const COMPARATIVE_LEGAL_MATRIX: ComparativePrecedent[] = [
  {
    caseDocket: "Case No. 658931 (SMC 2021)",
    operationalMechanism: "Pre-charge custodial arrest; unfiled criminal complaint",
    governingPrecedents: "Gerstein v. Pugh, 420 U.S. 103 (1975); County of Riverside v. McLaughlin, 500 U.S. 44 (1991)",
    constitutionalAxis: "Fourth & Fourteenth Amendments",
    doctrinalConflictSummary: "Mandatory prompt judicial finding of probable cause and formal charging; absolute prohibition against arbitrary custodial restraint without an underlying complaint."
  },
  {
    caseDocket: "Case No. 658959 (SMC 2021)",
    operationalMechanism: "'Dismiss & defer' forced psychotropic medical hold",
    governingPrecedents: "Sell v. United States, 539 U.S. 166 (2003); Washington v. Harper, 494 U.S. 210 (1990)",
    constitutionalAxis: "Fourteenth Amendment Due Process & Bodily Integrity",
    doctrinalConflictSummary: "Establishes a rigorous four-prong judicial standard before the state may forcibly medicate an individual. Bypassing judicial hearings via undocumented hospital handoffs constitutes medical battery."
  },
  {
    caseDocket: "Case No. 660121 (SMC 2021)",
    operationalMechanism: "Automated database sync error; stale DVPO execution",
    governingPrecedents: "Arizona v. Evans, 514 U.S. 1 (1995); Herring v. United States, 555 U.S. 135 (2009)",
    constitutionalAxis: "Fourth Amendment Exclusionary Rule",
    doctrinalConflictSummary: "Systemic, recurring database synchronization failures void officer good-faith reliance; tactical deployments based on obsolete flags violate the Fourth Amendment."
  },
  {
    caseDocket: "Case No. 664676 (SMC 2022)",
    operationalMechanism: "Mechanized order enforcement; unrepresented dismissal",
    governingPrecedents: "Rothgery v. Gillespie County, 554 U.S. 191 (2008); Gideon v. Wainwright, 372 U.S. 335 (1963)",
    constitutionalAxis: "Sixth Amendment Right to Counsel",
    doctrinalConflictSummary: "Sixth Amendment attachment occurs at initial custodial appearance before a magistrate; holding an individual overnight and cancelling hearings without appointing counsel violates Rothgery."
  },
  {
    caseDocket: "Case No. 21-1-04347-2 (KCSC 2021–2026)",
    operationalMechanism: "Anonymous arrest; warrantless digital device extraction",
    governingPrecedents: "Riley v. California, 573 U.S. 373 (2014); Mapp v. Ohio, 367 U.S. 643 (1961)",
    constitutionalAxis: "Fourth Amendment Digital Privacy",
    doctrinalConflictSummary: "Police must secure a specific judicial warrant before searching cellular phone data; warrantless mobile extraction by uncredentialed agents violates Riley's bright-line rule."
  },
  {
    caseDocket: "Case No. 22-1-04242-3 (KCSC 2022–2026)",
    operationalMechanism: "Competency loop as trial substitute; zero audio discovery",
    governingPrecedents: "Jackson v. Indiana, 406 U.S. 715 (1972); Barker v. Wingo, 407 U.S. 514 (1972); Brady v. Maryland",
    constitutionalAxis: "Sixth & Fourteenth Amendments",
    doctrinalConflictSummary: "Prohibits indefinite pretrial commitments under RCW 10.77; 4-year legal limbo and 10 months pretrial detention without producing central voicemail recording fails all four Barker prongs."
  },
  {
    caseDocket: "Case No. 25-2-17456-5 (KCSC Civil Eviction)",
    operationalMechanism: "Retaliatory PDA eviction post-KIRO News safety interview",
    governingPrecedents: "Robinson v. Diamond Housing Corp., 463 F.2d 137 (D.C. Cir. 1972); Barela v. Superior Court",
    constitutionalAxis: "First Amendment Retaliation",
    doctrinalConflictSummary: "Summary unlawful detainer process cannot be weaponized to evict a tenant in retaliation for public news commentary exercising protected First Amendment speech."
  },
  {
    caseDocket: "Federal Context (W.D. Wash)",
    operationalMechanism: "Pleading barriers on technological harassment claims",
    governingPrecedents: "Targeted Justice v. Garland, No. 23-20342 (5th Cir. 2024); Nguyen v. DHS",
    constitutionalAxis: "Federal Rule 12(b)(6) Standing",
    doctrinalConflictSummary: "High evidentiary pleading thresholds for non-conventional technological surveillance claims demand rigorous preservation of network logs and independent digital forensic audits."
  }
];

export const HARBORVIEW_CSF_AUDIT: CSFClinicalComparison[] = [
  {
    parameter: "CSF Nucleated Cells",
    patientResult: "87 cells/uL (Overwhelmingly 95% Neutrophils)",
    typicalNeurosyphilis: "Lymphocytic predominance (lymphocytes, not neutrophils)",
    clinicalSignificance: "Severe clinical discordance. A 95% neutrophil count points to acute bacterial meningitis or traumatic puncture, not neurosyphilis. Inverted diagnostic justification.",
    concordant: false
  },
  {
    parameter: "CSF Glucose",
    patientResult: "62 mg/dL (Normal)",
    typicalNeurosyphilis: "Normal to mild decrease; markedly decreased in bacterial meningitis",
    clinicalSignificance: "Contradicts bacterial meningitis (which would show depleted glucose) while confirming absence of metabolic crisis.",
    concordant: false
  },
  {
    parameter: "CSF Protein",
    patientResult: "47 mg/dL (Mild elevation)",
    typicalNeurosyphilis: "Elevated (>45-100 mg/dL)",
    clinicalSignificance: "Borderline nonspecific elevation consistent with local stress, puncture trauma, or minor barrier leakage.",
    concordant: true
  },
  {
    parameter: "CSF VDRL Serology",
    patientResult: "Positive (Titer 1:4)",
    typicalNeurosyphilis: "Positive in true neurosyphilis; but known high false-positive rate",
    clinicalSignificance: "Lab report explicitly warned: 'antibodies may reflect blood contamination or blood-brain barrier disruption, not true CNS infection.' Accepted without clinical correlation.",
    concordant: false
  },
  {
    parameter: "Viral Panels (HSV-1, HSV-2, VZV)",
    patientResult: "All Negative",
    typicalNeurosyphilis: "Negative",
    clinicalSignificance: "Eliminates viral encephalitis as source of reported headaches.",
    concordant: true
  },
  {
    parameter: "Tuberculosis PCR & AFB",
    patientResult: "All Negative (Chest X-Ray TB scare ruled out)",
    typicalNeurosyphilis: "Negative",
    clinicalSignificance: "Reflects institutional anxiety during regional King County TB spikes rather than patient symptomatology.",
    concordant: false
  },
  {
    parameter: "Autoimmune Encephalitis Panel",
    patientResult: "Omitted from initial clinical workup; unconfirmed",
    typicalNeurosyphilis: "Standard differential ruling out autoimmune / paraneoplastic encephalitis",
    clinicalSignificance: "Major clinical omission: Empirical psychotropic regimen initiated without ruling out autoimmune, metabolic, or reactive post-trauma etiologies.",
    concordant: false
  },
  {
    parameter: "Sepsis Diagnosis",
    patientResult: "'Sepsis due to unspecified organism, unknown source' (Normal WBC: 4.7->6.6)",
    typicalNeurosyphilis: "Non-septic unless systemic bacteremia",
    clinicalSignificance: "Placeholder diagnosis entered to justify emergency containment; no organ dysfunction or fever documented.",
    concordant: false
  }
];

export const TOP_SNA_NODES: SNANodeMetric[] = [
  {
    nodeName: "Seattle Police Department (SPD)",
    category: "Agency",
    degree: 9,
    inDegree: 6,
    outDegree: 3,
    betweenness: 0.0040,
    closeness: 0.057,
    reach: 0.074,
    reachEfficiency: 0.016,
    keyRole: "The sole structural bridge in the entire network. Connects arrest intake to prosecution and courts. Holds all inter-agency breakdown edges."
  },
  {
    nodeName: "Case 21-1-04347-2 SEA (Felony Docket)",
    category: "Case",
    degree: 15,
    inDegree: 0,
    outDegree: 15,
    betweenness: 0.0000,
    closeness: 0.311,
    reach: 0.352,
    reachEfficiency: 0.022,
    keyRole: "The most connected, most central node in the network. Touches 6 agencies, 5 failure modes, and 3 reform nodes across 35.2% of the graph."
  },
  {
    nodeName: "Case 658959 (SMC 2021 Medical Hold)",
    category: "Case",
    degree: 11,
    inDegree: 0,
    outDegree: 11,
    betweenness: 0.0000,
    closeness: 0.245,
    reach: 0.296,
    reachEfficiency: 0.025,
    keyRole: "Highest Reach Efficiency (0.025). The medicalization pipeline is the most structurally efficient pathway for systemic harm propagation."
  },
  {
    nodeName: "King County Jail",
    category: "Agency",
    degree: 6,
    inDegree: 5,
    outDegree: 1,
    betweenness: 0.0007,
    closeness: 0.019,
    reach: 0.037,
    reachEfficiency: 0.015,
    keyRole: "Secondary bridge. Detention gateway between booking, involuntary medical transport, and Superior Court calendars."
  },
  {
    nodeName: "King County Superior Court (KCSC)",
    category: "Agency",
    degree: 4,
    inDegree: 3,
    outDegree: 1,
    betweenness: 0.0004,
    closeness: 0.019,
    reach: 0.037,
    reachEfficiency: 0.014,
    keyRole: "Tertiary bridge. Central clearinghouse for indefinite RCW 10.77 restoration commitments."
  },
  {
    nodeName: "Administrative Substitution",
    category: "Failure Mode",
    degree: 3,
    inDegree: 3,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.000,
    reach: 0.000,
    reachEfficiency: 0.000,
    keyRole: "Endemic competency failure track (Cases 658959, 21-1-04347-2, 22-1-04242-3 SEA)."
  },
  {
    nodeName: "Institutional Opacity",
    category: "Failure Mode",
    degree: 3,
    inDegree: 3,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.000,
    reach: 0.000,
    reachEfficiency: 0.000,
    keyRole: "Cross-cutting pathology linking felony prosecution, political speech, and housing eviction tracks."
  },
  {
    nodeName: "Competency Oversight Reform",
    category: "Reform",
    degree: 3,
    inDegree: 3,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.000,
    reach: 0.000,
    reachEfficiency: 0.000,
    keyRole: "Most demanded reform node, receiving 3 independent inbound case requests."
  }
];

export const INSTITUTIONAL_DEFENSE_LOOP: InstitutionalDefensePhase[] = [
  {
    phaseNumber: 1,
    phaseName: "Narcissistic Panic / Exposure Trauma",
    operationalTactic: "Institutional shock triggered when a litigant exposes administrative errors, database desyncs, or state security breaches.",
    kingCountyManifestation: "Reporting State Auditor data breach and technical irregularities met with complete police refusal to file reports."
  },
  {
    phaseNumber: 2,
    phaseName: "Aggressive Containment & Over-Control",
    operationalTactic: "Rapid deployment of coercive physical power to neutralize exposure through disproportionate detention.",
    kingCountyManifestation: "Multi-vehicle SWAT containment maneuvers, uncredentialed agents in unmarked cars, elevated $5,000 bail for non-violent misdemeanors."
  },
  {
    phaseNumber: 3,
    phaseName: "Exploitative Normalization",
    operationalTactic: "Converting custodial detention into bureaucratic metrics: state bed-occupancy funding, overtime expenditures, and recruitment bonuses.",
    kingCountyManifestation: "Long-term pretrial holds in King County Jail aligned with corrections collective-bargaining cycles and OCRP budget allocation."
  },
  {
    phaseNumber: 4,
    phaseName: "Disposal / Rapid Cycling",
    operationalTactic: "Utilizing brief arrests and 'dismiss without prejudice' cycles to evade speedy trial clocks while preserving arrest records.",
    kingCountyManifestation: "Cases 658931 and 664676 booked and dismissed overnight without complaints, leaving permanent public database residue."
  },
  {
    phaseNumber: 5,
    phaseName: "Intellectualized Deflection",
    operationalTactic: "Substituting competency restoration loops under RCW 10.77 for adversarial trials on the merits.",
    kingCountyManifestation: "4-year legal limbo in Governor's threat case where unproduced voicemail was deferred behind serial competency orders."
  },
  {
    phaseNumber: 6,
    phaseName: "Paranoia & Residual Control",
    operationalTactic: "Retaining provisional psychiatric diagnoses post-restoration to maintain institutional leverage and shield state actors.",
    kingCountyManifestation: "Retaining provisional labels even after Dr. Leavey's February 2026 finding of restored competency with zero active psychosis."
  }
];

export const CONSOLIDATED_REFORMS_LIST: PolicyReformDomain[] = [
  {
    domainLetter: "A",
    domainTitle: "Law Enforcement & Arrest Protocols",
    reforms: [
      "Mandate real-time digital tracking linking jail bookings directly to prosecutor intake queues, with automatic alerts for unfiled complaints.",
      "Establish automatic, immediate release triggers if a formal complaint is not filed within a strict statutory timeframe post-arrest.",
      "Require documented, verified human review before executing any custodial action triggered by automated protective order or database flags.",
      "Require all arresting agents to display visible credentials; mandatory public disclosure when unidentified agents conduct arrests.",
      "Mandate Miranda rights compliance auditing across all custodial incidents."
    ]
  },
  {
    domainLetter: "B",
    domainTitle: "Competency & Psychiatric Proceedings",
    reforms: [
      "Establish independent review boards for restoration orders issued without counsel or competency evaluation.",
      "Statutory limits preventing competency proceedings from replacing or indefinitely deferring evidentiary review.",
      "Require empirical, forensic evidence before invoking mental health substitution in cases involving technological-surveillance claims.",
      "Hard statutory limits on pretrial competency delays; automatic dismissal if discovery evidence is withheld beyond 90 days.",
      "Prohibit the pre-signing of judicial orders before scheduled open court hearings."
    ]
  },
  {
    domainLetter: "C",
    domainTitle: "Medical Transfers & Informed Consent",
    reforms: [
      "Require documented judicial authorization for all inter-agency medical transfers post-dismissal.",
      "Enforce strict legal thresholds under Sell v. US for chemical and physical restraint; forced medication must meet judicial standards.",
      "Mandate medical screening and informed consent procedures before any clinical intervention on transferred individuals.",
      "Independent oversight of psychiatric confinement triggered by criminal-legal processes."
    ]
  },
  {
    domainLetter: "D",
    domainTitle: "Digital Evidence & Data Integrity",
    reforms: [
      "Mandatory warrants for all digital-device seizures (Riley v. California); chain-of-custody audits for personal documents.",
      "Automatic, immediate cross-database synchronization upon case dismissal to purge false arrest records.",
      "Quarterly cross-checks between municipal and county court databases.",
      "Mandatory state response protocols when compromised individuals report data-breach-linked targeting.",
      "Establish a Digital Rights Ombudsman to investigate data-linked harassment claims."
    ]
  },
  {
    domainLetter: "E",
    domainTitle: "Transparency & Accountability",
    reforms: [
      "Automatic release of body-cam and dispatch records for all dismissed cases.",
      "Public registry for continuances; mandatory review when pending cases exceed one year.",
      "Judicial review of protected-party designations involving government officials.",
      "Ban on using psychiatric framing to replace evidentiary review without independent clinical oversight.",
      "Special counsel review for cases involving state officials to prevent selective prosecution."
    ]
  },
  {
    domainLetter: "F",
    domainTitle: "Housing & Tenant Protections",
    reforms: [
      "Bar Public Development Authorities (PDAs) from using summary Unlawful Detainer processes without a prior administrative fact-finding hearing.",
      "Mandate acceptance of certified third-party agency assistance funds; impose civil penalties for unjustified refusal.",
      "Mandatory public disclosure logs for PDA operations and financial accounts.",
      "Strengthen retaliatory eviction protections following media engagement or public commentary (Robinson v. Diamond Housing)."
    ]
  },
  {
    domainLetter: "G",
    domainTitle: "Environmental & Detention Conditions",
    reforms: [
      "Mandatory health audits for all detention facilities under extended pretrial orders.",
      "Federal-standard remediation protocols for contaminated water or unsafe infrastructure in jails and correctional facilities.",
      "Independent oversight body for conditions of confinement with power to compel immediate remediation."
    ]
  }
];

import { NetworkNode, NetworkEdge } from '../types';

export const SNA_NODES: NetworkNode[] = [
  // 7 Cases
  {
    id: "case-21-1",
    label: "Case 21-1-04347-2",
    category: "Case",
    shape: "circle",
    degree: 15,
    closeness: 0.311,
    reachEfficiency: 0.022,
    description: "Diagnostic Epicenter (KCSC 2021–2026 Felony Docket). Connects 6 agencies, 5 failure modes, and 3 reform nodes across 35.2% of the graph."
  },
  {
    id: "case-658959",
    label: "Case 658959",
    category: "Case",
    shape: "circle",
    degree: 11,
    closeness: 0.245,
    reachEfficiency: 0.025,
    description: "Harm Vector Efficiency (SMC 2021). Dismiss-and-defer involuntary medical hold at Harborview. Highest reach efficiency pathway for systemic damage."
  },
  {
    id: "case-664676",
    label: "Case 664676",
    category: "Case",
    shape: "circle",
    degree: 7,
    closeness: 0.198,
    reachEfficiency: 0.018,
    description: "Economic root cause & rapid cycling. Overtime detention metrics without counsel, dismissed overnight without complaint."
  },
  {
    id: "case-658931",
    label: "Case 658931",
    category: "Case",
    shape: "circle",
    degree: 8,
    closeness: 0.210,
    reachEfficiency: 0.017,
    description: "Pre-charge custodial arrest on unfiled complaint. Fourth Amendment Gerstein violation with no judicial finding."
  },
  {
    id: "case-660121",
    label: "Case 660121",
    category: "Case",
    shape: "circle",
    degree: 6,
    closeness: 0.185,
    reachEfficiency: 0.015,
    description: "CAD automated flag desynchronization. Execution of high-intensity tactical arrest on an expired protective order."
  },
  {
    id: "case-22-1",
    label: "Case 22-1-04242-3",
    category: "Case",
    shape: "circle",
    degree: 12,
    closeness: 0.285,
    reachEfficiency: 0.021,
    description: "Governor threat docket. Serial RCW 10.77 competency stays substituted for trial while withholding foundational voicemail audio discovery."
  },
  {
    id: "case-25-2",
    label: "Case 25-2-17456-5",
    category: "Case",
    shape: "circle",
    degree: 8,
    closeness: 0.220,
    reachEfficiency: 0.019,
    description: "Summary unlawful detainer eviction filed 48 hours following public KIRO 7 News broadcast, rejecting accredited emergency rent relief."
  },

  // 18 Agencies
  {
    id: "spd",
    label: "Seattle Police Dept (SPD)",
    category: "Agency",
    shape: "square",
    degree: 9,
    inDegree: 6,
    outDegree: 3,
    betweenness: 0.0040,
    closeness: 0.057,
    reachEfficiency: 0.016,
    description: "The sole structural bridge in the entire network. Connects arrest intake to prosecution and courts. Holds all inter-agency breakdown edges."
  },
  {
    id: "harborview",
    label: "Harborview Medical Center",
    category: "Agency",
    shape: "square",
    degree: 8,
    betweenness: 0.0000,
    closeness: 0.042,
    reachEfficiency: 0.019,
    description: "Involuntary psychiatric and infectious disease intake point; site of unconsented lumbar puncture and forced psychotropic administration."
  },
  {
    id: "apple-health",
    label: "Apple Health (Medicaid)",
    category: "Agency",
    shape: "square",
    degree: 4,
    betweenness: 0.0000,
    closeness: 0.028,
    reachEfficiency: 0.012,
    description: "Medicaid insurance administration; documented discharge recommendation overruled by custodial hospital hold."
  },
  {
    id: "kc-jail",
    label: "King County Jail",
    category: "Agency",
    shape: "square",
    degree: 6,
    inDegree: 5,
    outDegree: 1,
    betweenness: 0.0007,
    closeness: 0.019,
    reachEfficiency: 0.015,
    description: "Secondary bridge. Detention gateway between booking, involuntary medical transport, and Superior Court calendars."
  },
  {
    id: "kcsc",
    label: "King County Superior Court",
    category: "Agency",
    shape: "square",
    degree: 4,
    inDegree: 3,
    outDegree: 1,
    betweenness: 0.0004,
    closeness: 0.019,
    reachEfficiency: 0.014,
    description: "Tertiary bridge. Central clearinghouse for indefinite RCW 10.77 restoration commitments."
  },
  {
    id: "smc",
    label: "Seattle Municipal Court",
    category: "Agency",
    shape: "square",
    degree: 5,
    inDegree: 5,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.018,
    reachEfficiency: 0.011,
    description: "Municipal court docket center where misdemeanor dismissals deferred subjects directly to administrative hospital holds."
  },
  {
    id: "kcpa",
    label: "King County Prosecutor",
    category: "Agency",
    shape: "square",
    degree: 5,
    inDegree: 5,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.021,
    reachEfficiency: 0.013,
    description: "Felony charging authority; withheld primary digital audio evidence behind RCW 10.77 stays."
  },
  {
    id: "seattle-city-atty",
    label: "Seattle City Attorney",
    category: "Agency",
    shape: "square",
    degree: 4,
    inDegree: 4,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.017,
    reachEfficiency: 0.011,
    description: "Municipal prosecution filing consecutive dismiss-without-prejudice misdemeanor dockets."
  },
  {
    id: "wsh",
    label: "Western State Hospital",
    category: "Agency",
    shape: "square",
    degree: 5,
    inDegree: 5,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.024,
    reachEfficiency: 0.015,
    description: "State psychiatric facility operating forensic evaluation queues under federal Trueblood contempt fines."
  },
  {
    id: "dshs",
    label: "WA DSHS",
    category: "Agency",
    shape: "square",
    degree: 4,
    inDegree: 4,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.019,
    reachEfficiency: 0.012,
    description: "Department of Social and Health Services managing the Office of Forensic Mental Health Services."
  },
  {
    id: "scidpda",
    label: "SCIDpda Housing Authority",
    category: "Agency",
    shape: "square",
    degree: 4,
    inDegree: 4,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.020,
    reachEfficiency: 0.013,
    description: "Public Development Authority landlord executing retaliatory eviction while rejecting certified emergency rental aid."
  },
  {
    id: "opa",
    label: "Office of Police Accountability",
    category: "Agency",
    shape: "square",
    degree: 3,
    inDegree: 3,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.014,
    reachEfficiency: 0.009,
    description: "Municipal police oversight agency dismissing misconduct complaints regarding uncredentialed arrests."
  },
  {
    id: "oig",
    label: "Office of Inspector General",
    category: "Agency",
    shape: "square",
    degree: 3,
    inDegree: 3,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.013,
    reachEfficiency: 0.008,
    description: "Independent oversight body with outdegree = 0, absorbing community complaints without enforcement actions."
  },
  {
    id: "wa-auditor",
    label: "WA State Auditor's Office",
    category: "Agency",
    shape: "square",
    degree: 3,
    inDegree: 3,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.015,
    reachEfficiency: 0.010,
    description: "Source of the 2020 1.6M record Accellion data breach origin event."
  },
  {
    id: "fbi",
    label: "FBI Seattle Field Office",
    category: "Agency",
    shape: "square",
    degree: 2,
    inDegree: 2,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.011,
    reachEfficiency: 0.007,
    description: "Federal law enforcement agency receiving reports of private surveillance hardware."
  },
  {
    id: "aclu",
    label: "ACLU of Washington",
    category: "Agency",
    shape: "square",
    degree: 2,
    inDegree: 2,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.012,
    reachEfficiency: 0.008,
    description: "Civil liberties advocacy organization tracking King County Trueblood systemic competency delays."
  },
  {
    id: "wa-sc",
    label: "Washington Supreme Court",
    category: "Agency",
    shape: "square",
    degree: 2,
    inDegree: 2,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.010,
    reachEfficiency: 0.006,
    description: "Appellate body setting procedural court rules (CrR 8.3) and constitutional standards."
  },
  {
    id: "public-defense",
    label: "Public Defense (DPD)",
    category: "Agency",
    shape: "square",
    degree: 4,
    inDegree: 4,
    outDegree: 0,
    betweenness: 0.0000,
    closeness: 0.019,
    reachEfficiency: 0.012,
    description: "Court-appointed defense counsel constrained by extreme caseloads and competency delay procedures."
  },

  // 19 Failure Modes
  {
    id: "fm-substitution",
    label: "Administrative Substitution",
    category: "FailureMode",
    shape: "triangle",
    degree: 5,
    description: "Substituting administrative competency holds for judicial trial on the merits."
  },
  {
    id: "fm-tech-harassment",
    label: "Tech Harassment Misclassification",
    category: "FailureMode",
    shape: "triangle",
    degree: 4,
    description: "Converting physical device logs into psychiatric symptoms."
  },
  {
    id: "fm-economic-root",
    label: "Economic Detention Incentives",
    category: "FailureMode",
    shape: "triangle",
    degree: 4,
    description: "Detention volume harvested for police-union negotiation and bonuses ($7.5k–$15k)."
  },
  {
    id: "fm-unfiled-complaint",
    label: "Unfiled Criminal Complaint",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Booking individuals into jail without filing formal charging documents."
  },
  {
    id: "fm-cad-desync",
    label: "CAD Database Desync",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Tactical deployment of SWAT units based on stale, unverified database records."
  },
  {
    id: "fm-pre-signed",
    label: "Pre-Signed Orders",
    category: "FailureMode",
    shape: "triangle",
    degree: 4,
    description: "Judicial template orders signed prior to scheduled open court hearings."
  },
  {
    id: "fm-speedy-trial",
    label: "Speedy Trial Tolling",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Tolling constitutional speedy trial clocks indefinitely behind competency motions."
  },
  {
    id: "fm-forced-med",
    label: "Unconsented Restraint",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Forced psychotropic injections bypassing Sell v. US standards."
  },
  {
    id: "fm-discovery-withholding",
    label: "Discovery Withholding",
    category: "FailureMode",
    shape: "triangle",
    degree: 4,
    description: "Failing to produce initiating voicemail audio or body-cam footage for years."
  },
  {
    id: "fm-retaliatory-eviction",
    label: "Retaliatory Eviction",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Deploying housing court procedures to silence public interest reporting."
  },
  {
    id: "fm-incompetency-loop",
    label: "Serial Competency Loops",
    category: "FailureMode",
    shape: "triangle",
    degree: 4,
    description: "Repetitive 45-day evaluation orders preventing adversarial trial."
  },
  {
    id: "fm-epistemic-inversion",
    label: "Epistemic Inversion",
    category: "FailureMode",
    shape: "triangle",
    degree: 4,
    description: "Treating institutional errors as reality while dismissing physical logs as hallucination."
  },
  {
    id: "fm-no-counsel",
    label: "Absence of Counsel",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Cancelling hearings and dismissing cases without defense attorney presence."
  },
  {
    id: "fm-diagnostic-drift",
    label: "Diagnostic Label Drift",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Adding unconfirmed diagnoses to permanent problem lists without diagnostic testing."
  },
  {
    id: "fm-chain-of-custody",
    label: "Device Seizure Without Warrant",
    category: "FailureMode",
    shape: "triangle",
    degree: 2,
    description: "Extracting mobile phone data without a Riley judicial warrant."
  },
  {
    id: "fm-bed-harvesting",
    label: "Bed Volume Harvesting",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "Bureaucratic incentives to maintain detention facility capacity thresholds."
  },
  {
    id: "fm-overtime-incentive",
    label: "Overtime Booking Pay",
    category: "FailureMode",
    shape: "triangle",
    degree: 2,
    description: "Police booking cycles aligned with shift change overtime pay."
  },
  {
    id: "fm-administrative-dogma",
    label: "Administrative Dogma",
    category: "FailureMode",
    shape: "triangle",
    degree: 4,
    description: "Subsequent courts accepting unverified assertions from prior dockets as verified fact."
  },
  {
    id: "fm-immunity-shield",
    label: "Immunity Defensive Shield",
    category: "FailureMode",
    shape: "triangle",
    degree: 3,
    description: "State actors invoking absolute immunity to shield systemic procedural failures."
  },

  // 10 Reforms
  {
    id: "rf-economic-decoupling",
    label: "Economic Decoupling",
    category: "Reform",
    shape: "hexagon",
    degree: 2,
    description: "Decoupling detention metrics from municipal funding and bonuses."
  },
  {
    id: "rf-competency-limit",
    label: "Hard RCW 10.77 Limits",
    category: "Reform",
    shape: "hexagon",
    degree: 3,
    description: "Mandatory dismissal with prejudice if competency evaluations exceed statutory caps."
  },
  {
    id: "rf-discovery-dismissal",
    label: "Discovery Dismissal Rule",
    category: "Reform",
    shape: "hexagon",
    degree: 3,
    description: "Automatic dismissal if digital audio discovery is withheld over 30 days."
  },
  {
    id: "rf-human-cad-verification",
    label: "Human CAD Verification",
    category: "Reform",
    shape: "hexagon",
    degree: 3,
    description: "Mandatory human verification of protective order expiration prior to tactical arrest."
  },
  {
    id: "rf-no-presigned-orders",
    label: "Ban Pre-Signed Orders",
    category: "Reform",
    shape: "hexagon",
    degree: 3,
    description: "Banning ex parte template competency orders without physical counsel presence."
  },
  {
    id: "rf-pda-oversight",
    label: "PDA Housing Oversight",
    category: "Reform",
    shape: "hexagon",
    degree: 2,
    description: "Prohibiting public development authorities from rejecting third-party rental assistance."
  },
  {
    id: "rf-digital-rights",
    label: "Digital Evidence Mandate",
    category: "Reform",
    shape: "hexagon",
    degree: 2,
    description: "Strict Riley compliance and independent auditing for seized electronic devices."
  },
  {
    id: "rf-informed-consent",
    label: "Sell v. US Enforcement",
    category: "Reform",
    shape: "hexagon",
    degree: 2,
    description: "Enforcing strict judicial hearing standards before chemical restraint."
  },
  {
    id: "rf-miranda-audit",
    label: "Miranda Audit Protocol",
    category: "Reform",
    shape: "hexagon",
    degree: 2,
    description: "Independent verification of constitutional rights notifications across all bookings."
  },
  {
    id: "rf-ombudsman",
    label: "Tech Harassment Ombudsman",
    category: "Reform",
    shape: "hexagon",
    degree: 2,
    description: "Specialized state ombudsman to evaluate complex cybernetic and data breach claims."
  }
];

export const SNA_EDGES: NetworkEdge[] = [
  // SPD Bridge connections
  { id: "e-spd-c21", source: "spd", target: "case-21-1", type: "Arrests and intake filing" },
  { id: "e-spd-c658", source: "spd", target: "case-658959", type: "Custodial transport" },
  { id: "e-spd-c664", source: "spd", target: "case-664676", type: "Discretionary arrest" },
  { id: "e-spd-c6589", source: "spd", target: "case-658931", type: "Unfiled complaint booking" },
  { id: "e-spd-c660", source: "spd", target: "case-660121", type: "CAD automated deployment" },
  { id: "e-spd-c22", source: "spd", target: "case-22-1", type: "Threat report intake" },
  { id: "e-spd-kcj", source: "spd", target: "kc-jail", type: "Booking transfer" },
  { id: "e-spd-opa", source: "spd", target: "opa", type: "Investigative referral" },
  { id: "e-spd-smc", source: "spd", target: "smc", type: "Citation filing" },

  // Case 21-1 connections (Epicenter)
  { id: "e-c21-kcsc", source: "case-21-1", target: "kcsc", type: "Trial calendar jurisdiction" },
  { id: "e-c21-kcpa", source: "case-21-1", target: "kcpa", type: "Felony prosecution" },
  { id: "e-c21-wsh", source: "case-21-1", target: "wsh", type: "RCW 10.77 restoration order" },
  { id: "e-c21-pd", source: "case-21-1", target: "public-defense", type: "Assigned counsel" },
  { id: "e-c21-fm-sub", source: "case-21-1", target: "fm-substitution", type: "Suffers procedural breakdown" },
  { id: "e-c21-fm-tech", source: "case-21-1", target: "fm-tech-harassment", type: "Suffers procedural breakdown" },
  { id: "e-c21-fm-presigned", source: "case-21-1", target: "fm-pre-signed", type: "Suffers procedural breakdown" },
  { id: "e-c21-fm-speedy", source: "case-21-1", target: "fm-speedy-trial", type: "Suffers procedural breakdown" },
  { id: "e-c21-fm-inv", source: "case-21-1", target: "fm-epistemic-inversion", type: "Suffers procedural breakdown" },
  { id: "e-c21-rf-comp", source: "case-21-1", target: "rf-competency-limit", type: "Remedied by" },
  { id: "e-c21-rf-presigned", source: "case-21-1", target: "rf-no-presigned-orders", type: "Remedied by" },
  { id: "e-c21-rf-dig", source: "case-21-1", target: "rf-digital-rights", type: "Remedied by" },

  // Case 658959 connections (Harm Vector Efficiency)
  { id: "e-c658-hb", source: "case-658959", target: "harborview", type: "Suffers procedural breakdown" },
  { id: "e-c658-ah", source: "case-658959", target: "apple-health", type: "Insurance coverage dispute" },
  { id: "e-c658-smc", source: "case-658959", target: "smc", type: "Dismiss & defer order" },
  { id: "e-c658-fm-sub", source: "case-658959", target: "fm-substitution", type: "Suffers procedural breakdown" },
  { id: "e-c658-fm-tech", source: "case-658959", target: "fm-tech-harassment", type: "Suffers procedural breakdown" },
  { id: "e-c658-fm-fmed", source: "case-658959", target: "fm-forced-med", type: "Suffers procedural breakdown" },
  { id: "e-c658-fm-drift", source: "case-658959", target: "fm-diagnostic-drift", type: "Suffers procedural breakdown" },
  { id: "e-c658-rf-consent", source: "case-658959", target: "rf-informed-consent", type: "Remedied by" },
  { id: "e-c658-rf-ombud", source: "case-658959", target: "rf-ombudsman", type: "Remedied by" },

  // Case 664676 connections (Economic root cause)
  { id: "e-c664-fm-econ", source: "case-664676", target: "fm-economic-root", type: "Root cause mechanism" },
  { id: "e-c664-fm-bed", source: "case-664676", target: "fm-bed-harvesting", type: "Root cause mechanism" },
  { id: "e-c664-fm-ot", source: "case-664676", target: "fm-overtime-incentive", type: "Root cause mechanism" },
  { id: "e-c664-fm-noc", source: "case-664676", target: "fm-no-counsel", type: "Suffers procedural breakdown" },
  { id: "e-c664-smc", source: "case-664676", target: "smc", type: "Overnight dismissal" },
  { id: "e-c664-kcj", source: "case-664676", target: "kc-jail", type: "Custodial hold" },
  { id: "e-c664-rf-econ", source: "case-664676", target: "rf-economic-decoupling", type: "Remedied by" },

  // Case 658931 connections
  { id: "e-c6589-fm-unfiled", source: "case-658931", target: "fm-unfiled-complaint", type: "Suffers procedural breakdown" },
  { id: "e-c6589-smc", source: "case-658931", target: "smc", type: "Unfiled docket" },
  { id: "e-c6589-kcj", source: "case-658931", target: "kc-jail", type: "Booking without complaint" },
  { id: "e-c6589-rf-miranda", source: "case-658931", target: "rf-miranda-audit", type: "Remedied by" },

  // Case 660121 connections
  { id: "e-c660-fm-cad", source: "case-660121", target: "fm-cad-desync", type: "Suffers procedural breakdown" },
  { id: "e-c660-rf-cad", source: "case-660121", target: "rf-human-cad-verification", type: "Remedied by" },
  { id: "e-c660-smc", source: "case-660121", target: "smc", type: "Misdemeanor trial" },
  { id: "e-c660-sca", source: "case-660121", target: "seattle-city-atty", type: "Dismissal request" },

  // Case 22-1 connections
  { id: "e-c22-kcsc", source: "case-22-1", target: "kcsc", type: "Superior Court trial docket" },
  { id: "e-c22-kcpa", source: "case-22-1", target: "kcpa", type: "State prosecutor charging" },
  { id: "e-c22-wsh", source: "case-22-1", target: "wsh", type: "State hospital restoration" },
  { id: "e-c22-fm-disc", source: "case-22-1", target: "fm-discovery-withholding", type: "Suffers procedural breakdown" },
  { id: "e-c22-fm-loop", source: "case-22-1", target: "fm-incompetency-loop", type: "Suffers procedural breakdown" },
  { id: "e-c22-fm-sub", source: "case-22-1", target: "fm-substitution", type: "Suffers procedural breakdown" },
  { id: "e-c22-fm-dogma", source: "case-22-1", target: "fm-administrative-dogma", type: "Suffers procedural breakdown" },
  { id: "e-c22-rf-disc", source: "case-22-1", target: "rf-discovery-dismissal", type: "Remedied by" },
  { id: "e-c22-rf-comp", source: "case-22-1", target: "rf-competency-limit", type: "Remedied by" },

  // Case 25-2 connections (Eviction)
  { id: "e-c25-scid", source: "case-25-2", target: "scidpda", type: "Unlawful detainer petitioner" },
  { id: "e-c25-kcsc", source: "case-25-2", target: "kcsc", type: "Housing court bench" },
  { id: "e-c25-fm-evict", source: "case-25-2", target: "fm-retaliatory-eviction", type: "Suffers procedural breakdown" },
  { id: "e-c25-fm-econ", source: "case-25-2", target: "fm-economic-root", type: "Suffers procedural breakdown" },
  { id: "e-c25-rf-pda", source: "case-25-2", target: "rf-pda-oversight", type: "Remedied by" },

  // Inter-Agency and failure relationships
  { id: "e-aud-c21", source: "wa-auditor", target: "case-21-1", type: "Breach origin link" },
  { id: "e-fbi-c21", source: "fbi", target: "case-21-1", type: "Referred report" },
  { id: "e-hb-ah", source: "harborview", target: "apple-health", type: "Clinical stay billing" },
  { id: "e-kcj-hb", source: "kc-jail", target: "harborview", type: "Involuntary medical transit" },
  { id: "e-kcj-wsh", source: "kc-jail", target: "wsh", type: "Competency queue transit" },
  { id: "e-wsh-dshs", source: "wsh", target: "dshs", type: "Administrative parent agency" },
  { id: "e-aclu-wsh", source: "aclu", target: "wsh", type: "Trueblood systemic litigation" },
  { id: "e-wasc-kcsc", source: "wa-sc", target: "kcsc", type: "Court procedural rulemaking" },
  { id: "e-oig-opa", source: "oig", target: "opa", type: "Civilian oversight review" },
  { id: "e-kcpa-sca", source: "kcpa", target: "seattle-city-atty", type: "Jurisdictional handoff" },
  { id: "e-fm-sub-incomp", source: "fm-substitution", target: "fm-incompetency-loop", type: "Compound systemic failure" },
  { id: "e-fm-tech-inv", source: "fm-tech-harassment", target: "fm-epistemic-inversion", type: "Epistemic feedback loop" },
  { id: "e-fm-econ-bed", source: "fm-economic-root", target: "fm-bed-harvesting", type: "Compounding financial incentive" },
  { id: "e-fm-presigned-dogma", source: "fm-pre-signed", target: "fm-administrative-dogma", type: "Procedural hardening" },
  { id: "e-fm-disc-immunity", source: "fm-discovery-withholding", target: "fm-immunity-shield", type: "Doctrinal shield" },
  { id: "e-rf-econ-dec", source: "rf-economic-decoupling", target: "fm-economic-root", type: "Direct legislative remedy" },
  { id: "e-rf-cad-hum", source: "rf-human-cad-verification", target: "fm-cad-desync", type: "Technical safeguard" },
  { id: "e-rf-disc-mand", source: "rf-discovery-dismissal", target: "fm-discovery-withholding", type: "Enforcement trigger" }
];

export interface StratigraphicLayer {
  layerNumber: number;
  name: string;
  epoch: string;
  content: string;
  systemicFunction: string;
}

export const STRATIGRAPHIC_LAYERS: StratigraphicLayer[] = [
  {
    layerNumber: 6,
    name: "Administrative Dogma & Judicial Incompetency Rulings",
    epoch: "2024–2026",
    content: "Upper-tier court orders citing prior restoration findings as permanent historical truth. Judges, prosecutors, and evaluators quote previous findings without examining origin foundations.",
    systemicFunction: "Transforms early provisional notes into irreversible legal disability, shielding institutional actors from civil rights liability."
  },
  {
    layerNumber: 5,
    name: "Substituted Adjudication & Competency Loops",
    epoch: "2022–2024",
    content: "Serial 45-day competency evaluation orders under RCW 10.77. Foundational evidence (voicemails, bodycam) deferred while subject is kept in indefinite custody.",
    systemicFunction: "Substitutes clinical evaluation for constitutional trial on the merits, avoiding evidentiary cross-examination."
  },
  {
    layerNumber: 4,
    name: "Diagnostic Drift & Problem List Inflation",
    epoch: "2021",
    content: "Harborview Medical Center problem list populates speculative diagnoses (Neurosyphilis, Sepsis, Psychosis) despite contradictory neutrophilic CSF lab results.",
    systemicFunction: "Creates an unassailable institutional paper trail that subsequent municipal courts adopt without independent review."
  },
  {
    layerNumber: 3,
    name: "Tactical Escalation & Custodial Capture",
    epoch: "2021",
    content: "SWAT deployments, multi-vehicle tactical arrests, unfiled criminal complaints, and uncredentialed vehicle intercepts.",
    systemicFunction: "Establishes a severe custodial record justifying elevated bail ($5,000) for low-threshold misdemeanor allegations."
  },
  {
    layerNumber: 2,
    name: "Automated Database Flags & Law Enforcement CAD",
    epoch: "2020–2021",
    content: "Desynchronized municipal CAD records and stale protective order flags stored in police dispatch systems without human verification.",
    systemicFunction: "Automates probable cause determinations, stripping arresting officers of discretionary inquiry."
  },
  {
    layerNumber: 1,
    name: "Origin Data Breach & Hardware Exposure",
    epoch: "2020",
    content: "Catastrophic 1.6M record WA State Auditor data breach; contemporaneous reports of domestic surveillance hardware and frequency devices.",
    systemicFunction: "The initial fracture. Institutional refusal to investigate technical reports converts reporting subject into targeted suspect."
  }
];

export interface InstitutionalCycleStep {
  step: number;
  name: string;
  description: string;
}

export const INSTITUTIONAL_PROCESSING_CYCLE: InstitutionalCycleStep[] = [
  {
    step: 1,
    name: "Intake Anomaly & Threat Misclassification",
    description: "Citizen reports high-complexity technological anomalies (data breach exploitation, surveillance hardware). Police dispatchers and frontline officers misclassify technological complaints as psychiatric distress."
  },
  {
    step: 2,
    name: "Database Desynchronization & Flag Elevation",
    description: "Unverified incident reports and stale protective order filings enter municipal CAD and dispatch systems. Automated alerts elevate subject to 'caution' status without judicial oversight."
  },
  {
    step: 3,
    name: "Custodial Capture & Bail Inflation",
    description: "Tactical police units deploy for low-level non-violent infractions. High-bail schedules and unfiled complaints trigger immediate pretrial detention in King County Jail."
  },
  {
    step: 4,
    name: "Clinical Substitution & Chemical Restraint",
    description: "Municipal court dismisses charges without prejudice and routes subject directly to hospital holds. Unconsented psychotropic injections create acute physiological crisis."
  },
  {
    step: 5,
    name: "Competency Looping & Speedy Trial Tolling",
    description: "Prosecution files felony charges but stays proceedings under RCW 10.77. Pre-signed restoration orders toll constitutional speedy trial rights while discovery is withheld."
  },
  {
    step: 6,
    name: "Eviction Retaliation & Economic Displacement",
    description: "Public housing authorities initiate summary unlawful detainer proceedings while third-party rental relief is blocked, stripping the defendant of residential stability."
  },
  {
    step: 7,
    name: "Administrative Disposal & Docket Sealing",
    description: "Years into custody, charges are quietly dismissed or resolved through deferred diversion, leaving permanent arrest and psychiatric records that immunize the state."
  }
];

export interface EpistemicSide {
  title: string;
  authorityLevel: string;
  points: string[];
}

export interface EpistemicInversionComparison {
  institutionalSide: EpistemicSide;
  defendantSide: EpistemicSide;
}

export const EPISTEMIC_INVERSION_COMPARISON: EpistemicInversionComparison = {
  institutionalSide: {
    title: "Institutional Automated Record (The Official Reality)",
    authorityLevel: "Unimpeachable / Presumed Competent",
    points: [
      "Stale protection order flags in CAD are treated as absolute objective justification for SWAT deployments.",
      "Hospital chart notes recording speculative diagnoses are accepted by judges without examining lab contradictions.",
      "Pre-signed template restoration orders signed before hearings are treated as solemn judicial due process.",
      "Unfiled booking sheets and missing voicemail discovery are treated as harmless administrative oversights.",
      "Landlord PDA claims of non-payment are rubber-stamped despite documented refusal of certified relief checks."
    ]
  },
  defendantSide: {
    title: "Operating Subject's Counter-Archive (The Physical Substrate)",
    authorityLevel: "Psychiatrically Pathologized / Presumed Incompetent",
    points: [
      "Contemporaneous network traffic logs and hardware photos are categorized as 'persecutory delusions.'",
      "CSF laboratory panels showing 95% neutrophilic predominance and normal glucose are ignored in court hearings.",
      "Demands for the alleged threatening voicemail audio under Brady v. Maryland are dismissed as 'uncooperative.'",
      "Reports of uncredentialed arresting officers in civilian vehicles are treated as signs of paranoia.",
      "Certified bank drafts and emergency rental grant approval letters are excluded from summary eviction hearings."
    ]
  }
};

export interface DefenseLoopPhase {
  phase: number;
  title: string;
  detail: string;
}

export const DEFENSE_LOOP_PHASES: DefenseLoopPhase[] = [
  {
    phase: 1,
    title: "Exposure Trauma / Institutional Panic",
    detail: "Litigant presents irrefutable evidence of administrative error, data breaches, or unconstitutional procedure. Bureaucracies perceive exposure as an existential threat to agency credibility."
  },
  {
    phase: 2,
    title: "Aggressive Tactical Containment",
    detail: "Rapid physical intervention using tactical SWAT units, elevated bail schedules, and physical restraint to remove the litigant from public discourse."
  },
  {
    phase: 3,
    title: "Exploitative Normalization & Bed Harvesting",
    detail: "Converting custodial detention into bureaucratic revenue: state bed-occupancy funding, overtime expenditures, and recruitment bonuses."
  },
  {
    phase: 4,
    title: "Disposal & Rapid Docket Cycling",
    detail: "Overnight arrests followed by dismissals without prejudice to evade speedy trial deadlines while preserving police contact entries."
  },
  {
    phase: 5,
    title: "Intellectualized Deflection & Competency Loops",
    detail: "Substituting competency restoration under RCW 10.77 for adversarial trials on the merits, trapping the subject in state hospital queues."
  },
  {
    phase: 6,
    title: "Residual Control & Retained Diagnoses",
    detail: "Retaining provisional psychiatric labels even after restored competency to maintain systemic leverage and shield state actors from § 1983 liability."
  }
];

export interface CSFFlag {
  parameter: string;
  value: string;
  norm: string;
  matchStatus: string;
  note: string;
}

export interface CSFMedication {
  drug: string;
  dosage: string;
  justification: string;
  consent: string;
}

export interface CSFLabAuditData {
  diagnosticFlags: CSFFlag[];
  medicationsAdministered: CSFMedication[];
}

export const CSF_LAB_AUDIT_DATA: CSFLabAuditData = {
  diagnosticFlags: [
    {
      parameter: "CSF Nucleated Cells",
      value: "87 cells/uL (95% Neutrophils)",
      norm: "0–5 cells/uL (Lymphocytic)",
      matchStatus: "Severe Discordance",
      note: "Neutrophilic predominance contradicts neurosyphilis; indicates bacterial meningitis or puncture trauma."
    },
    {
      parameter: "CSF Glucose",
      value: "62 mg/dL",
      norm: "40–70 mg/dL",
      matchStatus: "Discordance",
      note: "Normal glucose completely rules out bacterial meningitis, contradicting cell count severity."
    },
    {
      parameter: "CSF Protein",
      value: "47 mg/dL",
      norm: "15–45 mg/dL",
      matchStatus: "Borderline Elevation",
      note: "Mild nonspecific elevation consistent with local tap trauma or blood-brain barrier disruption."
    },
    {
      parameter: "CSF VDRL Serology",
      value: "Positive (1:4)",
      norm: "Non-reactive",
      matchStatus: "Unconfirmed Titration",
      note: "Hospital lab explicitly warned: results unable to distinguish intrathecal antibodies from blood contamination."
    },
    {
      parameter: "Viral Panel (HSV-1, HSV-2, VZV)",
      value: "All Negative",
      norm: "Negative",
      matchStatus: "Negative",
      note: "Eliminates viral encephalitis as the source of reported cranial discomfort."
    },
    {
      parameter: "TB PCR & Acid-Fast Stain",
      value: "Negative",
      norm: "Negative",
      matchStatus: "Negative",
      note: "No mycobacterial infection detected, ruling out institutional tuberculosis scare."
    },
    {
      parameter: "Autoimmune Encephalitis Panel",
      value: "Omitted / Not Performed",
      norm: "Negative",
      matchStatus: "Diagnostic Omission",
      note: "Standard workup ruling out anti-NMDAR encephalitis was omitted prior to administering neuroleptics."
    },
    {
      parameter: "Sepsis Diagnostic Workup",
      value: "Normal WBC (4.7–6.6 K/uL)",
      norm: "4.5–11.0 K/uL",
      matchStatus: "Diagnostic Inflation",
      note: "Sepsis code entered without documented systemic infection, organ dysfunction, or fever."
    },
    {
      parameter: "Blood-Brain Barrier Ratio",
      value: "Altered Permeability",
      norm: "Intact Barrier",
      matchStatus: "Discordance",
      note: "Indicates serum antibody leakage across barrier rather than central nervous system pathology."
    },
    {
      parameter: "Treponema Pallidum DNA PCR",
      value: "Not Performed",
      norm: "Definitive DNA Negative",
      matchStatus: "Diagnostic Void",
      note: "Confirmatory molecular DNA test was never performed before assigning permanent diagnosis."
    }
  ],
  medicationsAdministered: [
    {
      drug: "Haloperidol (Haldol)",
      dosage: "5 mg IM",
      justification: "Agitation / Verbal objection to unconsented lumbar puncture",
      consent: "Refused / Restrained"
    },
    {
      drug: "Risperidone (Risperdal)",
      dosage: "2 mg PO",
      justification: "Provisional psychosis protocol",
      consent: "Refused / Coerced"
    },
    {
      drug: "Benztropine (Cogentin)",
      dosage: "1 mg IM",
      justification: "Rescue treatment for acute 2-hour dystonic limb locking crisis",
      consent: "Emergency Rescue"
    },
    {
      drug: "Ceftriaxone",
      dosage: "2 g IV q24h",
      justification: "Empirical antibiotic coverage",
      consent: "Unconsented"
    }
  ]
};

