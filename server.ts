import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "Educare Help Desk - Allama Iqbal Open University Portal",
    contact: "03451291610",
    time: new Date().toISOString()
  });
});

// Inquiry Submission Endpoint
app.post("/api/inquiry", (req, res) => {
  const { studentName, phone, programLevel, courseCode, serviceNeeded, message } = req.body || {};
  
  if (!studentName || !phone) {
    return res.status(400).json({ error: "Student name and phone number are required." });
  }

  const text = `Hello Educare Help Desk (03451291610),\nMy name is ${studentName}.\nPhone: ${phone}\nProgram: ${programLevel || 'General'}\nCourse Code: ${courseCode || 'N/A'}\nService Needed: ${serviceNeeded || 'General Help'}\nMessage: ${message || 'I need help regarding AIOU.'}`;
  const whatsappUrl = `https://wa.me/923451291610?text=${encodeURIComponent(text)}`;

  return res.json({
    success: true,
    message: "Inquiry received successfully! Redirecting to Educare WhatsApp desk.",
    whatsappUrl,
    inquiryData: { studentName, phone, programLevel, courseCode, serviceNeeded, message }
  });
});

// Fallback curated news items when API quota is reached
const FALLBACK_AIOU_NEWS = [
  {
    id: 'aiou-fallback-1',
    headline: 'AIOU Autumn 2026 Admissions Open for B.Ed, BS, MA & Post-Graduate Programs',
    category: 'Admission',
    tagText: 'ADMISSION 2026',
    date: 'August 2026',
    detail: 'Allama Iqbal Open University Islamabad has officially opened Autumn 2026 online admissions for B.Ed (1.5, 2.5 & 4 Year), BS 4-Year programs, MA, M.Sc, and Postgraduate diplomas across Pakistan. Online application forms and fee challans are available on CMS/OAS portal.',
    isUrgent: true,
    linkUrl: 'https://aiou.edu.pk'
  },
  {
    id: 'aiou-fallback-2',
    headline: 'Autumn 2026 Assignment Submission Deadlines & Tutor Allocation List Released',
    category: 'Deadline',
    tagText: 'DEADLINE ALERT',
    date: 'August 2026',
    detail: 'AIOU has updated student tutor allocations on CMS Portal. Matric, FA, BA, B.Ed, and BS students are advised to check tutor details and upload soft copies of assignments on AAGHI LMS or dispatch hard copies before the official deadline.',
    isUrgent: true,
    linkUrl: 'https://aiou.edu.pk'
  },
  {
    id: 'aiou-fallback-3',
    headline: 'Online LMS Workshop Schedule & Microsoft Teams Credentials Issued',
    category: 'Workshop',
    tagText: 'LMS WORKSHOP',
    date: 'August 2026',
    detail: 'Online workshops for B.Ed, BS, and Master level courses are underway on AAGHI LMS via Microsoft Teams. Students are instructed to check their workshop date-sheets and log in daily to maintain mandatory attendance.',
    isUrgent: false,
    linkUrl: 'https://lms.aiou.edu.pk'
  },
  {
    id: 'aiou-fallback-4',
    headline: 'AIOU Exam Date Sheet & Roll Number Slips Released on CMS Portal',
    category: 'HelpDesk',
    tagText: 'EXAM ALERT',
    date: 'August 2026',
    detail: 'Final examination date-sheets and roll number slips for Spring/Autumn semesters have been uploaded on student CMS portals. Contact Educare Help Desk at 03451291610 for roll number slip assistance.',
    isUrgent: true,
    linkUrl: 'https://aiou.edu.pk'
  },
  {
    id: 'aiou-fallback-5',
    headline: 'Part-Time Tutor & Workshop Resource Person Enrollment Drive 2026',
    category: 'Admission',
    tagText: 'TUTOR JOBS',
    date: 'August 2026',
    detail: 'AIOU invites applications from eligible teachers and scholars across Pakistan for tutor enrollment on the Aaghi Tutor Portal (tutor.aiou.edu.pk). Minimum M.Phil / Master degree required.',
    isUrgent: false,
    linkUrl: 'https://tutor.aiou.edu.pk'
  }
];

// In-memory news cache (15 minutes)
let newsCache: {
  alerts: any[];
  searchSources: any[];
  timestamp: number;
} | null = null;

const CACHE_DURATION_MS = 15 * 60 * 1000;

