import { ProgramInfo, SolvedAssignmentItem, PortalLink, AiouNewsAlert, FaqItem } from '../types';

export const HELPDESK_PHONE = '03451291610';
export const HELPDESK_WHATSAPP = '923451291610';
export const HELPDESK_NAME = 'Educare Help Desk';

export const AIOU_NEWS_ALERTS: AiouNewsAlert[] = [
  {
    id: 'news-bise-1',
    category: 'Admission',
    tagText: 'BISE SARGODHA 2026',
    headline: 'BISE Sargodha Matric & Intermediate Admissions & Result Portal Live',
    detail: 'BISE Sargodha online admission forms, gazette result search, degree & DMC verification for IBCC/Jobs, and downloadable NOC/migration forms are now available on the Educare portal.',
    date: 'August 2026',
    isUrgent: true,
    actionTab: 'bise-sargodha',
    linkUrl: 'https://bisesargodha.edu.pk'
  },
  {
    id: 'news-1',
    category: 'Admission',
    tagText: 'AUTUMN 2026 ADMISSIONS',
    headline: 'Autumn 2026 Admissions Open for ODL & Face-to-Face Programs!',
    detail: 'Allama Iqbal Open University (AIOU) Autumn 2026 admissions are active for Matric, FA, BA, BS (4-Year), B.Ed (1.5, 2.5, 4-Year), M.Phil, and Ph.D. Apply online on the official AIOU OAS portal or contact Educare Help Desk (03451291610) for assistance.',
    date: 'August 2026',
    isUrgent: true,
    actionTab: 'fee-calculator',
    linkUrl: 'https://oas.aiou.edu.pk'
  },
  {
    id: 'news-2',
    category: 'Deadline',
    tagText: 'ASSIGNMENT DEADLINE',
    headline: 'Upcoming AIOU Assignment Submission Deadlines Schedule',
    detail: 'B.Ed Assignment No. 2 deadline is August 15, 2026. Matric / FA / BA Assignment No. 4 deadline is August 20, 2026. Upload typed single PDF files (under 5MB) on AAGHI LMS before the portal locks automatically.',
    date: 'August 2026',
    isUrgent: true,
    actionTab: 'solved-assignments',
    linkUrl: 'https://aaghi.aiou.edu.pk'
  },
  {
    id: 'news-3',
    category: 'Workshop',
    tagText: 'AAGHI LMS WORKSHOPS',
    headline: 'Mandatory Online Workshops Active on Microsoft Teams',
    detail: 'Online workshops for BS, B.Ed, Master, MPhil & PhD programs are currently running. Minimum 70% online attendance on Microsoft Teams via AAGHI portal is compulsory to qualify for semester examinations.',
    date: 'August 2026',
    isUrgent: false,
    actionTab: 'portals',
    linkUrl: 'https://aaghi.aiou.edu.pk'
  },
  {
    id: 'news-4',
    category: 'HelpDesk',
    tagText: 'SOLVED ASSIGNMENTS 03451291610',
    headline: 'Educare Help Desk: Instant Solved Assignments & Fee Challan Help',
    detail: 'Get 100% verified solved assignments (8601, 8611, 247, 386, 1423, 5401), roll number slip assistance, CMS password reset, and book dispatch tracking by contacting Educare Desk at 03451291610.',
    date: 'August 2026',
    isUrgent: true,
    actionTab: 'contact'
  },
  {
    id: 'news-5',
    category: 'LMS',
    tagText: 'CMS & LMS PORTALS',
    headline: 'Check CMS Portal Enrollment & Tutor Details Online',
    detail: 'Student enrollment, semester results, course registration, and assigned tutor details are available on AIOU CMS (enrollment.aiou.edu.pk) and Tutor Portal.',
    date: 'August 2026',
    isUrgent: false,
    actionTab: 'portals',
    linkUrl: 'https://enrollment.aiou.edu.pk'
  }
];

