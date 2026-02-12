'use client';
import { GeneralSettings } from '@/system/GeneralSettings';

export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-30 blur-[1px]">
        <iframe
          src={`${GeneralSettings.backgroundVideo}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"`}
          className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 border-0 scale-125 grayscale brightness-[0.7] contrast-[1.15]"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-slate-900/30 opacity-60"></div>

        <div className="relative w-full h-[60vh]">
          <svg className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-10" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 50 C 250 20 250 80 500 50 C 750 20 750 80 1000 50 V 100 H 0 Z" fill="#ffffff" />
          </svg>

          <svg className="absolute bottom-0 w-[200%] h-[92%] animate-wave-medium opacity-20" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 60 C 250 30 250 90 500 60 C 750 30 750 90 1000 60 V 100 H 0 Z" fill="#94a3b8" />
          </svg>

          <svg className="absolute bottom-0 w-[200%] h-[82%] animate-wave-fast opacity-100" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 70 C 250 40 250 100 500 70 C 750 40 750 100 1000 70 V 100 H 0 Z" fill="#020617" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50 z-20"></div>

      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave-slow { animation: wave 45s linear infinite; will-change: transform; }
        .animate-wave-medium { animation: wave 32s linear infinite; will-change: transform; }
        .animate-wave-fast { animation: wave 22s linear infinite; will-change: transform; }
      `}</style>
    </div>
  );
}
