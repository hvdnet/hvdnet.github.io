# High-Value Data Network (HVDNet)

Welcome to the High-Value Data Network (HVDNet) project. This repository contains the source code for the HVDNet website, which aims to make high-value data equally discoverable, accessible, and usable by both humans and machines.

## Overview

HVDNet brings together data management platforms, modern APIs, and open-source tools—unified by metadata standards and best practices grounded in the [FAIR principles](https://www.go-fair.org/fair-principles/) and related initiatives.

The website is built using [Eleventy (11ty)](https://www.11ty.dev/) and provides information about the project's pillars, standards, and partnerships.

## Project Structure

- `src/`: Contains the source files for the website.
  - `_data/`: Global data files available to templates.
  - `_includes/`: Templates and layout components (Nunjucks).
  - `assets/`: Static assets like CSS/Sass, JS, and fonts.
  - `img/`: Project-specific images.
  - `index.md`, `about.md`, etc.: Page content in Markdown (with Nunjucks support).
- `.eleventy.js`: Configuration for the Eleventy static site generator.
- `package.json`: Project dependencies and scripts.

## Information for Developers and Maintainers

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [pnpm](https://pnpm.io/) (Recommended package manager)

### Local Development

To run the project locally for development, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hvdnet/hvdnet.github.io.git
   cd hvdnet.github.io
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   *(Note: You can also use `npm install` or `yarn install` if preferred.)*

3. **Start the development server:**
   ```bash
   pnpm start
   ```
   This will start a local server (usually at `http://localhost:8080`) and watch for file changes to automatically refresh the browser.

### Building for Production

To generate the static site in the `dist` directory:

```bash
pnpm build
```

The output in the `dist/` folder can then be served by any static web server.

### Deployment

This project is configured with GitHub Actions for automatic deployment to GitHub Pages.

- **Workflow**: Whenever a push is made to the `main` branch, the `.github/workflows/deploy.yml` action triggers.
- **Process**: It installs dependencies, builds the site, and deploys the contents of the `dist/` directory to the `gh-pages` branch.
- **Configuration**: Ensure that the `GH_PAGES_DEPLOY_TOKEN` secret is configured in the repository settings if needed, or that the GitHub Action has the necessary permissions to write to the repository.

## Technologies Used

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Templating**: [Nunjucks](https://mozilla.github.io/nunjucks/)
- **Styling**: [Bootstrap](https://getbootstrap.com/) & [Sass](https://sass-lang.com/)
- **Markdown Processing**: [markdown-it](https://github.com/markdown-it/markdown-it) with [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)

## Contributing

If you wish to contribute to the content or development of HVDNet, please reach out to the project maintainers or open a Pull Request.

---
© High-Value Data Network. Grounded in FAIR principles.