export const AIOU_PROGRAMS: ProgramInfo[] = [
  {
    id: 'matric',
    level: 'Matric',
    title: 'Secondary School Certificate (SSC / Matric)',
    duration: '2 Years',
    semesters: 4,
    eligibility: 'Middle Pass (8th Class Result Card / School Leaving Certificate) or equivalent',
    estimatedFeePerSemester: 5500,
    popularCodes: ['201', '202', '204', '221', '247'],
    description: 'AIOU Matriculation offers general SSC, Dars-e-Nizami (Sanavia Amma), and Open Schooling for students seeking formal secondary education through distance learning.',
    coursesSample: [
      { code: '201', name: 'Islamiat (Compulsory)', credits: 3, type: 'Compulsory' },
      { code: '202', name: 'Pakistan Studies', credits: 3, type: 'Compulsory' },
      { code: '204', name: 'Urdu', credits: 6, type: 'Compulsory' },
      { code: '221', name: 'English-I', credits: 6, type: 'Compulsory' },
      { code: '247', name: 'General Mathematics', credits: 6, type: 'Elective' }
    ]
  },
  {
    id: 'fa',
    level: 'FA / Intermediate',
    title: 'Higher Secondary School Certificate (HSSC / FA / I.Com)',
    duration: '2 Years',
    semesters: 4,
    eligibility: 'Matric / SSC Pass certificate from any recognized board',
    estimatedFeePerSemester: 7200,
    popularCodes: ['316', '317', '386', '387', '411', '416'],
    description: 'Intermediate programs in Arts, General Science, Commerce (I.Com), and Dars-e-Nizami (Sanavia Khasa) tailored for distance education learners across Pakistan.',
    coursesSample: [
      { code: '316', name: 'Islamiat (Compulsory)', credits: 3, type: 'Compulsory' },
      { code: '317', name: 'Pakistan Studies', credits: 3, type: 'Compulsory' },
      { code: '386', name: 'Compulsory English-I', credits: 6, type: 'Compulsory' },
      { code: '411', name: 'Urdu-I', credits: 6, type: 'Compulsory' },
      { code: '416', name: 'Economics-I', credits: 6, type: 'Elective' }
    ]
  },
  {
    id: 'ba-ad',
    level: 'BA / AD',
    title: 'Associate Degree Program (AD / BA Arts & Commerce)',
    duration: '2 Years',
    semesters: 4,
    eligibility: 'FA / F.Sc / I.Com / A-Level or equivalent (min 45% marks)',
    estimatedFeePerSemester: 11500,
    popularCodes: ['411', '416', '417', '419', '1423', '1424', '1429'],
    description: 'Associate Degree in Arts (B.A.), Business Administration, Commerce (B.Com), and Education (A.D. Education). Ideal for employment pathway.',
    coursesSample: [
      { code: '1423', name: 'Compulsory English-I', credits: 6, type: 'Compulsory' },
      { code: '1424', name: 'Compulsory English-II', credits: 6, type: 'Compulsory' },
      { code: '1429', name: 'Business Mathematics', credits: 6, type: 'Elective' },
      { code: '417', name: 'Pakistan Studies', credits: 3, type: 'Compulsory' },
      { code: '419', name: 'Mass Communication', credits: 6, type: 'Elective' }
    ]
  },
  {
    id: 'bs-4yr',
    level: 'BS (4-Year)',
    title: 'BS Programs (4-Year Undergraduate Degree)',
    duration: '4 Years',
    semesters: 8,
    eligibility: 'Intermediate / FA / F.Sc / ICS with minimum 45% marks',
    estimatedFeePerSemester: 18500,
    popularCodes: ['5401', '5403', '5408', '9401', '9407', '9408', '3400'],
    description: '4-year BS degrees in Computer Science, English, Urdu, Islamic Studies, Mathematics, Physics, Chemistry, Sociology, Pak Studies, Accounting & Finance.',
    coursesSample: [
      { code: '5401', name: 'Introduction to Programming', credits: 3, type: 'Compulsory' },
      { code: '5403', name: 'Data Structures & Algorithms', credits: 3, type: 'Compulsory' },
      { code: '9401', name: 'Study of Islamic Culture', credits: 3, type: 'Compulsory' },
      { code: '9407', name: 'English Communication Skills', credits: 3, type: 'Compulsory' },
      { code: '9408', name: 'Calculus & Analytical Geometry', credits: 3, type: 'Elective' }
    ]
  },
  {
    id: 'bed',
    level: 'B.Ed',
    title: 'Bachelor of Education (B.Ed 1.5, 2.5 & 4 Years)',
    duration: '1.5 to 4 Years',
    semesters: 3,
    eligibility: 'MA/MSc/BS for B.Ed 1.5yr; BA/BSc for B.Ed 2.5yr; FA/FSc for B.Ed 4yr',
    estimatedFeePerSemester: 21000,
    popularCodes: ['8601', '8602', '8603', '8604', '8605', '8606', '8611'],
    description: 'Professional teacher training recognized nationwide and internationally. Specializations in Early Childhood, Elementary, Secondary, and Higher Education.',
    coursesSample: [
      { code: '8601', name: 'General Methods of Teaching', credits: 3, type: 'Compulsory' },
      { code: '8602', name: 'Educational Assessment & Evaluation', credits: 3, type: 'Compulsory' },
      { code: '8603', name: 'Curriculum Development', credits: 3, type: 'Compulsory' },
      { code: '8604', name: 'Research Methods in Education', credits: 3, type: 'Compulsory' },
      { code: '8611', name: 'Critical Thinking & Reflective Practices', credits: 3, type: 'Compulsory' }
    ]
  },
  {
    id: 'master-pgd',
    level: 'Master / PGD',
    title: 'Master Degree & Post Graduate Diplomas (MA/MSc/PGD)',
    duration: '2 Years',
    semesters: 4,
    eligibility: 'Bachelor Degree (BA / BSc / B.Com) with minimum 2nd division',
    estimatedFeePerSemester: 22500,
    popularCodes: ['6501', '6502', '6551', '6553', '5601', '5602'],
    description: 'Postgraduate education in MA Education, MA Islamic Studies, MSc Sociology, MSc Mass Communication, PGD Criminology, PGD Computer Science.',
    coursesSample: [
      { code: '6501', name: 'Educational Psychology', credits: 3, type: 'Compulsory' },
      { code: '6502', name: 'Foundations of Education', credits: 3, type: 'Compulsory' },
      { code: '6551', name: 'Quranic Sciences', credits: 3, type: 'Compulsory' },
      { code: '5601', name: 'Advanced Sociology', credits: 3, type: 'Compulsory' }
    ]
  },
  {
    id: 'mphil-ms',
    level: 'M.Phil / MS',
    title: 'M.Phil / MS Programs (Research Master Degree)',
    duration: '2 Years',
    semesters: 4,
    eligibility: '16 Years of Education (BS 4-Year / MA / MSc) with min 2.5 CGPA + GAT Test',
    estimatedFeePerSemester: 32000,
    popularCodes: ['7701', '7702', '7705', '7710'],
    description: 'Higher research programs in Education, Arabic, Urdu, Physics, Chemistry, History, Islamic Studies with coursework and thesis research.',
    coursesSample: [
      { code: '7701', name: 'Advanced Quantitative Research Methods', credits: 3, type: 'Compulsory' },
      { code: '7702', name: 'Qualitative Research Techniques', credits: 3, type: 'Compulsory' },
      { code: '7705', name: 'Philosophical Perspectives in Education', credits: 3, type: 'Compulsory' }
    ]
  },
  {
    id: 'phd',
    level: 'Ph.D.',
    title: 'Doctor of Philosophy (Ph.D. Programs)',
    duration: '3 to 5 Years',
    semesters: 6,
    eligibility: 'M.Phil / MS (18 Years Education) min 3.0 CGPA + Subject GRE / GAT Subject + Interview',
    estimatedFeePerSemester: 42000,
    popularCodes: ['9901', '9902', '9910'],
    description: 'Doctoral research degree program for scholars, university faculty, and researchers across science, humanities, Islamic studies, and educational leadership.',
    coursesSample: [
      { code: '9901', name: 'Advanced Academic Writing & Research Ethics', credits: 3, type: 'Compulsory' },
      { code: '9902', name: 'Doctoral Seminar & Literature Review', credits: 3, type: 'Compulsory' }
    ]
  }
];

