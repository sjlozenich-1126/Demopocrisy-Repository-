export interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  month?: string;
  title: string;
  category: 'arrest' | 'judicial' | 'medical' | 'housing' | 'investigation';
  caseNumber?: string;
  location: string;
  description: string;
  proceduralAnomaly?: string;
  evidenceRef?: string;
  quote?: string;
}

export const MASTER_TIMELINE: TimelineEvent[] = [
  // 2020 - Origins
  {
    id: "tl-2020-1",
    date: "Autumn 2020",
    year: 2020,
    month: "October",
    title: "Washington State Auditor Data Breach & Initial Targeting",
    category: "investigation",
    location: "Seattle, WA",
    description: "The Washington State Auditor's Office suffers a catastrophic data breach exposing personal information of 1.6 million residents, including Shane Lozenich. Shortly after, Lozenich notices compromised email and cloud accounts, and begins receiving targeted messages from unknown individuals referencing his real-time physical attire and locations.",
    proceduralAnomaly: "State agencies failed to investigate or acknowledge individual data breach exploitation reports.",
    evidenceRef: "Letter from WA State Auditor's Office.pdf"
  },
  {
    id: "tl-2020-2",
    date: "Late 2020 / Early 2021",
    year: 2020,
    month: "December",
    title: "Household Escalation & Surveillance Hardware Disclosures",
    category: "investigation",
    location: "Shared Rental Residence, Seattle",
    description: "During pandemic lockdown isolation, household roommate begins receiving and operating specialized frequency and audiovisual devices (electrometers, switchboards). Simultaneously, Lozenich begins experiencing severe cranial pressure, auditory harassment, and reports disappearing next-door neighbors.",
    proceduralAnomaly: "Multiple 911 calls reporting domestic physical abuse and requesting neighbor wellness checks were refused or dismissed by Seattle Police under COVID-19 precinct closures.",
    quote: "My reports disappeared into administrative silence. Precinct closures were cited as justification for refusing to file reports."
  },
  {
    id: "tl-2021-1",
    date: "February 24, 2021",
    year: 2021,
    month: "February",
    title: "Domestic Violence Case Initiated (Case 21-2-02528-1 SEA)",
    category: "judicial",
    caseNumber: "21-2-02528-1 SEA",
    location: "King County Superior Court",
    description: "Former roommate Brian Phillip Steves files a Petition for Order for Protection. The court grants an ex-parte Temporary Order for Protection, served on Shane by King County Sheriff deputies, requiring him to vacate the premises immediately.",
    proceduralAnomaly: "Low-threshold civil order issued without investigating respondent's prior contemporaneous 911 reports of domestic battery.",
    evidenceRef: "Petition for Order for Protection.pdf"
  },

  // March 2021 - First & Second Arrests, Harborview
  {
    id: "tl-2021-2",
    date: "March 7, 2021",
    year: 2021,
    month: "March",
    title: "First Arrest: Bedroom Custodial Seizure (Case 658931)",
    category: "arrest",
    caseNumber: "658931",
    location: "Residential Bedroom, Seattle",
    description: "While still lying in bed, two Seattle Police officers enter Shane's room and arrest him for an alleged violation of the no-contact order. He is booked into King County Jail (BA# 221002695) and held overnight.",
    proceduralAnomaly: "In-custody booking executed without probable cause warrant presentation."
  },
  {
    id: "tl-2021-3",
    date: "March 8, 2021",
    year: 2021,
    month: "March",
    title: "No Complaint Filed — Immediate Case Dismissal (Case 658931)",
    category: "judicial",
    caseNumber: "658931",
    location: "Seattle Municipal Court (Judge Catherine McDowall)",
    description: "At the morning arraignment, the City Attorney's Office fails to file a formal criminal complaint. Judge Catherine McDowall marks the docket 'NO COMPLAINT FILED' and dismisses the matter without prejudice. Shane is released, but a permanent law-enforcement arrest trace remains active in state repositories.",
    proceduralAnomaly: "Terminal break in due process: Arrest → Jail → In-custody court → No complaint → Dismissal → Release without evidentiary basis.",
    evidenceRef: "Original Release Form 658931 .pdf"
  },
  {
    id: "tl-2021-4",
    date: "March 10, 2021",
    year: 2021,
    month: "March",
    title: "Second Arrest, Military Personnel & Fenced Lot Detention (Case 658959)",
    category: "arrest",
    caseNumber: "658959",
    location: "North Seattle / Fenced Police Lot",
    description: "Shane returns to collect personal belongings after his roommate texted asking when he would pick them up. The roommate agrees to let Shane borrow $40. Returning from a store, three officers—including an unidentified individual in full military camouflage ('Heiffer')—handcuff him. Instead of jail, police detour north to a fenced vehicle lot, holding him in a single cell for one hour without explanation before transport to King County Jail (BA# 221002824).",
    proceduralAnomaly: "Undocumented detour to fenced vehicle compound; presence of military camouflage personnel at routine municipal arrest; exculpatory text consent ignored.",
    evidenceRef: "Police Report Narrative.pdf"
  },
  {
    id: "tl-2021-5",
    date: "March 11, 2021",
    year: 2021,
    month: "March",
    title: "Arraignment & Competency Diversion Bypass (Case 658959)",
    category: "judicial",
    caseNumber: "658959",
    location: "Seattle Municipal Court",
    description: "Stand-in public defender Elizabeth Mustin immediately raises RCW 10.77 competency rather than investigating the consensual nature of the $40 loan or protective order status. The judge orders a competency evaluation and sets bail at an unprecedented $5,000 for a misdemeanor during pandemic jail-reduction protocols.",
    proceduralAnomaly: "Competency invoked as procedural bypass, suspending preliminary examination of factual defenses.",
    evidenceRef: "Order for Initial Evaluation.pdf"
  },
  {
    id: "tl-2021-6",
    date: "March 24, 2021",
    year: 2021,
    month: "March",
    title: "Competency Dismissal & Undocumented Harborview Transfer",
    category: "judicial",
    caseNumber: "658959",
    location: "Seattle Municipal Court / King County Jail",
    description: "Following an incomplete DSHS evaluation, all criminal charges are dismissed without prejudice due to incompetency. The court issues a 71.05 civil commitment referral. However, Shane is released from jail custody in his street clothes, handcuffed by officers, and driven directly across the street to Harborview Medical Center with NO written court order in his release documents.",
    proceduralAnomaly: "Execution of an inter-agency medical transfer without a documented, reviewable judicial order in jail paperwork.",
    evidenceRef: "Order of Release.pdf"
  },
  {
    id: "tl-2021-7",
    date: "March 24 – April 15, 2021",
    year: 2021,
    month: "March",
    title: "Harborview Involuntary Confinement & Medical Battery",
    category: "medical",
    caseNumber: "658959",
    location: "Harborview Medical Center, Seattle",
    description: "At Harborview, despite clear verbal refusal, Shane is physically restrained and forcibly injected with Haloperidol and Risperdal, triggering a severe 2-hour acute dystonic crisis. Staff subject him to unconsented chest X-rays, MRI, and a lumbar spinal tap. Mixed lab results (87 cells/uL, 95% neutrophils, normal glucose) contradict neurosyphilis, yet diagnoses of neurosyphilis, psychosis, and sepsis are placed on his permanent problem list. Apple Health recommends discharge on April 5, but the hospital detains him until April 15.",
    proceduralAnomaly: "Administration of antipsychotics without Sell v. United States judicial hearing; 10 days of arbitrary detention past insurer discharge recommendation; diagnostic inflation contradicting CSF lab parameters.",
    evidenceRef: "Medical Docs HMRC.pdf"
  },

  // May 2021 - Third Arrest / Database Sync Error
  {
    id: "tl-2021-8",
    date: "May 15, 2021",
    year: 2021,
    month: "May",
    title: "Third Arrest: Database Sync Error & Tactical Pursuit (Case 660121)",
    category: "arrest",
    caseNumber: "660121",
    location: "Aurora Corridor / Hotel Parking Lot, Seattle",
    description: "Shane walks to collect mail based on a text invitation from his former roommate. When approached by an officer, severe arrest trauma triggers flight. Multiple police vehicles execute a tactical containment maneuver. Police claim an active protection order violation, unaware that municipal and county databases failed to synchronize the order's expiration.",
    proceduralAnomaly: "Tactical custodial containment executed purely on an automated database error with zero human-in-the-loop verification.",
    evidenceRef: "Police Report.pdf"
  },
  {
    id: "tl-2021-9",
    date: "May 17, 2021",
    year: 2021,
    month: "May",
    title: "Recycled Competency Evaluation & Administrative Limbo (Case 660121)",
    category: "judicial",
    caseNumber: "660121",
    location: "Seattle Municipal Court (Judge Faye Chess)",
    description: "At remote video arraignment, the parties accept the prior competency evaluation from Case 658959. The case is dismissed, and an unexecuted 'Dismiss and Refer' order to Mental Health Court is issued. The referral is never carried out, leaving an unexpunged false arrest record in police databases.",
    proceduralAnomaly: "Recycling prior competency finding to dismiss new charge without hearing; unexecuted referral creating administrative limbo.",
    evidenceRef: "Order Dismissing Case.pdf"
  },

  // July 2021 – Jan 2022: Felony Arrest & Western State Hospital
  {
    id: "tl-2021-10",
    date: "July 23, 2021",
    year: 2021,
    month: "July",
    title: "Fourth Arrest: Unmarked Ambush & Warrantless Mobile Seizure (Case 21-1-04347-2)",
    category: "arrest",
    caseNumber: "21-1-04347-2 SEA",
    location: "4th Ave & Columbia St, Downtown Seattle",
    description: "Unidentified agents in unmarked civilian vehicles ambush Shane on the street, asking if he is 'Jonathan Nelson'. He is handcuffed without credentials shown or Miranda warnings. Officers search his bag and produce a photocopy of another older man's passport, accusing Shane of possessing it. His mobile phone is seized without a warrant. At booking, he learns he is charged with felony harassment and bomb threats against the Mayor and a detective.",
    proceduralAnomaly: "Arrest by unbadged agents; warrantless digital mobile extraction under Riley v. California; disputed third-party passport introduced into evidence stream.",
    evidenceRef: "Inmate PR Interview.pdf"
  },
  {
    id: "tl-2021-11",
    date: "September 13, 2021",
    year: 2021,
    month: "September",
    title: "Ex-Parte 45-Day Restoration Order Signed Without Defense Counsel",
    category: "judicial",
    caseNumber: "21-1-04347-2 SEA",
    location: "King County Superior Court (Judge Melinda Young)",
    description: "Judge Melinda Young signs a 45-day inpatient competency restoration order referencing an evaluation that never took place. Crucially, the document lacks defense counsel's signature (marked 'approved on record') and Shane is never brought to court for a hearing. The order sits unexecuted for nearly two months while Shane remains in jail.",
    proceduralAnomaly: "Judicial restoration order entered ex-parte without completed evaluation, notice, hearing, or defense counsel presence.",
    evidenceRef: "2022 Restoration Order Signed.pdf"
  },
  {
    id: "tl-2021-12",
    date: "November 22, 2021 – January 5, 2022",
    year: 2021,
    month: "November",
    title: "Inpatient Confinement at Western State Hospital",
    category: "medical",
    caseNumber: "21-1-04347-2 SEA",
    location: "Western State Hospital, Lakewood, WA",
    description: "Transferred to Western State Hospital under coercive conditions, Shane is ordered to take Olanzapine 20mg daily. Evaluators cite a mundane 2017 DSHS food-assistance visit as evidence of historical mental illness. Demonstrating high engagement, Shane completes the program ahead of schedule and is declared restored and competent to stand trial.",
    proceduralAnomaly: "Diagnostic looping: historical non-clinical administrative visits retroactively weaponized to justify psychotropic drugging.",
    quote: "No clinical evaluation had occurred in 2017. Yet that food assistance appointment was presented years later to justify forced medication."
  },

  // 2022: Grocery Arrest & The Governor's Case
  {
    id: "tl-2022-1",
    date: "March 30, 2022",
    year: 2022,
    month: "March",
    title: "Fifth Arrest: Interception Leaving for Groceries (Case 664676)",
    category: "arrest",
    caseNumber: "664676",
    location: "Seattle Residence Front Yard",
    description: "While walking out the back door with his former roommate Brian to purchase groceries, two officers waiting in the yard arrest Shane for order violation. Brian explicitly tells officers he invited Shane to stay temporarily. Officers reply that the court order supersedes personal consent. Shane is jailed overnight. Arraignment is cancelled; no complaint is filed; case is dismissed without counsel ever being appointed.",
    proceduralAnomaly: "Mechanical order enforcement overriding contextual consent; detention without legal complaint or defense representation.",
    evidenceRef: "Commitment Release Order.pdf"
  },
  {
    id: "tl-2022-2",
    date: "August 10, 2022",
    year: 2022,
    month: "August",
    title: "Sixth Arrest: Hallway Ambush at SCIDpda Apartment (Case 22-1-04242-3)",
    category: "arrest",
    caseNumber: "22-1-04242-3 SEA",
    location: "Bush Hotel Apartments, Chinatown-International District",
    description: "A man claiming to be a county social worker knocks persistently on Shane's door for 20 minutes. When Shane steps out for work, heavily armed tactical units in mixed police and military attire ambush him in the secure hallway. He is handcuffed without a warrant, questioned in the corridor without Miranda rights, and charged with felony threats against Governor Jay Inslee.",
    proceduralAnomaly: "Tactical ambush in private residential corridor; failure to administer Miranda warnings; unproduced search warrant.",
    evidenceRef: "Case Events.pdf"
  },
  {
    id: "tl-2022-3",
    date: "August 2022 – May 5, 2023",
    year: 2022,
    month: "August",
    title: "Ten Months Pretrial Detention, Contaminated Water & Violent Assault",
    category: "judicial",
    caseNumber: "22-1-04242-3 SEA",
    location: "King County Jail",
    description: "Shane is held in pretrial incarceration for nearly ten months without trial, plea, or conviction. On September 13, 2022, a restoration order is signed one day before the actual scheduled hearing. In custody, Shane contracts illness from contaminated plumbing and is brutally assaulted by a cellmate (former Marine), suffering a fractured nose and facial trauma. Jail staff treat injuries but decline to press charges against the attacker or notify his attorney.",
    proceduralAnomaly: "Pre-signing restoration orders; severe Eighth Amendment violations in unsafe confinement; complete withholding of initiating voicemail recording in discovery.",
    quote: "The central alleged threatening voicemail transcription was never submitted, never described, and never produced in discovery across four years."
  },
  {
    id: "tl-2023-1",
    date: "May 5, 2023",
    year: 2023,
    month: "May",
    title: "Release on Time Served — Case Kept in Indefinite Limbo",
    category: "judicial",
    caseNumber: "22-1-04242-3 SEA",
    location: "King County Superior Court",
    description: "After serving the equivalent of a full sentence without trial or conviction, defense counsel secures release with credit for time served. The case remains actively open and is routed into the Outpatient Competency Restoration Program (OCRP), tolling the speedy trial clock for another three years.",
    proceduralAnomaly: "Administrative continuance loop evading Sixth Amendment speedy trial boundaries under Barker v. Wingo.",
    evidenceRef: "Order for Competency Restoration 2023.pdf"
  },

  // 2023–2025: Housing Crisis, KIRO News & Retaliatory Eviction
  {
    id: "tl-2023-2",
    date: "June – October 2023",
    year: 2023,
    month: "June",
    title: "SCIDpda Landlord Blocks Third-Party Emergency Rent Relief",
    category: "housing",
    caseNumber: "25-2-17456-5 SEA",
    location: "SCIDpda Bush Hotel, Seattle",
    description: "Following release, Telecare Corp steps forward to pay off all rent arrears accumulated during Shane's 10-month incarceration. However, the SCIDpda building manager systematically refuses to issue an invoice or accept third-party relief funds. Shane maintains independent monthly payments of an extra $250 under a repayment plan.",
    proceduralAnomaly: "Public Development Authority landlord manufactures technical non-payment by rejecting accredited third-party aid.",
    evidenceRef: "Unlawful Detainer Forensic Analysis.pdf"
  },
  {
    id: "tl-2024-1",
    date: "June 3, 2024",
    year: 2024,
    month: "June",
    title: "KIRO News On-Camera Safety Interview Broadcast",
    category: "investigation",
    location: "Chinatown-International District, Seattle",
    description: "Shane is interviewed on the street by KIRO News regarding public safety in the Chinatown-International District, advocating for nighttime security. The interview is broadcast and published in print in both English and Chinese.",
    quote: "I told them it would be great if there was security at night. Eight days later, I was served with eviction paperwork."
  },
  {
    id: "tl-2024-2",
    date: "June 11, 2024",
    year: 2024,
    month: "June",
    title: "Abrupt Unlawful Detainer Service (Case 25-2-17456-5 SEA)",
    category: "housing",
    caseNumber: "25-2-17456-5 SEA",
    location: "Bush Hotel Apartments, Seattle",
    description: "Exactly eight days after his public KIRO News appearance, SCIDpda serves expedited unlawful-detainer eviction paperwork. Management ignores Shane's money-order receipts and returns a payment intended to clear the remaining balance.",
    proceduralAnomaly: "Retaliatory eviction timing following protected First Amendment public speech (Robinson v. Diamond Housing Corp).",
    evidenceRef: "Eviction Summons & Complaint For Unlawful Detainer.pdf"
  },
  {
    id: "tl-2025-1",
    date: "July – September 2025",
    year: 2025,
    month: "July",
    title: "Parallel Judicial Whiplash: Eviction Trial vs Criminal Competency",
    category: "judicial",
    caseNumber: "25-2-17456-5 / 21-1-04347-2",
    location: "King County Superior Court",
    description: "Shane is forced to defend an eviction action pro se before Judge Jennifer Petersen while simultaneously undergoing near-weekly criminal competency evaluations in the same court building. On multiple dates (07/15, 08/12, 09/23, 09/25), civil eviction show-cause hearings and criminal competency motions occur on the exact same days.",
    proceduralAnomaly: "Systemic contradiction: The State argues an individual is legally incompetent to understand criminal law while simultaneously holding him to strict civil summary eviction standards without counsel.",
    evidenceRef: "Motion For Relief From Default Judgement.pdf"
  },
  {
    id: "tl-2025-2",
    date: "August 29, 2025",
    year: 2025,
    month: "August",
    title: "Writ of Restitution Entered by Housing Court",
    category: "housing",
    caseNumber: "25-2-17456-5 SEA",
    location: "King County Superior Court (Judge Jennifer Petersen)",
    description: "Housing court enters Judgment and Order for Writ of Restitution, refusing to consider third-party payment obstruction or recorded Majorat covenants.",
    evidenceRef: "Findings of Fact and Conclusions of Law.pdf"
  },
  {
    id: "tl-2025-3",
    date: "December 30, 2025",
    year: 2025,
    month: "December",
    title: "Physical Eviction Executed by King County Sheriff",
    category: "housing",
    caseNumber: "25-2-17456-5 SEA",
    location: "Bush Hotel, Seattle",
    description: "Sheriff executes physical return of service, displacing Lozenich from his home of over three years. Shane files a final Declaration on December 30.",
    evidenceRef: "Declaration of Restrictive Covenant and Demand.pdf"
  },

  // 2026: Resolution, Restoration, Quiet Title & Federal Action
  {
    id: "tl-2026-1",
    date: "January 7, 2026",
    year: 2026,
    month: "January",
    title: "Full Satisfaction of Judgment Officially Filed",
    category: "housing",
    caseNumber: "25-2-17456-5 SEA",
    location: "King County Superior Court",
    description: "A formal Satisfaction of Judgment is entered in the civil docket, legally confirming that all financial claims and disputed sums are fully satisfied and closing the eviction lawsuit.",
    evidenceRef: "Full Satisfaction of Judgement 01/07.pdf"
  },
  {
    id: "tl-2026-2",
    date: "January 8, 2026",
    year: 2026,
    month: "January",
    title: "Sovereign Quiet Title Action Filed (Case 26-2-01443-4 SEA)",
    category: "judicial",
    caseNumber: "26-2-01443-4 SEA",
    location: "King County Superior Court",
    description: "Lozenich files a verified Petition for Declaratory Judgment and Quiet Title over the historically referenced Seattle-Bremerton Majorat corridor, asserting hereditary trusteeship, challenging quasi-governmental immunity shields (KCRHA, 4Culture, Port of Seattle), and forcing the State to prove its lawful jurisdiction.",
    evidenceRef: "Petition to Quiet Title.pdf"
  },
  {
    id: "tl-2026-3",
    date: "February 2026",
    year: 2026,
    month: "February",
    title: "Forensic Finding of Restored Competency by Dr. Jamie Leavey",
    category: "medical",
    caseNumber: "21-1-04347-2 / 22-1-04242-3",
    location: "Forensic Mental Health Evaluation, King County",
    description: "Forensic evaluator Dr. Jamie Leavey issues a landmark clinical evaluation finding Shane fully competent to understand proceedings and assist in his own defense, noting high engagement, sophisticated legal comprehension, and no active psychotic symptoms. This formally overturns five years of clinical substitution.",
    proceduralAnomaly: "Demolishes the state's clinical pretext for avoiding trial and concealing discovery.",
    evidenceRef: "Lozenich, S. Competency Assessment PR feb 2026.pdf"
  },
  {
    id: "tl-2026-4",
    date: "February 28, 2026",
    year: 2026,
    month: "February",
    title: "Federal Civil Rights Lawsuit Filed (Case 2:26-cv-00261-tl)",
    category: "judicial",
    caseNumber: "2:26-cv-00261-tl",
    location: "U.S. District Court for the Western District of Washington",
    description: "Lozenich files an omnibus civil rights action against the United States of America, state actors, and municipal entities under 42 U.S.C. § 1983 and Bivens, challenging the systemic architecture of due process collapse.",
    evidenceRef: "Initial Complaint Lozenich vs The United States of America et al.pdf"
  },
  {
    id: "tl-2026-5",
    date: "March – May 2026",
    year: 2026,
    month: "March",
    title: "Superior Court Shift: Omnibus Calendars & Scheduled Trial Dates",
    category: "judicial",
    caseNumber: "21-1-04347-2 SEA",
    location: "King County Superior Court",
    description: "With competency formally restored, the Superior Court dockets transition away from administrative competency loops toward trial readiness: omnibus hearings held on March 10, April 28, and May 5, 2026. First scheduled criminal trial date set for May 19, 2026; second trial date set for August 4, 2026.",
    evidenceRef: "Case 21-1-04347-2 SEA Information .pdf"
  }
];

