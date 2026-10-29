# Graph Report - tasbih  (2026-10-29)

## Corpus Check
- 54 files · ~39,182 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 39 file(s) not represented in the graph (top: (none) 16, .xml 10, .woff2 4)

## Summary
- 390 nodes · 481 edges · 41 communities (25 shown, 16 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f89f641f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- reviews.py
- Connection and task recovery
- Native, managed, and packaged artifacts
- imgdiff.py
- package.json
- contrast.py
- replica-recon
- ExampleInstrumentedTest.java
- listing.py
- Recon map: {{app}} ({{platform}})
- app.js
- replica-backend
- replica-build
- تطبيقات أيمن
- replica-brand
- replica-deploy
- replica-entrepreneur
- replica-test
- replica-architect
- replica-design
- replica-diff
- replica-launch
- copy-web.mjs
- Architecture: {{your app}} (a rebuild of {{app}}'s core features)
- Deploy checklist: {{your app}}
- تطبيق أندرويد (APK)
- MainActivity.java
- rea
- .claude/CLAUDE.md
- bug-report.md
- test-plan.md
- data.js
- sw.js

## God Nodes (most connected - your core abstractions)
1. `Native, managed, and packaged artifacts` - 32 edges
2. `replica-recon` - 12 edges
3. `compare()` - 10 edges
4. `Recon map: {{app}} ({{platform}})` - 10 edges
5. `read_png()` - 9 edges
6. `load_reviews()` - 9 edges
7. `replica-backend` - 9 edges
8. `replica-build` - 9 edges
9. `main()` - 8 edges
10. `main()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Evidence, comparison, and verification workflows` --references--> `edges()`  [INFERRED]
  .claude/skills/reverse-engineer-anything/references/evidence-workflows.md → .claude/skills/replica-diff/imgdiff.py

## Import Cycles
- None detected.

## Communities (41 total, 16 thin omitted)

### Community 0 - "reviews.py"
Cohesion: 0.10
Nodes (25): build_patterns(), is_binary(), main(), norm_hex(), render(), sweep(), combine(), load() (+17 more)

### Community 1 - "Connection and task recovery"
Cohesion: 0.05
Nodes (33): Android application artifacts, Choose the remedy from the observed failure, Codex tool approval is separate from REA readiness, Connection and task recovery, Continue through an installed CLI, Distinguish client and server deadlines, Recovery ladder, Repair an editable REA limit (+25 more)

### Community 2 - "Native, managed, and packaged artifacts"
Cohesion: 0.06
Nodes (34): Apple app resources, Apple IPS crash reports, Bridge request ceiling, CPython pyc files, Desktop installation directories, DOS MZ with Ghidra, ELF note tables, Erlang BEAM files (+26 more)

### Community 3 - "imgdiff.py"
Cohesion: 0.12
Nodes (17): compare(), edges(), gray(), main(), _over_white(), _paeth(), PngError, read_png() (+9 more)

### Community 4 - "package.json"
Cohesion: 0.12
Nodes (21): dependencies, @capacitor/android@^8.5.3, @capacitor/core@^8.5.3, @capacitor/haptics@^8.0.2, @capacitor/status-bar@^8.0.4, description, devDependencies, @capacitor/assets@^3.0.5 (+13 more)

### Community 5 - "contrast.py"
Cohesion: 0.23
Nodes (9): check(), colours(), default_pairs(), flatten(), luminance(), main(), parse_hex(), ratio() (+1 more)

### Community 6 - "replica-recon"
Cohesion: 0.15
Nodes (12): Output, replica-recon, Step 1: scope, Step 2: list the sources, Step 3: screen inventory, Step 4: user flows, Step 5: components, Step 6: inferred data model (+4 more)

### Community 8 - "listing.py"
Cohesion: 0.33
Nodes (6): has_emoji(), length(), lint(), main(), render(), words()

### Community 9 - "Recon map: {{app}} ({{platform}})"
Cohesion: 0.18
Nodes (10): Components, Core loop, Feature matrix, Flows, Inferred data model, Out of scope (cannot or should not be cloned), Recon map: {{app}} ({{platform}}), Screens (+2 more)

### Community 10 - "app.js"
Cohesion: 0.38
Nodes (8): doTap(), renderSection(), renderTasbih(), timesLabel(), toast(), updateCard(), updateProgress(), vibrate()

### Community 11 - "replica-backend"
Cohesion: 0.20
Nodes (9): Auth, Database, Email and jobs, Integrations, Output, Payments, replica-backend, Security checklist (+1 more)

### Community 12 - "replica-build"
Cohesion: 0.20
Nodes (9): Definition of done, per screen, Output, replica-build, Step 1: the shell, Step 2: the vertical slice, Step 3: screen by screen, Step 4: the build log, The rules (+1 more)

### Community 13 - "تطبيقات أيمن"
Cohesion: 0.22
Nodes (8): graphify, التطبيقات, النصوص الدينية, تطبيقات أيمن, توفير الرصيد, طريقة العمل, عن المستخدم, مفاتيح التوقيع

### Community 14 - "replica-brand"
Cohesion: 0.22
Nodes (8): Output, replica-brand, Step 1: the name, Step 2: the checks, run, not assumed, Step 3: palette, Step 4: logo brief, Step 5: voice, Step 6: the sweep

### Community 15 - "replica-deploy"
Cohesion: 0.22
Nodes (8): Output, replica-deploy, Step 1: preflight, Step 2: production services, Step 3: host and domain, Step 4: watch it, Step 5: mobile, if there is an app, The rules

### Community 16 - "replica-entrepreneur"
Cohesion: 0.22
Nodes (8): Output, replica-entrepreneur, Step 1: collect, Step 2: rank, Step 3: three lists, Step 4: the fix plan, Step 5: the angle, The rules, which are not negotiable

### Community 17 - "replica-test"
Cohesion: 0.22
Nodes (8): Output, replica-test, Step 1: the plan, Step 2: automate what you can, Step 3: click through the rest, Step 4: report bugs, Step 5: fix loop, The rule

### Community 18 - "replica-architect"
Cohesion: 0.25
Nodes (7): Output, replica-architect, Step 1: the stack, Step 2: the schema, Step 3: the API, Step 4: the parts that bite, Step 5: build order

### Community 19 - "replica-design"
Cohesion: 0.25
Nodes (7): Output, replica-design, Step 1: measure, do not guess, Step 2: write the tokens, Step 3: component specs, Step 4: build the primitives, The rules

### Community 20 - "replica-diff"
Cohesion: 0.25
Nodes (7): Output, replica-diff, Step 1: feature parity, Step 2: layout diff, Step 3: behaviour diff, Step 4: the report, What parity means here

### Community 21 - "replica-launch"
Cohesion: 0.25
Nodes (7): Output, replica-launch, Step 1: landing page, Step 2: pricing, Step 3: store listing, Step 4: launch plan, The rules

### Community 22 - "copy-web.mjs"
Cohesion: 0.29
Nodes (3): here, root, www

### Community 23 - "Architecture: {{your app}} (a rebuild of {{app}}'s core features)"
Cohesion: 0.29
Nodes (6): API, Architecture: {{your app}} (a rebuild of {{app}}'s core features), Build order, Schema, Stack, The parts that bite

### Community 24 - "Deploy checklist: {{your app}}"
Cohesion: 0.33
Nodes (5): Deploy checklist: {{your app}}, Domain, Preflight (all must pass), Production, Watch

### Community 26 - "تطبيق أندرويد (APK)"
Cohesion: 0.50
Nodes (3): Building the APK (Capacitor 8), تطبيق أندرويد (APK), مسبحة إلكترونية — Tasbih

## Knowledge Gaps
- **1 isolated node(s):** `npx`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 238 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `edges()` connect `imgdiff.py` to `Connection and task recovery`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **What connects `npx` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `reviews.py` be split into smaller, more focused modules?**
  _Cohesion score 0.09988385598141696 - nodes in this community are weakly interconnected._
- **Why does `Evidence, comparison, and verification workflows` connect `Connection and task recovery` to `imgdiff.py`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `Connection and task recovery` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Why does `Native, managed, and packaged artifacts` connect `Native, managed, and packaged artifacts` to `Connection and task recovery`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `Native, managed, and packaged artifacts` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._