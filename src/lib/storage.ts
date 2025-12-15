/**
 * localStorage persistence layer for The Cost.
 * All data is stored locally - no backend, no sync.
 */

import type { LogEntry } from '@/types';

const STORAGE_KEY = 'the-cost-entries';

/**
 * Generate a UUID for log entries.
 */
function generateId(): string {
    return crypto.randomUUID();
}

/**
 * Get today's date in YYYY-MM-DD format.
 */
export function getTodayDate(): string {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

/**
 * Save a new entry to localStorage.
 * @param entry - Partial entry (id and createdAt will be generated)
 */
export function saveEntry(entry: Omit<LogEntry, 'id' | 'createdAt'>): LogEntry {
    const entries = getEntries();

    const newEntry: LogEntry = {
        ...entry,
        id: generateId(),
        createdAt: Date.now()
    };

    entries.push(newEntry);

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (error) {
        console.error('Failed to save entry to localStorage:', error);
    }

    return newEntry;
}

/**
 * Get all entries from localStorage.
 * @returns Array of log entries, sorted by createdAt descending
 */
export function getEntries(): LogEntry[] {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return [];

        const entries: LogEntry[] = JSON.parse(data);
        return entries.sort((a, b) => b.createdAt - a.createdAt);
    } catch (error) {
        console.error('Failed to read entries from localStorage:', error);
        return [];
    }
}

/**
 * Get entries from the last 7 days.
 * @returns Array of log entries from the past week
 */
export function getLast7DaysEntries(): LogEntry[] {
    const entries = getEntries();
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);

    return entries.filter(entry => entry.createdAt >= sevenDaysAgo);
}

/**
 * Get entries for a specific date.
 * @param date - Date in YYYY-MM-DD format
 */
export function getEntriesForDate(date: string): LogEntry[] {
    const entries = getEntries();
    return entries.filter(entry => entry.date === date);
}

/**
 * Check if there's already an entry for today.
 */
export function hasTodayEntry(): boolean {
    const today = getTodayDate();
    const entries = getEntriesForDate(today);
    return entries.length > 0;
}

/**
 * Clear all entries (for development/testing only).
 */
export function clearAllEntries(): void {
    localStorage.removeItem(STORAGE_KEY);
}
