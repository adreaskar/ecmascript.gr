import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { codeContent } from '@site/src/data/HomePageCode';

const CodeAnimation = () => {
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentLine((prev) => (prev + 1) % codeContent.length);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="bg-[#242526] rounded-lg backdrop-blur-sm p-4 sm:p-6 border border-[#404141] w-full max-w-[380px] sm:max-w-[460px] md:max-w-[500px] lg:w-[550px] text-[11px] sm:text-sm md:text-base"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            {/* Mac like buttons */}
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Coding animation */}
            <div className="font-mono leading-relaxed">
                {codeContent.map((line, index) => (
                    <motion.div
                        key={index}
                        className={`transition-colors duration-300 rounded px-2 -mx-2 ${
                            currentLine === index ? 'bg-[#f8dc3d15]' : ''
                        }`}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <span className="opacity-50 text-white mr-4 inline-block w-6 text-right select-none">
                            {index + 1}
                        </span>
                        <span>
                            {'⠀'.repeat(line.indent)}
                            {line.content.map((part, pIndex) => (
                                <span key={pIndex} className={part.color}>
                                    {part.text}
                                </span>
                            ))}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CodeAnimation;
