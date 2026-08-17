export interface JobItem {
  id: string;
  title: string;
  department: string;
  region: 'Punjab' | 'Federal' | 'AIOU Special' | 'All Pakistan';
  category: 'AIOU Tutor' | 'Punjab (PPSC)' | 'Federal (FPSC)' | 'Educators / Teaching' | 'General Gov';
  vacancies: string;
  payScale: string;
  qualification: string;
  ageLimit: string;
  lastDate: string;
  isUrgent?: boolean;
  applyUrl: string;
  officialPortal: string;
  description: string;
  criteriaList: string[];
  howToApplySteps: string[];
  requiredDocuments: string[];
}

export const PAKISTAN_JOB_UPDATES: JobItem[] = [
  {
    id: 'job-1',
    title: 'AIOU Part-Time Tutor & Workshop Resource Person Jobs',
    department: 'Allama Iqbal Open University (AIOU), Islamabad',
    region: 'AIOU Special',
    category: 'AIOU Tutor',
    vacancies: '5,000+ Tutors',
    payScale: 'PKR 25,000 - 80,000 / Semester',
    qualification: 'Master / BS 4-Year / M.Phil / Ph.D. in relevant subject',
    ageLimit: '25 - 60 Years (Relaxation available)',
    lastDate: 'Active Batch / Rolling Admissions',
    isUrgent: true,
    applyUrl: 'https://tutor.aiou.edu.pk',
    officialPortal: 'AIOU Aaghi Tutor Portal',
    description: 'AIOU invites applications from qualified teachers and subject specialists across Pakistan for enrollment as Part-Time Tutors and Online Workshop Resource Persons for Matric, FA, BA, BS, B.Ed, Master, MPhil, and PhD semesters.',
    criteriaList: [
      'Matric/FA Level: Minimum 2nd Class Master Degree / BS 4-Year.',
      'BA/BS/B.Ed Level: Minimum M.Phil / MS in relevant subject preferred.',
      'M.Phil / PhD Level: Ph.D. scholars or experienced Assistant Professors.',
      'Government School/College teachers get 2-3 years experience preference.',
      'Must possess basic computer & AAGHI LMS / Microsoft Teams handling skills.'
    ],
    howToApplySteps: [
      'Visit the official AIOU Aaghi Tutor Portal (tutor.aiou.edu.pk).',
      'Create an account using your CNIC and active email address.',
      'Fill out personal, academic (Matric to PhD), and teaching experience details.',
      'Upload scanned CNIC, photo, highest degree, and departmental permission certificate (DPC if gov employee).',
      'Generate processing fee challan (PKR 1,000) and pay via JazzCash, EasyPaisa, or ABL/MCB banks.',
      'Contact Educare Help Desk (03451291610) if you need help filling the tutor profile.'
    ],
    requiredDocuments: [
      'CNIC Front & Back copy',
      'Passport size Photograph (Blue background)',
      'All Academic Degrees & DMCs (Matric to Highest Degree)',
      'Teaching Experience Certificate (if applicable)',
      'Departmental No Objection Certificate (NOC/DPC for Govt Employees)'
    ]
  },
  {
    id: 'job-2',
    title: 'PPSC Elementary School Educator & Lecturer (BS-16 / BS-17) Jobs',
    department: 'School Education Department, Government of Punjab',
    region: 'Punjab',
    category: 'Punjab (PPSC)',
    vacancies: '1,013+ Posts',
    payScale: 'BS-16 to BS-17 (Regular / Contract)',
    qualification: 'Master / BS (4-Year) + B.Ed (at least 55% marks)',
    ageLimit: '21 - 38 Years (Male) | 21 - 41 Years (Female)',
    lastDate: 'August 2026',
    isUrgent: true,
    applyUrl: 'https://ppsc.gop.pk',
    officialPortal: 'Punjab Public Service Commission (PPSC)',
    description: 'PPSC invites online applications for Lecturer (BS-17) and Elementary School Teacher / Secondary School Teacher positions across various subject cadres in Punjab government schools and colleges.',
    criteriaList: [
      'Must hold Punjab Domicile (Male, Female & Transgender eligible).',
      'Master Degree or BS 4-Year in English, Urdu, Physics, Chemistry, Math, Biology, Computer Science, or Islamic Studies.',
      'B.Ed / M.Ed degree required (or professional training condition).',
      'Special Quota: 15% Women, 5% Minorities, 3% Special Persons.'
    ],
    howToApplySteps: [
      'Go to the official PPSC Portal (ppsc.gop.pk) and click "Apply Online".',
      'Select the target post (e.g. Lecturer English / ESE Science).',
      'Generate 1Link PSID fee challan (PKR 600) and pay via Mobile Banking / ATM.',
      'Upload passport size picture (under 25KB) and CNIC front scan.',
      'Input academic marks, CGPA, and Punjab domicile district.',
      'Submit the final online application and download the PPSC Application PDF.'
    ],
    requiredDocuments: [
      'Punjab Domicile Certificate',
      'CNIC & Passport Photograph',
      'Matric, Intermediate, BS/Master Degrees & Transcripts',
      'B.Ed / Professional Education Certificate',
      'Challan Fee Payment Receipt (PSID)'
    ]
  },
  {
    id: 'job-3',
    title: 'Directorate of Literacy Punjab Elementary Teacher Vacancies',
    department: 'Directorate General of Literacy & Non-Formal Basic Education, Punjab',
    region: 'Punjab',
    category: 'Educators / Teaching',
    vacancies: '1,000 Posts',
    payScale: 'PKR 20,000 / Month Fixed Remuneration',
    qualification: 'Graduation (BA / BSc / BS) with minimum 50% marks',
    ageLimit: '20 - 55 Years',
    lastDate: 'August 2026',
    isUrgent: true,
    applyUrl: 'https://literacy.punjab.gov.pk',
    officialPortal: 'Literacy Punjab Portal',
    description: '1000 Elementary Teacher vacancies announced in Non-Formal Basic Education schools across Punjab districts for community teaching and literacy promotion.',
    criteriaList: [
      'Graduation (BA/BSc/BS/B.Com) from HEC recognized university.',
      'Age limit relaxed up to 55 years for community candidates.',
      'Punjab domicile mandatory.',
      'Candidate must register out-of-school children (aged 10-16) in their union council.'
    ],
    howToApplySteps: [
      'Visit literacy.punjab.gov.pk or Job Center Punjab portal.',
      'Register your candidate profile with CNIC.',
      'Fill in personal details, Tehsil, District, and Union Council.',
      'Upload scanned degrees and CNIC.',
      'Submit form online without any physical application submission.'
    ],
    requiredDocuments: [
      'CNIC & Domicile of relevant Punjab District',
      'Graduation Degree / Transcript',
      'Recent Photograph'
    ]
  },
  {
    id: 'job-4',
    title: 'FPSC Federal Government Officer & Teacher Jobs (BS-16 / BS-17 / BS-18)',
    department: 'Federal Public Service Commission (FPSC), Islamabad',
    region: 'Federal',
    category: 'Federal (FPSC)',
    vacancies: '450+ Posts',
    payScale: 'BS-16, BS-17 & BS-18',
    qualification: 'Bachelor / Master / MBBS / BE in relevant discipline',
    ageLimit: '20 - 35 Years (General 5 Years relaxation applicable)',
    lastDate: 'Monthly Consolidated Advertisements',
    isUrgent: false,
    applyUrl: 'https://fpsc.gov.pk',
    officialPortal: 'FPSC Official Portal',
    description: 'FPSC announces monthly general recruitment for Federal Inspector, Assistant Director, Secondary School Teacher (SST), Trained Graduate Teacher (TGT), and Lecturer jobs in Islamabad and federal territories.',
    criteriaList: [
      'All Pakistan Domicile holders eligible (Punjab, Sindh, KPK, Balochistan, AJK, GB).',
      'Graduate or Post-Graduate degree from HEC recognized university.',
      'Departmental Permission Certificate (DPC) required for existing civil servants.',
      'Written test followed by shorthand/typewriting (if applicable) and interview.'
    ],
    howToApplySteps: [
      'Open fpsc.gov.pk and click "Apply Online" for General Recruitment.',
      'Generate PSID payment slip for fee payment via 1Link / ATM / JazzCash / EasyPaisa.',
      'Fee structure: BS-16/17 (PKR 300), BS-18 (PKR 750), BS-19 (PKR 1200).',
      'Enter PSID payment details and complete personal & academic fields.',
      'Upload recent photograph (under 30KB) and submit form.'
    ],
    requiredDocuments: [
      'Valid CNIC & Domicile',
      'Educational Degrees (Matric to Graduation/Master)',
      '1Link PSID Fee Receipt',
      'NOC / DPC for Government Servants'
    ]
  },
  {
    id: 'job-5',
    title: 'NTS / OTS / PTS School Educator & Computer Teacher Jobs',
    department: 'National Testing Service (NTS) / Elementary Education Departments',
    region: 'Punjab',
    category: 'Educators / Teaching',
    vacancies: '2,500+ Posts',
    payScale: 'BS-14 to BS-16',
    qualification: 'BS Computer Science / IT / B.Ed / Graduation',
    ageLimit: '18 - 35 Years',
    lastDate: 'Upcoming Schedule 2026',
    isUrgent: false,
    applyUrl: 'https://nts.org.pk',
    officialPortal: 'National Testing Service (NTS)',
    description: 'Educator testing services recruitment for Computer Teachers, IT Lab Incharges, and Elementary School Educators across Punjab and KPK district schools.',
    criteriaList: [
      'BS (CS), BS (IT), MCS, or Graduation with Diploma in Computer Science.',
      'Minimum 50% score required in NTS screening test for interview qualification.',
      'District wise seat allocation according to domicile.'
    ],
    howToApplySteps: [
      'Visit portal.nts.org.pk and sign up.',
      'Select the active project name from the job portal list.',
      'Fill out the online application form accurately.',
      'Download 1Link Fee Challan and pay at any bank branch or online banking.',
      'No need to send hard copies unless specified in job ad.'
    ],
    requiredDocuments: [
      'CNIC & Domicile',
      'BS CS / Graduation Transcripts',
      'NTS Fee Deposit Slip'
    ]
  },
  {
    id: 'job-6',
    title: 'Punjab Police Sub-Inspector (SI BS-14) & Constable Jobs',
    department: 'Punjab Police Department, Government of Punjab',
    region: 'Punjab',
    category: 'Punjab (PPSC)',
    vacancies: '1,500+ Posts',
    payScale: 'BS-07 (Constable) | BS-14 (Sub-Inspector)',
    qualification: 'Matric (Constable) | Graduation BA / BSc / BS (Sub-Inspector)',
    ageLimit: '18 - 25 Years (Constable) | 20 - 28 Years (SI)',
    lastDate: 'Active Batch 2026',
    isUrgent: true,
    applyUrl: 'https://punjabpolice.gov.pk',
    officialPortal: 'Punjab Police Official Portal',
    description: 'Punjab Police announces recruitment for Constables, Lady Constables, Driver Constables, and PPSC Sub-Inspectors across all Punjab districts.',
    criteriaList: [
      'Punjab Domicile mandatory for the applying district.',
      'Physical Standards: Height 5 ft 7 in (Male), 5 ft 2 in (Female). Chest 33x34.5 in (Male).',
      'Physical Running Test: 1.6 KM in 7 minutes (Male), 1.6 KM in 10 minutes (Female).',
      'Written test conducted by PPSC for Sub-Inspector posts.'
    ],
    howToApplySteps: [
      'Download application form from punjabpolice.gov.pk or PPSC portal for SI.',
      'Fill in personal, physical height/chest, and educational details.',
      'Attach attested copies of CNIC, Domicile, Character Certificate, and Educational Certificates.',
      'Submit physical application form along with PKR 500 fee at District Police Lines.',
      'For SI BS-14, apply online via ppsc.gop.pk.'
    ],
    requiredDocuments: [
      'Punjab Domicile Certificate',
      'Matric / Intermediate / Graduation Mark Sheets',
      'CNIC & 8 Passport Photographs',
      'Character Certificate from Union Council / School Principal'
    ]
  },
  {
    id: 'job-7',
    title: 'Rescue 1122 Emergency Officer & Emergency Medical Technician (EMT)',
    department: 'Punjab Emergency Service Department (Rescue 1122)',
    region: 'Punjab',
    category: 'General Gov',
    vacancies: '850+ Posts',
    payScale: 'BS-11 to BS-16',
    qualification: 'F.Sc Pre-Medical (EMT) / MBBS / B.Sc Nursing / DPT',
    ageLimit: '20 - 30 Years',
    lastDate: 'Upcoming Phase 2026',
    isUrgent: false,
    applyUrl: 'https://rescue.gov.pk',
    officialPortal: 'Rescue 1122 Punjab Portal',
    description: 'Rescue 1122 Punjab invites applications for Emergency Medical Technicians (EMT), Rescue Drivers, Computer Telephone Operators (CTO), and Station House Officers across all Punjab districts.',
    criteriaList: [
      'F.Sc Pre-Medical required for EMT positions.',
      'Must pass physical screening test (Running, Sit-ups, Push-ups) conducted by PTS / NTS.',
      'Selected candidates undergo 6-month specialized physical & medical training at Emergency Services Academy Lahore.'
    ],
    howToApplySteps: [
      'Visit the testing agency portal (pts.org.pk or rescue.gov.pk).',
      'Fill out online candidate registration profile.',
      'Deposit fee challan at designated bank.',
      'Submit form and download Roll Number Slip for physical test.'
    ],
    requiredDocuments: [
      'CNIC & Punjab Domicile',
      'F.Sc Pre-Medical / Graduation Certificate',
      '3 Passport Size Photographs'
    ]
  },
  {
    id: 'job-8',
    title: 'PPSC Agriculture Officer & Soil Conservationist (BS-17) Jobs',
    department: 'Agriculture Department, Government of Punjab',
    region: 'Punjab',
    category: 'Punjab (PPSC)',
    vacancies: '320 Posts',
    payScale: 'BS-17 Regular',
    qualification: 'B.Sc (Hons) Agriculture / M.Sc Agriculture (CGPA 2.5/4.0)',
    ageLimit: '21 - 35 Years (Male) | 21 - 38 Years (Female)',
    lastDate: 'September 2026',
    isUrgent: false,
    applyUrl: 'https://ppsc.gop.pk',
    officialPortal: 'PPSC Portal',
    description: 'PPSC announces Agriculture Officer (BS-17) vacancies in Punjab Agriculture Extension Wing for Agronomy, Entomology, Horticulture, and Plant Pathology graduates.',
    criteriaList: [
      'B.Sc (Hons) Agriculture degree from HEC recognized university.',
      'Punjab Domicile holder.',
      'PPSC written MCQ test (80% qualification subject + 20% General Knowledge).'
    ],
    howToApplySteps: [
      'Apply online via ppsc.gop.pk.',
      'Pay 1Link PSID fee PKR 600.',
      'Fill academic CGPA and upload photos.',
      'Submit before closing date.'
    ],
    requiredDocuments: [
      'B.Sc Agriculture Degree & Transcript',
      'Domicile & CNIC',
      'PPSC Fee Receipt'
    ]
  }
];