// Gemini AI Assignment Solver & Study Assistant Route
app.post("/api/ai/solve", async (req, res) => {
  try {
    const { prompt, courseCode, programLevel, mode } = req.body || {};

    if (!prompt) {
      return res.status(400).json({ error: "Prompt / question is required." });
    }

    const systemInstruction = `You are the Expert Educational Tutor and Academic Counselor for Educare Help Desk (03451291610), specializing in Allama Iqbal Open University (AIOU) curriculum from Matric to PhD level.
Your goal is to provide accurate, well-structured, student-friendly, and comprehensive answers for AIOU assignments, past paper questions, course material explanations, and admission guidance.

Guidelines:
1. Provide structured, step-by-step answers suitable for AIOU assignment standards. Use bold headings, bullet points, numbered lists, and clear examples.
2. If asked about course codes (e.g. 8601, 8611, 247, 1423, 411, 5401), reference the specific subject matter for AIOU.
3. For math or science questions, show full step-by-step working out.
4. Keep the tone encouraging, respectful, academic, and clear.
5. Conclude with a helpful note: "Need further solved assignments or personalized help? Contact Educare Help Desk at 03451291610."`;

    const userPrompt = `Student Program Level: ${programLevel || 'Not specified'}
Course Code: ${courseCode || 'General'}
Task Type: ${mode || 'Assignment Help'}
Question/Prompt:
${prompt}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const answer = response.text || "Sorry, no solution could be generated at this time.";

    return res.json({
      success: true,
      answer,
      courseCode,
      programLevel
    });
  } catch (err: any) {
    const isRateLimit = err?.status === 429 || err?.message?.includes('429') || err?.message?.includes('quota');
    if (!isRateLimit) {
      console.error("Gemini API Error in /api/ai/solve:", err?.message ? err.message.slice(0, 120) : err);
    }

    if (err?.status === 429 || err?.message?.includes('429') || err?.message?.includes('quota')) {
      return res.json({
        success: true,
        answer: "⚠️ **High Server Demand Notice**:\n\nOur AI tutor service is currently experiencing high server volume. Please try again in a few moments.\n\n📱 **Need Instant Solved Assignments?**\nContact our human academic expert team directly at **Educare Help Desk (WhatsApp: 03451291610)** for verified PDF solved assignments, keybooks, and course guidance!",
        isQuotaNotice: true
      });
    }

    return res.status(500).json({
      error: "Failed to process AI query.",
      details: err?.message || "Unknown error"
    });
  }
});

// Live AIOU News & Exam Alerts Endpoint via Gemini + Google Search Grounding
app.get("/api/news/latest", async (req, res) => {
  // Return cached data if fresh
  if (newsCache && (Date.now() - newsCache.timestamp < CACHE_DURATION_MS)) {
    return res.json({
      success: true,
      alerts: newsCache.alerts,
      searchSources: newsCache.searchSources,
      cached: true,
      timestamp: new Date(newsCache.timestamp).toISOString()
    });
  }

  try {
    const prompt = `Find the latest official announcements, exam date sheets, admission deadlines, result alerts, tutor allocations, and LMS workshop schedules from Allama Iqbal Open University (AIOU) Islamabad for 2026.
Return 5 to 6 recent, accurate, and official news items or exam alerts.
Return ONLY a valid JSON array of objects with these exact properties:
- "id": string (unique identifier like "aiou-news-1")
- "headline": string (concise, clear headline under 80 characters)
- "category": string (one of: "Admission", "Deadline", "Workshop", "LMS", "HelpDesk")
- "tagText": string (e.g. "EXAM ALERT", "ADMISSION 2026", "LMS WORKSHOP", "TUTOR UPDATE", "DEADLINE")
- "date": string (e.g. "August 2026" or "Latest Official")
- "detail": string (2-3 sentences explaining the announcement, requirements, or dates)
- "isUrgent": boolean
- "linkUrl": string (URL if available from search grounding, default to "https://aiou.edu.pk")`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
      }
    });

    const jsonText = response.text || "[]";
    let alerts = [];
    try {
      alerts = JSON.parse(jsonText);
    } catch (parseErr) {
      console.warn("Failed to parse JSON from Gemini news grounding response:", parseErr);
    }

    if (!Array.isArray(alerts) || alerts.length === 0) {
      alerts = FALLBACK_AIOU_NEWS;
    }

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const searchSources = groundingChunks
      .filter((c: any) => c.web?.uri && c.web?.title)
      .map((c: any) => ({ title: c.web.title, uri: c.web.uri }));

    // Cache the successful result
    newsCache = {
      alerts,
      searchSources: searchSources.length > 0 ? searchSources : [{ title: "AIOU Official Portal", uri: "https://aiou.edu.pk" }],
      timestamp: Date.now()
    };

    return res.json({
      success: true,
      alerts,
      searchSources: newsCache.searchSources,
      cached: false,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    const isRateLimit = err?.status === 429 || err?.message?.includes('429') || err?.message?.includes('quota');
    if (!isRateLimit) {
      console.warn("Notice: Gemini Search API notice in /api/news/latest:", err?.message ? err.message.slice(0, 120) : "Search unavailable");
    }

    // Cache the fallback result for 15 mins so we don't repeatedly hit rate limits
    newsCache = {
      alerts: FALLBACK_AIOU_NEWS,
      searchSources: [{ title: "AIOU Official Portal", uri: "https://aiou.edu.pk" }],
      timestamp: Date.now()
    };

    console.log("[News API] Serving curated fallback AIOU news (API unavailable or rate limited).");

    return res.json({
      success: true,
      alerts: FALLBACK_AIOU_NEWS,
      searchSources: newsCache.searchSources,
      isFallback: true,
      timestamp: new Date().toISOString()
    });
  }
});

// Start Vite in dev mode or serve static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Educare Help Desk AIOU Server running on http://localhost:${PORT}`);
  });
}

startServer();
