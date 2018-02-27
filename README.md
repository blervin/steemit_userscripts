## Steemit User Scripts
This project is a collection of [userscripts](https://en.wikipedia.org/wiki/Userscript) that allow you to update your [Steemit.com](https://steemit.com) menu to display the list of tags you specify.

#### Install the Browser Extension
In order to execute these userscripts, we need a userscript manager for our browser. There are two popular managers available for these browsers:

- Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
- Firefox: [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

Just click the link for your browser and install the extension.

#### Update userscript
The only change you need to make is the tags definition. Set this list to those tags you prefer, as many as you want.

```
var tags = ['utopian-io','linux','steemsql','sql','linux','programming','coding','technology'];
```

## Create New userscript
In Chrome, we can click the Tampermonkey icon and select `Create a new script...`

![new_tamper.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517712720/hu3xvzkbxg6xizvrd6jr.png)

Then, we just paste in our modified script with the specific tags we want to browse and save.

![tamper_script.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519410077/fu5xjv4lhkkhzgdxwblw.png)

In Firefox, click the Greasemonkey icon and click `New userscript...`

![new_grease.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516991293/oltfsdciei4sf5ttdh2k.png)

Again, we just paste in the script and save.

![grease_script.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519410286/k3tfat4tlhgz0obne1lv.png)

Repeat this process for the second script if you also want this for the responsive menu.

#### Just My Tags
And now you have your own custom tags menus!

![left-sidebar](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517065420/l6hntvlvxwtvtify1cug.png)