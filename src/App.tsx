/**
 * The Cost - A consequence engine for distraction time.
 * 
 * This is a mirror, not a planner.
 * No morning commitments. No notifications. No streaks.
 * The goal is visceral confrontation with time wasted.
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { Pillar } from '@/types';
import { calculatePillarCost } from '@/lib/pillars';

// Screens
import RealityInput from '@/screens/RealityInput';
import PillarSelection from '@/screens/PillarSelection';
import CostDisplay from '@/screens/CostDisplay';
import Verdict from '@/screens/Verdict';
import History from '@/screens/History';

function App() {
    // Session state - reset on each new entry
    const [hours, setHours] = useState<number>(0);
    const [pillar, setPillar] = useState<Pillar | null>(null);
    const [cost, setCost] = useState<number>(0);

    const handleHoursSubmit = (h: number) => {
        setHours(h);
    };

    const handlePillarSelect = (p: Pillar) => {
        setPillar(p);
        const calculatedCost = calculatePillarCost(p, hours);
        setCost(calculatedCost);
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Screen 1: Reality Input */}
                <Route
                    path="/"
                    element={
                        <RealityInput onSubmit={handleHoursSubmit} />
                    }
                />

                {/* Screen 2: Pillar Selection */}
                <Route
                    path="/select"
                    element={
                        hours > 0 ? (
                            <PillarSelection hours={hours} onSelect={handlePillarSelect} />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />

                {/* Screen 3: Cost Display */}
                <Route
                    path="/cost"
                    element={
                        hours > 0 && pillar ? (
                            <CostDisplay hours={hours} pillar={pillar} cost={cost} />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />

                {/* Screen 4: Verdict */}
                <Route
                    path="/verdict"
                    element={
                        hours > 0 && pillar ? (
                            <Verdict hours={hours} pillar={pillar} cost={cost} />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />

                {/* Screen 5: History */}
                <Route
                    path="/history"
                    element={<History />}
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
