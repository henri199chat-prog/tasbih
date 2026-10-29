# تطبيقات أيمن

هذه الجلسة مختصة بصنع التطبيقات فقط، ولا علاقة لها بالمونتاج.

## عن المستخدم
- أيمن من تونس، مبتدئ ويعمل من الهاتف فقط.
- اشرح له ببساطة وبالعربية.

## توفير الرصيد
- لا تقرأ إلا الملفات التي تحتاجها.
- لا تحلّل المشروع كله إلا إذا طلب ذلك صراحة.

## التطبيقات
- كل التطبيقات لهاتف أندرويد (Samsung S25 Ultra).
- الأولوية للجودة العالية على صغر الحجم.
- أول تطبيق: **مسبحة** — عدّاد تسبيح وأذكار حصن المسلم، يعمل بدون إنترنت.
  - رابط التحميل المباشر: https://github.com/henri199chat-prog/tasbih/releases/latest/download/Tasbih.apk

## النصوص الدينية
- أي نص ديني يجب أن يكون صحيحًا تمامًا بالتشكيل ومن مصدر موثوق.

## طريقة العمل
- قبل أي عمل كبير: اكتب الخطة مختصرة وانتظر موافقة أيمن.
- لكل نسخة جديدة: ارفع ملف APK باسم `Tasbih.apk` في GitHub Releases حتى يبقى رابط التحميل المباشر يعمل.

## مفاتيح التوقيع
- مفاتيح توقيع كل التطبيقات في المستودع الخاص `henri199chat-prog/app-keys`. انسخه بجانب المشروع (`../app-keys`) قبل بناء أي نسخة.
- لا تنشئ أبدًا مفتاحًا جديدًا لتطبيق منشور، فالتحديث لن يُثبَّت فوق النسخة القديمة.
- لا تحفظ المفاتيح في الجهاز السحابي فقط، ولا في أي مستودع عام.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.
