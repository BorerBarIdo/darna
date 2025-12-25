# הוראות פריסה ל-GitHub Pages

## הגדרת Repository ב-GitHub

1. **צור repository חדש ב-GitHub:**
   - לך ל-https://github.com/new
   - שם ה-repository: `darna` (או שם אחר לפי בחירתך)
   - בחר Public או Private
   - אל תסמן "Initialize with README"

2. **חבר את ה-repository המקומי ל-GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/darna.git
   git branch -M main
   git push -u origin main
   ```

## הגדרת GitHub Pages

1. **הפעל GitHub Pages:**
   - לך ל-Settings של ה-repository
   - לחץ על "Pages" בתפריט השמאלי
   - תחת "Source", בחר "GitHub Actions"
   - ה-workflow כבר מוגדר בקובץ `.github/workflows/deploy.yml`

2. **אם שם ה-repository שונה מ-darna:**
   - פתח את `next.config.js`
   - בטל הערה על השורות:
     ```js
     basePath: '/YOUR_REPO_NAME',
     trailingSlash: true,
     ```
   - החלף `YOUR_REPO_NAME` בשם ה-repository שלך

## פריסה אוטומטית

לאחר שתדחוף קוד ל-main branch, ה-GitHub Actions יבנה ויפרס את האתר אוטומטית.

האתר יהיה זמין ב:
`https://YOUR_USERNAME.github.io/darna/`

או אם שינית את ה-basePath:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## בדיקת הפריסה

1. דחוף את הקוד:
   ```bash
   git push origin main
   ```

2. לך ל-Actions tab ב-GitHub כדי לראות את תהליך הבנייה

3. לאחר שהבנייה תסתיים, האתר יהיה זמין ב-GitHub Pages

