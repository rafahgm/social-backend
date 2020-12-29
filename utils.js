exports.slugify = function (...args) {
    let slug = '';
    slug += args[0].toLowerCase();
    args.shift();
    args.forEach((arg) => {
        slug += arg.toLowerCase();
    });
    return slug;
};

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

exports.random = random;
