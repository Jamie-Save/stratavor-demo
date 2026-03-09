# Stratavor Product Demo — Walkthrough Script

Use this script to record a smooth 20–40 second SaaS-style demo. Run the app at **http://localhost:8765/** (e.g. `py -m http.server 8765` from the Platform folder).

---

## Sequence (smooth, deliberate pacing)

| Step | Action | Pause |
|------|--------|-------|
| 1 | **Landing** — Open http://localhost:8765/ (redirects to Dashboard). Let the dashboard fully load. | 2–3 s |
| 2 | **Sidebar** — Briefly show the left nav (Overview, Reports, Risk, Strategy, Connect, Account). | 1–2 s |
| 3 | **Intelligence Hub** — Click **Overview** (if collapsed), then **Intelligence Hub**. Show the hub tiles (Ask Your Advisor, Latest Report, Strategic Profile). | 2–3 s |
| 4 | **Signals Inbox (AI)** — Click **Signals Inbox**. Show the AI chat thread and the sticky input bar. | 2–3 s |
| 5 | **Reports** — Click **Financial Snapshot** (under Reports). Show the report list and type filters. | 2 s |
| 6 | **Filter** — Click one filter (e.g. **Management Snapshot**) to show the UI response. | 1–2 s |
| 7 | **Back to Dashboard** — Click **Dashboard**. Optionally scroll to show insight cards. | 2–3 s |

---

## Screenshots from automated run

- `demo-01-dashboard-load.png` — Dashboard view
- `demo-02-intelligence-hub.png` — Intelligence Hub
- `demo-03-signals-inbox.png` — Signals Inbox (AI chat)
- `demo-04-financial-snapshot.png` — Financial Snapshot / Reports
- `demo-05-reports-filter.png` — Reports with filter applied
- `demo-06-back-to-dashboard.png` — Return to dashboard
- `demo-07-dashboard-ai-insights.png` — Full-page dashboard (optional)

---

## Recording tips

- **Cursor**: Use Cursor’s built-in screen recording if available.
- **Windows**: Win + G → Capture → Record, or use OBS/Xbox Game Bar.
- Move the cursor smoothly; pause when key UI appears.
- Scroll naturally; avoid rapid clicks.
- Aim for **20–40 seconds** total.
