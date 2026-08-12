'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const CONTACT_TYPES = [
  { label: 'GENERAL INQUIRIES',   desc: 'General information requests and corporate correspondence.' },
  { label: 'CORPORATE RELATIONS', desc: 'Partnership opportunities and institutional engagement.' },
  { label: 'CAREERS',             desc: 'Employment inquiries and recruitment matters.' },
  { label: 'MEDIA',               desc: 'Press inquiries, accreditation, and public affairs.' },
  { label: 'PARTNERSHIPS',        desc: 'Government and contractor partnership opportunities.' },
];

export function ContactSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: '#09090b' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="digital-intro font-mono text-[9px] tracking-[0.45em] text-[#7a9340] uppercase" data-text="— Get in Touch">
            — Get in Touch
          </span>
          <h2 className="digital-intro mt-3 text-4xl font-black tracking-tight text-white md:text-5xl" data-text="CONTACT LMS">
            CONTACT LMS
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* contact categories */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="mb-6 text-sm text-white/40">
              Select the appropriate contact channel below. All enquiries are handled with discretion
              in accordance with LMS corporate communications policy.
            </p>
            <div className="space-y-0 divide-y divide-white/5">
              {CONTACT_TYPES.map((ct) => (
                <div
                  key={ct.label}
                  className="group flex items-start justify-between gap-4 py-4 transition-colors hover:bg-white/2"
                >
                  <div>
                    <p className="digital-intro text-[10px] font-semibold tracking-[0.2em] text-white uppercase" data-text={ct.label}>{ct.label}</p>
                    <p className="mt-1 text-xs text-white/30">{ct.desc}</p>
                  </div>
                  <span className="shrink-0 text-[10px] text-[#556B2F] opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </div>
              ))}
            </div>

            {/* placeholder address block */}
            <div className="mt-10 border-t border-white/5 pt-8">
              <p className="font-mono text-[8px] tracking-[0.4em] text-white/20 uppercase">Headquarters</p>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">
                Lazarus Military Solutions<br />
                c/o Lazarus Corporation<br />
                1 Lazarus Plaza, Washington D.C.<br />
                United States of America
              </p>
              <p className="mt-3 font-mono text-[9px] text-white/20">
                contact@lazarusmilitary.ops
              </p>
            </div>
          </div>

          {/* contact form */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#556B2F]/60"
                    placeholder="J. Anderson"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#556B2F]/60"
                    placeholder="Organization name"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#556B2F]/60"
                  placeholder="you@organization.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                  Inquiry Type
                </label>
                <select
                  className="w-full border border-white/10 bg-[#09090b] px-4 py-3 text-sm text-white/60 outline-none transition focus:border-[#556B2F]/60"
                >
                  <option value="">Select inquiry type</option>
                  {CONTACT_TYPES.map((ct) => (
                    <option key={ct.label} value={ct.label}>{ct.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#556B2F]/60 resize-none"
                  placeholder="Describe your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-[11px] font-semibold tracking-[0.2em] text-black uppercase transition hover:bg-white/90"
              >
                SUBMIT INQUIRY
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
