'use client';

import QRCode from 'react-qr-code';
import Image from 'next/image';
import { GeneralSettings } from '@/system/GeneralSettings';

export default function QrCodeSection() {
  const websiteUrl = GeneralSettings.metadata.siteUrl;
  const profileImg = GeneralSettings.profile.image;

  return (
    <div className="flex flex-col items-center justify-center space-y-3 w-full">
      {/* Premium QR Code Border */}
      <div className="relative group p-1.5 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] w-full max-w-[130px] sm:max-w-[160px]">
        
        {/* Inner White Frame - Reduced padding to make QR larger */}
        <div className="relative bg-white p-1 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
          
          {/* QR Code - Increased visual size */}
          <div className="w-full h-full">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={websiteUrl}
              viewBox={`0 0 256 256`}
              fgColor="#020617" 
              bgColor="#ffffff"
              level="H" // High error correction to allow for center logo
            />
          </div>

          {/* Central Profile Image Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/4 h-1/4 bg-white rounded-full p-0.5 shadow-md border border-slate-200">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src={profileImg} 
                  alt="Profile" 
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Corner Accents */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Premium Label */}
      <div className="flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 animate-pulse">
          Official Access
        </p>
        <p className="text-[11px] font-medium text-slate-500 mt-0.5">
          Scan to connect
        </p>
      </div>
    </div>
  );
}
