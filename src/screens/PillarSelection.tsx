/**
 * Screen 2: Pillar Selection
 * Goal: Force ownership - which pillar did this time replace?
 * This forces the user to admit theft.
 */

import { useNavigate } from 'react-router-dom';
import { Church, Banknote, Users, BookOpen, Heart, LucideIcon } from 'lucide-react';
import type { Pillar } from '@/types';
import { PILLAR_CONFIGS } from '@/lib/pillars';

interface PillarSelectionProps {
    hours: number;
    onSelect: (pillar: Pillar) => void;
}

const ICONS: Record<Pillar, LucideIcon> = {
    Faith: Church,
    Wealth: Banknote,
    Impact: Users,
    Growth: BookOpen,
    Relationships: Heart
};

const PILLAR_COLORS: Record<Pillar, { bg: string; border: string; text: string }> = {
    Faith: {
        bg: 'bg-faith-bg hover:bg-faith-bg/80',
        border: 'border-faith/30',
        text: 'text-faith-light'
    },
    Wealth: {
        bg: 'bg-wealth-bg hover:bg-wealth-bg/80',
        border: 'border-wealth/30',
        text: 'text-wealth-light'
    },
    Impact: {
        bg: 'bg-impact-bg hover:bg-impact-bg/80',
        border: 'border-impact/30',
        text: 'text-impact-light'
    },
    Growth: {
        bg: 'bg-growth-bg hover:bg-growth-bg/80',
        border: 'border-growth/30',
        text: 'text-growth-light'
    },
    Relationships: {
        bg: 'bg-relationships-bg hover:bg-relationships-bg/80',
        border: 'border-relationships/30',
        text: 'text-relationships-light'
    }
};

export default function PillarSelection({ hours, onSelect }: PillarSelectionProps) {
    const navigate = useNavigate();

    const handleSelect = (pillar: Pillar) => {
        onSelect(pillar);
        navigate('/cost');
    };

    return (
        <div className="min-h-screen flex flex-col items-center px-6 py-12 no-select">
            {/* Header */}
            <div className="text-center mb-8">
                <p className="text-white/50 text-sm mb-2">
                    {hours} {hours === 1 ? 'hour' : 'hours'} lost
                </p>
                <h1 className="text-2xl font-semibold text-white/90">
                    Which pillar did this time replace?
                </h1>
            </div>

            {/* Pillar Grid */}
            <div className="flex-1 flex flex-col gap-3 w-full max-w-sm">
                {(Object.keys(PILLAR_CONFIGS) as Pillar[]).map((pillar) => {
                    const Icon = ICONS[pillar];
                    const config = PILLAR_CONFIGS[pillar];
                    const colors = PILLAR_COLORS[pillar];

                    return (
                        <button
                            key={pillar}
                            onClick={() => handleSelect(pillar)}
                            className={`w-full p-4 rounded-xl border transition-all active:scale-[0.98]
                ${colors.bg} ${colors.border}
                flex items-center gap-4`}
                        >
                            <div className={`p-3 rounded-lg bg-black/20 ${colors.text}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <div className={`font-semibold ${colors.text}`}>
                                    {pillar}
                                </div>
                                <div className="text-white/50 text-sm">
                                    {config.description}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* No skip option - must select one */}
            <p className="text-white/30 text-xs mt-6">
                You cannot skip this.
            </p>
        </div>
    );
}
