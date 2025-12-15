/**
 * Screen 4: Verdict
 * Goal: Turn pain into choice.
 * 
 * The buttons are moral exits, not UI controls.
 * - No success state
 * - No completion feeling
 * - No celebratory language
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Pillar, Verdict as VerdictType } from '@/types';
import { PILLAR_CONFIGS } from '@/lib/pillars';
import { saveEntry, getTodayDate } from '@/lib/storage';

interface VerdictProps {
    hours: number;
    pillar: Pillar;
    cost: number;
}

export default function Verdict({ hours, pillar, cost }: VerdictProps) {
    const navigate = useNavigate();
    const config = PILLAR_CONFIGS[pillar];
    const [showMicroPrompt, setShowMicroPrompt] = useState(false);
    const [commitment, setCommitment] = useState('');

    const logEntry = (verdict: VerdictType) => {
        saveEntry({
            date: getTodayDate(),
            hoursLost: hours,
            victimPillar: pillar,
            calculatedCost: cost,
            costLabel: config.costLabel,
            verdict
        });
    };

    const handleAccept = () => {
        logEntry('accepted');
        // No animation. No confirmation. Immediate transition.
        navigate('/history');
    };

    const handleRedeem = () => {
        logEntry('redeemed');
        // Show micro-prompt once
        setShowMicroPrompt(true);
    };

    const handleCommitmentSubmit = () => {
        // Don't store - just acknowledge and move on
        navigate('/history');
    };

    const handleSkipCommitment = () => {
        navigate('/history');
    };

    // Micro-prompt modal
    if (showMicroPrompt) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 no-select">
                <div className="w-full max-w-sm">
                    <h2 className="text-xl font-semibold text-white/90 mb-4 text-center">
                        What is one concrete action you will take tonight?
                    </h2>

                    <p className="text-white/50 text-sm text-center mb-6">
                        {config.redemptionAction}
                    </p>

                    <input
                        type="text"
                        value={commitment}
                        onChange={(e) => setCommitment(e.target.value)}
                        placeholder="Optional..."
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 
                       text-white placeholder-white/30 focus:outline-none focus:border-white/20
                       mb-4"
                    />

                    <button
                        onClick={handleCommitmentSubmit}
                        className="w-full py-4 rounded-xl text-lg font-medium 
                       bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all
                       mb-3"
                    >
                        Done
                    </button>

                    <button
                        onClick={handleSkipCommitment}
                        className="w-full py-3 text-white/50 hover:text-white/70 text-sm transition-colors"
                    >
                        Skip
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 no-select">
            <div className="w-full max-w-sm">
                {/* Final line - appears before the choice */}
                <p className="text-white/40 text-center text-sm mb-12">
                    Tomorrow will demand the same choice.
                </p>

                {/* Button A: Accept the loss */}
                <button
                    onClick={handleAccept}
                    className="w-full py-4 rounded-xl text-lg font-medium mb-4
                     bg-transparent border-2 border-wealth text-wealth
                     hover:bg-wealth/10 active:scale-[0.98] transition-all"
                >
                    Accept the loss
                </button>
                <p className="text-white/40 text-xs text-center mb-8">
                    I chose this trade-off today.
                </p>

                {/* Button B: Redeem what's left */}
                <button
                    onClick={handleRedeem}
                    className="w-full py-4 rounded-xl text-lg font-medium
                     bg-amber-600 text-amber-100
                     hover:bg-amber-500 active:scale-[0.98] transition-all"
                >
                    Redeem what's left
                </button>
                <p className="text-white/40 text-xs text-center mt-2">
                    The day is not finished.
                </p>
            </div>
        </div>
    );
}
