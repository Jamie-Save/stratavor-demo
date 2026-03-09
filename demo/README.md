# Stratavor Interactive Demo

Read-only, sandbox demo for marketing and sales. All data is dummy/anonymized; no information is saved or sent.

## How to run

1. Serve the project from its root (e.g. `py -m http.server 8765` or your web server).
2. Open **`/demo/`** or **`/demo/index.html`** — you are redirected straight into the app in demo mode (dashboard with `?demo=1`).
3. Or open any app URL with **`?demo=1`** (e.g. `stratavor-dashboardv2.html?demo=1`) to start in demo mode.

## Embedding on your website

- **Demo entry:** Use **`/demo/`** or **`/demo/index.html`** — they redirect straight to the dashboard in demo mode.
- **Direct:** Use **`stratavor-dashboardv2.html?demo=1`** to open the dashboard in demo mode.

For iframe embedding, point the `src` to `/demo/` or to `stratavor-dashboardv2.html?demo=1`. The demo is fully navigable; all internal links keep the `?demo=1` parameter.

## Primary flows (3–5)

1. **Dashboard overview** — Charts, KPIs, period filters, AI summary. Start at Dashboard (home).
2. **Connect data** — Integrations page: view connected sources; clicking Connect/Reconnect shows a simulated success modal.
3. **AI insights** — Intelligence Hub and Signals Inbox: sample signals and chat with suggested questions.
4. **Tasks & workflow** — Cost Savings and Strategy Delivery: pipelines, OKRs, sample progress.
5. **Reports & snapshots** — Financial/Management snapshots, filters, and simulated View/Download.

## Features

- **Demo banner** at top with link back to demo home.
- **Callouts** on key pages explaining benefits and outcomes.
- **Read-only:** forms and primary actions (Connect, Save, Submit, Generate) show a toast or modal instead of submitting.
- **Animated transitions** and hover effects (see `assets/demo.css`).

All data in the demo is sample data (e.g. Acme SaaS Ltd); no sensitive or real information is used.
