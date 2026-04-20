# DIDAKTIK.md — ki-mathias.de

> Wie wir schreiben. Wie wir erklären. Wie wir ranken. Was unseren Content von KI-Einheitsbrei unterscheidet.
>
> Dieses Dokument wächst mit jedem Blogbeitrag und jedem Video.

---

## 1 — Das Fundamentalprinzip

**Didaktische Tiefe + Liebe zum Detail ist unser einziger Mehrwert.** Jeder kann Oberfläche produzieren — Oberflächen-Content ist im Jahr 2026 eine Massenware, erzeugt von jeder mittelmäßig eingestellten KI. Was uns unterscheidet: die Bereitschaft, einen Absatz *doppelt so lang* zu schreiben, weil dadurch eine zusätzliche Verbindung entsteht, ein Laien-Fragezeichen verschwindet, ein "Aha"-Moment ausgelöst wird.

Wenn ein Absatz mir leicht von der Hand geht und flüssig klingt, war er wahrscheinlich zu dünn. Das ist nicht immer so — aber oft genug, dass ich es als Warnsignal ernst nehme.

---

## 2 — Grundprinzip: beim Leser abholen

### 2.1 Das Abholproblem

**Fehler-Pattern:** Ich führe ein neues Konzept ein (z.B. "supraleitender Schwingkreis"), ohne zu prüfen, ob der Leser damit vertraut ist. Selbst wenn der Leser klug ist — wenn das Konzept in seinem bisherigen Weltbild keinen Platz hat, verliert er den Anschluss.

**Konkretes Beispiel (Quantencomputer-Beitrag, erster Entwurf):** Im Blogpost und Video habe ich "supraleitende Qubits" als "gequantelten Schwingkreis" eingeführt. Mathias' Feedback vom 20. April 2026: *"Ich persönlich habe eine grobe Vorstellung von Photonen und von Elektronen auf Atomschalen — aber ein Schwingkreis und warum der nun Quanteneigenschaften hat, das ist mir reichlich abstrakt."*

**Lösungsansätze (in der Reihenfolge der Präferenz):**

1. **Klassische Brücke bauen.** Wenn das Zielkonzept eine klassische Vor-Form hat: diese zuerst in 2–4 Sätzen erklären, dann Brücke zum quantenmechanischen Pendant. Beispiel: Klassischer LC-Schwingkreis (Spule + Kondensator, elektromagnetische Schwingung wie eine Schaukel) → dann Quantisierung.
2. **Bekanntes Beispiel bevorzugen.** Wenn ein anderes Beispiel aus der Zielgruppe greifbarer ist (Photon, Atom, Elektron), es zuerst nennen, dann die abstrakteren Varianten als "es gibt auch …".
3. **Explizit deklarieren und weglinken.** "Wir gehen in diesem Artikel nicht auf supraleitende Schaltkreise im Detail ein — siehe X für eine Einführung." Besser als eine Halb-Erklärung.

**Frage, die ich vor jeder Konzept-Einführung stellen muss:**
> "Hat der Leser ein bildliches Modell im Kopf, an das er dieses Konzept anhängen kann? Wenn nein — welche Brücke baue ich?"

### 2.2 Welche Bilder darf ich voraussetzen?

Für die ki-mathias.de-Zielgruppe (mathematisch interessierte Laien, durchaus technisch, aber ohne formale Physik-Ausbildung):

**Vermutlich vorhanden:**
- Welle und Teilchen als Konzepte (Wasserwellen, Bälle)
- Photon als "Lichtteilchen"
- Elektron als "kleines geladenes Teilchen, das um Atomkerne kreist" (Rutherford-Bild)
- Atom-Energieniveaus als "Schalen" (Bohr-Modell)
- Doppelspalt-Experiment (wenn Quanten-Post gelesen)
- Pfeile, Amplituden, Interferenz (aus Quanten-Post)
- Vektor als Pfeil in der Ebene
- Skalarprodukt konzeptionell

**Nicht voraussetzen ohne Abholung:**
- LC-Schwingkreis / Supraleitung / Josephson-Junction
- Hilbertraum als abstrakter Vektorraum
- Lie-Gruppen (SU(2), SO(3)) ohne Erklärung
- Hamilton-Operator als Konzept
- Spin als quantenmechanische Größe
- Pauli-Matrizen als Konzept (nur als Gatter OK)
- Komplexe Zahlen jenseits von "Pfeil in der Ebene"

**Klare Regel:** Wenn ich einen Begriff aus der zweiten Liste verwende, muss entweder eine Mini-Einführung kommen (2–4 Sätze Abholung) oder ein expliziter Verweis auf einen anderen Beitrag oder eine Wikipedia-Link.

