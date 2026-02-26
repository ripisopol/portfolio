---
title: "Teaching a Robot to Write My Reports"
date: "2026-02-20"
excerpt: "Automation isn't about replacing the work. It's about replacing the boring part."
tags: ["uipath", "automation", "projects", "rpa"]
draft: false
---

Every shift ends with reports.

Flash report for the WhatsApp group: screenshots of the key dashboards, a caption for each one, sent to the team. End-of-shift report: structured data, everything that happened, formatted into an Excel file and emailed to a distribution list that includes multiple teams, multiple layers of management.

Both reports follow the same structure every time. Same dashboards. Same format. Same recipients. The data changes. The work of producing them doesn't.

I got tired of it. So I built something.

## What it does

I'm going to be precise here because I've seen people oversell their automation projects, and I'd rather be accurate.

**Flash report:**
The robot opens a browser, navigates to each relevant dashboard panel, takes a screenshot, makes an HTTP request to get the current data for that panel, parses the JSON response, and fills in a predetermined caption template with the actual numbers. Output: screenshots with captions, ready to review and send to WhatsApp.

I still send it manually. The content is automated. The send button is mine.

**End-of-shift report:**
The robot makes a series of HTTP requests to pull the shift data, parses the results, and generates a pre-filled HTML email template and an Excel summary. Output: a template I can review, adjust if needed, and send.

Again: I send it. The robot writes the first draft.

## Why I started from scratch

There were existing report templates. There were existing processes. None of them were automated — it was all manual, every time.

I initiated this from zero. Not because I was asked to. Because it was obvious that this could be better, and I had enough UiPath experience from training to think I could build it.

The first version was rough. It broke on anything unexpected — a dashboard timing out, a JSON field with a different name than expected, a browser that loaded slowly. Production systems are less cooperative than training examples.

Fixing those edge cases took most of the time. The happy path is easy. Making something that doesn't fall over in the middle of a shift is harder.

## What I learned about automation

**Automation is not magic.** It's encoding a process that a human does into something a machine can follow. The quality of the output depends entirely on how well you understand the process you're automating.

**The manual step isn't failure.** I still send the reports manually. Some people would see that as incomplete automation. I see it as a quality gate. A human reviews before it goes out. For a report that goes to management, that's probably fine.

**Flexibility is a design choice.** The caption templates are predetermined — they work well for the standard case but need updating when the reporting requirements change. That's a tradeoff I made consciously: simpler to build, less flexible to change.

**Starting is the hard part.** The technical work was learnable. The harder thing was deciding to start, figuring out what the first useful version would look like, and shipping something imperfect that people could actually use.

## What's next

The obvious improvement is making the send step automatic too. HTTP requests to the WhatsApp API for flash reports, direct email sending for the end-of-shift report. The data pipeline is already there — it's just the last step that's manual.

I'll get there. Probably.

---

*Built with UiPath Studio, HTTP Request activities, and a strong preference for not writing the same caption twelve times a week.*
