import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Sparkles, Mail } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div 
            key="envelope"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Mail className="w-20 h-20 text-red-500" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl text-red-600 font-script"
              >
                Click to open your letter ❤️
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="letter"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
          >
            {/* Floating hearts background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ 
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: 0.3
                  }}
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                >
                  <Heart className="text-red-200" size={24} />
                </motion.div>
              ))}
            </div>

            {/* Main content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Heart className="text-red-500 w-16 h-16" />
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="space-y-6 text-gray-700 leading-relaxed"
              >
                <motion.h1 
                  className="text-3xl font-script text-center text-red-600 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  To the one who has always been in my heart,
                </motion.h1>

                <p>
                  I don't know where to begin because my heart is overflowing with emotions I've held onto for so long. From the days of our childhood, when we played, laughed, and grew together, to this moment now—I have cherished you in ways I never had the courage to say.
                </p>

                <p>
                  There were times when I wanted to tell you how special you were to me, but I feared losing what we had. So, I stayed silent, tucking my feelings away, carrying them in my heart like a secret only I knew. I smiled when you smiled, celebrated your victories from afar, and wished for your happiness, even if it meant never being a part of it.
                </p>

                <p>
                  But life has a beautiful way of bringing hearts together, doesn't it? When you spoke those words—when you told me how you feel—it felt like the universe had finally listened to the silent prayers of my heart. It was as if time paused for a moment just to let me take it all in, to remind me that love, no matter how quietly it waits, always finds its way home.
                </p>

                <p>
                  You are my home. My safe place. The one I have loved, even when you didn't know. And now, knowing that our hearts beat in the same rhythm, I can finally say it—I love you. I always have. I always will.
                </p>

                <p>
                  Every moment with you is a memory I want to cherish forever. Let's walk this journey together, hand in hand, heart to heart. No more holding back, no more unspoken words—just us, in love, as it was always meant to be.
                </p>

                <p className="text-right font-script text-xl text-red-600 mt-8">
                  Forever and Always,<br />
                  Your Love ❤️
                </p>
              </motion.div>

              <motion.div 
                className="mt-8 flex justify-center gap-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Stars className="text-red-400" />
                <Sparkles className="text-red-500" />
                <Stars className="text-red-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;