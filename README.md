# PRODUCT EDITORIAL SHOWCASE

> **No construimos una tienda de gafas. Construimos un motor editorial de producto reutilizable.**

Motor visual para presentar productos mediante composición editorial, tipografía cinética, pedestal/escena y transiciones sincronizadas.

## Método de desarrollo

```text
REFERENCIA
↓
DESCOMPOSICIÓN
↓
MOTOR
↓
LAB
↓
PRIMER SLICE
↓
COMPARACIÓN CON VÍDEO
↓
CORRECCIÓN
↓
STUDIO
↓
REPLICACIÓN
```

## Objetivo

Construir un sistema reusable para gafas, relojes, joyería, perfumes, calzado, botellas, mobiliario y otros objetos premium sin duplicar páginas ni coreografías por producto.

## Arquitectura prevista

- **ENGINE** — estado, escena, timeline, navegación, input y responsive.
- **CONTENT** — categorías, productos, titulares y dirección visual.
- **MEDIA** — assets 2.5D hoy; preparado para GLB/GLTF después.
- **LAB** — banco aislado de movimiento y sincronización.
- **STUDIO** — edición visual sin tocar código.
- **VALIDATION** — comparación contra vídeo y quality gates.

## Estado

`main` contiene únicamente el contrato/base. El primer vertical slice se desarrolla en una rama de feature y no debe considerarse aprobado hasta validación visual en navegador.
