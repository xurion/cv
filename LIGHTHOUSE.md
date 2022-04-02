# Lighthouse

The [Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse) tool is used to gauge the usability and optimisation of this app.

Only the desktop version of the audit is run as this is primarily for desktop use, although because of the single page nature of this app, the mobile score is assumed to be close to that of desktop.

## Performance: 99%

Even though the report is good on all primary measurements, there are some indirect points raised. Ignoring any local Chrome extension scripts such as React Devtools, the largest chunk JavaScript file is flagged as potentially being able to be split using `React.lazy()`. However, as mentioned above, this app is a single page, loaded at the beginning.

Another potential optimisation is flagged around the cache TTL on assets such as images. However, Github Pages does not allow you to configure this.

## Progressive Web App: n/a

This app has not been configured as a PWA.

## Best Practices: 100%

## Accessibility: 100%

## SEO: 100%
