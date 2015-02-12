To start the server, run these three commands:

1. `harp server --port 9001`
2. `browser-sync start --proxy 'localhost:9001' --files 'docs/*, docs/styles/**, docs/galaxy/*.css`
3. `cd docs/galaxy && grunt`