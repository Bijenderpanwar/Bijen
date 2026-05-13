import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, ChevronRight, ChevronLeft, Volume2, Camera, MessageSquare, ListCheck, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// --- Scene Configuration ---
const SCENES = [
  {
    id: "intro",
    title: "Toddler Habit Architect",
    subtitle: "The Calm Parenting System for Raising Cooperative, Emotionally Secure Toddlers",
    visuals: "Cinematic slow-motion of a warm family morning. Golden hour light. A mother sits cross-legged on a cream rug, looking into her toddler's eyes. Gentle pan to the left.",
    vo: "Welcome to the Beginning of a New Chapter. Parenting doesn't have to be a series of struggles. It can be a series of intentional architecting.",
    overlay: "TITLES",
    background: "from-warm-beige/20 to-muted-peach/10",
    color: "text-text-dark"
  },
  {
    id: "struggle",
    title: "The Parent Struggle",
    visuals: "A sequence of quick, but soft-focus cuts: An exhausted parent rubbing temples. A toddler lying on floor during a tantrum. A spilled bowl of cereal in slow motion. Blueish, cooler lighting.",
    vo: "If you're here, you might feel like you're repeating yourself all day. Dealing with the meltdowns. The bedtime battles. The feeling that you're failing.",
    overlay: "You are not failing as a parent.",
    background: "from-gray-100 to-warm-beige",
    color: "text-gray-800"
  },
  {
    id: "breakthrough",
    title: "The Breakthrough",
    visuals: "Light shifts to warm gold. A parent kneeling down to the child's level. Close up on hand-holding. Focus on the connection. The toddler's face softening.",
    vo: "But here is the truth: Toddler behavior is not random. It's biological. It's developmental. And most importantly... it's manageable.",
    overlay: "Toddler behavior is not random.",
    background: "from-muted-peach/20 to-warm-cream",
    color: "text-text-dark"
  },
  {
    id: "transformation",
    title: "The Transformation",
    visuals: "Bright, airy kitchen. Toddler helping stir a bowl. A calm morning routine. Soft-focus family laughter. Everything feels light, rhythmic, and peaceful.",
    vo: "Inside this course, we architect habits. We build systems of emotional safety and calm routines that make 'listening' the natural default for your child.",
    overlay: "Emotional Safety • Calm Routines • Better Listening",
    background: "from-soft-sage/10 to-warm-cream",
    color: "text-text-dark"
  },
  {
    id: "promise",
    title: "The Promise",
    visuals: "A deep, warm hug. Child leaning into parent's shoulder at night. A feeling of absolute safety. Slow zoom out showing a peaceful evening home.",
    vo: "I'm not here to help you be perfect. I'm here to help you find progress. Because a secure toddler starts with a supported parent.",
    overlay: "Progress matters more than perfection.",
    background: "from-warm-beige/30 to-muted-peach/10",
    color: "text-text-dark"
  },
  {
    id: "cta",
    title: "Let's Begin",
    visuals: "Title card fades in. Background shows the parenting coach in soft focus, smiling. The logo appears gracefully.",
    vo: "Module One: Why Toddlers Misbehave. Let's start building your calm system today.",
    overlay: "MODULE 1 — Let's Begin",
    background: "from-text-dark/5 to-warm-beige",
    color: "text-text-dark"
  }
];