export const MASTER_TIMELINE_EVENTS = MASTER_TIMELINE.map((ev) => {
  let mappedCategory = 'Municipal';
  if (ev.category === 'arrest' || ev.caseNumber?.includes('658') || ev.caseNumber?.includes('664') || ev.caseNumber?.includes('660')) {
    mappedCategory = 'Municipal';
  } else if (ev.category === 'medical') {
    mappedCategory = 'Medical';
  } else if (ev.category === 'housing') {
    mappedCategory = 'Civil/Housing';
  } else if (ev.year === 2020) {
    mappedCategory = 'Origin & Breach';
  } else if (ev.year === 2026) {
    mappedCategory = 'Restoration';
  } else if (ev.caseNumber?.includes('21-1') || ev.caseNumber?.includes('22-1')) {
    mappedCategory = 'Felony';
  }

  return {
    id: ev.id,
    date: ev.date,
    year: ev.year,
    month: ev.month,
    title: ev.title,
    category: mappedCategory,
    caseNumber: ev.caseNumber,
    location: ev.location,
    tags: [mappedCategory.toLowerCase(), `year-${ev.year}`, ev.caseNumber || 'systemic'].filter(Boolean),
    summary: ev.description,
    details: `${ev.description} Location: ${ev.location}.${ev.proceduralAnomaly ? ` Discrepancy Note: ${ev.proceduralAnomaly}` : ''}`,
    description: ev.description,
    discrepancyFlag: ev.proceduralAnomaly,
    statuteOrQuote: ev.quote || (ev.evidenceRef ? `Documented in archive: ${ev.evidenceRef}` : undefined),
    proceduralAnomaly: ev.proceduralAnomaly,
    evidenceRef: ev.evidenceRef,
    quote: ev.quote
  };
});

