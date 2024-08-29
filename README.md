## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/larissamato/json-placeholder-web.git
   ```

2. Navigate to the project directory:

   ```bash
   cd json-placeholder-web 
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or, if you are using Yarn:

   ```bash
   yarn install
   ```

## Environment Setup

1. Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

### Development

To run the project in development mode, use:

```bash
npm run dev
```

or, with Yarn:

```bash
yarn dev
```

The development server will start at [http://localhost:3000](http://localhost:3000) (or another port if specified in the `.env` file).

### Production Build

To create an optimized production build:

```bash
npm run build
```

or, with Yarn:

```bash
yarn build
```

The final production files will be generated in the `dist` folder.
