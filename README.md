# Hono Node Server Reproduction

Install:

```bash
npm i
```

Run:

```bash
npm run start
```

Navigate to `http://localhost:3000` and check the network tab in your browser.
If you refresh the page a few times you should see some requests that get stuck
forever in a 'Pending' state (see video below).

If you revert to v1.2.1 of `@hono/node-server` the issue no longer occurs.

**NOTE:** an artificial delay has been added to the source `ReadableStream` to
better simulate the problem - if you're connection is fast enough you may not
see the problem initially, so you may need to up the `setTimeout` delay in
`index.ts`.

<!-- TODO: insert video -->
