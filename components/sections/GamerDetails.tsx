'use client';

export default function GamerDetails() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("ShoyaibYT");
    alert("Copied: ShoyaibYT");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <i className="fas fa-user-tie text-slate-400 w-5 text-center pt-1"></i>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-slate-400">In-Game Name</h3>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-slate-200 text-[15px]">ShoyaibYT</p>
            <button 
              onClick={copyToClipboard}
              className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-0.5 text-[10px] rounded cursor-pointer transition"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <i className="fas fa-calendar-alt text-slate-400 w-5 text-center pt-1"></i>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-slate-400">Started Streaming</h3>
          <p className="font-semibold text-slate-200">January 2024</p>
        </div>
      </div>
      <div className="flex items-start">
        <i className="fas fa-desktop text-slate-400 w-5 text-center pt-1"></i>
        <div className="ml-3">
           <h3 className="text-sm font-medium text-slate-400">Main Platform</h3>
           <p className="font-semibold text-slate-200">PC & Mobile</p>
        </div>
      </div>
    </div>
  );
}