/**
 * Screen 3: Cost Display
 * Goal: Emotional impact through confrontation.
 * 
 * Critical rules:
 * - Only the selected pillar screams
 * - One pillar. One color. One message.
 * - 3-line structure: Primary → Secondary → Consequence
 */

import { useNavigate } from 'react-router-dom';
import type { Pillar } from '@/types';
import { PILLAR_CONFIGS, getPrimaryCopy } from '@/lib/pillars';

interface CostDisplayProps {
    hours: number;
    pillar: Pillar;
    cost: number;
}

const PILLAR_THEMES: Record<Pillar, { bg: string; text: string; accent: string }> = {
    Faith: {
        bg: 'bg-faith-bg',
        text: 'text-faith-light',
        accent: 'text-faith'
    },
    Wealth: {
        bg: 'bg-wealth-bg',
        text: 'text-wealth-light',
        accent: 'text-wealth'
    },
    Impact: {
        bg: 'bg-impact-bg',
        text: 'text-impact-light',
        accent: 'text-impact'
    },
    Growth: {
        bg: 'bg-growth-bg',
        text: 'text-growth-light',
        accent: 'text-growth'
    },
    Relationships: {
        bg: 'bg-relationships-bg',
        text: 'text-relationships-light',
        accent: 'text-relationships'
    }
};

export default function CostDisplay({ hours, pillar, cost }: CostDisplayProps) {
    const navigate = useNavigate();
    const config = PILLAR_CONFIGS[pillar];
    const theme = PILLAR_THEMES[pillar];
    const primaryCopy = getPrimaryCopy(pillar, cost);

    const handleContinue = () => {
        navigate('/verdict');
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-between px-6 py-12 no-select ${theme.bg}`}>
            {/* Empty header space for balance */}
            <div className="h-8" />

            {/* Cost Message - 3-line structure */}
            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm">
                {/* Primary sentence - large, screaming */}
                <h1 className={`text-3xl md:text-4xl font-bold leading-tight mb-6 ${theme.text}`}>
                    {primaryCopy}
                </h1>

                {/* Secondary sentence - what replaced it */}
                <p className="text-white/70 text-lg mb-4">
                    {config.secondaryCopy}
                </p>

                {/* Consequence sentence - small, muted */}
                <p className="text-white/40 text-sm">
                    {config.consequenceCopy}
                </p>
            </div>

            {/* Context info */}
            <div className="text-center mb-8">
                <p className={`text-sm ${theme.accent} opacity-60`}>
                    {hours} {hours === 1 ? 'hour' : 'hours'} redirected away from {pillar}
                </p>
            </div>

            {/* Continue button */}
            <button
                onClick={handleContinue}
                className={`w-full max-w-sm py-4 rounded-xl text-lg font-medium 
          bg-white/10 text-white/80 hover:bg-white/15 active:scale-[0.98] transition-all
          border border-white/10`}
            >
                Continue
            </button>
        </div>
    );
}
