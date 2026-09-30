<div align="center">

# Myntra AI Stylist

### Personal style, remembered. Shopping, made simpler.

An independent product and interaction prototype for a conversational fashion stylist that learns useful preferences, curates relevant finds, and helps shoppers pick up where they left off.

<p>
	<img alt="Vite 7" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
	<img alt="Vanilla JavaScript" src="https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?logo=javascript&logoColor=222" />
	<img alt="Tests" src="https://img.shields.io/badge/tests-Node%20test%20runner-339933?logo=nodedotjs&logoColor=white" />
	<img alt="Portfolio concept" src="https://img.shields.io/badge/status-portfolio%20prototype-C3234D" />
</p>

<p><a href="https://jagriti-singh12.github.io/prd-myntra-personalized-ai/">Open the live portfolio site</a> · <a href="#try-it">Run locally</a> · <a href="#experience">Explore the experience</a></p>

</div>

> **Portfolio concept:** This is an independent project, not an official Myntra product and not affiliated with or endorsed by Myntra.

## The Product Idea

Shopping gets tiring when people have to restate their size, budget, favorite colors, and occasion on every visit. This concept explores an in-product stylist that can combine today's intent with useful style notes, explain why a product fits, and preserve task context for a later return.

The supplied PRD makes **persistent personalization P0**. Context-aware recommendations and end-to-end shopping tasks are **P1**. The prototype focuses on making those ideas tangible without pretending to connect to Myntra's production systems.

## Experience Preview

The screens below were supplied with the PRD and informed the interaction direction. They are **design references**, not screenshots of the implemented prototype.

<div align="center">
	<img src="Prototype%20Screens/Mobile%20Screen/Mobile%20Screens/personalized_home/screen.png" alt="Supplied concept screen for a personalised shopping home" width="30%" />
	<img src="Prototype%20Screens/Mobile%20Screen/Mobile%20Screens/personalized_results/screen.png" alt="Supplied concept screen for personalised product results" width="30%" />
	<img src="Prototype%20Screens/Mobile%20Screen/Mobile%20Screens/task_status_recovery/screen.png" alt="Supplied concept screen for task recovery" width="30%" />
</div>

<p align="center"><sub>Concept screens included in the original project materials</sub></p>

<details>
<summary>See the desktop memory and mission-center concept</summary>
<br />
<img src="Prototype%20Screens/Desktop%20Screen/Desktop%20Screens/task_recovery_personalization_center/screen.png" alt="Supplied desktop concept for recoverable missions and shopper memory controls" width="100%" />
</details>

## Experience

| Discover | Resume |
| --- | --- |
| Search a natural-language brief, refine by category or budget, compare match explanations, save favorites, and add items to a local demo bag. | Inspect an example shopping mission, expand its activity log, pause or resume it, and return to the curated results without losing the brief. |

**Personalisation controls:** Update size, palette, and typical budget; toggle whether style notes are remembered; clear saved notes from this device.

**Responsive by design:** Product discovery adapts to narrow screens; the wider mission workspace pairs task progress with the memory-control panel.

## Try It

**Requirements:** Node.js 20.19+ or 22.12+.

```powershell
npm.cmd ci
npm.cmd run dev
```

Open the local URL printed by Vite. On macOS or Linux, replace `npm.cmd` with `npm`.

The GitHub Pages site deploys automatically from `main` after the Pages workflow completes. The site URL is `https://jagriti-singh12.github.io/prd-myntra-personalized-ai/`.

Run checks and create a production build:

```powershell
npm.cmd test
npm.cmd run build
```

## Project Notes

- [Product context](context.md) — problem, goals, requirements, metrics, and open decisions.
- [Project plan](plan.md) — scope, milestones, prototype acceptance criteria, and risks.
- [Original PRD](PRD.docx) — the source product requirements.
- [Google Stitch concept](https://stitch.google.com/projects/16054567078214139540?pli=1) — design reference linked by the PRD.

### Success Measures From the PRD

**North star:** Incremental products sold through the agentic shopping experience.

**Supporting measures:** Adoption and tasks per user. **Counter metrics:** Task drop rate and D30 retention / inactivity rate.

The PRD does not define metric formulas, targets, baselines, or attribution. This concept has no production instrumentation and makes no business-impact claims.

### Prototype Boundaries

- Products and mission content are illustrative; they are not live Myntra inventory or agent execution.
- Preferences, favorites, bag contents, and demo state stay in this browser's local storage. There is no account, backend, or cross-device sync.
- Voice uses a sample request. Image selection only demonstrates the interaction; files are not uploaded or analyzed.
- The demo bag does not place an order. Checkout, payment, authentication, and production integrations are not implemented.
- Product photos and badges use external image/font services; an internet connection is needed for all visuals.
- Do not enter personal or sensitive information into the prototype.

## Repository Map

```text
index.html                 App shell and accessible controls
src/main.js                UI state and interactions
src/products.js            Sample catalog and filter utilities
src/styles.css             Responsive design system
src/assets/products/       Bundled product photography
tests/                     Node test-runner coverage
.github/workflows/ci.yml   GitHub Actions test and build checks
context.md                 Product context
plan.md                    Delivery plan and implementation status
Prototype Screens/         Supplied screen references
```

## Next

Validate the key shopping tasks with representative users, document findings, and resolve memory consent, retention, purchase-confirmation, and measurement decisions before proposing a production implementation.