module.exports = {
    extends: ["airbnb-base"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        semi: ["error", "never"],
        "no-unused-expressions": ["error"],
        "no-plusplus": ["error"],
        "max-len": ["error", { code: 100, tabWidth: 4, ignoreUrls: true }],
    },
    env: {
        jest: true,
    },
};