export const SOLVED_ASSIGNMENTS: SolvedAssignmentItem[] = [
  {
    id: 'asg-8601',
    programLevel: 'B.Ed',
    courseCode: '8601',
    courseTitle: 'General Methods of Teaching',
    semester: 'Autumn 2025 / Spring 2026',
    assignmentNumber: 1,
    academicYear: '2025-2026',
    downloadCount: 1420,
    isPopular: true,
    summary: 'Comprehensive solved assignment covering teaching strategies, lesson planning, student engagement techniques, and classroom management.',
    sampleQuestions: [
      {
        question: 'Q1: Define teaching methods. Discuss the major principles of effective teaching with examples.',
        briefAnswer: 'Teaching methods represent structured principles and strategies used by educators to enable student learning. Key principles include active participation, individual difference accommodation, clear objective setting, and reflective feedback.'
      },
      {
        question: 'Q2: Explain the steps involved in designing an effective lesson plan for secondary level.',
        briefAnswer: 'Lesson planning steps: 1. Identify learning objectives (Bloom taxonomy), 2. Anticipate learner needs, 3. Design instructional activities, 4. Plan assessment methods, 5. Allocate time and resources effectively.'
      }
    ]
  },
  {
    id: 'asg-8611',
    programLevel: 'B.Ed',
    courseCode: '8611',
    courseTitle: 'Critical Thinking & Reflective Practices',
    semester: 'Autumn 2025 / Spring 2026',
    assignmentNumber: 1,
    academicYear: '2025-2026',
    downloadCount: 980,
    isPopular: true,
    summary: 'Solved questions on Gibbs reflective cycle, critical reflection in teaching, action research, and problem-solving skills in education.',
    sampleQuestions: [
      {
        question: 'Q1: What is reflective practice? Detail Gibbs Reflective Cycle with a classroom scenario.',
        briefAnswer: 'Reflective practice is learning through examining one’s own experience. Gibbs Cycle consists of 6 stages: Description, Feelings, Evaluation, Analysis, Conclusion, and Action Plan.'
      }
    ]
  },
  {
    id: 'asg-247',
    programLevel: 'Matric',
    courseCode: '247',
    courseTitle: 'General Mathematics',
    semester: 'Autumn 2025',
    assignmentNumber: 1,
    academicYear: '2025-2026',
    downloadCount: 2350,
    isPopular: true,
    summary: 'Full step-by-step solved mathematical equations, percentage, ratio, proportion, and basic algebraic problems for Matric students.',
    sampleQuestions: [
      {
        question: 'Q1: Calculate the compound interest on PKR 50,000 at 8% per annum for 3 years.',
        briefAnswer: 'Formula: A = P(1 + r/100)^n. A = 50000(1.08)^3 = PKR 62,985.60. Interest = 62,985.60 - 50,000 = PKR 12,985.60.'
      }
    ]
  },
  {
    id: 'asg-386',
    programLevel: 'FA / Intermediate',
    courseCode: '386',
    courseTitle: 'Compulsory English-I',
    semester: 'Autumn 2025',
    assignmentNumber: 1,
    academicYear: '2025-2026',
    downloadCount: 1890,
    isPopular: true,
    summary: 'Grammar exercises, formal essay writing, comprehension passages, and letter writing solutions formatted according to AIOU examination guidelines.',
    sampleQuestions: [
      {
        question: 'Q1: Write a formal letter to the AIOU Regional Director requesting book delivery status.',
        briefAnswer: 'Formal letter template included with proper salutation, student credentials (Roll No, Reg No), polite query body, and request for tracking updates.'
      }
    ]
  },
  {
    id: 'asg-1423',
    programLevel: 'BA / AD',
    courseCode: '1423',
    courseTitle: 'Compulsory English-I',
    semester: 'Autumn 2025 / Spring 2026',
    assignmentNumber: 1,
    academicYear: '2025-2026',
    downloadCount: 3100,
    isPopular: true,
    summary: 'Higher English grammar, précis writing, academic paragraph development, reading comprehension, and business vocabulary solved questions.',
    sampleQuestions: [
      {
        question: 'Q1: Explain the difference between skimming and scanning in reading skills.',
        briefAnswer: 'Skimming is reading rapidly to get the general gist of a text, whereas scanning is searching for specific facts or key words without reading the entire document.'
      }
    ]
  },
  {
    id: 'asg-5401',
    programLevel: 'BS (4-Year)',
    courseCode: '5401',
    courseTitle: 'Introduction to Programming (C++/Python)',
    semester: 'Spring 2026',
    assignmentNumber: 1,
    academicYear: '2026',
    downloadCount: 1120,
    isPopular: false,
    summary: 'Complete solved code examples, loops, control structures, functions, array manipulations, and problem-solving assignments for BS Computer Science.',
    sampleQuestions: [
      {
        question: 'Q1: Write a program to find the factorial of a given integer using recursion.',
        briefAnswer: 'Includes C++ and Python implementation with base case check (n <= 1 return 1) and recursive step n * factorial(n - 1).'
      }
    ]
  },
  {
    id: 'asg-6501',
    programLevel: 'Master / PGD',
    courseCode: '6501',
    courseTitle: 'Educational Psychology',
    semester: 'Autumn 2025',
    assignmentNumber: 1,
    academicYear: '2025-2026',
    downloadCount: 840,
    isPopular: false,
    summary: 'Deep analysis of Piaget cognitive stages, Vygotsky social constructivism, motivation theories, and individual difference in adult learning.',
    sampleQuestions: [
      {
        question: 'Q1: Compare Piaget cognitive development stages with Vygotsky socio-cultural theory.',
        briefAnswer: 'Piaget emphasizes self-directed cognitive development through stages, while Vygotsky stresses the social environment, Zone of Proximal Development (ZPD), and scaffolding.'
      }
    ]
  }
];

