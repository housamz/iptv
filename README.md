# IPTV Channel Browser

A modern React + TailwindCSS web app for browsing, searching, filtering, and watching IPTV channels using the [iptv-org](https://github.com/iptv-org/database) public API.

## Features
- Search, filter, and lazy-load thousands of IPTV channels
- Browse by country, category, or all channels
- Watch channels directly in the browser (HLS streams)
- Responsive, dark, and colorful UI
- Fast navigation with React Router

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm

### Installation
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints Used
All data is fetched from the [iptv-org public API](https://github.com/iptv-org/database):

- **Channels**: [`/channels.json`](https://iptv-org.github.io/api/channels.json)
- **Feeds**: [`/feeds.json`](https://iptv-org.github.io/api/feeds.json)
- **Logos**: [`/logos.json`](https://iptv-org.github.io/api/logos.json)
- **Streams**: [`/streams.json`](https://iptv-org.github.io/api/streams.json)
- **Guides**: [`/guides.json`](https://iptv-org.github.io/api/guides.json)
- **Categories**: [`/categories.json`](https://iptv-org.github.io/api/categories.json)
- **Languages**: [`/languages.json`](https://iptv-org.github.io/api/languages.json)
- **Countries**: [`/countries.json`](https://iptv-org.github.io/api/countries.json)
- **Subdivisions**: [`/subdivisions.json`](https://iptv-org.github.io/api/subdivisions.json)
- **Cities**: [`/cities.json`](https://iptv-org.github.io/api/cities.json)
- **Regions**: [`/regions.json`](https://iptv-org.github.io/api/regions.json)
- **Timezones**: [`/timezones.json`](https://iptv-org.github.io/api/timezones.json)
- **Blocklist**: [`/blocklist.json`](https://iptv-org.github.io/api/blocklist.json)

### Example: Channel Object
```json
{
	"id": "AnhuiTV.cn",
	"name": "Anhui TV",
	"alt_names": ["安徽卫视"],
	"network": "Anhui",
	"owners": ["China Central Television"],
	"country": "CN",
	"categories": ["general"],
	"is_nsfw": false,
	"launched": "2016-07-28",
	"closed": "2020-05-31",
	"replaced_by": "CCTV1.cn",
	"website": "http://www.ahtv.cn/"
}
```

### Example: Stream Object
```json
{
	"channel": "France3.fr",
	"feed": "NordPasdeCalaisHD",
	"title": "France 3 Nord Pas-de-Calais HD",
	"url": "http://1111296894.rsc.cdn77.org/LS-ATL-54548-6/index.m3u8",
	"referrer": "http://example.com/",
	"user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
	"quality": "720p"
}
```

## Project Structure
- `src/components/` — React UI components
- `src/services/apiService.js` — All API fetch logic
- `src/App.jsx` — Main app with router
- `tailwind.config.js` — TailwindCSS config

## Customization
- Edit `src/services/apiService.js` to add or modify API calls
- UI is fully responsive and easy to theme with Tailwind

## Credits
- [iptv-org/database](https://github.com/iptv-org/database) for the open IPTV data
- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [TailwindCSS](https://tailwindcss.com/)

## License
MIT
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
