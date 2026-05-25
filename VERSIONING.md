# Versioning — veldworks.nl

Semantische versioning (major.minor.patch). Versie staat in `VERSION` en zichtbaar in de footer van `index.html`.

## Wanneer wat bumpen

| Type  | Wanneer                                                                 | Voorbeeld                              |
|-------|-------------------------------------------------------------------------|----------------------------------------|
| major | Fundamentele herstructurering van site of propositie                   | Nieuwe propositie, volledig nieuw design |
| minor | Nieuwe sectie, nieuwe pagina, batch Field Notes, nieuwe functionaliteit | Field Notes sectie live, Work-pagina toegevoegd |
| patch | Tekstwijzigingen, bugfixes, stijlaanpassingen, losse Field Note         | Typo, kleurfix, één nieuw artikel      |

## Hoe bumpen

```powershell
.\release.ps1 patch   # of minor of major
```

Dit doet: VERSION bijwerken → index.html bijwerken → commit → push → GitHub Action deployt.

## Historie

| Versie | Datum      | Omschrijving                                      |
|--------|------------|---------------------------------------------------|
| 1.0.0  | 2026-05-25 | Eerste volledige release — Field Notes 004–027 live, alle pagina's bijgewerkt |
