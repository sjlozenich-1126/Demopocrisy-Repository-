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
    parameter: "HIV / AIDS Diagnostic Testing",
    patientResult: "No antibody test, no viral load, no CD4 count in chart",
    typicalNeurosyphilis: "Requires confirmatory Western blot / 4th-gen HIV immunoassay",
    clinicalSignificance: "Major clinical red flag: Patient was placed on Dolutegravir & Truvada with zero confirmatory diagnostic labs in record.",
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
