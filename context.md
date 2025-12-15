
1. Product Definition

Name (working): The Cost
Purpose: Make distraction time emotionally expensive by tying it to the specific life pillar it displaced.
Target user: One person. You.
Core behavior change lever: Forced acknowledgment of loss + choice to redeem.

This is not a productivity tracker. It is a consequence engine.

2. Core Pillars (Fixed Constants)
Faith
Wealth
Impact
Growth
Relationships


These never change. They are first-class citizens in the system.

3. Full App Flow
Screen 1. Reality Input

Goal: Confront raw behavior.

UI

Title. “How much time did you lose today?”

Numeric input or slider.

Range. 0 to 12 hours.

Step. 0.25.

Label. “WhatsApp or distraction time today (hours)”

CTA. “Continue”

Rules

Cannot proceed without a value.

No auto tracking. Manual input is intentional friction.

Screen 2. Victim Pillar Selection

Goal: Force ownership.

UI

Prompt. “Which pillar did this time replace?”

5 large buttons. One per pillar.

Each button has:

Icon.

One-line description.

Example:

Wealth. “Deep work, skill building, income.”

Rules

Exactly one pillar must be selected.

No skipping.

Screen 3. Cost Calculation (Focused)

Goal: Emotional impact.

Critical rule

Only the selected pillar screams. Everything else shuts up.

UI

Large red headline.

Example for Wealth:

YOU LOST ₦18,000 OF DEEP WORK TIME


Subtext.

4.5 hours redirected away from Wealth.


Other pillars

Hidden by default.

Optional toggle. “Show full breakdown” if you ever want it.

Cost logic examples
These are configurable constants, not facts.

Wealth

Hourly value you define. Example ₦4,000 per hour.

Growth

Pages per hour. Example 25 pages.

Faith

Prayer or scripture blocks. Example 30-minute blocks.

Relationships

Meaningful conversation units. Example 1 per hour.

Impact

Initiative work blocks. Example 1 hour per unit.

No pretending these are objectively true. They are personal proxies.

Screen 4. Verdict

Goal: Turn pain into choice.

Buttons

Accept the Loss

Color. Red.

Meaning. “Today is gone. I acknowledge it.”

Redeem the Rest

Color. Green or gold.

Meaning. “I will still act today.”

Optional

If Redeem is chosen.

Show one suggested action tied to the pillar.

Wealth. “Do 30 minutes of focused work.”

Faith. “Pray or read Scripture for 15 minutes.”

No reminders. No nagging. The choice itself matters.

Screen 5. History and Trends

Goal: Pattern awareness, not shame.

Views

Last 7 days list:

Date.

Hours lost.

Victim pillar.

Verdict. Accepted or Redeemed.

Weekly totals:

Total hours lost.

Loss by pillar.

Simple bar chart.

No streaks. No gamification.

4. Data Model (Local First)
Entry Record
{
  id: string,
  date: string, // YYYY-MM-DD
  hoursLost: number,
  victimPillar: "Faith" | "Wealth" | "Impact" | "Growth" | "Relationships",
  calculatedCost: number,
  verdict: "accept" | "redeem",
  createdAt: number
}

Settings
{
  wealthHourlyValue: number,
  pagesPerHour: number,
  prayerBlockMinutes: number,
  relationshipUnitPerHour: number
}


Stored in localStorage.

5. Cost Calculation Logic

Pseudo-logic:

switch (victimPillar) {
  case "Wealth":
    cost = hoursLost * wealthHourlyValue
    label = "₦ lost"
    break

  case "Growth":
    cost = hoursLost * pagesPerHour
    label = "pages not read"
    break

  case "Faith":
    cost = (hoursLost * 60) / prayerBlockMinutes
    label = "prayer blocks missed"
    break

  case "Relationships":
    cost = Math.floor(hoursLost * relationshipUnitPerHour)
    label = "meaningful connections skipped"
    break

  case "Impact":
    cost = hoursLost
    label = "initiative hours delayed"
}

6. Tech Stack
Frontend

React with Vite

TypeScript

Tailwind CSS

Lucide-react for icons

State

React state for session.

localStorage for persistence.

Charts

Recharts or lightweight SVG bars.

PWA

Vite PWA plugin.

Offline first.

Installable on Android.

Deployment

Vercel

No backend. No auth. No Supabase for MVP.

7. Architecture Principles

Local first.

Offline capable.

No accounts.

No analytics.

No notifications.

Friction is intentional.

Manual input is a feature.

Core Pillars. System-Level Definitions

These pillars are not motivational slogans.
They are value axes against which time is judged.

The app assumes that every hour spent either strengthens or weakens one or more of these pillars. There is no neutral time.

1. Faith

