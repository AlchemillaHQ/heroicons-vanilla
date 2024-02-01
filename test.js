const { getHeroIcon } = require('./index');

describe('getHeroIcon', () => {
    it('should return the correct SVG content for a valid icon', () => {
        const iconName = 'heart';
        const size = 24;
        const type = 'solid';
        const result = getHeroIcon(iconName, size, type);

        expect(result).toContain('<svg');
    });

    it('should throw an error for invalid input', () => {
        const iconName = 'invalid-icon-name+_!@#$%^&*()';
        const size = 24;
        const type = 'solid';

        expect(() => getHeroIcon(iconName, size, type)).toThrow('Invalid input parameters');
    });

    it('should throw an error for non-existent icon', () => {
        const iconName = 'non-existent-icon';
        const size = 24;
        const type = 'solid';

        expect(() => getHeroIcon(iconName, size, type)).toThrow('Error reading icon file');
    });
});