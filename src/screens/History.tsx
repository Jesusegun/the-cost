/**
 * Screen 5: History (The Ledger)
 * Goal: Pattern awareness, not shame.
 * 
 * Rules:
 * - Last 7 days only
 * - No charts, no summaries, no streaks
 * - Just the raw log
 */

import { useNavigate } from 'react-router-dom';
import { Church, Banknote, Users, BookOpen, Heart, Plus, LucideIcon } from 'lucide-react';
import type { Pillar, LogEntry } from '@/types';
import { getLast7DaysEntries } from '@/lib/storage';

const ICONS: Record<Pillar, LucideIcon> = {
    Faith: Church,
    Wealth: Banknote,
    Impact: Users,
    Growth: BookOpen,
    Relationships: Heart
};

const PILLAR_COLORS: Record<Pillar, string> = {
    Faith: 'text-faith',
    Wealth: 'text-wealth',
    Impact: 'text-impact',
    Growth: 'text-growth',
    Relationships: 'text-relationships'
};

function formatDate(dateString: string): string {
    // Get today and yesterday as YYYY-MM-DD strings to avoid timezone issues
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (dateString === todayStr) return 'Today';
    if (dateString === yesterdayStr) return 'Yesterday';

    // Parse for display (add time to avoid UTC issues)
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function EntryRow({ entry }: { entry: LogEntry }) {
    const Icon = ICONS[entry.victimPillar];
    const color = PILLAR_COLORS[entry.victimPillar];

    return (
        <div className="flex items-center justify-between py-4 border-b border-white/5">
            <div className="flex items-center gap-4">
                {/* Pillar icon */}
                <div className={`p-2 rounded-lg bg-white/5 ${color}`}>
                    <Icon className="w-5 h-5" />
                </div>

                {/* Date and hours */}
                <div>
                    <div className="text-white/80 text-sm font-medium">
                        {formatDate(entry.date)}
                    </div>
                    <div className="text-white/40 text-xs">
                        {entry.hoursLost} {entry.hoursLost === 1 ? 'hour' : 'hours'} lost
                    </div>
                </div>
            </div>

            {/* Verdict indicator */}
            <div className={`text-xs font-medium px-3 py-1 rounded-full
        ${entry.verdict === 'redeemed'
                    ? 'bg-amber-600/20 text-amber-400'
                    : 'bg-wealth/20 text-wealth-light'
                }`}>
                {entry.verdict === 'redeemed' ? 'Redeemed' : 'Accepted'}
            </div>
        </div>
    );
}

export default function History() {
    const navigate = useNavigate();
    const entries = getLast7DaysEntries();

    const handleNewEntry = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col px-6 py-12 no-select">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-semibold text-white/90">
                    The Ledger
                </h1>
                <button
                    onClick={handleNewEntry}
                    className="p-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/15 
                     active:scale-[0.95] transition-all"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            {/* Subtitle */}
            <p className="text-white/40 text-sm mb-6">
                Last 7 days
            </p>

            {/* Entries list */}
            {entries.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-white/30 text-center">
                        No entries yet.<br />
                        Start by logging today.
                    </p>
                </div>
            ) : (
                <div className="flex-1">
                    {entries.map((entry) => (
                        <EntryRow key={entry.id} entry={entry} />
                    ))}
                </div>
            )}

            {/* No summary. No totals. Just the raw log. */}
        </div>
    );
}
