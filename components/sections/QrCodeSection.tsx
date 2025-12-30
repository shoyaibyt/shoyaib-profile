'use client';

import QRCode from 'react-qr-code';

export default function QrCodeSection() {
  const websiteUrl = "https://shoyaib.pages.dev/";

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full">
      <div className="bg-white p-3 rounded-xl shadow-lg shadow-blue-500/10 transition-transform hover:scale-105 duration-300 w-full max-w-[120px] sm:max-w-[150px]">
        <div style={{ height: "auto", margin: "0 auto", width: "100%" }}>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={websiteUrl}
            viewBox={`0 0 256 256`}
            fgColor="#0f172a"
            bgColor="#ffffff"
          />
        </div>
      </div>
      <p className="text-xs sm:text-sm font-medium text-slate-400 text-center">
        Scan to visit official website
      </p>
    </div>
  );
}