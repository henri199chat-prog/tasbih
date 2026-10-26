# مسبحة إلكترونية — Tasbih

مسبحة إلكترونية بسيطة (HTML/CSS/JS بدون أي أدوات بناء) بواجهة عربية، تعمل دون إنترنت ويمكن تثبيتها على الشاشة الرئيسية للهاتف (PWA).

- عدّاد تسبيح كبير مع اختيار الذكر، والعدد المستهدف (33 / 100 / مخصّص)، واهتزاز خفيف عند الإتمام، والمجموع الكلي محفوظ في الجهاز.
- أذكار الصباح وأذكار المساء: اضغط على البطاقة للعدّ التنازلي، ويُعاد التقدم تلقائيًا كل يوم.

**المصدر:** كتاب *حصن المسلم* للشيخ سعيد بن علي بن وهف القحطاني — باب أذكار الصباح والمساء، النصوص منقولة من [hisnmuslim.com](https://www.hisnmuslim.com/i/ar/27).
صيغ المساء مأخوذة وفق تنبيهات الكتاب نفسه («وإذا أمسى قال...»).

الخطوط: Amiri و Reem Kufi (رخصة SIL Open Font License).

## تطبيق أندرويد (APK)

حمّل `Tasbih.apk` من صفحة [الإصدارات](https://github.com/henri199chat-prog/tasbih/releases/latest) وثبّته (قد يطلب الهاتف السماح بالتثبيت من مصادر غير معروفة).
التطبيق يحتوي على جميع الملفات محليًا ويعمل دون إنترنت.

> **من النسخة 1.0.0 إلى 1.0.1:** تغيّر مفتاح توقيع التطبيق، فلن تُثبَّت النسخة الجديدة فوق القديمة. احذف النسخة القديمة أولًا ثم ثبّت الجديدة. هذا مطلوب مرة واحدة فقط، لكن المجموع الكلي المحفوظ سيبدأ من الصفر.

### Building the APK (Capacitor 8)

Requirements: Node 22+, JDK 21, Android SDK (platform 36, build-tools).

```bash
git clone https://github.com/henri199chat-prog/app-keys ../app-keys   # private: the signing key
cd android-app
npm ci
npm run sync                 # copies the web files from the repo root into www/ and syncs Capacitor
cd android && ./gradlew assembleRelease
# -> app/build/outputs/apk/release/app-release.apk
```

Release signing reads `keystore.properties` from the **private** repo
[`henri199chat-prog/app-keys`](https://github.com/henri199chat-prog/app-keys), cloned next to this
repo (default `../app-keys/tasbih/keystore.properties`, override with
`-PtasbihKeystoreProps=/path/keystore.properties`). The keystore is **never** committed here. Every
update must be signed with this same key or it will not install over the existing app, so release
builds fail on purpose when the key is missing. Never generate a new key for this app.

Signing certificate SHA-256 (since 1.0.1):
`f6:4e:b4:79:b8:42:bc:82:a0:99:44:60:c0:cf:2b:57:34:8d:d3:1e:95:cc:16:ba:8d:87:94:60:d3:eb:46:48`.
Version 1.0.0 was signed with an earlier key that was lost.
