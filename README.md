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
- Change any image URL inside `images`, or replace the JPG/PNG files in `assets/`.
- To edit the menu manually, change menu names, descriptions, and prices inside `menu`.
- To edit the menu from Google Sheets, publish a sheet as CSV and paste the CSV link into `menuSource.googleSheetCsvUrl`.

## Google Sheets Menu

The connected sheet should use this header row:

```csv
Category,Food,Description,Price
```

Example rows:

```csv
Handhelds,Philly Cheesesteak,With onions and fries.,$13.95
Smash Burgers,The Dimos,"Double smash burger with bacon, onion, cheese, and an egg. Served with fries.",$14.95
Kids,Hot Dog,Served with fries.,$7.95
```

Optional extra columns:

- `Available` can hide items when set to `no`, `false`, `0`, `hidden`, or `soldout`.

If `Category` is left blank, the site tries to infer a section from the food name.

Choose `File > Share > Publish to web`, select the menu sheet, choose `Comma-separated values (.csv)`, and publish it. Paste that CSV URL into `script.js`:

```js
menuSource: {
  googleSheetCsvUrl: "PASTE_CSV_URL_HERE",
  useFallbackMenuWhenSheetFails: true
}
```

## Image Names

The site currently expects these files:

- `assets/eriks-logo.jpg` for the small header logo.
- `assets/ellies-wrap-poster.jpg` for the big hero image.
- `assets/food-truck.jpg` for the event/truck image.
- `assets/erik-in-kitchen.jpg` for the story section image.
- `assets/menu.jpg` for the menu graphic.
- `assets/ellies-wrap.jpg`, `assets/smash-burger.jpg`, `assets/gyro.jpg`, `assets/event-wraps.jpg`, and `assets/philly-cheesesteak.jpg` for the food gallery.

You can use different filenames by editing the `images` block in `script.js`.

Add JPG or PNG files to `assets/` using the names listed in `assets/PHOTO-NAMES.md`.

## Publishing on GitHub Pages

Upload these files to a GitHub repository, then enable GitHub Pages from the repository settings. Choose the `main` branch and root folder.
