import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <section className="relative overflow-hidden text-center p-6 sm:p-12 bg-slate-800 rounded-2xl mb-10">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 z-0 pointer-events-none rounded-2xl overflow-hidden">
         <iframe
            src="https://player.vimeo.com/video/1150066871?background=1&autoplay=1&loop=1&muted=0"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; fullscreen"
         ></iframe>
      </div>

      <span className="rocket-border rocket-top"></span>
      <span className="rocket-border rocket-right"></span>
      <span className="rocket-border rocket-bottom"></span>
      <span className="rocket-border rocket-left"></span>

      <div className="relative z-20 mx-auto w-32 h-32 bg-white p-0.5 rounded-full shadow-lg">
        <Image 
          src="/profile.png" 
          alt="Shoyaib YT" 
          width={128} 
          height={128} 
          className="rounded-full object-cover w-full h-full"
          priority
        />
      </div>

      <div className="relative z-20 flex items-center justify-center mt-6">
        <h1 className="text-2xl font-extrabold text-white">Shoyaib YT</h1>
        <span className="ml-1 text-blue-500" title="Verified Gamer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      <p className="relative z-20 text-[13px] text-slate-300 font-medium mt-1">
        Professional E-football Gamer & Content Creator
      </p>

      <div className="relative z-20 mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
        <a href="mailto:shoyaib.gaming.yt.12@gmail.com" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full w-full sm:w-auto transition-transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center">
          <i className="fas fa-envelope mr-2"></i> Email Me
        </a>
        <a href="https://www.youtube.com/@shoyaib.yt12" target="_blank" className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 px-6 rounded-full w-full sm:w-auto transition-transform hover:-translate-y-0.5 flex items-center justify-center">
          <i className="fab fa-youtube mr-2"></i> YouTube
        </a>
        <a href="https://www.facebook.com/shoyaib.111" target="_blank" className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 px-6 rounded-full w-full sm:w-auto transition-transform hover:-translate-y-0.5 flex items-center justify-center">
          <i className="fab fa-facebook mr-2"></i> Facebook
        </a>
      </div>
    </section>
  );
}