Definition:
A deep, lived, and growing relationship with Jesus. Not performative. Not rushed. Not outsourced.

What this pillar represents in the system:

Prayer.

Scripture reading and meditation.

Silence, reflection, obedience.

Alignment of actions with Christian conviction.

Why it exists:
Without this pillar, every other pillar becomes misaligned. Wealth without faith becomes empty. Impact without faith becomes ego-driven. Growth without faith becomes pride.

In the app:
When Faith is selected as the victim pillar, the system frames distraction as:

Missed prayer blocks.

Missed time of spiritual alignment.

Drift away from intentional spiritual discipline.

The app does not judge spirituality.
It only shows time displaced from devotion.

2. Wealth

Definition:
Building financial capacity, leverage, and freedom. Not survival money. Not comfort alone. Actual wealth.

What this pillar represents in the system:

Deep work.

Skill acquisition.

Business building.

Income-generating focus.

Long-term financial independence.

Why it exists:
Wealth is not the goal. Wealth is capacity. It funds impact, generosity, freedom, and options.

In the app:
When Wealth is selected as the victim pillar, the system translates distraction into:

Lost deep work hours.

Lost billable or leverage time.

Missed compounding effort.

This is why Wealth costs should be shown loudly and concretely.
Money is one of the few things the brain immediately understands as loss.

3. Impact

Definition:
Positively influencing lives at scale, starting locally and expanding outward. Eventually millions.

What this pillar represents in the system:

Campus initiatives.

Resource banks.

Mentorship programs.

Structural solutions to real problems.

Leadership and service.

Why it exists:
A meaningful life is not lived inward. Impact is the outward expression of Faith, Growth, and Wealth.

In the app:
When Impact is the victim pillar, distraction is framed as:

Delayed initiatives.

Postponed solutions.

Slowed momentum on things that help others.

The cost is not emotional guilt.
It is opportunity delayed.

4. Growth

Definition:
Becoming a reader. Becoming thoughtful. Expanding capacity to think clearly, deeply, and independently.

What this pillar represents in the system:

Reading books.

Learning intentionally.

Mental clarity.

Long-term intellectual formation.

Why it exists:
You cannot lead people or systems beyond the level of your thinking. Growth compounds silently but powerfully.

In the app:
When Growth is selected as the victim pillar, distraction becomes:

Pages not read.

Learning postponed.

Shallow consumption replacing deep input.

This pillar exists to counter cognitive clutter and mental stagnation.

5. Relationships

Definition:
Building deep, real, meaningful relationships that are not sacrificed on the altar of ambition.

What this pillar represents in the system:

Presence.

Listening.

Intentional conversations.

Emotional availability.

Long-term relational trust.

Why it exists:
Goals achieved at the cost of relationships are failures in disguise. Isolation is not success.

In the app:
When Relationships is the victim pillar, distraction is framed as:

Missed conversations.

Emotional absence.

Choosing shallow digital interaction over real connection.

This pillar ensures the system never rewards lonely success.

Why the Pillars Matter to the App

The app does not measure productivity.
It measures misalignment.

Every session asks one brutal question:

“Which part of the future you say you want did you trade this time away from?”

That is the entire system.

Instruction to Coding Agents

Pillars are constants. Do not rename them.

Pillars are value-based, not task-based.

Cost calculations are symbolic proxies, not objective truth.

UI must emphasize the selected pillar above all others.

Avoid neutral language. The system is meant to confront, not comfort.


1. Why Locking Defaults Matters

When every number is adjustable early on, the mind does not reflect. It negotiates.

Instead of confronting behavior, you begin debating values.
Instead of feeling cost, you optimize the system.
Instead of reality, you get abstraction.

The result is predictable. The app becomes theoretical, not visceral.

Locked defaults create three things immediately:

Consistency. The same behavior produces the same consequence every day.

Emotional conditioning. Repeated exposure to fixed costs trains instinctive aversion.

Fast decision loops. No debating numbers. Only accepting or rejecting reality.

Defaults can always be unlocked later.
Early ambiguity kills adoption, even for solo tools.

2. Design Principle for Cost Values

Cost values are not accounting figures.
They are psychological proxies.

They should be:

Simple.

Slightly uncomfortable.

Easy to compute mentally.

Directionally meaningful, not precise.

Their purpose is to represent opportunity cost, not accuracy.
Precision reduces emotional impact. Meaning increases it.

3. Locked Default Cost Values (V1)
Faith

Unit: Prayer blocks
Definition: 30 minutes per block

Rule:
1 hour lost = 2 prayer blocks missed

Reasoning:
Thirty minutes is realistic and attainable.
It frames faith as time set apart, not vague spirituality.
It avoids emotional exaggeration while remaining concrete.

Wealth

Unit: Monetary value
Default hourly value: ₦4,000