export const PORTAL_LINKS: PortalLink[] = [
  {
    title: 'AIOU CMS Portal (Enrollment)',
    description: 'Check roll number, enrollment status, course registration, semester results, and fee slips.',
    url: 'https://enrollment.aiou.edu.pk',
    iconName: 'UserCheck',
    badge: 'Official Portal'
  },
  {
    title: 'AAGHI LMS Portal',
    description: 'Join online workshops, submit digital assignments, access Microsoft Teams sessions, and view tutor feedback.',
    url: 'https://aaghi.aiou.edu.pk',
    iconName: 'GraduationCap',
    badge: 'Online Workshops'
  },
  {
    title: 'Book Tracking System',
    description: 'Track postal dispatch of physical study books & dispatch status by CNIC or Roll Number.',
    url: 'https://books.aiou.edu.pk',
    iconName: 'PackageCheck',
    badge: 'Postal Track'
  },
  {
    title: 'Tutor Information System',
    description: 'Find your assigned semester tutor details, mailing addresses, and phone numbers.',
    url: 'https://tutor.aiou.edu.pk',
    iconName: 'Users',
    badge: 'Tutor Info'
  },
  {
    title: 'AIOU Admission Online Portal',
    description: 'Apply for new admissions (Matric, FA, BS, B.Ed, MPhil, PhD) and download provisional admission letter.',
    url: 'https://oas.aiou.edu.pk',
    iconName: 'FileCheck2',
    badge: 'New Admission'
  },
  {
    title: 'BISE Sargodha Official Portal',
    description: 'Check SSC/HSSC results, online admission, certificate verification, migration NOC, and roll number slips.',
    url: 'https://bisesargodha.edu.pk',
    iconName: 'Building',
    badge: 'Punjab Board'
  },
  {
    title: 'Result Card & Degree Verification',
    description: 'Apply for original degree certificate, duplicate result card, migration certificate, and correction desk.',
    url: 'https://degree.aiou.edu.pk',
    iconName: 'Award',
    badge: 'Degree Desk'
  }
];

