# React portfolio

[View the portfolio](https://konrad-dev.vercel.app/).

## Development

Open `portfolio`, run `npm ci --legacy-peer-deps`, then `npm start`.

## Validation

Run `npm test -- --watchAll=false --runInBand`. Regression tests cover card activation with Enter and Space, focus access to project links, and cleanup of intro timers on unmount.

This project uses Create React App 4. For a production build on current Node.js versions, set `NODE_OPTIONS=--openssl-legacy-provider` for the build process, then run `npm run build`. For example, in PowerShell:

```powershell
$env:NODE_OPTIONS = '--openssl-legacy-provider'
npm run build
```

GitHub Actions runs tests and the production build using Node.js 22. The compatibility flag is confined to the build step.

## Keyboard access

Use the navigation links to jump between sections. Each project card has a Show/Hide details button with a visible focus indicator. Enter and Space toggle the card; Tab reaches the project link when its details are shown.