Rule:
Cost = hours lost × ₦4,000

Reasoning:
This amount is high enough to sting without being absurd.
It reflects capacity building, not current income.
The number is intentionally conservative. The pain comes from repetition, not scale.

Impact

Unit: Days delayed

Rule:
1 hour lost = 0.125 days delayed

Reasoning:
Impact is nonlinear and fragile.
Monetizing it would cheapen it.
Time delay is the most honest proxy.

This frames impact loss as momentum erosion, not moral failure.

Growth

Unit: Pages not read
Default reading rate: 25 pages per hour

Rule:
Pages lost = hours × 25

Reasoning:
This matches focused non-fiction reading.
Pages are tangible and visual.
“112 pages not read” lands harder than “learning delayed.”

It reinforces identity. I am a reader.

Relationships

Unit: Meaningful conversations

Rule:
1 hour lost = 1 meaningful connection missed

Reasoning:
Depth requires time.
This discourages shallow interaction substitution.
It reinforces presence over quantity.

This strictness is intentional. Relationships decay quietly.

4. Color Language per Pillar

Color is not decoration. It is conditioning.

Global Rules

The selected pillar dominates the screen.

One primary color per pillar.

Cost screens use intensity, not brightness.

Faith

Color: Deep blue or indigo
Meaning: Reverence, depth, stillness

Use:
Calm background.
High contrast cost text.
No aggressive red.

Faith loss should feel sobering, not panicking.

Wealth

Color: Red with dark accents
Meaning: Loss, urgency, consequence

Use:
Large red cost text.
Sharp contrast.
Minimal softness.

This is where emotional punch matters most.

Impact

Color: Amber or burnt orange
Meaning: Urgency, responsibility, action

Use:
Warning-like tone.
Signals delay, not failure.

Feels like something important is waiting.

Growth

Color: Muted green
Meaning: Life, compounding, continuity

Use:
Desaturated green tones.
Calm but firm.
Never neon.

Growth loss should feel like neglect, not danger.

Relationships

Color: Purple or warm rose
Meaning: Depth, connection, intimacy

Use:
Soft but serious tones.
Emotionally uncomfortable, not playful.

This pillar should feel personal, not transactional.

5. One Critical UX Rule

Do not mix pillar colors on the cost screen.

One pillar.
One color.
One message.


Below is sentence-level copy for Screen 3. This is not motivational language. It is confrontational, precise, and non-negotiable. Each sentence is designed to close escape routes in the mind.

General rules applied here:

Short sentences.

Declarative tone.

No metaphors.

No softening words.

No self-talk like “could have.” Use “you did.”

GLOBAL STRUCTURE FOR SCREEN 3 COPY

Each pillar follows the same 3-line structure:

Statement of loss. What was lost.

Statement of substitution. What replaced it.

Statement of consequence. What that means if repeated.

Consistency builds conditioning.

FAITH

Primary sentence (large text):
“You missed 6 prayer blocks today.”

Secondary sentence:
“That time was given to distraction instead of stillness.”

Consequence sentence (small, muted):
“If this repeats, silence becomes unfamiliar.”

Why this works:

“Missed” implies absence without moral panic.

“Stillness” frames faith as posture, not performance.

The consequence is identity erosion, not guilt.

WEALTH

Primary sentence (large, red):
“You lost ₦16,000 in productive capacity today.”

Secondary sentence:
“This time was taken from building income and leverage.”

Consequence sentence (small, muted):
“Repeated losses compound faster than you expect.”

Why this works:

“Productive capacity” avoids salary thinking.

“Taken from” removes neutrality.

The warning is factual, not threatening.

IMPACT

Primary sentence (large, amber):
“You pushed this initiative back by 0.5 days.”

Secondary sentence:
“Momentum was broken, not paused.”

Consequence sentence (small, muted):
“Delays stack until urgency replaces vision.”

Why this works:

Deadlines hurt more than hours.

“Broken, not paused” kills self-justification.

Vision loss is more painful than failure.

GROWTH

Primary sentence (large, muted green):
“You did not read 112 pages today.”

Secondary sentence:
“This time was exchanged for low-return stimulation.”

Consequence sentence (small, muted):
“Neglect compounds quietly.”

Why this works:

“Did not read” is plain and undeniable.

“Low-return” reframes distraction economically.

Quiet decay feels truer than loud failure.

RELATIONSHIPS

Primary sentence (large, rose or purple):
“You missed 4 meaningful conversations today.”

Secondary sentence:
“Text replaced presence.”

Consequence sentence (small, muted):
“Distance grows without being noticed.”

Why this works:

“Meaningful” raises the standard.

The substitution is blunt.

Distance is emotional, not numeric.

