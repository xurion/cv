# Lighthouse

I use the [Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse) tool to gauge the usability and optimisation of this app. Here, I list existing issues that a Lighthouse report flags.

## Desktop

### Performance: 99%

Even though the report is good on all primary measurements, there are some indirect points raised. Ignoring any local Chrome extension scripts such as React Devtools, the largest chunk JavaScript file is flagged as potentially being able to be split using `React.lazy()`. However, the nature of the app is a single page, loaded at the beginning.

Another potential optimisation is flagged around the cache TTL on assets such as images. However, Github Pages do not allow you to configure this.

### Progressive Web App: Fail

This app has not been configured as a PWA. Some work can be done so it heads in that direction.

### Best Practices: 100%

### Accessibility: 100%

### SEO: 100%

## Mobile

### Performance: 95%

The `Time to interactive` measurement was recorded as 4.1s. Code splitting can improve this, but requires investigation to see just how much of an improvement is gained due to the static all-data-loaded-at-once nature of the app.

### Progressive Web App: Fail

See the progressive web app section under desktop above.

### Best Practices: 92%

Issue flagged around the profile image. Dimensions should be 405x405 instead of the existing 300x300.

### Accessibility: 100%

### SEO: 96%

An interesting issue raised here regarding the tap area of elements that are too small. The mobile-first approach of this app is easily adjusted to accommodate a change like this.
