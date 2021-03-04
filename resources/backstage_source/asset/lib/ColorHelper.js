export function randcolorhue(rgb) {	//generate random color with same colore tone
    var hsl = rgb2hsl(rgb);
    var newhsl = [Math.min(hsl[0] * minmaxrandom(0.95, 1.05), 1), hsl[1] * minmaxrandom(0.7, 1), Math.min(hsl[2] * minmaxrandom(0.8, 1.2), 1)];
    //stessa tonalita'
    return hsl2rgb(newhsl);
}

export function minmaxrandom(min, max)	//genera numero casuale compreso in un range di valori
{
    return Math.random() * (max - min) + min;
}

export function rgb2hsl(rgb) {
    var r, g, b;
    r = rgb[0];
    g = rgb[1];
    b = rgb[2];

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, l];
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 */
export function hsl2rgb(hsl) {
    var h, s, l;
    h = hsl[0];
    s = hsl[1];
    l = hsl[2];

    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.ceil(r * 255), Math.ceil(g * 255), Math.ceil(b * 255)];
}

export const hexToRgb = input => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
        let first = input[0];
        let second = input[1];
        let last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return [
        parseInt(first, 16),
        parseInt(second, 16),
        parseInt(last, 16)
    ];
};

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(rgb) {
    return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

export function randomSameToneColor(hex) {
    return rgbToHex(randcolorhue(hexToRgb(hex)))
}

