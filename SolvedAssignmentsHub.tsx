import React, { useState } from 'react';
import { ProgramLevel, SolvedAssignmentItem } from '../types';
import { SOLVED_ASSIGNMENTS, HELPDESK_PHONE, HELPDESK_WHATSAPP } from '../data/aiouData';
import { Search, BookOpen, Download, FileText, CheckCircle2, MessageCircle, Phone, Sparkles, Filter } from 'lucide-react';

interface SolvedAssignmentsHubProps {
  onSelectForAi: (level: ProgramLevel, code: string) => void;
  onOpenInquiry: (level?: ProgramLevel, code?: string) => void;
}

export const SolvedAssignmentsHub: React.FC<SolvedAssignmentsHubProps> = ({
  onSelectForAi,
  onOpenInquiry
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<SolvedAssignmentItem | null>(SOLVED_ASSIGNMENTS[0]);

  const levels: (ProgramLevel | 'All')[] = [
    'All',
    'Matric',
    'FA / Intermediate',
    'BA / AD',
    'BS (4-Year)',
    'B.Ed',
    'Master / PGD'
  ];

  const filteredAssignments = SOLVED_ASSIGNMENTS.filter((item) => {
    const matchesLevel = selectedLevel === 'All' || item.programLevel === selectedLevel;
    const matchesSearch =
      item.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.programLevel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-md">
              AIOU Academic Library
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-100">
              Solved Assignments & Past Papers Hub
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl">
              Browse solved assignments for Autumn 2025 & Spring 2026. Get sample solutions or order complete printed/PDF solutions directly via Educare Help Desk (03451291610).
            </p>
          </div>

          <a
            href={`tel:${HELPDESK_PHONE}`}
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-all shrink-0"
          >
            <Phone className="w-4 h-4 text-slate-950" />
            <span>Order Full PDF: {HELPDESK_PHONE}</span>
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Course Code (e.g., 8601, 247, 1423) or Title..."
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-500 shrink-0 hidden sm:block" />
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedLevel === lvl
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* List Column */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            Available Solved Papers ({filteredAssignments.length})
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {filteredAssignments.map((item) => {
              const isSelected = activeItem?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-600 shadow-sm ring-1 ring-emerald-600/30'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="bg-emerald-800 text-white font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                      Code {item.courseCode}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {item.programLevel}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mt-2 font-serif">
                    {item.courseTitle}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100">
                    <span>Semester: {item.semester}</span>
                    <span className="font-semibold text-emerald-700">Assignment #{item.assignmentNumber}</span>
                  </div>
                </div>
              );
            })}

            {filteredAssignments.length === 0 && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-3">
                <p className="text-sm font-semibold text-slate-700">No solved assignments found matching your search.</p>
                <p className="text-xs text-slate-500">Contact Educare Help Desk at 03451291610 to request any AIOU solved paper directly!</p>
                <a
                  href={`tel:${HELPDESK_PHONE}`}
                  className="inline-block bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-xl"
                >
                  Call Helpline: {HELPDESK_PHONE}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Selected Item Preview Column */}
        <div className="lg:col-span-7">
          {activeItem ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden sticky top-24 space-y-5 p-6">
              {/* Header */}
              <div className="border-b border-slate-100 pb-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1 rounded-md border border-amber-200">
                    AIOU Solved Solution Preview
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Session: {activeItem.semester}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  [{activeItem.courseCode}] {activeItem.courseTitle}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium pt-1">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Program: <strong>{activeItem.programLevel}</strong></span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Assignment: <strong>#{activeItem.assignmentNumber}</strong></span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md">Downloads: <strong>{activeItem.downloadCount}+</strong></span>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <h4 className="text-xs font-bold uppercase text-slate-700 tracking-wider">Overview:</h4>
                <p className="text-xs text-slate-700 leading-relaxed">{activeItem.summary}</p>
              </div>

              {/* Sample Q&As */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase text-emerald-900 tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Sample Solved Questions Excerpt:</span>
                </h4>

                <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                  {activeItem.sampleQuestions.map((sq, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/90 space-y-1.5 text-xs">
                      <div className="font-bold text-slate-900">{sq.question}</div>
                      <div className="text-slate-700 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100/80 leading-relaxed">
                        <span className="font-semibold text-emerald-900">Answer Guidance: </span>
                        {sq.briefAnswer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectForAi(activeItem.programLevel, activeItem.courseCode)}
                  className="w-full sm:w-auto flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Solve Full Code {activeItem.courseCode} with AI</span>
                </button>

                <a
                  href={`https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent(`Hello Educare Help Desk (03451291610),\nI need the complete PDF solved assignment for AIOU Code ${activeItem.courseCode} (${activeItem.courseTitle} - ${activeItem.programLevel}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Get Full PDF on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500">
              Select an assignment from the list to view preview.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
