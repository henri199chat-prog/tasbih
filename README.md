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

### Building the APK (Capacitor 8)

Requirements: Node 22+, JDK 21, Android SDK (platform 36, build-tools).

```bash
cd android-app
npm install
npm run sync                 # copies the web files from the repo root into www/ and syncs Capacitor
cd android && ./gradlew assembleRelease
# -> app/build/outputs/apk/release/app-release.apk
```

Release signing reads `keystore.properties` from outside the repo
(default `/workspace/tasbih-android/keystore/keystore.properties`, override with
`-PtasbihKeystoreProps=/path/keystore.properties`). The keystore is **not** committed; the same key
is required to publish updates that install over the existing app.
