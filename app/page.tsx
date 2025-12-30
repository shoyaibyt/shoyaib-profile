import ProfileHeader from '@/components/layout/ProfileHeader';
import Card from '@/components/common/Card';
import GamerDetails from '@/components/sections/GamerDetails';
import QrCodeSection from '@/components/sections/QrCodeSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
      
      <ProfileHeader />

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        
        {/* === LEFT COLUMN (2/3 width) === */}
        <div className="md:col-span-2 space-y-8">
          
          <Card title="About Me" borderColor="blue">
            <p className="text-base leading-relaxed text-slate-300">
              Welcome to my profile! I'm Shoyaib YT, a passionate E-football gamer and content creator. I'm dedicated to mastering the game, sharing my best strategies, and building a strong community of football gaming fans. Join me on my journey!
            </p>
          </Card>

          <Card title="My Content" borderColor="blue">
            <div className="space-y-6">
                <div className="flex items-start">
                    <i className="fas fa-gamepad text-blue-500 w-6 text-center mt-1"></i>
                    <div className="ml-4">
                        <h3 className="font-semibold text-white text-base">E-football Gameplay</h3>
                        <p className="text-sm text-slate-300">High-level ranked matches, friendly challenges, and pure gameplay videos.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <i className="fas fa-video text-blue-500 w-6 text-center mt-1"></i>
                    <div className="ml-4">
                        <h3 className="font-semibold text-white text-base">Livestreams</h3>
                        <p className="text-sm text-slate-300">Join my live sessions for interactive gameplay, Q&A, and community events.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <i className="fas fa-bullhorn text-blue-500 w-6 text-center mt-1"></i>
                    <div className="ml-4">
                        <h3 className="font-semibold text-white text-base">Tutorials & Tips</h3>
                        <p className="text-sm text-slate-300">Learn new skills, tactics, and formations to improve your own game.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <i className="fas fa-users text-blue-500 w-6 text-center mt-1"></i>
                    <div className="ml-4">
                        <h3 className="font-semibold text-white text-base">Community Building</h3>
                        <p className="text-sm text-slate-300">Creating a friendly and supportive space for all E-football lovers.</p>
                    </div>
                </div>
            </div>
          </Card>

          <Card title="Gameplay Highlights" borderColor="blue">
             <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-white text-base">Rank 1 Champion</h3>
                  <p className="text-base text-slate-300">Achieved the top rank in Season 3, competing against the best players in the region.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">10-Goal Thriller Match</h3>
                  <p className="text-base text-slate-300">A legendary comeback match featured on my YouTube channel with over 100k views.</p>
                </div>
             </div>
          </Card>

          <Card title="From My Viewers" borderColor="blue">
             <div className="space-y-5">
                <blockquote className="text-base text-slate-300 italic border-l-4 border-blue-300 pl-4">
                    "Shoyaib's tutorials completely changed how I play E-football. His tips on dribbling are game-changing. Keep up the great content!"
                </blockquote>
                <p className="text-right font-semibold text-slate-300">- A Subscriber</p>
             </div>
          </Card>

        </div>
        
        {/* === RIGHT COLUMN (1/3 width) === */}
        <div className="md:col-span-1 space-y-8">
          
          <Card title="Contact Me" borderColor="slate">
            <div className="space-y-4">
               <div className="flex items-center">
                  <i className="fas fa-envelope text-slate-400 w-5 text-center"></i>
                  <span className="ml-3 font-small text-slate-300 text-[13px] break-all">shoyaib.gaming.yt.12@gmail.com</span>
               </div>
               <div className="flex items-center">
                  <i className="fas fa-map-location-dot text-slate-400 w-5 text-center"></i>
                  <span className="ml-3 font-medium text-slate-300 break-all">Nazipur, Patnitala, Naogaon</span>
               </div>
            </div>
          </Card>

          <Card title="Gamer Details" borderColor="slate">
             <GamerDetails />
          </Card>

          <Card title="My Skills" borderColor="slate">
             <div className="space-y-3">
                <div className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-5 text-center"></i><span className="ml-3 font-medium text-slate-200">Advanced Dribbling</span></div>
                <div className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-5 text-center"></i><span className="ml-3 font-medium text-slate-200">Tactical Formations</span></div>
                <div className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-5 text-center"></i><span className="ml-3 font-medium text-slate-200">Defensive Strategy</span></div>
                <div className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-5 text-center"></i><span className="ml-3 font-medium text-slate-200">Set Piece Mastery</span></div>
                <div className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-5 text-center"></i><span className="ml-3 font-medium text-slate-200">Team Building</span></div>
                <div className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-5 text-center"></i><span className="ml-3 font-medium text-slate-200">Live Commentary</span></div>
             </div>
          </Card>

          <Card title="Official Website" borderColor="slate">
              <QrCodeSection />
          </Card>

        </div>

      </main>

      <Footer />
    </div>
  );
}