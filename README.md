# Link Card Guide

A lightweight personal link card built with plain HTML, CSS, and JavaScript.

## Project Structure

- `index.html` - Base page markup
- `styles.css` - Visual styling, layout, and animations
- `script.js` - Profile data and dynamic link rendering
- `assets/` - Local images and other static files

## Quick Start

1. Open the project folder in VS Code.
2. Open `index.html` in your browser.
3. Edit profile data in `script.js`.
4. Refresh the page after each change.

## Customize Your Profile

Update the `profile` object in `script.js`:

```js
const profile = {
  name: "Your Name",
  handle: "@yourhandle",
  bio: "Short bio here.",
  avatarImage: "assets/your-photo.png",
  avatarText: "YN",
  links: [
    { label: "Portfolio", url: "https://yourdomain.com", accent: "#0e9f8b" }
  ]
};
```

### Fields

- `name`: Your display name
- `handle`: Your social handle
- `bio`: Short intro text
- `avatarImage`: Path to your profile picture
- `avatarText`: Fallback initials shown if no image is set
- `links`: List of cards rendered automatically

## Add or Replace Profile Picture

1. Put your image in the `assets/` folder.
2. Set `avatarImage` in `script.js` to that file path.
3. Keep `avatarText` as a fallback for missing images.

Example:

```js
avatarImage: "assets/Jezzy pfp (3).png"
```

## Add New Links

In `profile.links`, add objects with:

- `label`: Link title shown on card
- `url`: Destination URL (with or without `https://`)
- `accent`: Optional highlight color for hover/arrow

Example:

```js
{ label: "YouTube", url: "https://youtube.com/@yourchannel", accent: "#dc2626" }
```

## Deploy Options

You can host this on:

- GitHub Pages
- Netlify
- Vercel
- Any static web host

For GitHub Pages:

1. Push this folder to a GitHub repository.
2. Open repository Settings.
3. Go to Pages.
4. Set source branch (usually `main`) and root folder.
5. Save and use the generated URL.

## Troubleshooting

- Image not showing:
  - Confirm file name and extension match exactly.
  - Confirm the path starts with `assets/`.
- Link opens wrong page:
  - Ensure the URL is valid.
  - If you omit protocol, the script auto-adds `https://`.
- Style not updating:
  - Hard refresh browser (`Ctrl + F5`).

## License

Use and modify freely for personal projects.
