import React, { useState, useMemo } from 'react';
import { AIOU_FAQS, HELPDESK_PHONE, HELPDESK_WHATSAPP } from '../data/aiouData';
import { FaqItem } from '../types';
import { HelpCircle, Search, ChevronDown, ChevronUp, ThumbsUp, MessageCircle, Phone, Sparkles, Filter, X } from 'lucide-react';

interface FaqSectionProps {
  className?: string;
  initialCategory?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  className = '',
  initialCategory = 'All'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});
  const [userVoted, setUserVoted] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Admissions', 'Exams', 'Assignments', 'LMS & CMS', 'General'];

  // Filter logic
  const filteredFaqs = useMemo(() => {
    return AIOU_FAQS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      const qText = (item.question || item.q || '').toLowerCase();
      const aText = (item.answer || item.a || '').toLowerCase();
      const tagsText = (item.tags || []).join(' ').toLowerCase();
      const qNum = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !qNum ||
        qText.includes(qNum) ||
        aText.includes(qNum) ||
        tagsText.includes(qNum);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleHelpfulClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (userVoted[id]) return;

    setUserVoted((prev) => ({ ...prev, [id]: true }));
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const categoryBadgeColors: Record<string, string> = {
    Admissions: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    Exams: 'bg-amber-100 text-amber-900 border-amber-300',
    Assignments: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    'LMS & CMS': 'bg-teal-100 text-teal-900 border-teal-300',
    General: 'bg-slate-100 text-slate-900 border-slate-300'
  };

  return (
    <div className={`bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 ${className}`}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-emerald-300">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-800" />
            Interactive Student Knowledge Base
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
            AIOU Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Filter by category or search keywords to find instant official answers regarding admissions, exams, assignments, and LMS portals.
          </p>
        </div>

        <a
          href={`tel:${HELPDESK_PHONE}`}
          className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold px-3.5 py-2 rounded-xl text-xs shadow-xs shrink-0 self-start md:self-auto"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Ask Helpline: {HELPDESK_PHONE}</span>
        </a>
      </div>

      {/* Category Filter Pills & Search Box */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs e.g. 'challan', 'deadlines', 'roll number', 'tutor', 'LMS password'..."
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-10 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none transition-all"
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

        {/* Category Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
          <span className="text-slate-400 uppercase tracking-wider text-[10px] mr-1 shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Category:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl transition-all shrink-0 text-xs ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs font-extrabold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-xs font-bold text-slate-700">No matching questions found for "{searchQuery}".</p>
            <p className="text-[11px] text-slate-500">
              Try searching with another keyword or contact Educare Help Desk at 03451291610 for direct assistance.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-block bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            const qTitle = faq.question || faq.q || '';
            const aText = faq.answer || faq.a || '';
            const baseHelpful = faq.helpfulCount || 45;
            const currentHelpful = baseHelpful + (helpfulCounts[faq.id] || 0);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 focus:outline-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded border ${
                          categoryBadgeColors[faq.category] || 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {faq.category}
                      </span>

                      {faq.tags && faq.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold font-serif text-slate-900 leading-snug">
                      {qTitle}
                    </h3>
                  </div>

                  <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-emerald-800" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-4 border-t border-slate-100 pt-3 animate-in fade-in">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {aText}
                    </p>

                    {/* Bottom Action Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                      {/* Helpful Counter */}
                      <button
                        onClick={(e) => handleHelpfulClick(e, faq.id)}
                        disabled={userVoted[faq.id]}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs font-bold ${
                          userVoted[faq.id]
                            ? 'bg-emerald-100 text-emerald-900'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${userVoted[faq.id] ? 'text-emerald-700 fill-emerald-700' : 'text-slate-500'}`} />
                        <span>{userVoted[faq.id] ? 'Helpful!' : 'Helpful'} ({currentHelpful})</span>
                      </button>

                      {/* Direct WhatsApp Query CTA */}
                      <a
                        href={`https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent(
                          `Hello Educare Help Desk (03451291610), I have a question regarding: ${qTitle}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-extrabold text-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Ask 03451291610 on WhatsApp →</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
