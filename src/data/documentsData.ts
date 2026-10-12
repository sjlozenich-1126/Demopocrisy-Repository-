export interface LegalDocument {
  id: string;
  caseNumber: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  dateCreated: string;
  category: 'court_doc' | 'medical_record' | 'police_report' | 'forensic_analysis' | 'journal_entry' | 'briefing_or_memo' | 'covenant_or_property';
  highlightText?: string;
  description?: string;
}

export const DOCUMENTS_ARCHIVE: LegalDocument[] = [
  // Case 658931
  {
    id: "doc-658931-1",
    caseNumber: "658931",
    fileName: "Petition for Order for Protection.pdf",
    fileUrl: "https://drive.google.com/file/d/1NjZc8DY5OZsu6u93ZNeHUVUkX_-M0VEX/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/15/2026 22:39:59",
    category: "court_doc",
    description: "Initial petition for protection order filed in family court prior to warrantless custodial arrest.",
    highlightText: "Petition filed without verified investigation of underlying domestic dispute."
  },
  {
    id: "doc-658931-2",
    caseNumber: "658931",
    fileName: "Letter from WA State Auditor's Office.pdf",
    fileUrl: "https://drive.google.com/file/d/1pV9G4rNeJ7U-ZrrkDqOmhiO0AK2uOPWE/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/15/2026 22:39:56",
    category: "forensic_analysis",
    description: "Official notification of statewide data breach compromising personal info of 1.6 million residents.",
    highlightText: "Establishes contextual vulnerability to digital stalking and identity compromise."
  },
  {
    id: "doc-658931-3",
    caseNumber: "658931",
    fileName: "Journal Case No 658931.pdf",
    fileUrl: "https://drive.google.com/file/d/1tuZwCcvh0BnHx455MWf95H3HFHbpMdpM/view?usp=drivesdk",
    fileType: "journal_entry",
    dateCreated: "5/15/2026 22:39:56",
    category: "journal_entry",
    description: "Contemporaneous personal log documenting the bedroom arrest on March 7, 2021 and overnight hold.",
    highlightText: "First-hand documentation of arrest without presented warrant or complaint."
  },
  {
    id: "doc-658931-4",
    caseNumber: "658931",
    fileName: "Defendant's Narrative 658931.pdf",
    fileUrl: "https://drive.google.com/file/d/1iDZiHlXnd7kDK_ShP63c5rZ5tBNXIB5T/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/15/2025 4:47:54",
    category: "briefing_or_memo",
    description: "Comprehensive narrative submitted detailing ignored 911 calls and domestic abuse reporting failures.",
    highlightText: "Chronicles repeated police refusal to file reports of tenant's physical abuse."
  },
  {
    id: "doc-658931-5",
    caseNumber: "658931",
    fileName: "Notice of Charges Pending.pdf",
    fileUrl: "https://drive.google.com/file/d/1GzyPjSeABIHHmUZIHg68g_1nnp60ohyh/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "7/1/2024 12:46:47",
    category: "court_doc",
    description: "Municipal notice reflecting initial booking without a verified criminal complaint.",
    highlightText: "Notice produced during custodial processing prior to judicial dismissal."
  },
  {
    id: "doc-658931-6",
    caseNumber: "658931",
    fileName: "Original Release Form 658931 .pdf",
    fileUrl: "https://drive.google.com/file/d/1GGovmPmucPYKit6VYvtqV49ecZxymxfN/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/16/2023 13:18:03",
    category: "court_doc",
    description: "Jail release form executed on March 8, 2021 following failure of City Attorney to file complaint.",
    highlightText: "Order marked 'NO COMPLAINT FILED' by Judge Catherine McDowall."
  },
  {
    id: "doc-658931-7",
    caseNumber: "658931",
    fileName: "Case View - 658931.pdf",
    fileUrl: "https://drive.google.com/file/d/1Jvfa8nCjf50A-yTcYls5AWHIcifKOFrw/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/22/2025 22:08:35",
    category: "court_doc",
    description: "Official Seattle Municipal Court portal extract confirming dismissal without prejudice.",
    highlightText: "Demonstrates permanent electronic record created without an underlying charge."
  },
  {
    id: "doc-658931-8",
    caseNumber: "658931",
    fileName: "Commitment Release Order  658931.pdf",
    fileUrl: "https://drive.google.com/file/d/1VuSthuptLqhxhPETAOV_Rvu7Yo021glf/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/22/2025 22:08:34",
    category: "court_doc",
    description: "Formal judicial discharge order from King County Correctional Facility.",
    highlightText: "Records unconstitutional detention period between booking and release."
  },
  {
    id: "doc-658931-9",
    caseNumber: "658931",
    fileName: "Case Study for Case 658931.pdf",
    fileUrl: "https://drive.google.com/file/d/1PY6oZjqqr58HWo-42MeI5YfA3F74R304/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/6/2026 19:52:49",
    category: "forensic_analysis",
    description: "Academic forensic case monograph analyzing procedural collapse during pandemic protocols.",
    highlightText: "Calculated Discrepancy Score D = 88/100."
  },

  // Case 658959
  {
    id: "doc-658959-1",
    caseNumber: "658959",
    fileName: "Medical Docs HMRC.pdf",
    fileUrl: "https://drive.google.com/file/d/1bCHOcRSfEfWfafuO2pyGxC872DCO1bte/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/22/2026 16:01:03",
    category: "medical_record",
    description: "Harborview Medical Center clinical chart including CSF labs, medication orders, and problem list.",
    highlightText: "Contains the critical CSF lab results showing 95% neutrophils contradicting neurosyphilis."
  },
  {
    id: "doc-658959-2",
    caseNumber: "658959",
    fileName: "Harborview Hospital Narrative.pdf",
    fileUrl: "https://drive.google.com/file/d/1V_ljnFRUk3Aq625WSCY0aytOSolIJip_/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/16/2026 2:43:25",
    category: "medical_record",
    description: "Detailed account of 22-day involuntary medicalization, forced Haloperidol/Risperdal, and physical restraint.",
    highlightText: "Documents severe dystonic muscle contractions following involuntary injection."
  },
  {
    id: "doc-658959-3",
    caseNumber: "658959",
    fileName: "Defendant's Narrative.pdf",
    fileUrl: "https://drive.google.com/file/d/19k-ZFgCTW1w8XL7PqnJ9tV8tJLZazibL/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/16/2026 2:43:42",
    category: "briefing_or_memo",
    description: "Narrative of the March 10, 2021 arrest involving camouflage personnel and fenced lot detention.",
    highlightText: "Reveals undocumented 1-hour detention at fenced vehicle yard prior to jail booking."
  },
  {
    id: "doc-658959-4",
    caseNumber: "658959",
    fileName: "Correspondence with Harborview.pdf",
    fileUrl: "https://drive.google.com/file/d/1e3oXJKvJFgyLIauRxhloqdUGI_3GZlGA/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/16/2026 2:43:42",
    category: "medical_record",
    description: "Records of inquiries sent to hospital administration demanding justification for transfer without court order.",
    highlightText: "Confirms absence of written judicial transfer order in release paperwork."
  },
  {
    id: "doc-658959-5",
    caseNumber: "658959",
    fileName: "Email to Molly McNamera -Harborview Hospital.pdf",
    fileUrl: "https://drive.google.com/file/d/1Mi5lMjYuqDg8OsXYkiDElL-UXari99a0/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/16/2026 2:43:43",
    category: "medical_record",
    description: "Communications regarding administrative errors in patient diagnostic charting and discharge delays.",
    highlightText: "Questions the basis for keeping patient 10 days past Apple Health discharge date."
  },
  {
    id: "doc-658959-6",
    caseNumber: "658959",
    fileName: "Journal Case No 658959.pdf",
    fileUrl: "https://drive.google.com/file/d/1_0TrYXXAUeXcY3opDwDFWmhOkWPnndTV/view?usp=drivesdk",
    fileType: "journal_entry",
    dateCreated: "5/16/2026 2:43:43",
    category: "journal_entry",
    description: "Personal entries tracking the arrest for retrieving belongings with roommate consent.",
    highlightText: "Explains $40 was explicitly borrowed with roommate's permission before theft charge."
  },
  {
    id: "doc-658959-7",
    caseNumber: "658959",
    fileName: "Journal Harborview Hospital.pdf",
    fileUrl: "https://drive.google.com/file/d/1kkY0PLvKwPGDw0r9DyhjYKt94qfVlWBs/view?usp=drivesdk",
    fileType: "journal_entry",
    dateCreated: "5/16/2026 2:43:43",
    category: "journal_entry",
    description: "Day-by-day record of confinement in converted supply closet and psychiatric ward.",
    highlightText: "Detailed witness testimony of forced medical interventions and lack of informed consent."
  },
  {
    id: "doc-658959-8",
    caseNumber: "658959",
    fileName: "Case View 658959.pdf",
    fileUrl: "https://drive.google.com/file/d/1pR5LLqKUG8n6-bCcGN8x86pBZ9vXHcbn/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/15/2025 23:32:15",
    category: "court_doc",
    description: "Seattle Municipal Court official docket extract for Case 658959.",
    highlightText: "Records 'Dismissed without prejudice by reason of incompetency' on 3/24/2021."
  },
  {
    id: "doc-658959-9",
    caseNumber: "658959",
    fileName: "Request for Discovery.pdf",
    fileUrl: "https://drive.google.com/file/d/1zM-GXBfZIfz_cIIA-N-nxH4EVFwa51zV/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/15/2025 23:32:16",
    category: "court_doc",
    description: "Defense motion requesting body-worn camera footage and dispatch logs from responding officers.",
    highlightText: "Neither body-cam footage nor identity of camouflage personnel was ever produced."
  },
  {
    id: "doc-658959-10",
    caseNumber: "658959",
    fileName: "Order to Redact Competency Eval.pdf",
    fileUrl: "https://drive.google.com/file/d/1b_ncrN0YsLOrkn5NXhfKYHB7KWRyR_lH/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/15/2025 21:44:01",
    category: "court_doc",
    description: "Judicial order redacting sections of the DSHS evaluation that mentioned surveillance complaints.",
    highlightText: "Demonstrates systemic redaction of technological and physical abuse claims."
  },
  {
    id: "doc-658959-11",
    caseNumber: "658959",
    fileName: "REDACTED Competency Evaluation.pdf",
    fileUrl: "https://drive.google.com/file/d/18J_cHdP1tv1f5MzYIWlW11W8LKWCVbg-/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/15/2025 21:44:05",
    category: "court_doc",
    description: "Evaluation filed on March 24, 2021 by DSHS evaluator declaring defendant incompetent.",
    highlightText: "Evaluator admitted defendant did not participate; opinion based on secondhand notes."
  },
  {
    id: "doc-658959-12",
    caseNumber: "658959",
    fileName: "Case Docket.pdf",
    fileUrl: "https://drive.google.com/file/d/1T5mEg8p850fSYKYfgpbkYZ9tnONHXvjO/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "10/18/2024 14:45:45",
    category: "court_doc",
    description: "Complete chronological court docket listing all proceedings, continuances, and entries.",
    highlightText: "Highlights cancelled March 22 hearing and ex-parte dismissal on March 24."
  },
  {
    id: "doc-658959-13",
    caseNumber: "658959",
    fileName: "Police Report Narrative.pdf",
    fileUrl: "https://drive.google.com/file/d/1mAfwuLxYxOiMlOg_js1Aa6keBZAF1DFC/view?usp=drivesdk",
    fileType: "police_report",
    dateCreated: "10/18/2024 14:46:18",
    category: "police_report",
    description: "Arresting officer narrative omitting the detour to the fenced police vehicle compound.",
    highlightText: "Lists officers Williams and Harris; military personnel 'Heiffer' omitted from log."
  },
  {
    id: "doc-658959-14",
    caseNumber: "658959",
    fileName: "Order for Initial Evaluation.pdf",
    fileUrl: "https://drive.google.com/file/d/1yppSPewKdrCfVGM_dFBtB9jL7nenNtBA/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "10/18/2024 14:50:21",
    category: "court_doc",
    description: "Municipal order triggering competency proceedings upon suggestion of stand-in counsel.",
    highlightText: "Initiated the competency pipeline bypassing preliminary hearing on theft merits."
  },
  {
    id: "doc-658959-15",
    caseNumber: "658959",
    fileName: "Case Face Sheet.pdf",
    fileUrl: "https://drive.google.com/file/d/1OgOZExtM2k6RDvX6MI75Qi52LDPhHddk/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/4/2024 6:26:30",
    category: "court_doc",
    description: "Municipal court case summary sheet noting charge codes and presiding magistrates.",
    highlightText: "Identifies Judges Catherine McDowall and Damon Shadid presiding."
  },
  {
    id: "doc-658959-16",
    caseNumber: "658959",
    fileName: "Order of Release.pdf",
    fileUrl: "https://drive.google.com/file/d/1H0oTsaIx_VBO8_ySutBslRiHAI3g1fTa/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "7/1/2024 12:47:03",
    category: "court_doc",
    description: "Formal jail release document omitting any judicial transfer directive to Harborview.",
    highlightText: "Directly proves patient was legally discharged from custody yet intercepted."
  },
  {
    id: "doc-658959-17",
    caseNumber: "658959",
    fileName: "Order Dismissing Case.pdf",
    fileUrl: "https://drive.google.com/file/d/1JuqNShMe8JLUCFbT9YREmIR69xRPdjPa/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "10/18/2024 14:47:45",
    category: "court_doc",
    description: "Judicial order dismissing criminal charges without prejudice due to competency finding.",
    highlightText: "Served as the administrative trigger for the 'dismiss and defer' pipeline."
  },
  {
    id: "doc-658959-18",
    caseNumber: "658959",
    fileName: "Order on Criminal Motion.pdf",
    fileUrl: "https://drive.google.com/file/d/1pvMyTfgHl4JW6cJLfeQ3NgSIG5IOjng-/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "9/6/2025 5:19:04",
    category: "court_doc",
    description: "Subsequent motion filings and rulings regarding court costs and record adjustments.",
    highlightText: "Court records show no formal correction of administrative entries."
  },
  {
    id: "doc-658959-19",
    caseNumber: "658959",
    fileName: "Conditions of Release.pdf",
    fileUrl: "https://drive.google.com/file/d/1E-BFv7uT_pJWqSBjNmlzhM2qEMzFSWcp/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "6/15/2025 23:32:16",
    category: "court_doc",
    description: "Initial pretrial conditions sheet setting $5,000 bail on non-violent misdemeanor charges.",
    highlightText: "Unprecedented bail elevation during peak COVID-19 jail reduction guidelines."
  },
  {
    id: "doc-658959-20",
    caseNumber: "658959",
    fileName: "Complaint Case 658959.pdf",
    fileUrl: "https://drive.google.com/file/d/1AwOxMSpzqF-CHDAVAACeE0NdUPCzaMGi/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "6/15/2025 23:32:17",
    category: "court_doc",
    description: "Formal municipal complaint citing two counts of NCO violation and one count of theft.",
    highlightText: "Signed on March 11 following March 10 arrest."
  },
  {
    id: "doc-658959-21",
    caseNumber: "658959",
    fileName: "Commitment Release Order.pdf",
    fileUrl: "https://drive.google.com/file/d/1elIit1VyOGlLosEJ39Rz879aNQPH7cwm/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "6/15/2025 23:32:18",
    category: "court_doc",
    description: "King County Jail commitment discharge paperwork documenting custody transfer.",
    highlightText: "No judicial transfer order attached to transport logs."
  },
  {
    id: "doc-658959-22",
    caseNumber: "658959",
    fileName: "Order for Protection.pdf",
    fileUrl: "https://drive.google.com/file/d/1sm_bOK6DaoldOSJ5wrULChKqC_e6F2fD/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "6/15/2025 23:15:52",
    category: "court_doc",
    description: "Underlying Domestic Violence Protection Order granted to roommate Brian Phillip Steves.",
    highlightText: "Enforced despite subsequent invitations from petitioner for respondent to collect mail."
  },

  // Case 660121
  {
    id: "doc-660121-1",
    caseNumber: "660121",
    fileName: "Defendant's Narrative.pdf",
    fileUrl: "https://drive.google.com/file/d/1p3pO2_-Lkwlslp_tsvgVSwIUM9A6JMHu/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/15/2025 4:47:54",
    category: "briefing_or_memo",
    description: "Detailed narrative of May 15, 2021 pursuit, tactical containment, and text message evidence.",
    highlightText: "Documents text message from former roommate explicitly inviting defendant to collect mail."
  },
  {
    id: "doc-660121-2",
    caseNumber: "660121",
    fileName: "Request for Discovery.pdf",
    fileUrl: "https://drive.google.com/file/d/1LjHWsgJcL6w0x9bMz7-iH85WsKrq5QIz/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/6/2025 1:43:39",
    category: "court_doc",
    description: "Motion for production of 911 caller tape, CAD logs, and patrol vehicle dash/body cam.",
    highlightText: "Reveals identity of 911 caller was never verified by investigating officers."
  },
  {
    id: "doc-660121-3",
    caseNumber: "660121",
    fileName: "Police Report.pdf",
    fileUrl: "https://drive.google.com/file/d/1XMelK2bMm6PlFAhh5GTrsSiXYEDB0Yhh/view?usp=drivesdk",
    fileType: "police_report",
    dateCreated: "5/6/2025 1:43:32",
    category: "police_report",
    description: "Arrest report documenting multi-vehicle tactical interception outside hotel.",
    highlightText: "Officers admitted relyng solely on automated database alert without verifying expiration."
  },
  {
    id: "doc-660121-4",
    caseNumber: "660121",
    fileName: "Order Dismissing Case.pdf",
    fileUrl: "https://drive.google.com/file/d/1TJqA2peLcB2OjVIUmNRFBMmvCbOroWu3/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/6/2025 1:43:36",
    category: "court_doc",
    description: "Municipal order dismissing charges based on recycled competency evaluation from Case 658959.",
    highlightText: "Court issued 'Dismiss and Refer' to Mental Health Court that was never executed."
  },
  {
    id: "doc-660121-5",
    caseNumber: "660121",
    fileName: "REDACTED Competency Evaluation.pdf",
    fileUrl: "https://drive.google.com/file/d/1zjzWtJnMCx9QNJnU71yYOpevTKDsnhfF/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/6/2025 1:43:33",
    category: "court_doc",
    description: "Filing demonstrating parties 'accepted opinions in competency eval dated 03/22/21'.",
    highlightText: "No independent evaluation conducted for this new alleged misdemeanor offense."
  },
  {
    id: "doc-660121-6",
    caseNumber: "660121",
    fileName: "Case View 660121.pdf",
    fileUrl: "https://drive.google.com/file/d/1fFRsAsf57o6wosbMAytabewALRYrP5fx/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/6/2025 1:43:32",
    category: "court_doc",
    description: "SMC portal verification confirming closure on June 18, 2021.",
    highlightText: "Erroneous active criminal trace persisted in public databases for months."
  },
  {
    id: "doc-660121-7",
    caseNumber: "660121",
    fileName: "Criminal Complaint.pdf",
    fileUrl: "https://drive.google.com/file/d/1Idr3ncFOh5WaIOVTprO3AiDKZWSQ7dLD/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/6/2025 1:43:34",
    category: "court_doc",
    description: "Complaint charging violation of court order filed during remote video arraignment.",
    highlightText: "Prosecution failed to verify that the underlying order had been rescinded or expired."
  },
  {
    id: "doc-660121-8",
    caseNumber: "660121",
    fileName: "Case Face Sheet.pdf",
    fileUrl: "https://drive.google.com/file/d/1rCqkvuiZKhJDIYQtpboKgMLvu7B32b3K/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/6/2025 1:43:41",
    category: "court_doc",
    description: "Face sheet identifying Judge Faye Chess presiding over proceedings.",
    highlightText: "Discrepancy Score calculated at D = 85/100."
  },
  {
    id: "doc-660121-9",
    caseNumber: "660121",
    fileName: "Case Study 660121.pdf",
    fileUrl: "https://drive.google.com/file/d/1WaTO3FSY-6NKxNlUo2CdMrt-4prcExyz/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/6/2026 19:52:48",
    category: "forensic_analysis",
    description: "Forensic study examining municipal-to-county database synchronization failures.",
    highlightText: "Exposes systemic vulnerability of automated law enforcement alerts without human verification."
  },
  {
    id: "doc-660121-10",
    caseNumber: "660121",
    fileName: "Journal Entry for Case No 660121.pdf",
    fileUrl: "https://drive.google.com/file/d/1vc1P-4ybnWND_eqf0CPTnkp6bhBkONkI/view?usp=drivesdk",
    fileType: "journal_entry",
    dateCreated: "9/16/2025 0:40:37",
    category: "journal_entry",
    description: "Personal journal entries documenting psychological trauma of repeated false arrests.",
    highlightText: "Reflects terror of being pursued without understanding basis of active warrant."
  },

  // Case 21-1-04347-2 SEA
  {
    id: "doc-211-1",
    caseNumber: "21-1-04347-2",
    fileName: "Case Information.pdf",
    fileUrl: "https://drive.google.com/file/d/1M1xxsXx0xQttYnc3z4BpmktSqsqtVtA-/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "3/4/2025 23:44:23",
    category: "court_doc",
    description: "King County Superior Court case information sheet for felony cyberstalking / threat charges.",
    highlightText: "Presided over by Judge Karen Donohue; later restoration order by Judge Melinda Young."
  },
  {
    id: "doc-211-2",
    caseNumber: "21-1-04347-2",
    fileName: "Inmate PR Interview.pdf",
    fileUrl: "https://drive.google.com/file/d/12gixydQ6iP8LOMD7y4_HCLpB376PkEOZ/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "3/4/2025 23:44:21",
    category: "court_doc",
    description: "Pretrial release interview conducted at jail following July 23, 2021 street arrest.",
    highlightText: "Defendant asserts arrest was conducted by unmarked vehicles and uncredentialed agents."
  },
  {
    id: "doc-211-3",
    caseNumber: "21-1-04347-2",
    fileName: "Motion Finding of Probable Cause.pdf",
    fileUrl: "https://drive.google.com/file/d/1w0wERb-zf0jNmbNudd6b2zkvodeuiJhY/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "3/4/2025 23:44:25",
    category: "court_doc",
    description: "Prosecutorial motion listing Seattle Mayor's Office and Det. Ryan Ellis as protected parties.",
    highlightText: "Protected-party designations utilized to obscure identity of arresting agents."
  },
  {
    id: "doc-211-4",
    caseNumber: "21-1-04347-2",
    fileName: "Selective Enforcement and Retalitory Arrest.pdf",
    fileUrl: "https://drive.google.com/file/d/1Fu2RX2dX657hXMhd4_50tfo4Cg-cSy86/view?usp=drivesdk",
    fileType: "briefing_or_memo",
    dateCreated: "3/22/2026 10:26:44",
    category: "briefing_or_memo",
    description: "Defense memorandum highlighting selective prosecution vs unprosecuted Capitol rally officers.",
    highlightText: "Juxtaposes SPD officer anonymity petitions with subject's public exposure."
  },
  {
    id: "doc-211-5",
    caseNumber: "21-1-04347-2",
    fileName: "Briefing Document Case 21-1-04347-2.pdf",
    fileUrl: "https://drive.google.com/file/d/16A2F2SyQ6G0XVoIcFgANQLsoM38YXrNw/view?usp=drivesdk",
    fileType: "briefing_or_memo",
    dateCreated: "3/22/2026 10:18:17",
    category: "briefing_or_memo",
    description: "Comprehensive case briefing regarding warrantless mobile device seizure and passport evidence tampering.",
    highlightText: "Documents introduction of an unrelated third party's passport into evidence stream."
  },
  {
    id: "doc-211-6",
    caseNumber: "21-1-04347-2",
    fileName: "Lozenich, S. Competency Assessment PR feb 2026.pdf",
    fileUrl: "https://drive.google.com/file/d/1jQmYIIbyYIe9erY9__39n-BFOaMKYBSs/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "3/18/2026 17:49:43",
    category: "forensic_analysis",
    description: "Landmark evaluation by forensic evaluator Dr. Jamie Leavey finding competency restored.",
    highlightText: "Concluded defendant has capacity to understand proceedings and assist in defense; no active psychosis."
  },
  {
    id: "doc-211-7",
    caseNumber: "21-1-04347-2",
    fileName: "Order Continuing Competency.pdf",
    fileUrl: "https://drive.google.com/file/d/1Efc-WN_LCWnqBSGHlVZWt56pjV0V-xOM/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "9/11/2025 11:50:29",
    category: "court_doc",
    description: "One of repeated serial continuances extending competency loop across 2024 and 2025.",
    highlightText: "Shows administrative churn maintaining open case without trial or evidence production."
  },
  {
    id: "doc-211-8",
    caseNumber: "21-1-04347-2",
    fileName: "Case 21-1-04347-2 SEA Information .pdf",
    fileUrl: "https://drive.google.com/file/d/18y7OBhaa9Tn4JMAi09IwaODzw8k9GPTe/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "9/11/2025 12:05:12",
    category: "court_doc",
    description: "Formal Criminal Information charging felony harassment and threats to bomb or injure property.",
    highlightText: "Allegations premised on electronic messages without chain of custody verification."
  },
  {
    id: "doc-211-9",
    caseNumber: "21-1-04347-2",
    fileName: "2022 Restoration Order Signed.pdf",
    fileUrl: "https://drive.google.com/file/d/1dHHcbeWiZmJUJB2JrZFB22C1ynol3Lni/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/4/2025 16:22:18",
    category: "court_doc",
    description: "Signed order committing defendant to Western State Hospital for 45-day inpatient restoration.",
    highlightText: "Critical anomaly: signed by Judge Melinda Young without counsel present or prior hearing."
  },
  {
    id: "doc-211-10",
    caseNumber: "21-1-04347-2",
    fileName: "2021 DSHS Competency Evaluation.pdf",
    fileUrl: "https://drive.google.com/file/d/1LJXYoEBhr14g8wZQNPNFBYR00zYP0qmP/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "12/5/2024 13:41:44",
    category: "court_doc",
    description: "Initial DSHS report categorizing reports of data breach and cyber-stalking as 'delusions'.",
    highlightText: "Direct evidence of diagnostic looping converting data security disclosures into symptoms."
  },
  {
    id: "doc-211-11",
    caseNumber: "21-1-04347-2",
    fileName: "States Response October 2021.pdf",
    fileUrl: "https://drive.google.com/file/d/1Q7uNngO6OaBuunTyV6Su5sChgskTsiZt/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/5/2025 5:57:37",
    category: "court_doc",
    description: "King County Prosecutor's brief resisting defense motions for speedy trial and release.",
    highlightText: "Argued for continuing psychiatric commitment over trial on the merits."
  },
  {
    id: "doc-211-12",
    caseNumber: "21-1-04347-2",
    fileName: "States Response April 2023.pdf",
    fileUrl: "https://drive.google.com/file/d/1a_lmRCs8iKR9ES9_aexIm5ZC_U1l1o9W/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/4/2025 16:22:19",
    category: "court_doc",
    description: "Prosecution response in adjacent proceeding maintaining tolling of speedy trial clock.",
    highlightText: "Continued reliance on RCW 10.77 restoration pipeline."
  },
  {
    id: "doc-211-13",
    caseNumber: "21-1-04347-2",
    fileName: "Continuance Next Hearing Form Signed 5-17-22.pdf",
    fileUrl: "https://drive.google.com/file/d/1GcteIY04ZCbpdzHOYO5z96sX52a7UYZT/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "3/7/2025 16:40:11",
    category: "court_doc",
    description: "Formal continuance form delaying proceedings into mid-2022.",
    highlightText: "Reflects revolving-door public defenders unable to advance defense strategy."
  },
  {
    id: "doc-211-14",
    caseNumber: "21-1-04347-2",
    fileName: "Appointing Judge Pro Tempore Ronald Kessler.pdf",
    fileUrl: "https://drive.google.com/file/d/11dDUe-yx8X8zIj0zqoxDrPULDJluYNoE/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "7/22/2024 14:22:17",
    category: "court_doc",
    description: "Order designating pro-tempore magistrate to manage congested competency calendar.",
    highlightText: "Delegation of constitutional review to administrative pro-tempore bench."
  },
  {
    id: "doc-211-15",
    caseNumber: "21-1-04347-2",
    fileName: "Appendix B to Plea Agreement Not Signed.pdf",
    fileUrl: "https://drive.google.com/file/d/11b0espg7aagEcvI5Q17CfrkBwU_vljFd/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "7/22/2024 14:21:32",
    category: "court_doc",
    description: "Unsigned plea agreement draft rejected by defendant demanding full trial on the merits.",
    highlightText: "Defendant refused guilty plea, insisting on right to inspect alleged digital evidence."
  },
  {
    id: "doc-211-16",
    caseNumber: "21-1-04347-2",
    fileName: "Case Data _ KC-Script Portal.pdf",
    fileUrl: "https://drive.google.com/file/d/11FOsV0AtVXyt_Q6ZBWs1BQVQpOlnNEjG/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "7/22/2024 14:02:17",
    category: "court_doc",
    description: "King County Script portal record showing docket entries spanning 2021 through 2026.",
    highlightText: "Comprehensive tracking of multiple competency evaluations and resets."
  },
  {
    id: "doc-211-17",
    caseNumber: "21-1-04347-2",
    fileName: "Seattle Competency Calendar.pdf",
    fileUrl: "https://drive.google.com/file/d/1zOj18hRDTHhsxPls30O82l543hThDvdq/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "7/4/2024 4:43:13",
    category: "court_doc",
    description: "Daily master docket for King County Superior Court Competency Calendar.",
    highlightText: "Illustrates assembly-line scheduling of RCW 10.77 restoration referrals."
  },

  // Case 664676
  {
    id: "doc-664-1",
    caseNumber: "664676",
    fileName: "Defendant's Narrative.pdf",
    fileUrl: "https://drive.google.com/file/d/1noatIME0VFsuIOKeTEjGIxn1PBtCo1Dp/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/15/2025 4:47:54",
    category: "briefing_or_memo",
    description: "First-person account of March 30, 2022 arrest while leaving for groceries with former roommate.",
    highlightText: "Roommate explicitly told officers he permitted defendant to stay; police overrode consent."
  },
  {
    id: "doc-664-2",
    caseNumber: "664676",
    fileName: "Worksheet.pdf",
    fileUrl: "https://drive.google.com/file/d/1q1mu_4Va0fO3QtYDNjOyjPusRCxLYtvM/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/5/2025 6:22:58",
    category: "court_doc",
    description: "Bail study worksheet prepared during overnight detention at King County Jail.",
    highlightText: "Documents rapid entry and withdrawal of Mental Health Court referral."
  },
  {
    id: "doc-664-3",
    caseNumber: "664676",
    fileName: "Notice of Charges Pending.pdf",
    fileUrl: "https://drive.google.com/file/d/1_f7yUOpH1qhGtE4Vnh3053avqFeacE2O/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/5/2025 6:22:58",
    category: "court_doc",
    description: "Pre-arraignment notice indicating pending violation of court order.",
    highlightText: "Scheduled 10:05 AM arraignment was stricken; case dismissed at 1:30 PM."
  },
  {
    id: "doc-664-4",
    caseNumber: "664676",
    fileName: "Commitment Release Order.pdf",
    fileUrl: "https://drive.google.com/file/d/14qxTAgSlN4ORpO1M-GjSZKVFA7mTwz6v/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/5/2025 6:22:57",
    category: "court_doc",
    description: "Release order executed on March 31, 2022 confirming dismissal without complaint.",
    highlightText: "No attorney appointed; no probable cause hearing held before release."
  },
  {
    id: "doc-664-5",
    caseNumber: "664676",
    fileName: "Case View for Case 664676.pdf",
    fileUrl: "https://drive.google.com/file/d/1pP6SJHeGKTrEfLjiJjkGkC22mHBMTsc1/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/5/2025 6:22:58",
    category: "court_doc",
    description: "Municipal court record showing final administrative closure and stricken charges.",
    highlightText: "Discrepancy Score calculated at D = 89/100."
  },

  // Case 22-1-04242-7 / 22-1-04242-3 SEA (Felony Threats Against Governor)
  {
    id: "doc-221-1",
    caseNumber: "22-1-04242-3",
    fileName: "Case Events.pdf",
    fileUrl: "https://drive.google.com/file/d/1JdlAmHJiCjFrCcN6PnC3nORYCLPrI2UW/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "8/13/2024 15:32:41",
    category: "court_doc",
    description: "Master event log for Case 22-1-04242-3 SEA in King County Superior Court.",
    highlightText: "10 months continuous pretrial detention without trial; Discrepancy Score D = 94/100."
  },
  {
    id: "doc-221-2",
    caseNumber: "22-1-04242-3",
    fileName: "Case Document List.pdf",
    fileUrl: "https://drive.google.com/file/d/1YLyzkuxGt_S5CqlPWO9NlQs8i-dtp_Ku/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "2/16/2025 14:24:00",
    category: "court_doc",
    description: "Inventory of filed pleadings, revealing missing initiating voicemail recording.",
    highlightText: "The central alleged threatening voicemail transcription was never produced in discovery."
  },
  {
    id: "doc-221-3",
    caseNumber: "22-1-04242-3",
    fileName: "Order for Competency Restoration 2023.pdf",
    fileUrl: "https://drive.google.com/file/d/1b8L7fK0tb9UpGN7wS55_A2Y7f3MecqqP/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/4/2025 16:22:18",
    category: "court_doc",
    description: "Superior court restoration order maintaining OCRP supervision post-jail release.",
    highlightText: "Competency proceedings used as continuous substitute for adversarial trial."
  },
  {
    id: "doc-221-4",
    caseNumber: "22-1-04242-3",
    fileName: "Motion to Dismiss from Christine Tian.pdf",
    fileUrl: "https://drive.google.com/file/d/1vKka37bpfyK0j0nFTf2231mgtCWsH6ui/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/5/2025 5:57:18",
    category: "court_doc",
    description: "Defense motion citing constitutional speedy-trial breaches and discovery non-production.",
    highlightText: "Invoked CrR 8.3(b) for arbitrary governmental misconduct and delay."
  },
  {
    id: "doc-221-5",
    caseNumber: "22-1-04242-3",
    fileName: "Competency Evaluation 2022.pdf",
    fileUrl: "https://drive.google.com/file/d/1IrFLNnEZeLZ113hU8WWhdsu8mvIs67RO/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "5/5/2025 5:57:30",
    category: "court_doc",
    description: "Evaluation by Dr. Claire Ashbaugh labeling technology harassment reports as 'delusional themes'.",
    highlightText: "Pre-signed order was reportedly entered one day before actual scheduled hearing."
  },
  {
    id: "doc-221-6",
    caseNumber: "22-1-04242-3",
    fileName: "Case Study 22-1-04242-3.pdf",
    fileUrl: "https://drive.google.com/file/d/18jkkAKCZsXBgMXS2sIP8FNoIQFs3N46T/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/6/2026 19:52:48",
    category: "forensic_analysis",
    description: "Detailed legal analysis comparing the 4-year pendency against Barker v. Wingo speedy trial standards.",
    highlightText: "Violates all 4 prongs of the Barker test: length of delay, reason, assertion, and prejudice."
  },
  {
    id: "doc-221-7",
    caseNumber: "22-1-04242-3",
    fileName: "Filed Petition for Declaratory Judgment and to Quit Title.pdf",
    fileUrl: "https://drive.google.com/file/d/1nCyA91uK09zci7ZWGBP_ElIVAunajvdh/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "1/5/2026 22:36:31",
    category: "court_doc",
    description: "Declaratory petition linking prosecution overreach to historical property covenants.",
    highlightText: "Formal assertion of fiduciary standing over regional security corridor."
  },
  {
    id: "doc-221-8",
    caseNumber: "22-1-04242-3",
    fileName: "Legal Dossier for Case 22-1-04242-3.pdf",
    fileUrl: "https://drive.google.com/file/d/1Osqc6wBfoxed542Y6xbQuAGURv74ApEi/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "10/1/2025 1:35:33",
    category: "briefing_or_memo",
    description: "Comprehensive dossier detailing apartment hallway ambush, jail contaminated water, and cellmate assault.",
    highlightText: "Eighth Amendment violations: fractured nose from cellmate assault ignored by jail command."
  },
  {
    id: "doc-221-9",
    caseNumber: "22-1-04242-3",
    fileName: "Case Analysis.pdf",
    fileUrl: "https://drive.google.com/file/d/1K3T1u56FAhXoIlJKtrbeedWnZrvu0q0d/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/27/2025 22:04:10",
    category: "forensic_analysis",
    description: "Forensic study evaluating political proximity and selective enforcement in executive threat prosecutions.",
    highlightText: "Contrasts this case with zero arrests during Governor's Mansion perimeter fence breach."
  },
  {
    id: "doc-221-10",
    caseNumber: "22-1-04242-3",
    fileName: "Legal Analysis Memorandum.pdf",
    fileUrl: "https://drive.google.com/file/d/1r3P4cWW6KUSIFLd1Ei7hCReQA7DTffZv/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/26/2025 14:13:34",
    category: "briefing_or_memo",
    description: "Memorandum on due process collapse under RCW 10.77 indefinite competency loops.",
    highlightText: "Application of Jackson v. Indiana: prohibiting indefinite commitment without foreseeable restoration."
  },
  {
    id: "doc-221-11",
    caseNumber: "22-1-04242-3",
    fileName: "DSHS Competency Report 2022.pdf",
    fileUrl: "https://drive.google.com/file/d/1w4ug43EudXjD4hLHtxn0bkZkidhmOXcV/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "10/28/2023 17:31:42",
    category: "court_doc",
    description: "Original 2022 DSHS hospital competency assessment recommending inpatient restoration.",
    highlightText: "Reveals how diagnostic classification replaced criminal discovery production."
  },

  // Case 25-2-17456-5 (SCIDpda Bush Hotel Eviction)
  {
    id: "doc-252-1",
    caseNumber: "25-2-17456-5",
    fileName: "Eviction Summons & Complaint For Unlawful Detainer.pdf",
    fileUrl: "https://drive.google.com/file/d/1fiuOnPJ4cE8D8BZHaTms3el4036uYrta/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "7/25/2025 14:48:15",
    category: "court_doc",
    description: "Summons and Complaint served 8 days after tenant appeared in KIRO News safety broadcast.",
    highlightText: "Served abruptly despite tenant holding rent receipts and active repayment plan."
  },
  {
    id: "doc-252-2",
    caseNumber: "25-2-17456-5",
    fileName: "Unlawful Detainer Forensic Analysis.pdf",
    fileUrl: "https://drive.google.com/file/d/1KrvvrfHNgxLrMw1ZBdcyMBDbUX_r8wsL/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/20/2025 20:15:00",
    category: "forensic_analysis",
    description: "Forensic study evaluating PDA retaliatory eviction timing and failure to mitigate damages.",
    highlightText: "SCIDpda refused to invoice Telecare Corp to block third-party rental relief funds."
  },
  {
    id: "doc-252-3",
    caseNumber: "25-2-17456-5",
    fileName: "Updated Ledger - Lozenich.pdf",
    fileUrl: "https://drive.google.com/file/d/1mJwlEFyC-gXtv54sSAHj_YIx4DkrUJ8S/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/20/2025 20:15:00",
    category: "court_doc",
    description: "Accounting ledger showing $250/month repayment plan compliance and returned money orders.",
    highlightText: "Landlord returned validated money order intended to clear balance without cause."
  },
  {
    id: "doc-252-4",
    caseNumber: "25-2-17456-5",
    fileName: "Motion For Relief From Default Judgement.pdf",
    fileUrl: "https://drive.google.com/file/d/1SZaGP2WmKx0Dm4eFQcxFkWjkS6vg6CEo/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/23/2025 12:53:41",
    category: "court_doc",
    description: "CR 60(b) Motion filed pro se citing excusable neglect due to criminal detention and retaliatory timing.",
    highlightText: "Filed on same day as parallel criminal competency hearing in Superior Court."
  },
  {
    id: "doc-252-5",
    caseNumber: "25-2-17456-5",
    fileName: "Motion to Stay Unlawful Detainer 9/25.pdf",
    fileUrl: "https://drive.google.com/file/d/1PPiEySVejwnmdcHGwEiNF7DOEBqnQNXW/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/24/2025 18:59:08",
    category: "court_doc",
    description: "Motion seeking emergency injunctive stay and temporary restraining order against sheriff execution.",
    highlightText: "Asserted Majorat Covenant right-of-first-refusal and lack of statutory notice."
  },
  {
    id: "doc-252-6",
    caseNumber: "25-2-17456-5",
    fileName: "Findings of Fact and Conclusions of Law.pdf",
    fileUrl: "https://drive.google.com/file/d/1X603CHFWTLOex9jGjdBZ5VyiOplC75_d/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/22/2025 15:55:09",
    category: "court_doc",
    description: "Judicial findings entered by Judge Jennifer Petersen authorizing writ of restitution.",
    highlightText: "Restricted summary proceeding to narrow non-payment without addressing counter-claims."
  },
  {
    id: "doc-252-7",
    caseNumber: "25-2-17456-5",
    fileName: "Full Satisfaction of Judgement 01/07.pdf",
    fileUrl: "https://drive.google.com/file/d/1kjPeQ5ugLX_o1pJqhEaYuRamok0U3QHy/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "1/7/2026 11:59:18",
    category: "court_doc",
    description: "Final formal Satisfaction of Judgment filed on January 7, 2026 officially closing lawsuit.",
    highlightText: "Concludes eviction case following complete satisfaction of disputed financial sums."
  },
  {
    id: "doc-252-8",
    caseNumber: "25-2-17456-5",
    fileName: "Legal Analysis for Tenant Shane Lozenich- Eviction Narrative.pdf",
    fileUrl: "https://drive.google.com/file/d/1Eu3qwWEDOKdY1oPf3AZnqfBRYyRVqGi0/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/20/2025 10:49:55",
    category: "forensic_analysis",
    description: "Legal analysis evaluating compliance with Seattle Municipal Eviction Ordinance and First Amendment protections.",
    highlightText: "Robinson v. Diamond Housing Corp doctrine: summary eviction cannot punish protected public speech."
  },
  {
    id: "doc-252-9",
    caseNumber: "25-2-17456-5",
    fileName: "Assessing Compliance with Washington State and Seattle Municipal Eviction Laws, Case Study.pdf",
    fileUrl: "https://drive.google.com/file/d/1TsjDBzqLLUuepz7lwYqhS20aePA94GLI/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "9/20/2025 4:39:37",
    category: "forensic_analysis",
    description: "Statutory compliance report identifying violations of HUD affordable housing regulations.",
    highlightText: "PDA refused certified third-party emergency aid in violation of mitigation rules."
  },
  {
    id: "doc-252-10",
    caseNumber: "25-2-17456-5",
    fileName: "All Court Docs SCIDpda vs Lozenich .pdf",
    fileUrl: "https://drive.google.com/file/d/1duJuKbogSZa4WQS4EPjc8n8-TFMbMYNx/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "7/25/2025 14:51:24",
    category: "court_doc",
    description: "Master consolidated court filings compilation for King County Superior Court Case 25-2-17456-5.",
    highlightText: "Complete record of filings, rent receipts, and show-cause orders."
  },

  // Case 26-2-01443-4 SEA (Seattle-Bremerton Majorat Quiet Title)
  {
    id: "doc-262-1",
    caseNumber: "26-2-01443-4",
    fileName: "Petition to Quiet Title.pdf",
    fileUrl: "https://drive.google.com/file/d/1reuuGS8ihatLGNyxs7n_xg-UcX_sdcWE/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "1/22/2026 15:38:49",
    category: "court_doc",
    description: "Verified Petition to Quiet Title and Declaratory Judgment over the Seattle-Bremerton corridor.",
    highlightText: "Asserts hereditary fiduciary title and challenges quasi-governmental immunity shells."
  },
  {
    id: "doc-262-2",
    caseNumber: "26-2-01443-4",
    fileName: "Comparative Legal Analysis 4Culture Charter in Historical and Jurisprudential Context.pdf",
    fileUrl: "https://drive.google.com/file/d/1HB4flFQzlIfEOuBgNiK_j_r3xU3nFFZB/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "4/28/2026 22:25:15",
    category: "forensic_analysis",
    description: "Structural inquiry into King County Cultural Development Authority charter immunity mechanisms.",
    highlightText: "Exposes how quasi-public PDA charters insulate primary county government from liability."
  },
  {
    id: "doc-262-3",
    caseNumber: "26-2-01443-4",
    fileName: "The Jurisdictional Compass Navigating Lex Domicilii and Lex Rei Sitae.pdf",
    fileUrl: "https://drive.google.com/file/d/1MxjQoy0BLwgY6SV6vG63XyNVbgSzXGEk/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "4/28/2026 21:58:33",
    category: "briefing_or_memo",
    description: "Jurisprudential treatise on conflict of laws governing immovable property and ancestral succession.",
    highlightText: "Applies Harrison v. Nixon and In re Chappell's Estate (124 Wash. 128) precedents."
  },
  {
    id: "doc-262-4",
    caseNumber: "26-2-01443-4",
    fileName: "Memorendum in Support of Sovereign Declaration.pdf",
    fileUrl: "https://drive.google.com/file/d/1GjXW_D_Wu2JNU_iYyKdb2Tbhkl6Fa43s/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "4/18/2026 23:20:49",
    category: "briefing_or_memo",
    description: "Memorandum establishing the fiduciary obligations and legal charter of the Majorat Trust.",
    highlightText: "Calculated Discrepancy Score D = 95/100."
  },
  {
    id: "doc-262-5",
    caseNumber: "26-2-01443-4",
    fileName: "Analysis of the Seattle-Bremerton Majorat Strategic Assets, Terrorism and Security.pdf",
    fileUrl: "https://drive.google.com/file/d/1NM67CiSrQaa48XiC98kd2pq4CU8SwhzD/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "3/22/2026 10:51:34",
    category: "forensic_analysis",
    description: "Strategic asset profile of Puget Sound infrastructure encompassing naval and municipal corridors.",
    highlightText: "Forensic assessment of interlocal jurisdictional vacuums in regional security."
  },
  {
    id: "doc-262-6",
    caseNumber: "26-2-01443-4",
    fileName: "Petition for Jurisdictional Determination.pdf",
    fileUrl: "https://drive.google.com/file/d/13zsUQ0-vr-AcHqNidxO4RjVpnr779Ati/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "1/25/2026 15:30:47",
    category: "court_doc",
    description: "Motion demanding court rule on whether municipal courts possess lawful jurisdiction over majorat assets.",
    highlightText: "Forces judicial bench to validate its own lawful authority on the record."
  },
  {
    id: "doc-262-7",
    caseNumber: "26-2-01443-4",
    fileName: "Order Setting Civil Case.pdf",
    fileUrl: "https://drive.google.com/file/d/1QEvtVm2FHsNtm5nA0r4TuCk86yvrh7dp/view?usp=drivesdk",
    fileType: "court_doc",
    dateCreated: "1/22/2026 15:38:42",
    category: "court_doc",
    description: "King County Superior Court scheduling order establishing case tracking and pretrial schedule.",
    highlightText: "Civil matter currently active and pending judicial review."
  },
  {
    id: "doc-262-8",
    caseNumber: "26-2-01443-4",
    fileName: "Lozenich vs The State of Washington.pdf",
    fileUrl: "https://drive.google.com/file/d/1kn3pTIAkprzP8abK43Q0U1XRynCiLxqP/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "1/22/2026 15:39:49",
    category: "court_doc",
    description: "Lead pleading in King County Superior Court Case 26-2-01443-4.",
    highlightText: "Reverses polarity from criminal defendant to sovereign civil petitioner."
  },

  // Federal Case 2:26-cv-00261-tl
  {
    id: "doc-fed-1",
    caseNumber: "2:26-cv-00261-tl",
    fileName: "Initial Complaint Lozenich vs The United States of America et al.pdf",
    fileUrl: "https://drive.google.com/file/d/1WSmPTAGMxlNbmDD1F9G_DfUaaynyUzUz/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "2/28/2026 1:34:39",
    category: "court_doc",
    description: "Federal civil rights complaint filed under 42 U.S.C. § 1983 and Bivens in U.S. District Court (WD Wash).",
    highlightText: "Alleges nationwide constitutional violations, systemic due process denial, and inter-agency entrapment."
  },
  {
    id: "doc-fed-2",
    caseNumber: "2:26-cv-00261-tl",
    fileName: "Judgement from US Courts.pdf",
    fileUrl: "https://drive.google.com/file/d/1aAhpWX33azkCkNgF-dTA6wROMoTINVOH/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "2/28/2026 1:33:15",
    category: "court_doc",
    description: "Federal order addressing Rule 12(b)(6) dismissal thresholds and jurisdictional standing.",
    highlightText: "Examines pleading hurdles for non-conventional technological surveillance claims."
  },
  {
    id: "doc-fed-3",
    caseNumber: "2:26-cv-00261-tl",
    fileName: "Filed Report .pdf",
    fileUrl: "https://drive.google.com/file/d/1sskyXTUgtak3OhctLzffMGPBWt83YDbd/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "2/7/2026 22:32:30",
    category: "briefing_or_memo",
    description: "Evidentiary audit report filed in federal docket detailing state administrative suppression.",
    highlightText: "Includes comprehensive timeline of 8 state proceedings."
  },

  // Combined Master Monographs & Case Analysis Reports
  {
    id: "doc-comb-1",
    caseNumber: "Cases Combined",
    fileName: "Full Demopocrisy Master Report.pdf",
    fileUrl: "https://drive.google.com/file/d/1uKtufxnZyiFnLVzYS3m1sO11ltIjA0Ty/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/1/2026 0:45:24",
    category: "forensic_analysis",
    description: "The complete 2026 Demopocrisy Master Monograph synthesizing 5 years of King County litigation.",
    highlightText: "Defines the 'Demopocrisy' paradigm, Due Process Gap, and Stratigraphic Analytical Model."
  },
  {
    id: "doc-comb-2",
    caseNumber: "Cases Combined",
    fileName: "Procedural and Institutional Audit Report King County Superior Court.pdf",
    fileUrl: "https://drive.google.com/file/d/1NfFY_fghQjlmW6P-fMH-HdxKkUewQvX6/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/8/2026 16:46:01",
    category: "forensic_analysis",
    description: "Comprehensive institutional audit of KCSC competency calendars and prosecutorial delay tactics.",
    highlightText: "Calculates Mean Discrepancy Score D = 89.75 across the King County dataset."
  },
  {
    id: "doc-comb-3",
    caseNumber: "Cases Combined",
    fileName: "Network Analysis Report.pdf",
    fileUrl: "https://drive.google.com/file/d/1hDfDkTv4oIkwytYtFo-QyoYPXRRSjx1x/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/31/2026 16:56:48",
    category: "forensic_analysis",
    description: "Kumu Social Network Analysis report mapping 57 nodes, 80 connections, and institutional chokepoints.",
    highlightText: "Proves SPD holds highest betweenness centrality (0.0040) bridging arrest to prosecution."
  },
  {
    id: "doc-comb-4",
    caseNumber: "Cases Combined",
    fileName: "Procedural Justice and Systems Failure Report.pdf",
    fileUrl: "https://drive.google.com/file/d/1h_Sq8Ovxd6r_xgrSNP9HLcCMSobcdWqh/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "6/1/2026 0:42:03",
    category: "forensic_analysis",
    description: "Monograph detailing the 5 recurring systemic failure modes and 31 consolidated policy reforms.",
    highlightText: "Maps interaction models of decoupled capturing nodes and unilateral administrative authority."
  },
  {
    id: "doc-comb-5",
    caseNumber: "Cases Combined",
    fileName: "Narrative Timeline for All Cases.pdf",
    fileUrl: "https://drive.google.com/file/d/1XYg6z1urlW-WTODQaULS86OMuAFtUT91/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/31/2026 7:36:30",
    category: "forensic_analysis",
    description: "Chronological master timeline tracking Shane Lozenich from 2020 through 2026.",
    highlightText: "Contains personal accounts of 6 arrests, 2 psychiatric holds, and 365+ detention days."
  },
  {
    id: "doc-comb-6",
    caseNumber: "Cases Combined",
    fileName: "Demopocrisy Dataset.pdf",
    fileUrl: "https://drive.google.com/file/d/1kVZKj3jFYI2TtE3GZTkmAzyf1XGXI-cQ/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/31/2026 16:56:48",
    category: "forensic_analysis",
    description: "Structured empirical dataset and CSV mapping of all 8 King County legal dockets.",
    highlightText: "Quantitative matrix of procedural variables, evidence status, and constitutional axes."
  },

  // Case Analysis & Special Investigations
  {
    id: "doc-an-1",
    caseNumber: "Case Analysis",
    fileName: "The Competency-Medicalization Pipeline Analyzing the Erosion of Due Process.pdf",
    fileUrl: "https://drive.google.com/file/d/1dXWgVHcdyXMJzEHEjIVBQxW036Db45Ac/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/24/2026 17:42:05",
    category: "forensic_analysis",
    description: "Investigative monograph examining how RCW 10.77 restoration loops substitute for trial.",
    highlightText: "Analyzes Reach Efficiency (0.025) of Case 658959 as the most efficient harm propagator."
  },
  {
    id: "doc-an-2",
    caseNumber: "Case Analysis",
    fileName: "Forensic Report The Legal Architecture of Shadow Jurisdictions and Interlocal Immunity.pdf",
    fileUrl: "https://drive.google.com/file/d/1kZ-4DD8sfgwBVjWje0oSN01yVIaPQjmM/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/24/2026 17:42:05",
    category: "forensic_analysis",
    description: "In-depth study on how Public Development Authorities (PDAs) exploit immunity shields.",
    highlightText: "Includes analysis of King County Regional Homelessness Authority (KCRHA) $13M forensic audit."
  },
  {
    id: "doc-an-3",
    caseNumber: "Case Analysis",
    fileName: "The Jurisprudential Web A Structural Analysis of Network Centrality and Systemic Failure.pdf",
    fileUrl: "https://drive.google.com/file/d/1PI9KNp6AcLSRti7U-mUGKsHagSV2vg6O/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/24/2026 17:42:06",
    category: "forensic_analysis",
    description: "Mathematical graph theory paper mapping information flow bottlenecks between police and courts.",
    highlightText: "Proves outdegree asymmetry: cases drive connections while agencies act as passive recipients."
  },
  {
    id: "doc-an-4",
    caseNumber: "Case Analysis",
    fileName: "Systemic Vulnerability Report Procedural Collapse in Municipal Justice Infrastructure (2021–2026).pdf",
    fileUrl: "https://drive.google.com/file/d/19NRVmeDV00qXrDxHcdHK0So1jyyMwO2y/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/20/2026 5:58:35",
    category: "forensic_analysis",
    description: "Comprehensive assessment of remote court operations and database misclassifications.",
    highlightText: "Highlights lack of real-time human verification prior to tactical SWAT deployments."
  },
  {
    id: "doc-an-5",
    caseNumber: "Case Analysis",
    fileName: "The Architecture of Entrapment A Systemic Loop Summary.pdf",
    fileUrl: "https://drive.google.com/file/d/1UKK9KcZvKycucBDGWd-VxpLPrHbSkLcD/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/14/2026 4:24:41",
    category: "forensic_analysis",
    description: "Analysis of the 6-Phase Institutional Defense Loop deployed when state agencies face exposure.",
    highlightText: "Details the cycle: Narcissistic Panic → Containment → Normalization → Disposal → Deflection → Paranoia."
  },
  {
    id: "doc-an-6",
    caseNumber: "Case Analysis",
    fileName: "Strategic Litigation Memorandum Dismantling Administrative Immunity.pdf",
    fileUrl: "https://drive.google.com/file/d/17EZcKRwm3c7QmZev8iAqZP68QgRZriY-/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/14/2026 4:24:42",
    category: "briefing_or_memo",
    description: "Strategic litigation blueprint to defeat quasi-municipal qualified immunity defenses.",
    highlightText: "Focuses on civil rights claims under 42 U.S.C. § 1983."
  },
  {
    id: "doc-an-7",
    caseNumber: "Case Analysis",
    fileName: "Sovereign Governance Charter The Seattle-Bremerton Majorat.pdf",
    fileUrl: "https://drive.google.com/file/d/14Q6RTQCNf82aSMEyk28EOHCuV3PmZ0BQ/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/18/2026 6:50:49",
    category: "covenant_or_property",
    description: "Charter and historical covenants asserting ancestral land rights over Puget Sound corridor.",
    highlightText: "Historical record of the Majorat Trust and fiduciary obligations."
  },
  {
    id: "doc-an-8",
    caseNumber: "Case Analysis",
    fileName: "Socio-Economic Impact Assessment King County Law Enforcement Bargaining.pdf",
    fileUrl: "https://drive.google.com/file/d/1BNuA_ZD7rss0ZpS7diq5zUJHYl00viDO/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "5/18/2026 7:03:30",
    category: "forensic_analysis",
    description: "Econometric analysis correlating pretrial booking surges with police union recruitment bonus debates.",
    highlightText: "Investigates economic incentivization of detention as an unaddressed systemic root cause."
  },

  // Thesis Primer
  {
    id: "doc-th-1",
    caseNumber: "Thesis Primer",
    fileName: "Strategic Assessment Counter-Archival Provenance, Quiet Title Assertion.pdf",
    fileUrl: "https://drive.google.com/file/d/1UcpHPiPuv_scbLdIzuhaZxq38kmVztHU/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "10/4/2026 3:49:35",
    category: "forensic_analysis",
    description: "Thesis monograph exploring the creation of uncompressible counter-archives to resist institutional erasure.",
    highlightText: "Establishes the 'Policy of Truth' doctrine for re-inflating the Z-axis of judicial dockets."
  },
  {
    id: "doc-th-2",
    caseNumber: "Thesis Primer",
    fileName: "Extraction-Bridge-Report.pdf",
    fileUrl: "https://drive.google.com/file/d/1cDBqG_is7zDX4zJKgKV_8mTJHfIdareF/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "10/4/2026 2:45:27",
    category: "forensic_analysis",
    description: "Forensic audit of the 'Extraction Bridge' linking bureaucratic pathology to corporate municipal shells.",
    highlightText: "Maps conversion of custodial detention into state bed-capacity funding and municipal grants."
  },
  {
    id: "doc-th-3",
    caseNumber: "Thesis Primer",
    fileName: "Demopocrisy-Thesis-Report.pdf",
    fileUrl: "https://drive.google.com/file/d/1Zd_gj7sxRslrTI6YJwo9J54QI6cPq5oh/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "10/4/2026 2:45:31",
    category: "forensic_analysis",
    description: "Comprehensive doctoral-level academic thesis synthesizing the entire Demopocrisy case research.",
    highlightText: "Primary academic treatise articulating procedural compression in modern urban justice."
  },
  {
    id: "doc-th-4",
    caseNumber: "Thesis Primer",
    fileName: "The-Bureaucratic-Unconscious.pdf",
    fileUrl: "https://drive.google.com/file/d/19vcp-YCSw-O3VtV0jqu_3txQ0N9K9025/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "8/27/2026 11:01:27",
    category: "forensic_analysis",
    description: "Psychoanalytic exploration of systemic legal and clinical defense mechanisms under crisis.",
    highlightText: "Theorizes administrative projection and collective diagnostic defense loops."
  },
  {
    id: "doc-th-5",
    caseNumber: "Thesis Primer",
    fileName: "Institutional Analysis Matrix.pdf",
    fileUrl: "https://drive.google.com/file/d/1F40V8gC9WcAzcGWYsME6NkDFykshTvpE/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "8/26/2026 20:10:40",
    category: "forensic_analysis",
    description: "Structured comparison matrix cross-referencing all 8 dockets against 30+ constitutional indicators.",
    highlightText: "Definitive tabular reference for procedural deviations across King County courts."
  },
  {
    id: "doc-th-6",
    caseNumber: "Thesis Primer",
    fileName: "Demopocrisy Research Paper Draft.pdf",
    fileUrl: "https://drive.google.com/file/d/1rlBQYaKy2S7iz35EE8ebxvlIwlVSQueN/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "8/26/2026 13:03:30",
    category: "forensic_analysis",
    description: "Draft research paper prepared for academic law journal submission on due process gap.",
    highlightText: "Comprehensive citation of Washington state statutes, court rules, and Supreme Court rulings."
  },
  {
    id: "doc-th-7",
    caseNumber: "Thesis Primer",
    fileName: "Whoever Controls the Memory Controls the Meaning How the Policy of Truth Exposes Systemic Power.pdf",
    fileUrl: "https://drive.google.com/file/d/1GGsyJufVI-mYvKL9RQYAaxFr5Nj1d3Zj/view?usp=drivesdk",
    fileType: "application/pdf",
    dateCreated: "8/27/2026 11:02:16",
    category: "forensic_analysis",
    description: "Philosophical and jurisprudential monograph on archival sovereignty and counter-evidence.",
    highlightText: "Foundational manifesto for the Policy of Truth counter-architecture."
  }
];
