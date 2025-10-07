![Treatodoro Banner](Treatodoro-app/Assets/Git-Banner.png)
# Treatodoro

A cozy, minimal **Pomodoro-style desktop timer** built with **Electron** — designed to help you focus better and reward yourself with a treat after every session.  
Each treat represents a session (5, 15, 25, or 50 minutes) or you can create a custom one.  
Stay productive while keeping things sweet and simple ✨  
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Features

* ⏰ Flexible timer options — choose from preset or custom durations
* 🍬 Each session represented by a treat: Coffee, Ice Cream, Ramen, Cake, Strawberries
* 💫 Minimal yet cozy UI design with pixel art image-sequence animations  
* 🔔 End-of-session ringtone — toggle sound on/off anytime  
* 🪟 Custom window frame with close & minimize buttons  
* ⚡ Lightweight and fast Electron build
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Preview
View full UI design (Figma, view-only):  
[Treatodoro UI](https://www.figma.com/design/FkaJGoQn8puV4jJeuLBOku/TREATODORO?node-id=0-1&t=DSQiMKWj9PRJZXAV-1)  

View Demo:  
[Treatodoro Demo](Treatodoro-app/Assets/Treatodoro-Demo.mp4)
> Note: The demo features a ringtone that is not included in the repository due to licensing restrictions. The project currently uses a silent placeholder (silent-placeholder.mp3). To use a proper alert, please replace the file at Treatodoro-app/Assets/silent-placeholder.mp3 with a sound file of your choosing. 
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Setup

If you want to run the app from source or build your own executable:

1. Install **Node.js (LTS version)**, which also includes npm:  
   [https://nodejs.org/en/download](https://nodejs.org/en/download)  

   Check versions:
   ```bash
   node -v
   npm -v
   ```
   If you encounter any build issues, refer to:  
   [https://github.com/nodejs/node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows)
   
3. Clone the repository:
   ```bash
   git clone https://github.com/sivaa-01/treatodoro.git
   cd treatodoro
   ```
   
4. Install Project Dependencies:
   ```bash
   npm install
   ```

5. Customize the End-of-Session Ringtone:  
   To enable the audio alert feature (which is toggled via the mute button), you must replace the placeholder.
   * Replace the file at `Treatodoro-app/Assets/silent-placeholder.mp3` with your own MP3 file.
   * The new file **must also be named `silent-placeholder.mp3`** to work correctly.
     
6. Run the app in development mode:
   ```bash
   npm start
   ```
   > The app window will launch
   
7. (Optional) Build distributable executable with **Electron Forge**:
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

8. (Optional) Customize app icon:
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
3. Select your preferred treat — four presets or a custom session.
4. The timer begins. While you work, a **pixel art image-sequence animation** plays on the timer frame.  
5. When the session ends, the **alert plays**, and your final treat is displayed on screen.
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Tech Stack

**Development**
* **Electron.js** — for building cross-platform desktop apps  
* **Electron Forge** — for packaging and creating installers  
* **HTML, CSS, JavaScript** — for UI and app logic  
* **Node.js / npm** — for managing dependencies and scripts

**Design**
* **Pixel Studio** — for creating pixel art assets for treats and image-sequence animations 
* **Sketchbook** — for creating the background artwork
* **Figma** — for UI design and layout 
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## License  
This project is licensed under the [MIT License](./LICENSE).  
All assets are original and created by the author. 
<br>
<p align="center">  · · ─ ·✦· ─ · ·</p>

## Contact
Shivaani Menon
* GitHub: [@sivaa-01](https://github.com/sivaa-01)
* LinkedIn: [Shivaani Menon](https://www.linkedin.com/in/shivaani-menon-71543a201)
<br>
<p align="center">───────·✦··✦··✦·───────</p>
