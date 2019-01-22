module.exports = function(api) {
    api.cache.forever()

    //
    // CJS or ESM?
    //
    // at some point we want to publish ES-only, but we need the
    // ecosystem to catch up first. We are a bit further with
    // react-scripts 2.0 as they have started to compile node_modules
    // with preset-env, but not preset-react so we need to do that.
    //
    // the other problem is that node hasn't implemented ESM in stable
    // yet, and Jest has implemented its own `require` for CJS, so until
    // those two pieces are complete with need to publish the
    // components transpiled to CJS, with a reexport file in ESM for
    // webpack to use.
    //
    // at that point we can set `defaultPresets = []`
    //
    const defaultPresets = [
        [
            '@babel/preset-env',
            {
                modules: ['modules'].includes(process.env.BABEL_ENV)
                    ? false
                    : 'commonjs',
            },
        ],
    ]

    return {
        presets: defaultPresets.concat('@babel/preset-react'),
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-transform-react-constant-elements',
        ],
    }
}
