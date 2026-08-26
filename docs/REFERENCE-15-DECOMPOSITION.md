# REFERENCE 15 — DECOMPOSITION & REPLICATION CONTRACT

Reference: `PRUEBA WEB 15(1).mp4`

## Product thesis

**No construimos una tienda de gafas. Construimos un motor editorial de producto reutilizable.**

## Observed grammar

- hero editorial full-viewport;
- large kinetic category word used as spatial layer;
- premium product centered over a sculptural pedestal;
- restrained monochrome palette;
- product and category change as a single choreographed event;
- continuous micro-motion even at rest;
- hierarchy built from product + word + empty space rather than cards or ecommerce chrome.

## First vertical slice

The V1 intentionally uses a 2.5D product renderer. It proves the difficult system first:

1. one source of truth for active category;
2. one `step()` command for button, wheel, keyboard, drag and autoplay;
3. one GSAP master timeline for outgoing product, incoming product, giant word, metadata and pedestal;
4. configuration-driven products/categories;
5. isolated Motion LAB;
6. Studio that edits content/motion state without rewriting the engine.

## Timing model

Approximate starting cues derived from the video study:

```text
0.00 outgoing product + outgoing word begin
0.40–0.50 product/category crossover zone
0.46 metadata commit
0.50 incoming product becomes legible
0.82 settle phase
1.15 transition complete
```

These values are tuning defaults, not claims of pixel-perfect fidelity. The Motion LAB exists to tune them against browser recordings.

## Architecture

```text
ENGINE
  app.js
  ├── state
  ├── master timeline
  ├── input normalization
  └── autoplay / visibility

CONTENT
  config.js
  ├── categories
  ├── product descriptors
  └── motion cues

MEDIA
  assets/*

LAB
  lab.html

STUDIO
  studio.html
```

## Non-negotiable rule

Do not create a separate page or animation implementation for each product. New products must be data. New motion languages may be engines/presets, but navigation state remains shared.

## Upgrade path

- V1: 2.5D SVG/image products — prove composition and choreography.
- V2: stronger reference assets + exact visual tuning.
- V3: optional GLB/GLTF renderer while preserving the same config/state contract.
- V4: full Studio product/media management and import/export.
- V5: template replication for watches, perfume, footwear, jewellery, furniture, automotive and food.

## Validation gate

Before merge:

- no syntax errors;
- all assets resolve;
- next/prev work;
- wheel works;
- keyboard works;
- drag works;
- autoplay uses same transition;
- reduced motion is respected;
- LAB loads;
- Studio loads;
- desktop visual comparison captured against the reference;
- no claim of final fidelity until browser/video comparison is completed.
