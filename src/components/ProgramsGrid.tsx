import React, { useState } from 'react';
import { ProgramLevel, ProgramInfo } from '../types';
import { AIOU_PROGRAMS, HELPDESK_PHONE, HELPDESK_WHATSAPP } from '../data/aiouData';
import { GraduationCap, BookOpen, Clock, Layers, Sparkles, CheckCircle2, Phone, MessageCircle, ArrowRight, ShieldCheck, Briefcase, Building } from 'lucide-react';

interface ProgramsGridProps {
  onSelectProgramForAi: (level: ProgramLevel, code?: string) => void;
  onOpenInquiry: (level?: ProgramLevel) => void;
  setActiveTab: (tab: string) => void;
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({
  onSelectProgramForAi,
  onOpenInquiry,
  setActiveTab
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const levels: (ProgramLevel | 'All')[] = [
    'All',
    'Matric',
    'FA / Intermediate',
    'BA / AD',
    'BS (4-Year)',
    'B.Ed',
    'Master / PGD',
    'M.Phil / MS',
    'Ph.D.'
  ];

  const filteredPrograms = selectedLevel === 'All'
    ? AIOU_PROGRAMS
    : AIOU_PROGRAMS.filter(p => p.level === selectedLevel);

  const whatsappUrl = `https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent("Hello Educare Help Desk, I need assistance regarding AIOU programs.")}`;

  return (
    <div className="space-y-8 pb-12">
      {/* Main Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/50">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-16 w-60 h-60 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Official Educare Help Desk • Call / WhatsApp 03451291610
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif text-amber-100 leading-tight">
            Allama Iqbal Open University <br className="hidden sm:inline" />
            <span className="text-amber-300">Matriculation to Ph.D.</span> Support Portal
          </h1>

          <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            Get instant AI-powered assignment guidance, verified solved assignments, semester fee calculations, assignment cover page generation, and direct helpline support from Educare Help Desk.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${HELPDESK_PHONE}`}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md"
            >
              <Phone className="w-5 h-5 text-slate-950" />
              <span>Call Helpline: {HELPDESK_PHONE}</span>
            </a>

            <button
              onClick={() => setActiveTab('bise-sargodha')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white border border-emerald-400/40 px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md"
            >
              <Building className="w-5 h-5 text-amber-300" />
              <span>BISE Sargodha Portal (Matric/Inter)</span>
            </button>

            <button
              onClick={() => setActiveTab('exam-countdown')}
              className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-amber-300 border border-amber-400/50 px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md"
            >
              <Clock className="w-5 h-5 text-amber-400 animate-pulse" />
              <span>Exam Countdown Timer</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 border border-emerald-500/50 text-white px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => setActiveTab('ai-solver')}
              className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-slate-100 border border-slate-600 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Try AI Assignment Solver</span>
            </button>
          </div>

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Matric, FA & BA Solved Papers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>BS & B.Ed LMS Workshop Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>M.Phil & Ph.D Research Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>AIOU Admission Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Levels Navigation */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">AIOU Academic Programs</h2>
            <p className="text-xs sm:text-sm text-slate-600">Select an academic level to explore courses, fee estimates, and assignment help.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Complete Coverage (Matric to PhD)</span>
          </div>
        </div>

        {/* Level Filters Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedLevel === lvl
                  ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-600/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => {
            const isExpanded = expandedProgram === program.id;
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <span className="bg-emerald-100 text-emerald-900 font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-emerald-200">
                      {program.level}
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                      Est. PKR {program.estimatedFeePerSemester.toLocaleString()} / sem
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors font-serif leading-snug">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {program.description}
                  </p>

                  {/* Program Meta Info */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span><strong>Duration:</strong> {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      <span><strong>Semesters:</strong> {program.semesters}</span>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Eligibility:</span> {program.eligibility}
                  </div>

                  {/* Popular Course Codes Tag */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                      Popular Course Codes:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {program.popularCodes.map((code) => (
                        <button
                          key={code}
                          onClick={() => onSelectProgramForAi(program.level, code)}
                          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-md border border-emerald-200/80 transition-colors flex items-center gap-1"
                          title="Solve with AI"
                        >
                          <span>Code {code}</span>
                          <Sparkles className="w-3 h-3 text-amber-500" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Course Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                      <h4 className="font-bold text-slate-900">Sample Course Curriculum:</h4>
                      <div className="space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        {program.coursesSample.map((course) => (
                          <div key={course.code} className="flex justify-between items-center text-slate-700 py-1 border-b border-slate-200/50 last:border-0">
                            <div>
                              <span className="font-bold text-emerald-800">[{course.code}]</span> {course.name}
                            </div>
                            <span className="text-[10px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                              {course.credits} Cr
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProgramForAi(program.level)}
                      className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>AI Assignment Helper</span>
                    </button>

                    <button
                      onClick={() => setExpandedProgram(isExpanded ? null : program.id)}
                      className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors"
                    >
                      {isExpanded ? 'Hide' : 'Details'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center text-xs pt-1">
                    <button
                      onClick={() => onOpenInquiry(program.level)}
                      className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1"
                    >
                      <span>Inquire Admission</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent(`Hello Educare Help Desk, I need assistance for AIOU ${program.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-emerald-700 font-semibold flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Help</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prominent Educare Contact Banner */}
      <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-block bg-amber-200 text-amber-900 text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Educare Help Desk • Direct Support
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
            Need Personal Guidance for AIOU Admission, Solved Assignments, or LMS?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 max-w-2xl">
            Our student counseling desk is available to answer your questions for Matric, Intermediate, BA, BS, B.Ed, Master, M.Phil, and Ph.D programs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href={`tel:${HELPDESK_PHONE}`}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm text-sm"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {HELPDESK_PHONE}</span>
          </a>

          <a
            href={`https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent("Hello Educare Help Desk, I need quick assistance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm text-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>WhatsApp 03451291610</span>
          </a>
        </div>
      </section>
    </div>
  );
};
