# react-pages-practice
A test repository to confirm I understand how react interacts with github pages and to ensure I was able to get it working using bun and vite
## How I did it
### Initial setup
I followed <a href=https://github.com/gitname/react-gh-pages>this guide</a>, adapting it for Bun and Vite by:
* Using `bun create vite practice-app` in place of `npx create-react-app practice-app` and following the instructions given in terminal to run `bun install` in `./practice-app`
* Using `bun` in place of `npm` and `npx`
* Changing the `"deploy"` script from`"gh-pages -d build"` to `"gh-pages -d dist"`, to reflect the differing directory used by Vite

_Note: Make sure the `base:` attribute in vite config is set to `/practice-app/`_
### Deploying the website using bun
From the `./practice-app` directory, I type `bun run deploy`. 

_This automatically runs `bun run predeploy` first_
