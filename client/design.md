# Indiahikes "Upcoming Treks" Page Design & Structure

Based on an analysis of the [Indiahikes Upcoming Treks](https://indiahikes.com/upcoming-treks) page, here is a detailed breakdown of the UI sections, layout, and components.

## Overall Layout Strategy
The page uses a clean, light-themed e-commerce-style layout. The primary goal is to help users quickly filter a large catalog of treks using robust search, category visuals, and a sticky sidebar filter.

---

## 1. Global Header Sections
The top of the page is heavily layered for navigation and announcements.
* **Top Banner Bar:** A thin, contrasting announcement banner (often dark blue/yellow) for new launches or urgent alerts.
* **Main Navbar:** Clean white background. Logo on the far left. Secondary links (Careers, Contact, Shop, Profile) and a minimal Search Icon on the right.
* **Sub-Navigation (Yellow Bar):** A bright yellow ribbon menu specifically for categorizing their core offerings (Upcoming Treks, Themed Treks, Unexplored India Trips, Latest Articles, etc.).

## 2. Search Hero Section
* **Background:** Solid dark forest green.
* **Content:** Centralized white bold text asking: *"Looking for a specific trek?"*
* **Input:** A wide, pill-shaped white search bar with placeholder text. This serves as the primary, immediate call-to-action for users who already know what they want.

## 3. "Explore Our Top Categories" Slider
* **Layout:** A horizontally scrollable row (carousel) located just below the hero section.
* **Items:** Rounded square cards. The top 70% is an image, and the bottom 30% is a white box with bold, multi-line text.
* **Purpose:** Quick filters for popular intents (e.g., *Top Treks in Jul/Aug*, *Flower-Laden Trails*, *Best for Beginners*, *Pass-Crossing Treks*).

## 4. Main Content Area (2-Column Grid)
Below the categories, the page splits into a classic e-commerce filter layout.

### A. Left Sidebar (Sticky)
The sidebar stays fixed as the user scrolls, allowing constant access to filters. It has a light yellow/off-white background.
* **Filter By Date:** A calendar input/dropdown to select a date range.
* **Filter By Categories:**
  * **Treks by Month:** Vertical list of all 12 months (January - December).
  * **Treks by Region:** Vertical list of regions (Uttarakhand, Himachal Pradesh, Lahaul and Spiti, Jammu & Kashmir, Sikkim, West Bengal, Chhattisgarh, Madhya Pradesh, Nepal, Georgia).
  * **Duration / Difficulty:** Additional filtering parameters further down.

### B. Right Main Listing Area
This takes up roughly 75% of the page width.
* **Alert Box:** Often features a light yellow highlighted box with a megaphone icon warning about fast-filling treks or specific seasonal notes.
* **Section Header & SEO Text:** An `<h2>` title dynamically matching the selected filter (e.g., *"Top Treks in July, August & Sept"*), followed by a short introductory paragraph explaining what to expect in that season/region.
* **Trek Cards (List View):**
  * Displayed as wide horizontal strips.
  * **Left:** Thumbnail image of the trek.
  * **Middle:** Trek name (bold, large), brief sub-text/description, and bullet points of highlights.
  * **Right/Bottom:** Data points (Duration, Max Altitude, Difficulty level), Price, and a prominent "View Trek" CTA button.

## 5. Footer
* Standard corporate footer with dark background containing numerous sitemap columns, contact information, social links, and legal policies.

---

## What We Need to Fix/Implement to Match This:
1. **Regions Update:** ✅ *Done.* We have successfully added the expanded list of regions to your sidebar.
2. **Top Search Hero:** ✅ *Done.* We've added the dark green hero block with the search bar to `TreksExplorer.jsx`.
3. **Category Slider:** ✅ *Done.* We've added a horizontal scrollable list of visual categories below the hero.
4. **Sidebar layout:** ✅ *Done.* We've separated the filters cleanly onto the left sidebar.
5. **Horizontal Cards:** ✅ *Done.* The trek cards have been widened to look like detailed list rows rather than a grid.