export default function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMetadata, setShowMetadata] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentScene((prev) => (prev + 1) % SCENES.length);
      }, 7000); // 7 seconds per scene narrative
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextScene = () => setCurrentScene((prev) => (prev + 1) % SCENES.length);
  const prevScene = () => setCurrentScene((prev) => (prev - 1 + SCENES.length) % SCENES.length);

  return (
    <div className="min-h-screen bg-warm-cream selection:bg-muted-peach/30 font-sans text-text-dark overflow-x-hidden">
      {/* Header Strategy */}
      <header className="fixed top-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-warm-cream/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted-peach flex items-center justify-center text-white font-serif italic text-lg shadow-sm">
            T
          </div>
          <span className="font-serif text-lg tracking-tight font-medium">Habit Architect</span>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setShowMetadata(!showMetadata)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-warm-beige bg-white/50 hover:bg-white transition-all text-xs font-medium uppercase tracking-widest"
          >
            {showMetadata ? <Volume2 size={14} /> : <MessageSquare size={14} />} 
            {showMetadata ? "Production View" : "Cinematic View"}
          </button>
        </div>
      </header>

      {/* Main Production Stage */}
      <main className="pt-24 pb-12 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: The Player */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-warm-beige shadow-2xl border border-warm-beige/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScene}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${SCENES[currentScene].background} p-12 flex flex-col items-center justify-center text-center`}
              >
                {/* Visual Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Scenematic UI */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="space-y-6 z-10"
                >
                  {currentScene === 0 ? (
                    <div className="space-y-4">
                      <h2 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight">
                        {SCENES[currentScene].title}
                      </h2>
                      <p className="text-lg md:text-xl font-light italic text-text-dark/70 max-w-lg mx-auto">
                        {SCENES[currentScene].subtitle}
                      </p>
                    </div>
                  ) : (
                    <h3 className="font-serif text-3xl md:text-5xl leading-tight max-w-2xl mx-auto italic font-medium">
                      {SCENES[currentScene].overlay}
                    </h3>
                  )}
                </motion.div>

                {/* Subtitles Simulation */}
                <div className="absolute bottom-12 w-full px-12">
                   <motion.p 
                     key={currentScene + "-vo"}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1, duration: 1.5 }}
                     className="text-white bg-black/40 backdrop-blur-md px-6 py-2 rounded-lg text-sm md:text-base max-w-xl mx-auto inline-block"
                   >
                     {SCENES[currentScene].vo}
                   </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Cinematic Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            
            {/* Play Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors flex items-center justify-center group pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Play className="text-white fill-white translate-x-1" size={32} />
                </div>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-warm-beige">
            <div className="flex items-center gap-2">
              <button 
                onClick={prevScene}
                className="p-3 hover:bg-warm-beige rounded-full transition-colors"
                title="Previous Scene"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-text-dark text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
                title={isPlaying ? "Pause Automated Preview" : "Play Automated Preview"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="translate-x-0.5" />}
              </button>
              <button 
                onClick={nextScene}
                className="p-3 hover:bg-warm-beige rounded-full transition-colors"
                title="Next Scene"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex-1 px-8">
              <div className="h-1 bg-warm-beige rounded-full relative overflow-hidden">
                <motion.div 
                   className="absolute top-0 left-0 h-full bg-muted-peach"
                   animate={{ width: `${((currentScene + 1) / SCENES.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium tracking-widest text-text-dark/40 uppercase">
              Scene {currentScene + 1} / {SCENES.length}
            </div>
          </div>
        </div>

        {/* Right Column: Production Metadata */}
        <div className="lg:col-span-4 h-full">
          <AnimatePresence mode="wait">
            {showMetadata ? (
              <motion.div 
                key="metadata"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-8 rounded-3xl border border-warm-beige shadow-xl space-y-8 sticky top-28"
              >
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-peach uppercase tracking-[0.2em] text-[10px] font-bold">
                    <Camera size={14} />
                    Current Scene Spec
                  </div>
                  <h4 className="font-serif text-2xl font-medium">{SCENES[currentScene].title}</h4>
                  <div className="p-4 bg-warm-cream rounded-xl border border-warm-beige/30">
                    <p className="text-sm leading-relaxed text-text-dark/80 italic">
                      "{SCENES[currentScene].visuals}"
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-peach uppercase tracking-[0.2em] text-[10px] font-bold">
                    <Volume2 size={14} />
                    VO Script Notes
                  </div>
                  <p className="text-sm leading-relaxed text-text-dark/70 bg-warm-beige/20 p-4 rounded-xl border border-dashed border-warm-beige">
                    <span className="font-semibold block mb-2 text-text-dark">Direction:</span>
                    "Slow, warm, Indian-English female voice. Reassuring, coaching tone. Emphasize keywords like 'Architect' and 'Progress'."
                  </p>
                </section>

                <section className="pt-4 space-y-4 border-t border-warm-beige">
                  <div className="flex items-center gap-2 text-muted-peach uppercase tracking-[0.2em] text-[10px] font-bold">
                    <ListCheck size={14} />
                    Scene Timeline
                  </div>
                  <div className="space-y-4">
                    {SCENES.map((scene, idx) => (
                      <button 
                        key={scene.id}
                        onClick={() => {
                          setCurrentScene(idx);
                          setIsPlaying(false);
                        }}
                        className={`w-full text-left p-3 rounded-xl transition-all border ${
                          currentScene === idx 
                          ? "bg-muted-peach border-muted-peach text-white ring-4 ring-muted-peach/20" 
                          : "bg-transparent border-transparent hover:bg-warm-beige/30 text-text-dark/50"
                        }`}
                      >
                         <div className="text-[9px] uppercase font-bold tracking-widest mb-1 opacity-70">Scene {idx + 1}</div>
                         <div className="text-xs font-semibold">{scene.title}</div>
                      </button>
                    ))}
                  </div>
                </section>
              </motion.div>
            ) : (
              <motion.div 
                key="script"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-text-dark p-8 rounded-3xl text-white shadow-xl space-y-8 sticky top-28"
              >
                <div className="flex items-center gap-2 text-muted-peach uppercase tracking-[0.2em] text-[10px] font-bold">
                  <Sparkles size={14} />
                   Parenting Coach Insights
                </div>
                <div className="space-y-6">
                  <p className="text-lg font-serif italic text-white/90 leading-relaxed">
                    "Every toddler habit you see today is a foundation for the adult they become tomorrow."
                  </p>
                  <ul className="space-y-4 text-sm text-white/60 font-light">
                    <li className="flex gap-3">
                      <span className="text-muted-peach">•</span>
                      Focus on emotional safety first, behavior second.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-muted-peach">•</span>
                      Small wins in routines lead to big victories in listening.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-muted-peach">•</span>
                      Transition away from power struggles to cooperation.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto py-12 px-6 border-t border-warm-beige flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-text-dark/40 uppercase tracking-widest font-medium">
          Toddler Habit Architect © 2024
        </div>
        <div className="flex gap-8">
           {["Privacy", "Safety", "Support", "Modules"].map(item => (
             <a key={item} href="#" className="text-xs font-medium text-text-dark/50 hover:text-muted-peach transition-colors uppercase tracking-widest">
               {item}
             </a>
           ))}
        </div>
      </footer>
    </div>
  );
}
