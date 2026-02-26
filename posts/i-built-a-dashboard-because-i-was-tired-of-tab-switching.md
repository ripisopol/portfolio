---
title: "I Built a Dashboard Because I Was Tired of Tab-Switching"
date: "2026-02-10"
excerpt: "The problem wasn't that the alerts were hard to understand. It was that they were in four different places."
tags: ["projects", "python", "noc", "tools"]
draft: false
---

Every NOC has too many tools.

We have OPmanager. We have Grafana. We have a ticketing system. We have a separate system for escalations. When something goes wrong, you're checking all of them, cross-referencing, trying to build a picture from fragments spread across four browser tabs.

Most of the time, 80% of those alerts are fine. They're noise. They're systems running slightly warm, services that always show yellow, dashboards with thresholds that were set too tight three years ago and nobody adjusted them.

The actual problems — the things that need attention — are buried in the noise.

## The idea

I wanted one place that showed me only the things that were actually wrong.

Not a replacement for the existing tools. Just a funnel. Something that queried the APIs, applied some threshold logic, and surfaced only the degraded or down services. Healthy things would be hidden by default. You could toggle them back if you needed to, but the default view would be: *here's what needs your attention right now.*

It should also show history. Not just "this is down now" but "this went down 40 minutes ago, it came back briefly, then went down again." Context matters when you're writing an escalation ticket.

And it should make the ticket easier to write. We write the same structure every incident. Service name, time down, symptoms, what we tried, severity. I wanted a template pre-filled with the relevant details so the actual work was reviewing and sending, not typing from scratch.

## How it was built

Honestly: with a lot of AI help.

I'm not a developer. I know enough Python to be dangerous, enough to read code and understand what it's doing, enough to debug when something breaks. But I wouldn't have built this from scratch alone at the speed I did without AI assistance.

The process was roughly: describe what I wanted, get a working draft, test it against our actual data, fix what was wrong, iterate. A lot of the work was in understanding the APIs — both OPmanager and Grafana expose data through HTTP endpoints, and figuring out the right queries took some digging. Browser devtools network inspection was involved. Not the most elegant approach but it worked.

The threshold logic was the part I contributed most directly. I knew what "normal" looked like from months of watching these systems. Encoding that into rules — this value at this level means warning, this level means down, this combination means escalate — that came from experience, not from AI.

## What happened when the team used it

Adoption was gradual. I showed it to a few people, they tried it, it made their shift slightly easier. Word spread. Now it's just part of how the team works.

The ticket template turned out to be more useful than I expected. Not just for speed — for consistency. Every escalation going to L2 now has the same structure, the same information in the same place. L2 said it makes their life easier too. That was good to hear.

## What I'd do differently

The code is not clean. It was built fast, iteratively, to solve a specific problem. It works, but it's not something I'd show as an example of good software engineering.

If I rebuilt it properly I'd:
- Write actual tests
- Make the threshold configuration external so non-developers can adjust it
- Add proper error handling for when the APIs are unavailable
- Make it not localhost-only

The last one is the big one. Right now it runs on my machine. That's a problem. If I'm not in, nobody can use it. Making it properly hosted is on the list.

## Is this DevOps

Not exactly. But it's in the same territory: understanding systems well enough to build tooling that makes them easier to operate. That's a skill I want to keep developing.

The most useful thing I learned from this project wasn't Python or APIs. It was that the people closest to a problem often have the best ideas for solving it — they just don't always have the tools to build the solution themselves. Sometimes the gap isn't technical skill, it's just getting started.

---

*The dashboard is internal and not publicly available. Stack: Python, REST APIs, a lot of AI assistance, and about three weeks of lunch breaks.*