export const AIOU_FAQS: (FaqItem & { q?: string; a?: string })[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'How do I apply for new admission at Allama Iqbal Open University (AIOU)?',
    answer: 'Admissions open twice a year: Spring (Jan–March) and Autumn (July–Sept). You can apply online at the AIOU OAS portal (oas.aiou.edu.pk). Fill out the profile, select your desired program (Matric, FA, BA, BS, B.Ed, MPhil, PhD), upload attested documents, generate the fee challan, and pay at designated banks or via JazzCash/EasyPaisa. Educare Help Desk (03451291610) can assist with form filling.',
    tags: ['Admission', 'OAS Portal', 'Challan', 'New Student'],
    helpfulCount: 142,
    q: 'How do I apply for new admission at Allama Iqbal Open University (AIOU)?',
    a: 'Admissions open twice a year: Spring (Jan–March) and Autumn (July–Sept). You can apply online at the AIOU OAS portal (oas.aiou.edu.pk). Fill out the profile, select your desired program, upload attested documents, generate the fee challan, and pay via JazzCash/EasyPaisa or banks.'
  },
  {
    id: 'faq-2',
    category: 'Admissions',
    question: 'What documents are required for AIOU online admission form submission?',
    answer: 'Requirements vary by level: Matric requires 8th pass certificate/school leaving certificate + CNIC/B-Form; FA requires Matric certificate & DMC; BA/BS requires Intermediate certificate; B.Ed requires previous degrees (BA/MA/BS DMCs); MPhil/PhD requires 16/18 years degree transcripts + GAT score card. All copies must be attested by a Grade 17+ officer.',
    tags: ['Documents', 'Attestation', 'Eligibility'],
    helpfulCount: 98,
    q: 'What documents are required for AIOU online admission form submission?',
    a: 'Requirements vary by level: Matric requires 8th pass certificate; FA requires Matric certificate; BA/BS requires Intermediate certificate; B.Ed/MPhil requires previous degree DMCs. All copies must be attested by a Grade 17+ officer.'
  },
  {
    id: 'faq-3',
    category: 'Admissions',
    question: 'How can I check my AIOU admission status and confirmation?',
    answer: 'Log in to AIOU OAS or CMS portal using your username and password. Go to "Admission Status" or "My Enrollment". Confirmation SMS is sent by AIOU within 4 to 6 weeks of fee payment. If delayed, contact Educare Help Desk (03451291610) with your fee challan number for tracking.',
    tags: ['Status', 'Confirmation SMS', 'Tracking'],
    helpfulCount: 115,
    q: 'How can I check my AIOU admission status and confirmation?',
    a: 'Log in to AIOU OAS/CMS portal using your credentials. Go to "Admission Status". SMS notification is sent within 4-6 weeks of fee payment.'
  },
  {
    id: 'faq-4',
    category: 'Exams',
    question: 'When are AIOU final examinations conducted and how do I download the Date Sheet?',
    answer: 'Final exams for Spring semester are typically held in September–October, and Autumn semester exams are held in March–April. Official Date Sheets are released on the AIOU portal 3 weeks before exams. You can view date sheets and download Roll Number Slips directly from CMS (enrollment.aiou.edu.pk).',
    tags: ['Date Sheet', 'Final Exams', 'Roll Number Slip'],
    helpfulCount: 210,
    q: 'When are AIOU final examinations conducted and how do I download the Date Sheet?',
    a: 'Spring exams are in Sept–Oct; Autumn exams are in March–April. Date Sheets and Roll Number Slips are downloadable from CMS Portal (enrollment.aiou.edu.pk).'
  },
  {
    id: 'faq-5',
    category: 'Exams',
    question: 'What is the passing mark criteria for AIOU exams and assignments?',
    answer: 'For Matric, FA, BA, and BS programs, students must obtain a minimum of 40% marks in final written exams and 40% in assignments separately. For B.Ed, Master, MPhil, and PhD programs, the minimum passing mark threshold is 50%. Both exam and assignment component passes are mandatory to complete a course.',
    tags: ['Passing Marks', 'Grading', 'Criteria'],
    helpfulCount: 185,
    q: 'What is the passing mark criteria for AIOU exams and assignments?',
    a: 'Matric/FA/BA/BS require 40% in exams and assignments separately. B.Ed, Master, MPhil, and PhD require 50% minimum in each component.'
  },
  {
    id: 'faq-6',
    category: 'Assignments',
    question: 'What are the assignment submission deadlines for AIOU semesters?',
    answer: 'Full-credit hour courses require 4 assignments, while half-credit courses require 2 assignments. Deadlines are announced at the start of each semester on the AIOU website. For B.Ed and BS programs, Assignment 1 is due mid-semester (June/November) and Assignment 2 is due towards semester end (August/January).',
    tags: ['Assignment Deadlines', 'Schedule', 'Submission'],
    helpfulCount: 320,
    q: 'What are the assignment submission deadlines for AIOU semesters?',
    a: 'AIOU assigns 2 assignments per 3-credit course. Deadline 1 is mid-semester and Deadline 2 is near semester completion. Check exact dates on Educare Help Desk or AIOU portal.'
  },
  {
    id: 'faq-7',
    category: 'Assignments',
    question: 'How do I submit assignments for Matric/FA/BA vs BS/B.Ed/Master programs?',
    answer: 'For Matric, FA, and BA (Associate Degree) programs, students write physical handwritten assignments and mail them via registered post to their assigned tutor. For BS (4-Year), B.Ed (1.5, 2.5, 4-Year), Master, MPhil, and PhD programs, typed assignments must be uploaded online in PDF format on the AAGHI LMS portal.',
    tags: ['Handwritten', 'LMS Upload', 'Tutor Dispatch'],
    helpfulCount: 275,
    q: 'How do I submit assignments for BA, BS, and B.Ed programs?',
    a: 'Matric, FA, and BA assignments are handwritten and posted to tutors. BS, B.Ed, MPhil, and PhD assignments must be typed and uploaded to AAGHI LMS portal in PDF format.'
  },
  {
    id: 'faq-8',
    category: 'Assignments',
    question: 'What is the maximum file size and format for AAGHI LMS assignment upload?',
    answer: 'AAGHI LMS accepts PDF or DOCX files under 5 MB in size. Ensure your document includes a clean cover page with your Student Name, Roll Number, Student ID, Course Code, Course Title, and Semester details. Educare Help Desk provides an automated Cover Page Generator tool for free.',
    tags: ['File Format', 'PDF Limit', 'Cover Page'],
    helpfulCount: 160,
    q: 'What is the maximum file size and format for LMS assignment submission?',
    a: 'File format must be PDF or DOCX under 5 MB size. Include a complete cover page with your name, ID, and course code.'
  },
  {
    id: 'faq-9',
    category: 'LMS & CMS',
    question: 'How do I log in to AIOU CMS Portal (enrollment.aiou.edu.pk)?',
    answer: 'Your Username is your Student Registration Number or Student ID (e.g. 21PBN04821). Your initial password is sent via SMS upon admission confirmation (often last 4 digits of Student ID + uppercase initials). If you face password lockouts, Educare Help Desk (03451291610) can assist with password resets.',
    tags: ['CMS Portal', 'Login Credentials', 'Password Reset'],
    helpfulCount: 230,
    q: 'How do I log in to AIOU CMS Portal?',
    a: 'Username is your Student ID / Registration No. Password is sent via SMS. Contact Educare Help Desk (03451291610) for login recovery.'
  },
  {
    id: 'faq-10',
    category: 'LMS & CMS',
    question: 'What is the AAGHI LMS Portal and how do I attend online workshops on Microsoft Teams?',
    answer: 'AAGHI LMS (aaghi.aiou.edu.pk) is AIOU digital portal for online workshops and assignment uploads. Log in with your LMS credentials (@aiou.edu.pk email). Workshops take place live via integrated Microsoft Teams. A minimum 70% attendance in live sessions is compulsory to qualify for the course.',
    tags: ['AAGHI LMS', 'Online Workshops', 'Microsoft Teams', 'Attendance'],
    helpfulCount: 195,
    q: 'What is the AAGHI LMS Portal and how do I attend workshops?',
    a: 'Log in to AAGHI LMS using your student email. Join Microsoft Teams workshops according to your schedule. 70%+ attendance is mandatory.'
  },
  {
    id: 'faq-11',
    category: 'LMS & CMS',
    question: 'How do I find my assigned semester tutor details and address?',
    answer: 'Log in to the AIOU CMS Portal (enrollment.aiou.edu.pk), navigate to "Academic Records" > "My Tutors", or visit tutor.aiou.edu.pk. You will find your tutor name, phone number, and postal address for mailing physical assignments.',
    tags: ['Tutor Details', 'Postal Address', 'Academic Records'],
    helpfulCount: 170,
    q: 'How do I find my assigned semester tutor details?',
    a: 'Check "Academic Records" > "My Tutors" in CMS Portal or visit tutor.aiou.edu.pk.'
  },
  {
    id: 'faq-12',
    category: 'General',
    question: 'How does Educare Help Desk (03451291610) assist AIOU students?',
    answer: 'Educare Help Desk is an independent student helpline dedicated to supporting Allama Iqbal Open University learners. We provide verified solved assignments (8601, 8611, 247, 386, 1423, 5401, etc.), AI assignment solver, admission form guidance, fee calculation, CMS/LMS support, past papers, and degree verification guidance.',
    tags: ['Educare Helpline', 'Student Support', '03451291610'],
    helpfulCount: 310,
    q: 'How can Educare Help Desk (03451291610) assist AIOU students?',
    a: 'Educare Help Desk provides complete guidance for AIOU students from Matric to PhD level. We assist with solved assignments, admission forms, fee calculations, CMS/LMS troubleshooting, past papers, and degree procedures.'
  },
  {
    id: 'faq-13',
    category: 'General',
    question: 'Is Educare Help Desk available on WhatsApp for fast response?',
    answer: 'Yes! Educare Help Desk operates a dedicated 24/7 WhatsApp student service at 03451291610 (+923451291610). You can send your course code or query to receive instant assistance, solved PDFs, and fee challan guidance.',
    tags: ['WhatsApp Desk', 'Helpline', 'Instant Support'],
    helpfulCount: 290,
    q: 'How can I contact Educare Help Desk via WhatsApp or Call?',
    a: 'Call or WhatsApp Educare Help Desk at 03451291610 for fast, friendly student support and course solutions.'
  }
];

