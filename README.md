# Erik's Eatery Static Website

This is a simple GitHub Pages-ready website for Erik's Eatery.

## Files

- `index.html` controls the page structure.
- `style.css` controls the look and responsive layout.
- `script.js` controls editable content: links, images, and menu items.
- `assets/` is where the logo, menu graphic, and profile/truck photos live.

## Easy Edits

Open `script.js` and edit the `siteConfig` object at the top.

- Change `facebookUrl` if the Facebook page changes.
- Change `googleFormUrl` if the event request form changes.
- Change any image URL inside `images`, or replace the SVG files in `assets/`.
- To edit the menu manually, change menu names, descriptions, and prices inside `menu`.
- To edit the menu from Google Sheets, publish a sheet as CSV and paste the CSV link into `menuSource.googleSheetCsvUrl`.

## Google Sheets Menu

The connected sheet can use this simple header row:

```csv
Food,Description,Price
```

Example rows:

```csv
Philly Cheesesteak,With onions and fries.,$13.95
The Dimos,"Double smash burger with bacon, onion, cheese, and an egg. Served with fries.",$14.95
Hot Dog,Served with fries.,$7.95
```

Optional extra columns:

- `Category` groups items into sections such as `Handhelds`, `Smash Burgers`, or `Kids`.
- `Available` can hide items when set to `no`, `false`, `0`, `hidden`, or `soldout`.

Choose `File > Share > Publish to web`, select the menu sheet, choose `Comma-separated values (.csv)`, and publish it. Paste that CSV URL into `script.js`:

```js
menuSource: {
  googleSheetCsvUrl: "PASTE_CSV_URL_HERE",
  useFallbackMenuWhenSheetFails: true
}
```

## Image Names

The site currently expects these files:

- `assets/logo.svg` for the small header logo.
- `assets/hero-wrap.svg` for the big hero image.
- `assets/food-truck.svg` for the event/truck image.
- `assets/kitchen.svg` for the story section image.
- `assets/menu.svg` for the menu graphic.
- `assets/ellies-wrap.svg`, `assets/smash-burger.svg`, `assets/gyro.svg`, `assets/event-wraps.svg`, and `assets/chicken-philly.svg` for the food gallery.

You can use different filenames by editing the `images` block in `script.js`.

## Publishing on GitHub Pages

Upload these files to a GitHub repository, then enable GitHub Pages from the repository settings. Choose the `main` branch and root folder.
