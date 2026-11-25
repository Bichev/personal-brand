# The Wish Ledger: improvements for consideration

Ideas raised while refining the published article. None of these is applied. Each entry says what the problem is, what the change would be, and what it costs.

## 1. Reorder sections II and III so visuals arrive sooner

Raised by Vladimir, 25 November 2026: the text before the map is dense, and the map might be more engaging earlier.

**Problem.** Section II has two blocks of unbroken text: the three rules of the audit (three paragraphs, before the first chart) and "Tales that read like product descriptions" (six paragraphs and a quotation, after the atlas). Section III, the map, is nearly all visuals. The reader gets a long stretch of text followed by a long stretch of pictures.

**Why not swap the sections whole.** The map's dots are coloured by the ten wishes and its buttons filter by them. The wishes are introduced by the atlas in section II, so the map cannot come first.

**Proposed change.**
1. Shrink the rules to one short paragraph before the atlas: wishes and not predictions, dated by earliest written source, weak matches left out. Move the detail and examples (Baba Yaga, Wan Hu, the diving bell) into a "How I counted" note under the atlas that opens on demand.
2. Move the six story paragraphs to after the map and the picture pairs. Order becomes: the morning, the atlas, the map and matches, old pictures beside the real thing, then the stories.

**Side benefit.** The paragraph on the Russian and Hawaiian living water sits with the map, where it belongs.

**Cost.** The stories are some of the best writing in the piece, and this moves them from about a fifth of the way down to about a third. Entry 2 is the answer to that cost.

**Status.** Parked. Part 2 is less pressing now that the stories carry pictures (see entry 2). Part 1, shrinking the rules, is still open.

## 2. Make the stories block more inviting where it stands

**Problem.** "Tales that read like product descriptions" is six paragraphs with no picture, in an article where every other section has one. A reader skimming for visuals scrolls past the best prose.

**Options, in the order I would try them.**

1. **Story cards with pictures we already have.** Five public-domain illustrations are downloaded and unused: two of the Enchanted (Ebony) Horse by John D. Batten, and three of Prince Ahmed and the Fairy Paribanou from The Blue Fairy Book. Set each story as a card with its picture beside the text. The prose stays as written. Two stories (the saucer and the apple, the Phaeacian ships) have no picture yet; the saucer would need one found, with a clear licence.
2. **A "listing" line under each story.** The section's joke is that these read like product descriptions, so show it: two short lines per story, "First written" and "Arrived as". For the three princes: the ivory tube, 1709, arrived as the video call; the carpet, arrived as the air ambulance; the apple, arrived as the pharmacy. This reuses the look of the morning cards and makes the point visible to someone who reads no paragraph. Keep it to those two lines. A full spoof spec sheet ("known issues: no second pin") would be funny once and tiring by the fourth card.
3. **A run-in title on each story.** Start each paragraph with the tale's name and date in bold, as the three audit rules do. It costs nothing and lets a reader find the story they recognise.
4. **Four stories in the main flow, two in the atlas.** Keep the saucer, the three princes, the Ebony Horse and Aristotle. Move the Phaeacian ships and the Welsh horn, and the note on which Nights tales are in the Arabic, into the atlas detail panels for their wishes, where a curious reader already goes.

**Recommendation.** Options 1, 2 and 3 together, on the four stories from option 4. The prose is unchanged, the block gains three pictures, and it can then stand either where it is or after the map.

**Cost.** One new card layout, three or four more images on the page (about 300 KB), and one picture to source for the saucer.

**Status.** Done on 25 November 2026, with changes agreed with Vladimir:
- Options 1, 2 and 3 are applied. All six stories are kept (option 4 was not taken).
- At his suggestion the "Old pictures beside the real thing" pairs were blended in: four of the six imagined-and-real pairs now sit directly under the story they match (screen, carpet, first flight, made servant). The two Moon pairs and the gallery follow under "More old pictures beside the real thing", still in section II.
- Only one of the five unused illustrations was used, Ford's bazaar scene for the three princes. The two Batten pictures for the Enchanted Horse show no horse, and the other two Ford pictures show later scenes.
- The saucer story has no picture of its own; the Robida and Baird pair stands in.

## 3. A separate phone layout

Raised by Vladimir, 25 November 2026: too much scrolling on a phone.

**Measured before.** At 375 px wide the page was about 91 screens long (74,081 px). Prose was about 19 of them; the visuals were the rest.

**Rule adopted.** Laptop shows everything. Phone shows the summary line and opens the detail on a tap; picture sets sit side by side or swipe. Prose is never hidden. One page, one file.

**Done.**
- Atlas and map lists: one line per tale, opening on tap, on both screen sizes whenever a list has more than four entries. Built on the browser's own `<details>` element, so find-in-page still reaches the text. The source link moved inside the opened row.
- Phone only, rows that open on tap: open ledger, made-mind audit, made-mind timeline, scientists, resonance cards, matches, and the science-fiction scorecard (a list in place of the wide table). The first row of each starts open; opening one closes the others. A closed row's title link opens the row first and works as a link on the second tap.
- Phone only: imagined-and-real pairs stay side by side; the gallery swipes sideways; sources and picture credits are folded closed.
- Left alone: morning cards, year dial, the map, the lag chart, the naysayers and warnings tables.

**Measured after.** About 66 screens (53,460 px), a cut of 28%.

**Still possible.** The lag chart (3.3 screens), the morning cards (2.5), the year dial (2.6) and the naysayers table (2.2) are the largest blocks left. The phone folds use a class toggle, so find-in-page does not open them.

**Status.** Done.

## 4. Scroll animation

Raised by Vladimir, 25 November 2026, with The Atlantic's online features as the reference.

**Rule adopted.** Motion has to mean something. Each animation runs once, the page never takes over the scroll, nothing is hidden if scripts fail or the reader has "reduce motion" on, and there are no libraries.

**Done.**
- Visual 01: each moment turns into its tale as the card crosses the middle of the screen. A tap turns it back.
- Lag chart: each line grows from the year written to the year granted as its row arrives.
- Hero: the carpet drifts slightly to the right over the first 700 px of scrolling.
- Visuals, picture pairs and the gallery fade in as they arrive. In each pair the real picture follows the imagined one by half a second.
- Made-mind strip: the dots appear in date order.
- Year Dial replaced by the Year Table, on Vladimir's design: five year columns that fill in from left to right as the reader scrolls, each figure showing its change from the column before. Tapping a year shows who lived in it. It is also shorter on a phone than the dial was (1,219 px against 2,138).

**Not done, by choice.** Count-up numbers, animated paragraphs, parallax on other pictures, and a pinned scene that holds the screen while content changes.

**Status.** Done. Checked in a desktop and a phone-sized browser window. That window throttles scroll events, so the carpet drift and the smoothness of the table reveal are best judged on a real device.
