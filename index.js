#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

function fixNextFile(directory) {
    const nextFilePath = path.join(directory, 'node_modules', '.bin', 'next');

    if (!fs.existsSync(nextFilePath)) {
        console.error('next file not found. Make sure you are in the correct directory.');
        process.exit(1);
    }

    let content = fs.readFileSync(nextFilePath, 'utf8');

    // Fix for dev command
    content = content.replace(
        /program\.command\("dev",\s*{\s*isDefault:\s*true\s*}\)/,
        'program.command("dev", { isDefault: false })'
    );

    // Fix for start command
    content = content.replace(
        /program\.command\("start"\)/,
        'program.command("start", { isDefault: true })'
    );

    fs.writeFileSync(nextFilePath, content);
    console.log('Successfully fixed the next file.');
}

program
    .version('1.0.0')
    .description('Fix Next.js file for Plesk deployment')
    .argument('[directory]', 'Directory containing the Next.js project', '.')
    .action((directory) => {
        fixNextFile(directory);
    });

program.parse(process.argv);