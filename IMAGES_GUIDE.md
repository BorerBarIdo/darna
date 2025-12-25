# מדריך הוספת תמונות

## איפה להוסיף תמונות?

העלה את התמונות שלך לתיקייה:
```
public/images/
```

## איך להשתמש בתמונות?

### 1. תמונת רקע ל-Hero Section

1. העלה תמונה בשם `hero-bg.jpg` ל-`public/images/`
2. פתח את `components/Hero.tsx`
3. שנה את השורה:
   ```typescript
   const hasBackgroundImage = false
   ```
   ל:
   ```typescript
   const hasBackgroundImage = true
   ```

### 2. תמונה לסעיף "עלינו"

1. העלה תמונה בשם `about-image.jpg` ל-`public/images/`
2. פתח את `components/AboutSection.tsx`
3. שנה את השורה:
   ```typescript
   const hasImage = false
   ```
   ל:
   ```typescript
   const hasImage = true
   ```

### 3. תמונות לאירועים

תמונות לאירועים יועלו דרך פאנל הניהול (`/admin/events`) או ישירות ל-`public/uploads/`

### 4. שימוש כללי בתמונות

בכל מקום בקוד, השתמש בתמונות כך:
```tsx
import Image from 'next/image'

<Image
  src="/images/שם-הקובץ.jpg"
  alt="תיאור התמונה"
  width={800}
  height={600}
  // או
  fill
  className="object-cover"
/>
```

## פורמטים מומלצים

- **JPG** - לתמונות צילום
- **PNG** - לתמונות עם שקיפות
- **WebP** - לפורמט מודרני וקטן יותר

## גודל תמונות מומלץ

- **Hero background**: 1920x1080px או גדול יותר
- **About section**: 1200x800px
- **Event images**: 800x600px

## דוגמאות שמות קבצים

- `hero-bg.jpg` - רקע ל-Hero
- `about-image.jpg` - תמונה לסעיף "עלינו"
- `event-1.jpg`, `event-2.jpg` - תמונות לאירועים
- `logo.png` - לוגו (אם יש)

