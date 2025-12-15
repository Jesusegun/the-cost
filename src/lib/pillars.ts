/**
 * Pillar configuration with locked defaults.
 * Cost calculations are psychological proxies, not accounting figures.
 * DO NOT modify these values in V1 - consistency builds conditioning.
 */

import type { Pillar, PillarConfig } from '@/types';

/**
 * Locked default cost values (from context.md):
 * - Faith: 30 min per prayer block → 2 blocks per hour
 * - Wealth: ₦4,000 per hour
 * - Impact: 0.125 days per hour (1/8 of a workday)
 * - Growth: 25 pages per hour
 * - Relationships: 1 meaningful conversation per hour
 */

export const PILLAR_CONFIGS: Record<Pillar, PillarConfig> = {
    Faith: {
        name: "Faith",
        icon: "Church",
        description: "Prayer, stillness, alignment",
        color: "text-faith",
        bgColor: "bg-faith-bg",
        calculateCost: (hours: number) => Math.round(hours * 2),
        costLabel: "prayer blocks",
        primaryCopy: "You missed {cost} prayer blocks today.",
        secondaryCopy: "That time was given to distraction instead of stillness.",
        consequenceCopy: "If this repeats, silence becomes unfamiliar.",
        redemptionAction: "Pray or read Scripture for 15 minutes."
    },

    Wealth: {
        name: "Wealth",
        icon: "Banknote",
        description: "Deep work, skill building, income",
        color: "text-wealth",
        bgColor: "bg-wealth-bg",
        calculateCost: (hours: number) => Math.round(hours * 4000),
        costLabel: "₦",
        primaryCopy: "You lost ₦{cost} in productive capacity today.",
        secondaryCopy: "This time was taken from building income and leverage.",
        consequenceCopy: "Repeated losses compound faster than you expect.",
        redemptionAction: "Do 30 minutes of focused work."
    },

    Impact: {
        name: "Impact",
        icon: "Users",
        description: "Initiatives, leadership, service",
        color: "text-impact",
        bgColor: "bg-impact-bg",
        calculateCost: (hours: number) => Number((hours * 0.125).toFixed(2)),
        costLabel: "days delayed",
        primaryCopy: "You pushed this initiative back by {cost} days.",
        secondaryCopy: "Momentum was broken, not paused.",
        consequenceCopy: "Delays stack until urgency replaces vision.",
        redemptionAction: "Spend 30 minutes on one initiative."
    },

    Growth: {
        name: "Growth",
        icon: "BookOpen",
        description: "Reading, learning, clarity",
        color: "text-growth",
        bgColor: "bg-growth-bg",
        calculateCost: (hours: number) => Math.round(hours * 25),
        costLabel: "pages",
        primaryCopy: "You did not read {cost} pages today.",
        secondaryCopy: "This time was exchanged for low-return stimulation.",
        consequenceCopy: "Neglect compounds quietly.",
        redemptionAction: "Read for 20 minutes."
    },

    Relationships: {
        name: "Relationships",
        icon: "Heart",
        description: "Presence, listening, connection",
        color: "text-relationships",
        bgColor: "bg-relationships-bg",
        calculateCost: (hours: number) => Math.floor(hours),
        costLabel: "meaningful conversations",
        primaryCopy: "You missed {cost} meaningful conversations today.",
        secondaryCopy: "Text replaced presence.",
        consequenceCopy: "Distance grows without being noticed.",
        redemptionAction: "Call someone you care about."
    }
};

/** All pillar names in display order */
export const PILLARS: Pillar[] = ["Faith", "Wealth", "Impact", "Growth", "Relationships"];

/**
 * Calculate the cost for a given pillar and hours lost.
 * @param pillar - The victim pillar
 * @param hours - Hours lost to distraction
 * @returns The calculated cost value
 */
export function calculatePillarCost(pillar: Pillar, hours: number): number {
    return PILLAR_CONFIGS[pillar].calculateCost(hours);
}

/**
 * Get the formatted primary copy with cost inserted.
 * @param pillar - The victim pillar
 * @param cost - The calculated cost value
 * @returns Formatted primary sentence
 */
export function getPrimaryCopy(pillar: Pillar, cost: number): string {
    return PILLAR_CONFIGS[pillar].primaryCopy.replace("{cost}", cost.toLocaleString());
}
