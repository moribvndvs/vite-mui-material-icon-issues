# Vite + MUI + MUI Material Icons Issues

## Issues Observed

There are two issues when using MUI Material Icons.

### Undefined is not a function when importing a specific icon

First, when importing a specific icon e.g. `import NavigateNextIcon from '@mui/icons-material/NavigateNext'`, the app will usually stop working entirely. The console will show an error similar to this:

```
Uncaught TypeError: undefined is not a function
    <anonymous> Box.js:8
```

Furthermore, app will be in this broken state no matter what you do (comment out the icon import, roll back all your changes to last working commit, etc.) until you delete `node_modules/.vite` and restart the vite dev server.

### Using a named import for the icon causes frequent freezes in Firefox

To get around the first issue, you can switch to a named import instead. `import {NavigateNext} from '@mui/icons-material'` will not cause the issue mentioned above. However, when using Firefox, the entire browser will frequently lock up for several moments if you try to click on other tabs, etc. (resulting in pinwheel on MacOS). This issue does not appear in Chrome.

## Environment

- MacOS 13.4.1
- NodeJS 18.17.1 and NPM 9.6.7
- ViteJS 4.4.5 with @vitejs/plugin-react-swc 3.3.2
- MUI Material 5.14.5
- MUI Material Icons 5.14.3
- Firefox 116.0.2
- Chrome 115.0.5790.170

## Steps to Reproduce

- Clone repository
- If using NVM, run `nvm install`
- Run `npm install`
- Run `npm run dev`
- Click the link to launch the site in Firefox
- If the page is blank white, check the console for the error referenced in the first issue above.
- Stop vite, delete `node_modules/.vite`, go to `src/App.tsx`, and swap the commented out `NavigateNextIcon` lines, then restart the vite dev server
- Note that the page now renders without the error, but if you have the developer tools open, clicking around will periodically cause the freezes
- If you swap back to the original import, you may find that sometimes it still works until you delete `node_modules/.vite`
- If you try this in Chrome, only the first problem will be reproducable.
