#D2UI CORE FAVICON
##How to install

```bash
yarn add @dhis2/d2ui-core/favicon --dev
```

_You only need to include this package as a dev dependency because the files need to be copied to the `./public` folder before building anyway._

##How to use

1.  Copy all the files from the `./files` directory of this package into the `./public` directory of your React project.
    ```bash
    # Run this from your project root
    cp -R node_modules/@dhis2/d2-ui-core/favicon/files/. public/
    ```
2.  Edit the head section of your './public/index.html'. Insert the following lines just after he existing manifest and icon link tags:
    ```html
    <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    ```
