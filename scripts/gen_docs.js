const _ = require('lodash/fp')
const fs = require('fs')
const path = require('path')
const reactDocs = require('react-docgen')
const docsToMarkdown = require('react-docs-markdown')

const BLACK_LIST = ['FieldLabel', 'Logo']
const INDEX_FILE = path.join(__dirname, '../src/index.js')
const DOCS_FILE = path.join(__dirname, '../docs/components.md')

/**
 * Generate markdown docs
 */
generateDocs()

/**
 * ============================
 * Functions
 * ============================
 */

/**
 * Does the job
 */
function generateDocs() {
    const componentFilePaths = extractFileListFromIndexFile()
    const componentDocs = generateDocsForFilePaths(componentFilePaths)
    const markdownDocs = createMarkdownForDocs(componentDocs)

    writeMarkdownDocs(markdownDocs)
}

/**
 * Extracts all components that we expose publicly
 */
function extractFileListFromIndexFile() {
    const indexContents = readFile(INDEX_FILE)
    const allComponentNames = indexContents.match(/(?<=\/)[A-Z][^']*/gm)
    const componentNames = allComponentNames.filter(
        name => BLACK_LIST.indexOf(name) === -1
    )
    const componentFilePaths = componentNames.reduce(
        (acc, name) => ({
            ...acc,
            [name]: `${__dirname}/../src/${name}/index.js`,
        }),
        {}
    )

    return componentFilePaths
}

/**
 * Takes all file paths and returns all docs as object
 * @param {string[]} filePaths
 * @returns {Object}
 */
function generateDocsForFilePaths(filePaths) {
    return _.mapValues(
        _.pipe(
            readFile,
            parseComponent
        ),
        filePaths
    )
}

/**
 * Transforms the source code of a component into react docs
 * @param {string} source JavaScript code of the component
 * @returns {Object}
 */
function parseComponent(source) {
    const docs = reactDocs.parse(source)
    return docs
}

/**
 * Transforms an array of component docs into an array of markdown docs
 * @param {Object[]} componentDocs
 * @returns {string[]}
 */
function createMarkdownForDocs(componentDocs) {
    return _.map.convert({ cap: false })((componentDoc, componentName) => {
        let docs

        try {
            docs = docsToMarkdown(componentDoc, componentName)
        } catch (e) {
            console.error(e)
            console.log('Error in ', componentName)
            process.exit()
        }

        return docs
    }, componentDocs)
}

/**
 * Joins all markdown docs into once big string and writes it into the docs file
 * @param {string[]} markdownDocs
 */
function writeMarkdownDocs(markdownDocs) {
    const concattedMarkdownDocs = markdownDocs.join('\n\n')
    fs.writeFileSync(DOCS_FILE, concattedMarkdownDocs)
}

/**
 * ============================
 * Helper
 * ============================
 */

/**
 * Reads a file's contents synchronoulsy
 * @param {string} filePath
 * @returns {string}
 */
function readFile(filePath) {
    return fs.readFileSync(filePath, { encoding: 'utf8' })
}
