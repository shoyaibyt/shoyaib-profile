'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative z-20">
      <div className="relative w-full max-w-2xl bg-slate-900/40 backdrop-blur-2xl border border-slate-400/20 rounded-3xl p-8 sm:p-12 text-center overflow-hidden shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] group">
        
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-slate-300 to-transparent opacity-50"></div>
        
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700"></div>

        <div className="relative z-10">
            <div className="relative inline-block">
                <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-600 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-pulse">
                    404
                </h1>
                <i className="fas fa-ghost absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] sm:text-[120px] text-slate-800/50 mix-blend-overlay"></i>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4 uppercase tracking-widest">
                Mission Failed
            </h2>
            
            <p className="text-slate-300 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                The map coordinates you entered are invalid. This zone has been eliminated or does not exist.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                <button 
                    onClick={() => router.back()}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-800/50 hover:bg-slate-700 border border-slate-500/50 text-slate-200 font-bold tracking-wide transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(148,163,184,0.2)] flex items-center justify-center group/btn"
                >
                    <i className="fas fa-arrow-left mr-2 group-hover/btn:-translate-x-1 transition-transform"></i>
                    GO BACK
                </button>

                <Link 
                    href="/"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-slate-200 via-white to-slate-300 text-slate-900 font-black tracking-wide transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center justify-center"
                >
                    <i className="fas fa-home mr-2"></i>
                    RETURN HOME
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
