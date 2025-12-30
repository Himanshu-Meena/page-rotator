# 🔄 Page Rotator

A lightweight Chrome Extension that allows you to rotate any webpage by 90°, 180°, or 270° with a single click. Useful for developers testing responsive layouts, viewing sideways PDFs, or just having a bit of fun.

## 🚀 Features
* **Instant Rotation:** Rotate the current tab via the extension popup.
* **Non-Destructive:** Easily reset back to 0° (Default).
* **Permissions:** Only requires `activeTab` and `scripting` to work on the site you are currently viewing.

---

## 🛠 Installation (How to use this)

Since this extension is not on the Chrome Web Store, you must install it manually using "Developer Mode":

1. **Download the Code:**
   * Click the green **Code** button at the top of this page and select **Download ZIP**.
   * Extract the ZIP file to a folder on your computer (e.g., `Documents/PageRotator`).

2. **Open Chrome Extensions:**
   * In your Chrome address bar, type `chrome://extensions/` and hit Enter.

3. **Enable Developer Mode:**
   * In the top right corner, toggle the switch that says **Developer mode** to **ON**.

4. **Load the Extension:**
   * Click the **Load unpacked** button that appears in the top left.
   * Select the folder where you extracted the files (the folder containing `manifest.json`).

5. **Pin for Easy Access:**
   * Click the "Puzzle Piece" icon next to your profile picture in Chrome and pin **Page Rotator** to your toolbar.

---

## 📂 Files Included
* `manifest.json`: The extension configuration and permissions.
* `popup.html`: The user interface (the menu).
* `popup.js`: The logic that injects the rotation CSS into the webpage.

## 📝 License
This project is open-source and free to use.