---

## 3 — Schreibstil

### 3.1 Keine flapsigen Understatements (Anti-KI-Pattern)

Solche Formulierungen verraten KI-generierte Texte auf hundert Meter gegen den Wind:

| ❌ Flapsig | 🤔 Warum problematisch | ✅ Besser |
|---|---|---|
| "Mehr ist das nicht." | Suggeriert "das ist trivial" — überhebt sich | Erklären, was die Notation/der Mechanismus tatsächlich leistet |
| "Ist nichts anderes als X." | Reduktion statt Verbindung | "Entspricht strukturell X, mit folgendem Unterschied: …" |
| "Weil irgendwas muss ja rauskommen." | Tut so, als sei die Regel selbstverständlich | Motivation erklären, ggf. historisch verankern |
| "So einfach ist das." | Verachtet den Leser, der's vielleicht nicht einfach findet | Weglassen — der Inhalt selbst entscheidet, wie einfach er wirkt |
| "Das ist die ganze Quantenmechanik in einem Satz." | Über-Reduktion, irreführend | "Das ist der Kern der Bornschen Regel — eine der Grundlagen der QM" |
| "Voilà!" / "Tada!" / "Schon fertig!" | Popsci-Reflex, distanziert den Autor vom Inhalt | Weglassen |
| "Eigentlich ist das total simpel." | Reaktiv verteidigend — macht Leser defensiv | Weglassen |
| "Musst du dir nur merken, dass …" | "Hör auf zu denken" | Einsicht statt Merkspruch |

### 3.2 Positive Muster: wie wir klingen wollen

**Ruhige Präzision.** Ein Satz darf lang sein, wenn er trägt. Wir sind nicht Zack-Zack-Content, wir sind Glasperlenspiel.

**Historische Verankerung.** Statt "Diese Formel gilt" → "Max Born postulierte 1926, dass …". Namen, Jahre, Motivationen geben Tiefe, ohne zu dozieren. Aber: nur, wenn die historische Info echten Mehrwert hat, nicht als Dekoration.

**Mechanismen statt Ergebnisse.** "Der Hadamard-Puls rotiert den Bloch-Vektor um die diagonale Achse" statt "Hadamard macht Superposition".

**Ehrlich bei Schwierigkeiten.** "Der nächste Schritt ist nicht offensichtlich" statt "ist trivial".

**Respekt vor dem Leser.** Er ist klug, aber neu im Thema. Nicht herablassend, nicht besserwisserisch.

### 3.3 Sprachliche Faustregeln

- **"Man"** sparsam verwenden — oft ist "wir" oder "du" persönlicher.
- **Passiv** sparsam — Aktivformen sind klarer.
- **Nominalstil** reduzieren — "die Durchführung der Messung" → "eine Messung durchführen".
- **Fremdwort-Dichte** überwachen — wenn ein Absatz mehr als 3 Fachbegriffe hat, einen erklären oder umformulieren.

---

## 4 — Aufbauprinzipien

### 4.1 Der rote Faden

Jeder Beitrag folgt einer **Kette**: Kapitel n baut auf Kapitel n−1 auf, Kapitel n+1 setzt Kapitel n voraus. Der Leser soll am Ende sagen können: "Ich bin mitgegangen — Schritt für Schritt."

**Prüffrage vor jedem Kapitelübergang:** "Kann der Leser sich *aus dem Vorkapitel* diesen nächsten Schritt herleiten, oder brauche ich eine Brücke?"

### 4.2 Glasperlenspiel-Verweise

Die Posts sind ein Netz, kein Stapel. Wenn in Post A ein Konzept auftaucht, das in Post B vertieft wurde: verlinken, und zwar mit Inhalt. Nicht "siehe Post B", sondern "die Mathematik dahinter, Eigenwerte, haben wir im Eigenwerte-Post ausgearbeitet — dort in Kapitel 4 steht, wie das mit dem Kernel-Trick zusammenhängt."

### 4.3 Interaktive Komponenten als Übungsplatz

Wo immer möglich: eine React-Komponente nach einem neuen Konzept. Der Leser probiert, nicht nur liest. Die Komponente muss mindestens EINEN Parameter haben, mit dem man sieht, dass sich etwas verändert.

### 4.4 FAQ am Ende — aber echte FAQs

Die FAQ-Section ist SEO-wirksam, aber sie muss *ernstgemeinte* Fragen beantworten, die Leser tatsächlich haben (laut Search-Queries, PAA-Boxen, Kommentaren). Keine aufgewärmten Inhalte. Jede Frage hat eine konkrete Antwort mit eigenem Mehrwert gegenüber dem Fließtext.

