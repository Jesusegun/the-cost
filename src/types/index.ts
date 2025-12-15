/**
 * Core type definitions for The Cost application.
 * These types are immutable - do not modify pillar names or enum values.
 */

/** The five life pillars - these are constants, never change them */
export type Pillar = "Faith" | "Wealth" | "Impact" | "Growth" | "Relationships";

/** Verdict options after viewing the cost */
export type Verdict = "accepted" | "redeemed";

/** A single log entry representing one session */
export interface LogEntry {
    /** Unique identifier (UUID) */
    id: string;
    /** Date in YYYY-MM-DD format */
    date: string;
    /** Hours lost to distraction (0-12, step 0.25) */
    hoursLost: number;
    /** The pillar that was displaced */
    victimPillar: Pillar;
    /** Calculated cost value (formula depends on pillar) */
    calculatedCost: number;
    /** Human-readable cost label (e.g., "prayer blocks", "₦ lost") */
    costLabel: string;
    /** User's choice: accept the loss or redeem the rest */
    verdict: Verdict;
    /** Unix timestamp of creation */
    createdAt: number;
}

/** Session state during the flow (before logging) */
export interface SessionState {
    hoursLost: number | null;
    victimPillar: Pillar | null;
    calculatedCost: number | null;
    costLabel: string | null;
}

/** Pillar configuration for UI and calculations */
export interface PillarConfig {
    name: Pillar;
    icon: string;
    description: string;
    color: string;
    bgColor: string;
    /** Calculate cost from hours */
    calculateCost: (hours: number) => number;
    /** Get the cost unit label */
    costLabel: string;
    /** Primary sentence template (use {cost} placeholder) */
    primaryCopy: string;
    /** Secondary sentence */
    secondaryCopy: string;
    /** Consequence sentence */
    consequenceCopy: string;
    /** Suggested action for redemption */
    redemptionAction: string;
}
