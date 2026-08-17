import React from 'react';
import { Phone, MessageCircle, GraduationCap, Sparkles, BookOpen, Calculator, FileText, Globe, HelpCircle, Briefcase, BookMarked, Clock, Building } from 'lucide-react';
import { HELPDESK_PHONE, HELPDESK_WHATSAPP } from '../data/aiouData';
import { NewsTicker } from './NewsTicker';
import { ShareButton } from './ShareButton';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenInquiry }) => {
  const whatsappUrl = `https://wa.me/${HELPDESK_WHATSAPP}?text=${encodeURIComponent("Hello Educare Help Desk, I need assistance regarding BISE Sargodha / AIOU programs.")}`;

  const navItems = [
    { id: 'bise-sargodha', label: 'BISE Sargodha (Matric/Inter)', icon: Building, badge: 'Results & Admission' },
    { id: 'jobs', label: 'Jobs Portal (Punjab/Pakistan)', icon: Briefcase, badge: 'HOT 2026' },
    { id: 'exam-countdown', label: 'Exam Countdown Timer', icon: Clock, badge: 'Exams 2026' },
    { id: 'programs', label: 'Programs (Matric-PhD)', icon: GraduationCap },
    { id: 'ai-solver', label: 'AI Assignment Solver', icon: Sparkles, badge: 'AI Powered' },
    { id: 'solved-assignments', label: 'Solved Assignments', icon: BookOpen },
    { id: 'study-resources', label: 'Study Resources & Prep', icon: BookMarked },
    { id: 'cover-page', label: 'Cover Page Maker', icon: FileText },
    { id: 'fee-calculator', label: 'Fee Estimator', icon: Calculator },
    { id: 'portals', label: 'CMS & LMS Portals', icon: Globe },
    { id: 'contact', label: 'Contact Help Desk', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Real-time AIOU News & Alerts Ticker */}
      <NewsTicker onSelectTab={setActiveTab} />

      {/* Top Helpline Bar */}
      <div className="bg-emerald-900 text-emerald-50 px-4 py-1.5 text-xs sm:text-sm font-medium">

        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Allama Iqbal Open University (AIOU) Support Portal • Matric to Ph.D.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${HELPDESK_PHONE}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Helpline: {HELPDESK_PHONE}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('programs')}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-amber-300 flex items-center justify-center shadow-md border border-amber-400/30">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-serif">
                  Educare Help Desk
                </h1>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">
                  AIOU Desk
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-800 font-medium">
                Matric • FA • BA/BS • B.Ed • MA • M.Phil • Ph.D Support
              </p>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('bise-sargodha')}
              className="p-2 bg-emerald-800 text-amber-300 rounded-lg font-bold shadow-xs flex items-center gap-1 text-[11px]"
              title="BISE Sargodha Portal"
            >
              <Building className="w-3.5 h-3.5" />
              <span>BISE</span>
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className="p-2 bg-amber-400 text-slate-950 rounded-lg font-bold shadow-xs flex items-center gap-1 text-[11px]"
              title="Jobs Portal"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Jobs</span>
            </button>
            <a
              href={`tel:${HELPDESK_PHONE}`}
              className="p-2 bg-emerald-50 text-emerald-800 rounded-lg font-bold border border-emerald-200"
              title="Call Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 text-white rounded-lg font-bold shadow-xs"
              title="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Action Badges on Header */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={() => setActiveTab('bise-sargodha')}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all shadow-xs border text-xs sm:text-sm font-bold ${
              activeTab === 'bise-sargodha'
                ? 'bg-emerald-900 text-amber-300 border-emerald-950 ring-2 ring-emerald-500'
                : 'bg-emerald-800 hover:bg-emerald-700 text-white border-emerald-700'
            }`}
          >
            <Building className="w-4 h-4 text-amber-300" />
            <div className="text-left">
              <span className="text-[9px] uppercase font-extrabold text-amber-300 block tracking-wider">Matric & Inter</span>
              <span className="text-xs font-extrabold">BISE Sargodha</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all shadow-xs border text-xs sm:text-sm font-bold ${
              activeTab === 'jobs'
                ? 'bg-amber-400 text-slate-950 border-amber-500 ring-2 ring-amber-300'
                : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 border-amber-400'
            }`}
          >
            <Briefcase className="w-4 h-4 text-slate-950" />
            <div className="text-left">
              <span className="text-[9px] uppercase font-extrabold text-slate-900 block tracking-wider">AIOU & Punjab</span>
              <span className="text-xs font-extrabold">Jobs 2026</span>
            </div>
          </button>

          <a
            href={`tel:${HELPDESK_PHONE}`}
            className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 px-3.5 py-2 rounded-xl transition-all shadow-2xs"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-amber-300 flex items-center justify-center font-bold">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-emerald-700 block tracking-wider">Direct Call</span>
              <span className="text-sm font-bold">{HELPDESK_PHONE}</span>
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-medium shadow-sm transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-200" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-emerald-100 block tracking-wider">Quick Chat</span>
              <span className="text-sm font-bold">WhatsApp Desk</span>
            </div>
          </a>

          <button
            onClick={onOpenInquiry}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs text-sm"
          >
            Inquire Now
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-slate-50 border-t border-slate-200/80 px-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 py-1.5 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-emerald-700'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isActive ? 'bg-amber-400 text-slate-950' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
