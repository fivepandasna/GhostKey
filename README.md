<h1 align="center">
GhostKey -  An extremely simple ghost key for chattriggers intended for skyblock
</h1>



<div align="center">

![gk_logo](https://raw.githubusercontent.com/fivepandasna/GhostKey/main/assets/logo-80.png)

[![Downloads](https://img.shields.io/github/downloads/fivepandasna/GhostKey/total?label=downloads&color=208a19&logo=github&style=for-the-badge)](https://github.com/fivepandasna/GhostKey/releases)
</div>

## Installation 
How to install the module 

1. Download  GhostKey.zip from the latest release [release](https://github.com/fivepandasna/GhostKey/releases)

2. Unzip the file by right clicking then clicking "Extract All..." in the context menu
  
3. Navigate to your chattriggers module folder by typing /ct files and clicking on "modules in game or by navigating to %appdata%\.minecraft\config\ChatTriggers\modules



## Usage
Click G on your keyboard to create a ghost block where you are looking.

I'm sure you know the purpose of ghost blocks.



## Change key
To change the key you have to click to crate a ghost block, here's what you have to do

1. Open the module file by typing /ct files in game, opening modules, then opening GhostKey or navigating to %appdata%\.minecraft\config\ChatTriggers\modules\GhostKey

2. Open index.js with notepad or an IDE if you want
  
3. In line 5, or "const ghostkey = Client.getKeyBindFromKey(Keyboard.KEY_G, "Ghost key")" change the G in "KEY_G" to whatever key you want. Do not change anything else
  
4. Save the file and reload modules with /ct reload
