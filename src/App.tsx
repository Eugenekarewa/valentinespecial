import React, { useEffect, useState } from 'react';
import { Heart, Stars, Sparkles, Gift as GiftBox, Music, UserRound as Rose } from 'lucide-react';

function App() {
  const [showName, setShowName] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPoem, setShowPoem] = useState(false);
  const [showReasons, setShowReasons] = useState(false);
  const name = "Lorine Atieno Lucy";
  
  useEffect(() => {
    setTimeout(() => setShowHeart(true), 1000);
    setTimeout(() => setShowName(true), 2000);
    setTimeout(() => setShowMessage(true), 4000);
    setTimeout(() => setShowPoem(true), 6000);
    setTimeout(() => setShowReasons(true), 8000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-pink-200 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-400 opacity-50 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
            size={20 + Math.random() * 30}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <Stars
            key={`star-${i}`}
            className="absolute text-yellow-300 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
            size={15 + Math.random() * 20}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4">
        {showHeart && (
          <div className="relative">
            <div className="relative inline-block">
              <Heart 
                className="mx-auto text-red-500 animate-pulse mb-8" 
                size={120} 
                fill="currentColor"
              />
              <Rose 
                className="absolute -right-4 -bottom-4 text-red-600 animate-sway"
                size={40}
              />
              <Music 
                className="absolute -left-4 -top-4 text-red-400 animate-bounce-slow"
                size={32}
              />
            </div>
            <Sparkles 
              className="absolute top-0 right-0 text-yellow-400 animate-sparkle"
              size={24}
            />
            <Sparkles 
              className="absolute bottom-0 left-0 text-yellow-400 animate-sparkle-delayed"
              size={24}
            />
          </div>
        )}
        
        {showName && (
          <h1 className="text-6xl font-bold text-red-600 mb-8 animate-fade-in filter drop-shadow-lg">
            {name.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-bounce-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
        )}

        {showMessage && (
          <div className="space-y-6 animate-fade-in backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-xl">
            <p className="text-3xl text-red-700 font-medium">
              From Eugene, with eternal love ❤️
            </p>
            <p className="text-xl text-red-600 max-w-md mx-auto leading-relaxed">
              My dearest Lorine, you're the melody in my heart's song,
              the warmth in my coldest days, and the light that guides me home.
              Every moment with you is a treasure I cherish deeply.
            </p>
          </div>
        )}

        {showPoem && (
          <div className="mt-8 animate-fade-in-up space-y-4">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <p className="text-lg text-red-800 italic font-serif leading-relaxed">
                "In the garden of my heart,<br/>
                You bloom like the sweetest rose.<br/>
                Each moment with you is art,<br/>
                As our love story unfolds.<br/>
                My dearest Lorine, you're the one,<br/>
                My forever Valentine."
              </p>
              <p className="mt-4 text-red-700 font-medium">- Your Eugene</p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Heart className="text-red-500 animate-bounce" size={24} fill="currentColor" />
              <Heart className="text-red-500 animate-bounce" size={24} fill="currentColor" style={{ animationDelay: "0.2s" }} />
              <Heart className="text-red-500 animate-bounce" size={24} fill="currentColor" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        )}

        {showReasons && (
          <div className="mt-8 animate-fade-in-up">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Why I Love You</h2>
              <div className="space-y-3 text-red-800">
                <p className="flex items-center gap-2">
                  <Heart size={16} className="text-red-500" fill="currentColor" />
                  Your beautiful smile brightens my darkest days
                </p>
                <p className="flex items-center gap-2">
                  <Heart size={16} className="text-red-500" fill="currentColor" />
                  The way your eyes sparkle when you laugh
                </p>
                <p className="flex items-center gap-2">
                  <Heart size={16} className="text-red-500" fill="currentColor" />
                  Your kindness and compassion touch my soul
                </p>
                <p className="flex items-center gap-2">
                  <Heart size={16} className="text-red-500" fill="currentColor" />
                  Every moment with you feels like magic
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center items-center gap-4">
              <GiftBox className="text-red-500 animate-bounce-slow" size={32} />
              <span className="text-red-700 font-medium">Forever Yours</span>
              <Rose className="text-red-500 animate-sway" size={32} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;