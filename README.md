# Newsliner

A Newsletter-first theme for [Ghost](http://github.com/tryghost/ghost/) brought to you by [Epilocal](https://www.epilocal.com/). This is the development version of Newsliner - if you're just looking to download the latest release, you can get it from [here](https://www.epilocal.com/products/free-ghost-theme/).

If you have any questions or need support, you can contact the development team at https://www.epilocal.com/contact/ or raise an issue on Github here: [releases](https://github.com/epilocal/newsliner/issues)

&nbsp;

![screenshot-desktop](https://user-images.githubusercontent.com/9167731/106141638-12d7c600-6179-11eb-922f-8c96bfca9014.png)

&nbsp;


# Development

Newsliner was built on top of Ghost's Casper template, so you follow the same instructions for development. All styles are compiled using Gulp/PostCSS to polyfill future CSS spec and uses Autoprefixer so no browser prefixes are required. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# install dependencies
yarn install

# run development server
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
# create .zip file
yarn zip
```


# Copyright & License

Copyright (c) 2021 Epilocal - Released under the [Creative Commons 3.0 License](LICENSE).

This means you are free to use the theme for personal or commercial use as long as you credit Epilocal and Ghost by leaving the links in the footer.
