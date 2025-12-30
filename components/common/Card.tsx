interface CardProps {
  title: string;
  children: React.ReactNode;
  borderColor?: 'blue' | 'slate';
}

export default function Card({ title, children, borderColor = 'blue' }: CardProps) {
  const borderClass = borderColor === 'blue' ? 'border-t-blue-500' : 'border-t-slate-500';
  
  return (
    <div className={`bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-md border-t-4 ${borderClass} transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 relative overflow-hidden`}>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}