---

## 5 — Video-spezifisch

### 5.1 Ziel: Cliffhanger, nicht Zusammenfassung

Das Video soll den Zuschauer am Ende denken lassen: *"Wow, das war didaktisch stark — ich will den Blog lesen."* Das heißt:
- Das Video **öffnet** Fragen, es beantwortet nicht alle. Einige Details bleiben für den Blog.
- Jede Szene hat einen kleinen Aha-Moment.
- Outro: konkreter Call-to-Action (Blog-URL, GitHub-Repo).

### 5.2 Länge

**Sweet Spot: 5–8 Minuten**, wenn der Inhalt trägt. Lieber 7 Min mit Tiefe als 3 Min mit Glätte. YouTube-Algorithmus bewertet Watch-Completion — wenn unser Content es verdient, dass Leute zu Ende schauen, wird er gerankt.

### 5.3 Voice + Visuals synchron

Der gesprochene Text muss **konkret beschreiben**, was gerade visuell passiert. Nicht "und jetzt sehen wir die Bloch-Kugel" — sondern "der Pfeil beginnt am Nordpol, den wir Null nennen, und wandert auf einer Geodäte zum Äquator." Voice führt die Augen.

### 5.4 Umlaute, Fachbegriffe, Aussprache

- **ElevenLabs-Voices lesen echte Umlaute korrekt.** ASCII-Ersetzungen ("fuer", "Verschraenkung") führen zu Fehlaussprache ("LU-Ecke" für "Lücke") — siehe Schwingkreis-Vorfall 20. April 2026.
- **Fachbegriffe prüfen:** Namen wie "Hadamard" werden von ElevenLabs oft falsch betont. Testen beim ersten Render, ggf. phonetisch umschreiben (z.B. "Hadamar" ohne D am Ende).
- **Englische Worte in deutschen Texten** — ElevenLabs-Multilingual-Modell macht das meist gut, aber bei Eigennamen wie "PsiQuantum" prüfen.

### 5.5 Render-Qualität — `-qh` ist Pflicht für YouTube

**Nicht wieder vergessen:**

| Flag | Auflösung | FPS | Zweck |
|---|---|---|---|
| `-ql` | 480×270 | 15 | **Nur Preview** beim Iterieren — schnell, klein, hässlich |
| `-qm` | 1280×720 | 30 | Kompromiss, selten genutzt |
| `-qh` | 1920×1080 | 60 | **Standard für YouTube-Upload** |
| `-qk` | 3840×2160 | 60 | 4K, für Zeitmaschinen |

**Regel:** Sobald das Skript didaktisch abgesegnet ist, **IMMER `-qh` rendern** bevor YouTube-Upload. `-ql` ist ausschließlich für Iteration da — der Voice-Cache (ElevenLabs) trägt von `-ql` nach `-qh`, also kostet das nichts extra außer Render-Zeit.

**Ich habe das am 20. April 2026 vergessen und musste beide Videos neu rendern + neu uploaden** (die Blog-Embed-IDs, Playlist-Einträge und VideoObject-JSON-LDs aktualisieren ebenfalls).

**Check vor jedem Upload:**
```bash
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate \
  -of default=nw=1 <video.mp4>
# Expect: width=1920, height=1080, r_frame_rate=60/1 (oder 60000/1001)
```

---

## 6 — SEO & Ranking

### 6.1 Google ranked Tiefe

Googles Helpful-Content-Update und die Relevanz-Modelle der letzten Jahre bestraten flachen Content. Konkrete Indikatoren, nach denen Google rankt:

- **Time on Page:** Wie lange bleibt der Leser? → Tiefe hält länger.
- **Pogo-sticking:** Springt der Leser zurück zu Google? → Dünner Content tut das.
- **Scroll-Tiefe:** Liest der User bis zum Ende? → Gute Struktur, Aha-Momente, Interaktivität helfen.
- **Queries in Passagen:** Google versteht mittlerweile, ob eine konkrete Unterfrage beantwortet wird.

Unser Weg: **wir schreiben nicht für Google, wir schreiben für den Leser.** Aber wir wissen, dass dieselben Signale, die den Leser halten, auch das Ranking tragen.

### 6.2 Keyword-Nutzung

Natürliche Keyword-Nutzung — nie stopfen. Die Hauptkeywords (z.B. "Quantencomputer", "Qubit", "Bloch-Kugel") ergeben sich automatisch aus dem Thema. **Einmal** sauber in H1 und Intro, dann normal im Fließtext.

---

## 7 — Prozess

### 7.1 Vor dem Schreiben