OPTIONAL FINAL LINE (ALL PILLARS)

Appears only after logging.

“Tomorrow will demand the same choice.”

This prevents closure relief. The system stays open-ended.

ONE IMPORTANT WARNING

Do not rotate copy daily.
Do not personalize phrasing.
Do not soften language over time.

Repetition is the point.
The brain learns faster from sameness than novelty.




The buttons are not UI controls. They are moral exits. Their wording determines whether the user feels relief or responsibility.

1. Core Principle for Action Buttons

The buttons must not:



Encourage self-forgiveness.

Signal completion.

Reduce tension.

They must:



Force ownership.

Preserve psychological weight.

Point forward without comfort.

No celebratory language. No productivity jargon.

2. Button Set. Final Copy

Button A. Accept the Loss

Label:



“Accept the loss”

Subtext. Small. Muted:



“I chose this trade-off today.”

Behavior:



Logs the data.

No animation.

No confirmation message.

Immediate transition to history or close.

Why this works:



“Accept” implies consent, not accident.



“Loss” is not softened.



No feedback avoids emotional release.

This button should feel like signing a document.

Button B. Redeem the Rest of the Day

Label:



“Redeem what’s left”

Subtext. Small. Muted:



“The day is not finished.”

Behavior:



Logs the data with a different state.

Immediately shows the selected pillar again.

Optional small prompt. See below.

Why this works:



“Redeem” implies cost already paid.



It does not erase the loss.



It frames action as recovery, not restart.

This button should feel heavier than it looks.

3. Optional Micro Prompt After “Redeem”

This appears once. Not every time.

Prompt text:



“What is one concrete action you will take tonight?”

Input:



Single-line. Optional. No validation.

Why:



This is not planning.



It is commitment articulation.



Writing even five words increases follow-through.

Do not store this forever.



Show it once. Then discard or archive quietly.

4. What You Must Not Do

Do not add:



“Good job”

“You can do better”

Streaks

Fire emojis

Motivational quotes

Those convert responsibility into dopamine.

This system is not a coach.



It is a mirror.

5. Final UX Rule for This Screen

No success state.

Whether the user accepts the loss or redeems the rest, the app should never feel “complete.”

Completion is the enemy of return.


I am building a brutally honest personal web app called "The Cost".

1. CORE PHILOSOPHY
This is a mirror, not a planner.
- No morning commitments.
- No notifications.
- No "streaks".
- The goal is visceral confrontation with time wasted on WhatsApp.

2. TECH STACK (The 48-Hour Sprint)
- Framework: React (Vite) + TypeScript.
- Styling: Tailwind CSS.
- Components: Shadcn/UI (for Sliders, Buttons, Cards ONLY).
- Persistence: localStorage (No backend for V1).
- Platform: Mobile-first Web PWA.

3. DATA MODEL (Immutable)
- Pillars (Hardcoded Enum): Faith, Wealth, Impact, Growth, Relationships.
- Log Entry: { id: string, date: string, hours: number, pillar: string, status: 'accepted' | 'redeemed' }

4. THE FLOW (4 Screens ONLY)

SCREEN 1: THE INPUT (The Reality)
- Header: Static Icons of the 5 Pillars.
- Center: Large Input/Slider "Time on WhatsApp today?".
- No judgment yet. Just the number.

SCREEN 2: THE CONFLICT (The Choice)
- Prompt: "Which goal did this time replace?"
- Action: Grid of the 5 Pillars. User MUST click one.
- This forces the user to admit theft.

SCREEN 3: THE COST (The Pain)
- Display the specific cost formula for that pillar:
  - Faith: Hours / 0.5 = "X Prayer blocks missed"
  - Wealth: Hours * 4000 = "₦X Productive capacity lost"
  - Impact: Hours = "Initiative delayed by 0.X days"
  - Growth: Hours * 25 = "X Pages not read"
  - Relationships: Hours = "X Meaningful conversations missed"
- Color Logic:
  - Faith: Indigo | Wealth: Red | Impact: Amber | Growth: Muted Green | Relationships: Rose.

SCREEN 4: THE VERDICT (The Exit)
- Button A (Ghost, Red Border): "Accept the loss" (Logs as 'accepted').
- Button B (Solid, Gold Text): "Redeem what's left" (Logs as 'redeemed').
- Action: Both save to localStorage and show the History view.

SCREEN 5: HISTORY (The Ledger)
- Simple list of last 7 days.
- Row format: [Date] [Hours] [Pillar Icon] [Status Color].
- No charts. No summaries. Just the raw log.

5. AGENT RULES
- Do not add "Features".
- Do not add "User Profiles".
- Do not suggest "Gamification".
- Focus purely on the UI/UX of the confrontation.
- Use the specific copy provided above for the costs.


