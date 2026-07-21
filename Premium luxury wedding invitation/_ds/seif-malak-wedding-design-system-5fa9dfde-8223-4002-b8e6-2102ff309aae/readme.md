# Seif & Malak — Wedding Design System

An elegant, classic wedding-stationery design system for **Seif & Malak**, derived from a supplied ivory-and-gold botanical invitation. Everything here is built to produce **WhatsApp-shareable** wedding pieces: a live invitation page with a countdown to the wedding, plus reusable primitives and a template.

- **Couple:** Seif & Malak
- **Date:** Friday, 18 September 2026 (countdown targets the next 18 September)
- **Venue:** Casamaria — https://maps.app.goo.gl/VnjDr62nBN9V5aYX8

## Sources
- `uploads/IMG_7328.JPG` — the original invitation (an "Ananya & Ritesh" ivory botanical design). Colors, type feel, layout, frame, and botanical motif were sampled from it. A copy is stored at `assets/reference-invitation.jpg`.
- The embossed leaf sprig (`assets/botanical.png`) and small gold leaf ornament (`assets/sprig.png`) were cropped directly from that image.

## ⚠️ Font substitution (please confirm)
The original invitation's exact fonts were **not supplied**. We substituted the nearest Google Fonts matches:
- **Bodoni Moda** — display + body (the high-contrast serif used for the names and small-caps labels)
- **Parisienne** — the flourished "&" / ampersand
If you have the original font files, send them and we'll swap them in.

---

## CONTENT FUNDAMENTALS
- **Voice:** warm, gracious, understated. First-person plural — "we invite you", "our wedding", "together with our families".
- **Casing:** supporting copy is **UPPERCASE with wide letter-spacing** (small-caps feel); the couple's names are uppercase and large; the word *and* is lowercase script.
- **Numerals:** the day is a large gold numeral; month and year flank it in spaced caps.
- **Emoji:** none in the stationery itself. A single 🤍 (white heart) is allowed **only** in the WhatsApp share message, never on the card.
- **Examples:** `TOGETHER WITH OUR FAMILIES` · `WE INVITE YOU TO OUR WEDDING` · `AT SEVEN O'CLOCK IN THE EVENING` · `RECEPTION TO FOLLOW` · `VIEW ON MAP`.
- **Tone test:** if a line feels casual or salesy, rewrite it more quietly. Restraint is the brand.

## VISUAL FOUNDATIONS
- **Palette:** warm ivory papers (`--paper-0…3`), foil **gold** for names/rules/accents (`--gold-1…3`), warm charcoal-brown **ink** for body text (`--ink-1…3`), and soft gold hairlines (`--line-1/2`). Max two surface tones per piece.
- **Type:** Bodoni Moda throughout — 500 weight for display, wide tracking (`0.14em` names, `0.24–0.28em` labels). Parisienne only for the connective "&".
- **Backgrounds:** flat ivory paper. No gradients, no photography. A subtle paper texture is available (`assets/paper-texture.png`) but the default is a clean flat fill.
- **Botanical motif:** an embossed (tone-on-tone) leaf sprig anchored to the lower-left, plus a small gold leaf ornament used as a section flourish. Rendered with `mix-blend-mode: multiply` so it sits naturally on ivory.
- **Frame:** the signature **double hairline frame** inset from the card edge (`--frame-inset` + `--frame-gap`).
- **Corners:** near-square. Cards use only `--radius-card` (6px); inner frames use 2px. Nothing is pill-shaped.
- **Shadows:** soft and paper-like (`--shadow-card`, `--shadow-soft`) — long, low-opacity, warm-tinted. No hard drop shadows, no glow.
- **Borders:** 1px gold-tinted hairlines only. Dividers are thin gold rules, often with a centered ornament (❧).
- **Layout:** vertically centered, symmetrical, generous breathing room; content distributed with space-between inside the framed card.
- **Animation:** slow and gentle only — the envelope opens with a soft fade/lift (`--ease-soft`, `--dur-slow`). No bounces, no springy motion.
- **Hover states:** primary gold buttons darken to `--gold-3`; ghost buttons fill with a faint paper tint. Links shift between gold-2/gold-3. No scaling.
- **Transparency/blur:** essentially none; the aesthetic is opaque printed paper.
- **Imagery vibe:** warm, neutral, cream — no cool tones, no heavy grain beyond the paper's own subtle texture.

## ICONOGRAPHY
- The brand is **near icon-free** by design — this is printed stationery, not an app. The only recurring "icons" are the **botanical assets** (`botanical.png`, `sprig.png`) and typographic ornaments (the ❧ divider glyph, the vertical rule in the monogram).
- No icon font is used and none should be added to the stationery. In the interactive share bar, actions are labelled with **words** ("SHARE ON WHATSAPP", "VIEW ON MAP", "ADD TO CALENDAR"), not glyphs, to match the typographic voice.
- Emoji: only 🤍 in the WhatsApp share text (see Content Fundamentals). Never on the card.
- If a future surface genuinely needs functional icons, prefer a thin, minimal line set and flag the addition here.

---

## Index / manifest
**Root**
- `styles.css` — entry point (imports the four token files).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/` — `botanical.png`, `sprig.png`, `paper-texture.png`, `reference-invitation.jpg`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper.

**Components** (`components/invitation/`, namespace `SeifMalakWeddingDesignSystem_5fa9df`)
- `FrameCard` — ivory paper card with the double-line gold frame.
- `Monogram` — couple initials divided by a vertical gold rule (S | M).
- `Divider` — thin gold rule with a centered ornament.
- `DateBlock` — MONTH | DD | YYYY row with a large center numeral.
- `Countdown` — live days/hours/minutes/seconds to the wedding (next 18 Sept by default).
- `MapLink` — venue line linking to Google Maps.
- `Botanical` — the embossed leaf sprig / gold ornament as decoration.

**Template** (`templates/invitation/`)
- `Invitation.dc.html` — the full reusable invitation (card + live countdown), editable and WhatsApp-ready.

**UI kit** (`ui_kits/invitation/`)
- `index.html` — interactive invitation: tap the envelope to reveal the card, live countdown, and a WhatsApp / Map / Calendar share bar.
- `Invitation.jsx`, `Envelope.jsx`, `ShareBar.jsx`.

**Specimen cards** (`guidelines/`) — color, type, and brand cards shown in the Design System tab.

## Intentional additions
None beyond what the source implies. The source is a single static invitation; the **Countdown**, **MapLink**, envelope intro, and **ShareBar** are functional extensions required by the brief ("countdown to next 18th of September", the Casamaria map link, and "usable for WhatsApp").