1. **Wer ist der Leser?** Technisch, aber Laie? Erfahren? Ausrichten.
2. **Welche Posts hat er vermutlich gelesen?** Was darf ich voraussetzen, worauf verlinke ich?
3. **Roter Faden in Kapiteln.** Was baut wie auf?

### 7.2 Während des Schreibens

1. Pro Abschnitt: "Welche Laien-Frage hätte der Leser jetzt?"
2. Pro neuem Fachbegriff: Abholung oder Verweis?
3. Bei Gefühl "das wird lang" — weiterschreiben, nicht kürzen. Kürzen kommt später.

### 7.3 Nach dem Schreiben

1. **Grep-Runde** durch den Anti-Pattern-Katalog (§3.1).
2. **Re-Read aus Anfängerperspektive** — jedes Fragezeichen markieren, dann beantworten.
3. **Re-Read aus Experten-Perspektive** — jede Ungenauigkeit markieren, korrigieren.

### 7.4 Beim Video

1. Skript als Text zuerst — Tiefe prüfen wie beim Blog.
2. ElevenLabs-Generierung testen bei **einem** Satz, dann großflächig.
3. Finale Render erst wenn Skript final — Credits sind teuer.

---

## 8 — Lessons Learned (wächst)

| Datum | Lesson | Wo gelernt |
|---|---|---|
| 2026-04-20 | "ae/oe/ue" statt echter Umlaute führt zu Fehlaussprache bei ElevenLabs ("EnergielUEcke") | quantum_intro_de.py v1 |
| 2026-04-20 | Flapsige Understatements ("Mehr ist das nicht") wirken wie KI-Dreck und verraten den Text | quantencomputer.html Review |
| 2026-04-20 | "Supraleitender Schwingkreis" ohne klassische Brücke ist für Laien ein abstraktes Fremdwort | Quantum-Computing Video v2 Review |
| 2026-04-20 | Mathias ist bereit, Beiträge DEUTLICH länger werden zu lassen, wenn dadurch echte Tiefe entsteht | Quantum-Computing Review |
| 2026-04-20 | Voiceover-Hashes ändern sich bei jeder Textänderung — bei großen Skripten kostet das viele Credits | ElevenLabs-Quota-Vorfall |
| 2026-04-20 | Bei oszillierenden Systemen muss klar werden, **was** variabel ist (Amplitude) vs. was fix ist (Frequenz). Ein Satz wie "klassisch jede Energie stufenlos" öffnet die Frage "was heißt Energie — Ausschlag oder Frequenz?" und muss beantwortet werden. Merksatz: Frequenz aus den Bauteilen, Amplitude frei wählbar, Energie = Amplitude². | Mathias-Feedback zum Schwingkreis-Video |
| 2026-04-20 | `\theta/2` in der Bloch-Kugel-Parametrisierung ist erklärungsbedürftig — wer mit klassischer Geometrie anfängt, fragt sofort "warum halber Winkel?". Antwort: Spin-½, doppelte Überlagerung SU(2)→SO(3), Gürteltrick. | Bloch-Kapitel-Fix |
| 2026-04-20 | `SU(2)`, `SO(3)`, "Lie-Gruppe" ohne Abholung sind reiner Fachjargon. Lieber: "Familie aller unitären 2×2-Matrizen mit Determinante 1" + anschauliche Parallele zur Drehung. | Gatter-Kapitel-Fix |
| 2026-04-20 | Wenn ein Fachbegriff einmal genannt wird (z.B. "Josephson-Kontakt"), muss er beim ersten Auftreten **tief** abgeholt werden — nicht beim zweiten. Leser, die beim ersten Auftreten abgehängt werden, lesen den zweiten oft nicht mehr. | Josephson-Szene im Video |
| 2026-04-20 | **Render-Quality: `-qh` (1080p60) ist Pflicht für YouTube-Upload, `-ql` nur für Preview!** Voice-Cache trägt vom Preview-Render zum HD-Render, also ist das kostenfrei. Ich habe das vergessen und 480p15 hochgeladen — Mathias musste es reklamieren. | Auflösungs-Reklamation Quantum-Post |

---

## 9 — TODO / Offene Fragen

- [ ] Wie geht man mit mathematischen Beweisen um — was muss gezeigt werden, was reicht als Motivation?
- [ ] Konvention für Video-Thumbnails erarbeiten — Branding, Farbe, Text-Layout.
- [ ] Wenn ein Post > 20.000 Wörter wird: aufteilen? Oder eine Landing-Page mit Ankern bauen?
- [ ] Nachhaltigkeit der Links prüfen (externe Ressourcen veralten) — regelmäßiger Check-Prozess?
