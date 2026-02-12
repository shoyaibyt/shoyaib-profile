interface CardProps {
  title: string;
  children: React.ReactNode;
  borderColor?: 'blue' | 'slate';
}

export default function Card({ title, children, borderColor = 'blue' }: CardProps) {
  const glowColor = borderColor === 'blue' ? 'group-hover:shadow-blue-500/20' : 'group-hover:shadow-slate-400/20';
  
  return (
    <div className={`group relative bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/50 shadow-xl transition-all duration-500 hover:-translate-y-2 ${glowColor} hover:shadow-2xl overflow-hidden`}>
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400/50 to-transparent opacity-50"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <h2 className="text-2xl font-black mb-6 pb-2 border-b border-slate-700/50 inline-block bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight animate-gradient-x bg-[length:200%_auto]">
          {title}
        </h2>
        <div className="flex-grow text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}
