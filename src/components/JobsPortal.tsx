import React, { useState, useMemo } from 'react';
import { PAKISTAN_JOB_UPDATES, JobItem } from '../data/jobData';
import { HELPDESK_PHONE, HELPDESK_WHATSAPP } from '../data/aiouData';
import { ShareButton } from './ShareButton';
import { Briefcase, Search, Filter, ExternalLink, Calendar, MapPin, GraduationCap, DollarSign, Clock, CheckCircle2, FileText, ChevronRight, MessageCircle, Phone, Sparkles, X, UserCheck, ShieldAlert } from 'lucide-react';

export const JobsPortal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedJobModal, setSelectedJobModal] = useState<JobItem | null>(null);

  const categories = ['All', 'AIOU Tutor', 'Punjab (PPSC)', 'Federal (FPSC)', 'Educators / Teaching', 'General Gov'];

  const filteredJobs = useMemo(() => {
    return PAKISTAN_JOB_UPDATES.filter((job) => {
      const matchesCat =
        selectedCategory === 'All' ||
        job.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.qualification.toLowerCase().includes(q) ||
        job.region.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-emerald-800/60">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              <Briefcase className="w-3.5 h-3.5 text-slate-950" />
              Latest Government & Teaching Jobs in Pakistan & Punjab
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-100">
              AIOU Tutor, PPSC, FPSC & Educator Jobs Alert (2026)
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl">
              Explore active job vacancies, eligibility criteria, required documents, and step-by-step online application guides. Contact Educare Help Desk (03451291610) for form submission assistance!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <ShareButton variant="amber" />
            <a
              href={`https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent('Hello Educare Help Desk (03451291610), I need online job form apply assistance for PPSC / AIOU Tutor.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-emerald-600 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Job Apply Assistance</span>
            </a>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs e.g. 'PPSC', 'Lecturer', 'AIOU Tutor', 'BS-17', 'Literacy'..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-10 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl transition-all shrink-0 text-xs ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white font-extrabold shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Card Header */}
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${
                  job.category === 'AIOU Tutor'
                    ? 'bg-amber-100 text-amber-950 border-amber-300'
                    : job.category.includes('PPSC')
                    ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                    : 'bg-indigo-100 text-indigo-950 border-indigo-300'
                }`}>
                  {job.category}
                </span>

                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {job.region}
                </span>
              </div>

              <h3 className="text-base font-bold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                {job.title}
              </h3>

              <p className="text-xs font-semibold text-slate-500 border-b border-slate-100 pb-2">
                {job.department}
              </p>

              {/* Key Details Grid */}
              <div className="space-y-2 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-bold text-slate-900">Qual:</span>
                  <span className="truncate">{job.qualification}</span>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-bold text-slate-900">Pay Scale:</span>
                  <span>{job.payScale}</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="font-bold text-slate-800">Vacancies: {job.vacancies}</span>
                  <span className="font-bold text-emerald-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-700" />
                    Last Date: {job.lastDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedJobModal(job)}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>View Criteria & How to Apply</span>
                <ChevronRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail & How-To-Apply Modal */}
      {selectedJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 text-slate-900">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800">
              <div className="space-y-1">
                <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
                  {selectedJobModal.category} • {selectedJobModal.region}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white leading-snug">
                  {selectedJobModal.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  {selectedJobModal.department}
                </p>
              </div>

              <button
                onClick={() => setSelectedJobModal(null)}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
              {/* Highlights Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-[11px] font-bold text-emerald-900">
                <div>
                  <span className="text-slate-500 block text-[10px]">Pay Scale</span>
                  <span>{selectedJobModal.payScale}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Vacancies</span>
                  <span>{selectedJobModal.vacancies}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Age Limit</span>
                  <span>{selectedJobModal.ageLimit}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Deadline</span>
                  <span className="text-amber-800">{selectedJobModal.lastDate}</span>
                </div>
              </div>

              {/* Job Overview */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 font-serif text-sm border-b border-slate-100 pb-1">
                  Job Overview & Description
                </h4>
                <p className="leading-relaxed">{selectedJobModal.description}</p>
              </div>

              {/* Eligibility Criteria */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 font-serif text-sm border-b border-slate-100 pb-1 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-700" />
                  <span>Eligibility & Academic Criteria</span>
                </h4>
                <ul className="space-y-1.5">
                  {selectedJobModal.criteriaList.map((crit, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step by Step How to Apply Online */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 font-serif text-sm border-b border-slate-100 pb-1 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>How to Apply Online (Step-by-Step)</span>
                </h4>
                <ol className="space-y-2">
                  {selectedJobModal.howToApplySteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100">
                      <span className="w-5 h-5 rounded-full bg-emerald-800 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-slate-800 leading-normal">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Required Documents */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 font-serif text-sm border-b border-slate-100 pb-1">
                  Required Documents Checklist
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  {selectedJobModal.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-200 font-medium text-slate-700">
                      📄 {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="bg-slate-50 p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <a
                href={selectedJobModal.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                <span>Visit Official Portal ({selectedJobModal.officialPortal})</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>

              <a
                href={`https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent(
                  `Hello Educare Help Desk (03451291610), I need online job form apply assistance for: ${selectedJobModal.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Educare Job Helpline: {HELPDESK_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
