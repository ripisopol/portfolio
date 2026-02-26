---
title: "What NOC Support Actually Looks Like"
date: "2026-02-01"
excerpt: "The job description says 'monitor systems.' What it doesn't mention is everything else."
tags: ["noc", "ops", "career"]
draft: false
---

The job posting said: *Monitor network, systems, servers, and applications. Perform initial diagnosis. Escalate per SOP.*

That's accurate. It's also missing about 70% of what the job actually is.

## What the shift actually looks like

You show up, get briefed by the outgoing shift on what's on fire, what's smouldering, and what's been making a weird noise for three days but nobody knows why. You write this down. This is the handover. It is sacred.

Then you open your tools. OPmanager. Grafana. Whatever ticketing system the client uses. You start watching.

Most of the time, nothing happens. This is fine. This is the job. Monitoring is 80% watching nothing and 20% reacting to something. The ratio is worse on a good day.

When something does happen — an alert fires, a dashboard goes red, someone calls in — the process is:

1. Look at it. Is it real? Alerts lie. Dashboards glitch. Sometimes the monitoring system is the thing that's broken.
2. If it's real: how bad is it? Is one service down or is everything down? Is it getting worse?
3. Document what you see. Timestamp. What's affected. What you did.
4. Follow the SOP. Usually this means: try the basic fix, if it doesn't work in X minutes, escalate to L2.
5. Escalate. Write a proper ticket. Not "it's down." Write what's down, since when, what you tried, what the error says.
6. Keep watching. Update the ticket. Communicate to stakeholders.
7. When it's resolved: document the resolution. Brief the next shift.

That's the loop. Repeat for 8 hours.

## What makes it hard

It's not technically hard. Most of the hard part is soft skills.

**Pattern recognition takes time.** In the first few weeks, every alert looks equally alarming. Over time you develop a sense for what's normal noise versus what actually needs attention. This is not in the documentation.

**The runbook is never complete.** SOPs cover the common cases. Reality invents new cases constantly. You have to decide when to follow the runbook and when the situation has gone far enough off-script that you need to use judgment.

**Escalation is a skill.** Escalating too early wastes L2's time and teaches them to ignore you. Escalating too late means the problem got worse while you were trying to fix it yourself. Getting the timing right is learned, not taught.

**Documentation is the actual job.** The best NOC engineer I've seen wasn't the fastest or the most technically skilled. He was the most thorough with documentation. Every incident was logged clearly. Every action was timestamped. When something came back three months later, we could read exactly what happened last time.

## What I actually do

At Bank Jakarta, the infrastructure I'm watching includes network, servers, applications — across a real bank. Real transactions. Real customers. When something breaks it's not abstract.

My job as L1 is not to fix it. It's to:

- Catch it as early as possible
- Diagnose well enough to give L2 something useful
- Escalate at the right time with the right information
- Keep communicating until it's resolved
- Make sure the next shift knows what happened

I built a dashboard that helps with the first two — but that's a different post.

## Is it a good job

Honestly? It's a good foundation. You see a lot of different systems. You develop calm under pressure. You learn what "production" actually means when something breaks in it.

It's not glamorous. There's a lot of shift work, a lot of waiting, and a lot of copy-pasting the same information into different systems. That last problem I solved, partially. Again — different post.

If you're trying to get into infrastructure or DevOps, NOC is a real path. You see how things fail. That's underrated knowledge.

---

*This is based on my experience at Bank Jakarta as NOC Support L1. Your NOC may vary.*
