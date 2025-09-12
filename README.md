<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/CadxStudio-Banner-Dark.png">
    <source media="(prefers-color-scheme: light)" srcset="./public/CadxStudio-Banner-Light.png">
    <img src="./public/CadxStudio-Banner-Light.png" alt="CadxStudio Banner" width="100%"/>
  </picture>
</div>

<h1 align="center"> ⛮ CadxStudio - The Open Source Text to CAD Web App ⛮ </h1>

<div align="center">

[![Stars](https://img.shields.io/github/stars/CadxStudio/cadxstudio?style=social&logo=github)](https://github.com/CadxStudio/cadxstudio/stargazers)
[![Forks](https://img.shields.io/github/forks/CadxStudio/cadxstudio?style=flat)](https://github.com/CadxStudio/cadxstudio/network)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat)](https://www.gnu.org/licenses/gpl-3.0)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB.svg?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E.svg?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)
[![OpenSCAD](https://img.shields.io/badge/OpenSCAD-WASM-F9D64F.svg?style=flat)](https://openscad.org/)
[![Website](https://img.shields.io/badge/website-cadxstudio.com-blue?style=flat)](https://cadxstudio.com)

</div>

---

## ✨ Features

- 🤖 **AI-Powered Generation** - Transform natural language and images into 3D models
- 🎛️ **Parametric Controls** - Interactive sliders for instant dimension adjustments
- 📦 **Multiple Export Formats** - Export as .STL or .SCAD files
- 🌐 **Browser-Based** - Runs entirely in your browser using WebAssembly
- 📚 **Library Support** - Includes BOSL, BOSL2, and MCAD libraries

## 🎯 Key Capabilities

| Feature | Description |
|---------|-------------|
| **Natural Language Input** | Describe your 3D model in plain English |
| **Image References** | Upload images to guide model generation |
| **Real-time Preview** | See your model update instantly with Three.js |
| **Parameter Extraction** | Automatically identifies adjustable dimensions |
| **Smart Updates** | Efficient parameter changes without AI re-generation |
| **Custom Fonts** | Built-in Geist font support for text in models |

## 📸 Demo

<!-- Add demo GIFs or screenshots here -->
<!-- Example format:
![CADAM Demo](./demo/demo.gif)

### Example: Creating a parametric gear
![Gear Example](./demo/gear-example.png)
-->

> 🎬 **Try it live:** https://cadxstudio.com

## 📺 Screenshots

<img src="./public/screenshot-2.jpeg" alt="CadxStudio Screenshot 2" />

<details>
  <summary>More screenshots</summary>

  <br/>
  <img src="./public/screenshot-1.jpeg" alt="CadxStudio Screenshot 1" />
  <br/>
  <img src="./public/screenshot-3.jpeg" alt="CadxStudio Screenshot 3" />

</details>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/CadxStudio/cadxstudio.git
cd cadxstudio

# Install dependencies
npm install

# Start Supabase
npx supabase start
npx supabase functions serve --no-verify-jwt

# Start the development server
npm run dev
```

## 📋 Prerequisites

- Node.js and npm
- Supabase CLI
- ngrok (for local webhook development)

## 🔧 Setting Up Environment Variables

### 1. Frontend Environment:

- Copy `.env.local.template` to `.env.local`
- Update all required keys in `.env.local`:
  ```
  VITE_SUPABASE_ANON_KEY="<Test Anon Key>"
  VITE_SUPABASE_URL='http://127.0.0.1:54321'
  ```

### 2. Supabase Functions Environment:

- Copy `supabase/functions/.env.template` to `supabase/functions/.env`
- Update all required keys in `supabase/functions/.env`, including:
  ```
  ANTHROPIC_API_KEY="<Your Anthropic API Key>"
  ENVIRONMENT="local"
  NGROK_URL="<NGROK URL>" # Your ngrok tunnel URL, e.g., https://xxxx-xx-xx-xxx-xx.ngrok.io
  ```

## 🌐 Setting Up ngrok for Local Development

CadxStudio uses ngrok to send image URLs to Anthropic:

1. Install ngrok if you haven't already:

   ```bash
   npm install -g ngrok
   # or
   brew install ngrok
   ```

2. Start an ngrok tunnel pointing to your Supabase instance:

   ```bash
   ngrok http 54321
   ```

3. Copy the generated ngrok URL (e.g., https://xxxx-xx-xx-xxx-xx.ngrok.io) and add it to your `supabase/functions/.env` file:

   ```
   NGROK_URL="https://xxxx-xx-xx-xxx-xx.ngrok.io"
   ```

4. Ensure `ENVIRONMENT="local"` is set in the same file.

## 💻 Development Workflow

### Install Dependencies

```bash
npm i
```

### Start Supabase Services

```bash
npx supabase start
npx supabase functions serve --no-verify-jwt
```

## 🛠️ Built With

- **Frontend:** React 18 + TypeScript + Vite
- **3D Rendering:** Three.js + React Three Fiber
- **CAD Engine:** OpenSCAD WebAssembly
- **Backend:** Supabase (PostgreSQL + Edge Functions)
- **AI:** Anthropic Claude API
- **Styling:** Tailwind CSS + shadcn/ui
- **Libraries:** BOSL, BOSL2, MCAD

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Credits

This app wouldn't be possible without the work of:

- [OpenSCAD](https://github.com/openscad/openscad)
- [openscad-wasm](https://github.com/openscad/openscad-wasm)
- [openscad-playground](https://github.com/openscad/openscad-playground)
- [openscad-web-gui](https://github.com/seasick/openscad-web-gui)
- [dingcad](https://github.com/yacineMTB/dingcad)

## 📄 License

This distribution is licensed under the GNU General Public License v3.0 (GPLv3). See `LICENSE`.

Components and attributions:

- Portions of this project are derived from `openscad-web-gui` (GPLv3).
- This distribution includes unmodified binaries from OpenSCAD WASM under
  GPL v2 or later; distributed here under GPLv3 as part of the combined work.
  See `src/vendor/openscad-wasm/SOURCE-OFFER.txt`.

---

<div align="center">
  
**⭐ If you find CADAM useful, please consider giving it a star!**

**⭐ If you find CadxStudio useful, please consider giving it a star!**

[![Stars](https://img.shields.io/github/stars/CadxStudio/cadxstudio?style=social&logo=github)](https://github.com/CadxStudio/cadxstudio/stargazers)

Made with 💙 for the 3D printing and CAD community

</div>
