#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')

const targetDir = path.join('.', 'src', 'theme', 'fonts')

try {
    fs.accessSync(targetDir)
    console.info('target dir:', targetDir)
} catch (err) {
    console.error('no target dir!')
    fs.ensureDirSync(targetDir)
}

const fonts = [
    {
        name: 'material-icons', 
        path: path.join('.', 'node_modules', 'material-design-icons', 'iconfont')
    },
    {
        name: 'rubik',
        path: path.join('.', 'node_modules', 'typeface-rubik')
    }
]

fonts.map(font => {
    const dest = path.join('.', targetDir, font.name)
    fs.copySync(font.path, dest)
    console.info('copied', font.path, dest)
})
