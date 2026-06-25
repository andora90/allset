Large KPI number for slide data sections. Cormorant Garamond light + Bark accent line + DM Sans label.

```jsx
<StatDisplay value="3,5M" label="Familles CSP+ en France" dark={false} size="lg" />
<StatDisplay value="100%" label="Charge mentale voyage portée seule" dark={false} />
<StatDisplay value="0" label="Solution dédiée sur le marché" dark={true} />
<StatDisplay value="3–4" label="Voyages par an par famille" size="xl" />
```

Sizes: `sm` (60px) | `md` (80px) | `lg` (96px, default) | `xl` (120px)
Use `dark={true}` on Obsidian backgrounds.
Numbers always in French format: comma decimal (3,5), en-dash range (3–4), no trailing zeros.
