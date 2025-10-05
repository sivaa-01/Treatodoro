![Treatodoro Banner](Treatodoro-app/Assets/Git-Banner.png)
# Treatodoro

A cozy, minimal **Pomodoro-style desktop timer** built with **Electron** — designed to help you focus better and reward yourself with a treat after every session.
Each treat represents a session (5, 15, 25, or 50 minutes) or you can create a custom one.
Stay productive while keeping things sweet and simple ✨  
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Features

* ⏰ Flexible timer options — choose from preset or custom durations  
* 🔔 End-of-session ringtone — toggle sound on/off anytime  
* 💫 Minimal yet cozy UI design with animation  
* 🪟 Custom window frame with close & minimize buttons  
* ⚡ Lightweight and fast Electron build
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Preview

<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Installation or Setup

### 1️⃣ For End Users
Download and run the executable:  

No additional setup required.

### 2️⃣ For developers / contributors

If you want to run the app from source or build your own executable:

1. Install **Node.js (LTS version)**, which also includes npm:  
   [https://nodejs.org/en/download](https://nodejs.org/en/download)  

   Check versions:
   ```bash
   node -v
   npm -v
   ```
   
2. Clone the repository:
   ```bash
   git clone https://github.com/sivaa-01/treatodoro.git
   cd treatodoro
   ```

   If you encounter any build issues, refer to:  
   [https://github.com/nodejs/node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows)
   
3. Install Project Dependencies:
   ```bash
   npm install
   ```

4. Run the app in development mode:
   ```bash
   npm start
   ```

5. (Optional) Build distributable executable with **Electron Forge**:
   * Install Electron Forge CLI if not already installed:
     ```bash
     npm install --save-dev @electron-forge/cli
     ```

   * Build the app:
     ```bash
     npm run package
     ```

     This creates a folder like:  
     Treatodoro-app/out/Treatodoro-win32-x64.

   * Create an installer:
     ```bash
     npm run make
     ```

     This creates a folder like:  
     Treatodoro-app/out/make/...

6. (Optional) Customize app icon:
   * Edit forge.config.js:
     ```js
     packagerConfig: {
      asar: true,
      icon: './Assets/icon', // path to your icon
     },
     makers: [
        {
           name: '@electron-forge/maker-squirrel',
           config: {
                    name: 'Treatodoro',
                    setupIcon: './Assets/icon.ico', // path to your icon
           },
        },
     ],
     ```
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Usage

1. Launch the app.  
2. Click **Start**.  
3. Select your preferred treat — four presets and one custom session.
4. The timer begins. While you work, a **pixel art image-sequence animation** plays on the timer frame.  
5. When the session ends, the **alert plays**, and your final treat is displayed on screen.
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Tech Stack

* **Electron.js** — for building cross-platform desktop apps  
* **Electron Forge** — for packaging and creating installers  
* **HTML, CSS, JavaScript** — for UI and app logic  
* **Node.js / npm** — for managing dependencies and scripts  
* **Pixel Studio** — for creating pixel art assets for treats and image-sequence animations
* **Figma** — for UI design and layout  
* **Sketchbook** — for creating the background artwork
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## License
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Contact
Shivaani Menon
* GitHub: [@sivaa-01](https://github.com/sivaa-01)
* LinkedIn: [Shivaani Menon](https://www.linkedin.com/in/shivaani-menon-71543a201)
<br>
<p align="center">───────·✦··✦··✦·───────</p>
