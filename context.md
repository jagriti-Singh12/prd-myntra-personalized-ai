# Product Context

## Working Title

Myntra Personalised AI Shopping Assistant

This is an independent product concept and portfolio project inspired by the supplied PRD. It is not an official Myntra product or an affiliated service.

## Problem

Shopping discovery often asks people to repeatedly search, filter, and explain what they want. A one-session assistant can help in the moment, but it does not create lasting value if it cannot progressively learn a shopper's preferences and use them in future interactions.

Myntra needs an agentic shopping experience that can retain relevant preferences, understand current intent, and make discovery feel more like a conversation. The experience should reduce the time spent finding and narrowing down relevant products while remaining part of the existing shopping journey.

## Product Vision

Help shoppers move from an intent, in their own words or media, to relevant product choices through a conversational assistant that learns their preferences over time and makes its actions understandable and recoverable.

## Goals

- Make shopping feel like a conversation.
- Reduce time spent discovering and narrowing down relevant products.
- Progressively understand and retain user preferences to improve future agentic experiences.
- Support shopping tasks submitted by text, image, or voice, with minimal user intervention.

## Non-Goals

- Creating a separate application or standalone shopping experience.
- Requiring a separate screen or application to complete a shopping transaction.
- Replacing the existing Myntra shopping experience with an unrelated destination.

## Opportunity Areas and Priority

| Opportunity | Reach | Impact | Confidence | Effort | PRD priority |
| --- | --- | --- | --- | --- | --- |
| Persistent personalization | Medium | High | High | Medium | P0 |
| Context-aware recommendations | High | High | Medium | Medium | P1 |
| End-to-end shopping tasks | Medium | High | High | High | P1 |

The PRD provides priority labels but no numeric RICE scores; none are inferred here.

## Intended Experience

1. A shopper starts a task using text, an image, or voice.
2. The assistant interprets the current intent and relevant context, such as occasion, budget, style, and remembered preferences.
3. The assistant plans and carries out the shopping steps, asking for input when it needs clarification or permission.
4. The shopper can inspect what the assistant did, see the current status and outcome, and recover or retry the conversation without losing context.
5. With appropriate user controls, useful preference signals inform future recommendations.

This journey is a product framing derived from the PRD, not a confirmed detailed interaction design.

## Success Measures

**North star:** Incremental products sold through the agentic shopping experience.

**Level 1 measures:**

- Number of adoptions.
- Tasks per user.

**Counter metrics:**

- Task drop rate.
- D30 retention / inactivity rate.

The PRD does not define event semantics, attribution, baselines, or target values. Those need to be established before evaluating impact.

## Quality Requirements

- **Performance:** Simple tasks should complete within 45 seconds. Long-running tasks should show progress updates and an estimated completion time.
- **Quality:** Results should satisfy the requested outcome with minimal corrections, retries, or rework.
- **Reliability:** Users should be able to recover, restore, and retrigger chats without losing context.
- **Security:** User data must be encrypted in transit and at rest, with access limited to authorized services and users.
- **Transparency:** Each task should have a clear, user-visible, recoverable activity log showing actions, status, and outcome.
- **Usability:** Common shopping tasks should require minimal conversation and avoid unnecessary navigation or manual steps.

## Assumptions and Open Questions

- What preference data may be retained, for how long, and how can a shopper inspect, edit, or delete it?
- Which actions can the assistant complete autonomously, and which require explicit shopper confirmation, especially around purchase and checkout?
- How should the system distinguish durable preferences from one-time task context?
- What event definitions and attribution method will measure adoption, task completion, incremental sales, and D30 retention?
- What qualifies as a successful task, an acceptable correction rate, and a recoverable activity log?
- Which existing Myntra surfaces and services would host the assistant? The PRD rules out a separate app but does not specify the integration point.
- What accessibility, language, and fallback requirements apply to image, voice, and text input?

## Design Reference

[Google Stitch mock-up](https://stitch.google.com/projects/16054567078214139540?pli=1)