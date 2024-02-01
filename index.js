const fs = require('fs');
const path = require('path');

/**
 * Validates the input parameters for safety against path traversal.
 * @param {string} iconName - The name of the icon.
 * @param {number} size - The size of the icon (16, 20, or 24).
 * @param {string} type - The type of the icon ('solid' or 'outline').
 * @throws {Error} Throws an error if the input is invalid.
 */
function validateInput(iconName, size, type) {
    const validSizes = [16, 20, 24];
    const validTypes = ['solid', 'outline'];

    const isSizeValid = validSizes.includes(size);
    const isTypeValid = validTypes.includes(type);
    const isIconNameValid = /^[a-zA-Z0-9-_]+$/.test(iconName);

    if (!isSizeValid || !isTypeValid || !isIconNameValid) {
        throw new Error('Invalid input parameters');
    }
}

/**
 * Retrieves the SVG content from the specified icon name, size, and type.
 * @param {string} iconName - The name of the icon.
 * @param {number} size - The size of the icon (16, 20, or 24).
 * @param {string} type - The type of the icon ('solid' or 'outline').
 * @returns {string} The SVG content.
 * @throws {Error} Throws an error if unable to read the SVG file.
 */
function getHeroIcon(iconName, size, type) {
    validateInput(iconName, size, type);

    const iconPath = path.join(__dirname, 'icons', String(size), type, `${iconName}.svg`);

    try {
        return fs.readFileSync(iconPath, 'utf8');
    } catch (error) {
        throw new Error('Error reading icon file');
    }
}

module.exports = {
    getHeroIcon
}