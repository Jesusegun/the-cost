/**
 * Screen 1: Reality Input
 * Goal: Confront raw behavior with intentional friction.
 * No judgment yet - just the number.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Church, Banknote, Users, BookOpen, Heart } from 'lucide-react';

interface RealityInputProps {
    onSubmit: (hours: number) => void;
}

export default function RealityInput({ onSubmit }: RealityInputProps) {
    const [hours, setHours] = useState<number>(0);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (hours > 0) {
            onSubmit(hours);
            navigate('/select');
        }
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHours(Number(e.target.value));
    };

    // Format hours display (e.g., 4.5 -> "4.5 hours")
    const formatHours = (h: number): string => {
        if (h === 0) return "0";
        if (h === 1) return "1 hour";
        return `${h} hours`;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 no-select">
            {/* Header: Static pillar icons */}
            <div className="flex gap-4 opacity-40">
                <Church className="w-6 h-6 text-faith" />
                <Banknote className="w-6 h-6 text-wealth" />
                <Users className="w-6 h-6 text-impact" />
                <BookOpen className="w-6 h-6 text-growth" />
                <Heart className="w-6 h-6 text-relationships" />
            </div>

            {/* Center: Input */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
                <h1 className="text-2xl font-semibold text-center mb-2 text-white/90">
                    How much time did you lose today?
                </h1>

                <p className="text-sm text-white/50 text-center mb-12">
                    WhatsApp or distraction time (hours)
                </p>

                {/* Large hours display */}
                <div className="text-7xl font-bold text-white mb-8 tabular-nums">
                    {formatHours(hours)}
                </div>

                {/* Slider */}
                <div className="w-full px-4">
                    <input
                        type="range"
                        min="0"
                        max="12"
                        step="0.25"
                        value={hours}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:w-6
                       [&::-webkit-slider-thumb]:h-6
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-white
                       [&::-webkit-slider-thumb]:shadow-lg
                       [&::-webkit-slider-thumb]:cursor-pointer
                       [&::-moz-range-thumb]:w-6
                       [&::-moz-range-thumb]:h-6
                       [&::-moz-range-thumb]:rounded-full
                       [&::-moz-range-thumb]:bg-white
                       [&::-moz-range-thumb]:border-0
                       [&::-moz-range-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-white/30 mt-2">
                        <span>0</span>
                        <span>3</span>
                        <span>6</span>
                        <span>9</span>
                        <span>12</span>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <button
                onClick={handleContinue}
                disabled={hours === 0}
                className={`w-full max-w-sm py-4 rounded-xl text-lg font-medium transition-all
          ${hours > 0
                        ? 'bg-white text-black hover:bg-white/90 active:scale-[0.98]'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
            >
                Continue
            </button>
        </div>
    );
}
