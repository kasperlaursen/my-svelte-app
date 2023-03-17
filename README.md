### Sveltekit from 0 to Prod with tests and CI

1. Create a Hobby account on Vercel using Github login (https://vercel.com/signup)
2. Go to SvelteKit docs and go through Getting Started (https://kit.svelte.dev/docs/creating-a-project)
   1. npm create svelte@latest my-svelte-app
   2. cd my-svelte-app
   3. code .
   4. npm install
   5. npm run dev
3. Install recommended extension in VSCode (Svelte, Vitest, Playwright)
4. Create Github Repo
5. Add code to git repo
   1.  git init
   2.  Commit code as "Initial Setup"
   3.  Follow commands from github
6. Setup git action for playwright
   1. npm init playwright@latest
   2. set folder to "tests" to match Sveltekit
   3. Create PR and see tests run
7. Setup Vitest Github Action
   1. Copy Playwright and make similar workflow
```
name: Vitest Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 16
    - name: Install dependencies
      run: npm ci
    - name: Execute Unit tests
      run: "npm run test:unit"

```
8. Get some data from API https://www.energidataservice.dk/tso-electricity/Elspotprices
9. Install npm install @picocss/pico
10. Copy paste code from other project

