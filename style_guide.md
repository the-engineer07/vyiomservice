# Style Guide — Veyom Digital Solutions

## 🎨 Design System

### Color Palette

#### Primary Colors
```css
--purple:       #7b2d8b  /* Brand primary */
--purple2:      #6a2578  /* Hover state */
--purple3:      #9b3dab  /* Light variant */
--purple-light: rgba(123,45,139,0.08)  /* Background tint */
```

#### Neutral Colors
```css
--white:        #ffffff
--off:          #f7f7f5   /* Off-white background */
--light:        #f0eff0   /* Light background */
--ink:          #0a0a0a   /* Primary text */
--ink2:         #1a1a1a   /* Secondary text */
--muted:        #6b6b6b   /* Muted text */
--muted2:       #9a9a9a   /* Secondary muted */
--border:       #e2e2e2   /* Default border */
--border2:      #cccccc   /* Secondary border */
--dark:         #0a0a0a
--dark2:        #111111
--dark3:        #1a1a1a
```

### Typography

#### Font Families
```css
Body:           'Inter', sans-serif
Headings:       'Space Grotesk', sans-serif
Decorative:     'Orbitron', sans-serif
```

#### Font Sizes (with responsive scaling)
```css
H1: clamp(40px, 6vw, 80px)    /* Hero title */
H2: clamp(28px, 3.5vw, 44px)  /* Section heading */
H3: clamp(22px, 2.8vw, 34px)  /* Subsection */
H4: 18px                        /* Small heading */
Body: 16px                      /* Body text */
Small: 12px                     /* Small text */
Tiny: 11px                      /* Navigation, labels */
```

#### Font Weights
```css
300 - Light (headings)
400 - Regular (body)
500 - Medium (nav links, buttons)
600 - Semi-bold (emphasis)
700 - Bold (strong headings)
800 - Extra bold (decorative)
```

### Spacing

#### Base Unit: 8px (multiples)
```css
4px   - Tight spacing
8px   - Default gap
12px  - Small padding
16px  - Medium padding
20px  - Large padding
24px  - Extra large padding
32px  - Section spacing
48px  - Major section spacing
80px  - Full section spacing
100px - Hero spacing
```

### Border Radius
```css
--r: 4px  /* Standard corner radius */
0px       /* No radius (sharp corners for buttons) */
50%       /* Circles (icon buttons)
```

### Transitions
```css
--ease:  cubic-bezier(0.25, 1, 0.5, 1)  /* Smooth easing */
--trans: all 0.25s var(--ease)          /* Standard transition */
```

## 🎯 Component Styles

### Buttons

#### Primary (Purple)
```css
Background:  var(--purple)
Color:       #fff
Padding:     14px 32px
Font:        600 13px uppercase
Clip-path:   Angled corners
Hover:       var(--purple2) + translateY(-1px)
```

#### Secondary (White)
```css
Background:  #fff
Color:       var(--ink)
Padding:     14px 32px
Border:      None
Hover:       var(--off) + translateY(-1px)
```

#### Ghost (Outline)
```css
Background:  transparent
Border:      1px solid rgba(255,255,255,0.35)
Color:       #fff
Hover:       rgba(255,255,255,0.08) background
```

### Navigation

#### Desktop Nav
- Fixed positioning at top
- Transparent until scroll (60px)
- Smooth color transitions
- Links: 11px, 500 weight
- Gap between links: 28px
- Logo: 12px uppercase

#### Mobile Nav
- Hamburger menu at 1024px breakpoint
- Full-height drawer from right
- Smooth slide animation
- Dark background (#111111)
- Full navigation links

### Footer

#### Layout
- White background (#ffffff)
- Dark text (--ink color)
- Centered single-line layout on desktop
- Logo + company name (10px font)
- Copyright text (9px, nowrap)
- Social icons on right
- Responsive stack on mobile

#### Icons
- 36px square
- Light border
- Purple on hover
- Smooth transitions

### Cards & Panels

#### Base Card
```css
Background:  var(--white)
Border:      1px solid var(--border)
Padding:     20px
Radius:      var(--r)
Shadow:      None (clean design)
```

#### Hover State
```css
Border-color: var(--purple)
Transform:    translateY(-2px)
Box-shadow:   0 8px 24px rgba(0,0,0,0.1)
Transition:   all 0.25s ease
```

### Forms

#### Input Fields
```css
Background:  var(--off)
Border:      1px solid var(--border)
Padding:     12px 16px
Font-size:   14px
Radius:      var(--r)
Focus:       border-color: var(--purple)
```

#### Labels
```css
Font-size:   12px
Font-weight: 600
Color:       var(--ink)
Margin:      8px 0 6px
Text-transform: uppercase
Letter-spacing: 0.06em
```

## 📐 Layout Grid

### Container Widths
```css
Max-width: 1400px
Padding:   clamp(20px, 5vw, 72px)  /* Responsive padding */
```

### Responsive Breakpoints
```css
Desktop: 1024px+
Tablet:  768px - 1024px
Mobile:  < 768px
```

### Grid Systems
```css
Section grid:    grid-template-columns: 1fr 1fr
3-column grid:   grid-template-columns: repeat(3, 1fr)
4-column grid:   grid-template-columns: repeat(4, 1fr)
Auto grid:       grid-auto-flow: dense
```

## ✨ Special Effects

### Hero Carousel
```css
Animation:  opacity 1s ease-in-out
Interval:   4000ms (4 seconds)
Active:     opacity 0.12
Inactive:   opacity 0
Transition: Smooth fade
```

### Pulse Dot (Status indicator)
```css
Color:      #22c55e (green)
Size:       7px circle
Animation:  pulse 2s ease-in-out infinite
Scale:      0.85 → 1.2
Opacity:    0.6 → 1
```

### Section Divider
```css
Width:      48px
Height:     3px
Color:      var(--purple)
Usage:      Top of sections
```

## 🔤 Text Styles

### Eyebrow Labels
```css
Font-size:        11px
Font-weight:      600
Letter-spacing:   0.12em
Text-transform:   uppercase
Color:            var(--purple)
Border-left:      24px solid var(--purple)
Margin-bottom:    18px
```

### Page Headings (H1)
```css
Font-family:      'Inter'
Font-size:        clamp(36px, 5vw, 68px)
Font-weight:      300
Line-height:      1.1
Letter-spacing:   -0.02em
Color:            var(--ink)
```

### Section Headings (H2)
```css
Font-family:      'Space Grotesk'
Font-size:        clamp(28px, 3.5vw, 44px)
Font-weight:      600
Line-height:      1.2
Letter-spacing:   -0.02em
Color:            var(--ink)
Margin-bottom:    20px
```

### Body Text
```css
Font-size:        16px
Font-weight:      400
Line-height:      1.75
Color:            var(--muted)
Letter-spacing:   normal
```

## 🎬 Animations

### Standard Easing
```css
Easing:      cubic-bezier(0.25, 1, 0.5, 1)
Duration:    0.25s (fast interactions)
             0.3s (medium transitions)
             1s (large animations)
```

### Animation Timings
```css
Hover effects:    200-250ms
Page transitions: 300ms
Scroll reveal:    Immediate
Slide animations: 400-600ms
Carousel:         1000ms fade
```

---

**Last Updated**: May 28, 2026
**Version**: 1.0 Production
