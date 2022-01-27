# Visual Studio Code Clone
Visual Studio clone that includes monaco webpack plugin with basic highlighting for HTML, CSS, JavaScript and TypeScript. Exposes a remoteEntry that is being consumed by [clones.strek.in](https://clones.strek.in).

## Development
To start developing follow these steps
- Clone the repo
- cd into the repo
- run `yarn install` or `yarn`
- run `yarn start` to start the development server
- open `localhost:1235` in browser

Running `yarn start` exposes a remoteEntry file as well which can be consumed in other apps via moduleFederation

### outcome
Tried out brotli compression instead of gzip


Demo: https://vscode.strek.in/

Used inside: https://clones.strek.in
