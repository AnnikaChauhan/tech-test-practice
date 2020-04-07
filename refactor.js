//change variables, lets to consts

import brandStore from './brand-store';
import Color from 'color'; //should not have a capital letter

//kind of messy way to store data, maybe an object would be better
const defaultColours = [
    { name: 'primary', value: '#333' },
    { name: 'secondary', value: '#222' },
    { name: 'tertiary', value: '#555' },
];

const defaultBodyFont = 'Lato';
const allowedFonts = ['lato', 'arial', 'helvetica', 'courier'];
const convertToRgb = c => Color(c).rgb().string(); //the variable c doesn't explain anything, this has already been moved to one line where it was previously several

buildTheme = (colours, bodyFont) => {
    if (!colours) colours = defaultColours;
    if (!bodyFont) colours = defaultBodyFont;
    const newColours = {};
    colours.forEach(c => {
        newColours[c.name] = convertToRgb(c.value);
    });
    //this is a function in a function it doesn't need to be there
    const validateBodyFont = () => {
        let found = false;
        allowedFonts.forEach(a => {
            if (a === bodyFont.toLowerCase()) found = true;
        });
        if (found) return bodyFont;
        return defaultBodyFont;
    };
    return {
        colours: newColours,
        bodyFont: validateBodyFont(),
    };
}

export default getBranding = (user) => {
    if (user.brandId) {
        const brands = brandStore.getAll();
        if (brands.length < 1) return buildTheme(defaultColours, defaultBodyFont);
        if (brands.length) {
            let brandDetails;
            brands.forEach(b => {
                if (b.id === user.brandId) brandDetails = b;
            });
            if (!brandDetails) return buildTheme(defaultColours, defaultBodyFont);
            return buildTheme(brandDetails.colours, brandDetails.bodyFont);
        }
    }
    return buildTheme(defaultColours, defaultBodyFont);
}