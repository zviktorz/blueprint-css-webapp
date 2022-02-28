module.exports = {
    boardGlobalSetup: "./_wcs/board-global-setup.ts",
    newComponent: {
      componentsPath: "./src/components",
      templatesPath: "./src/component-templates",
    },
    staticDeploy: {
      include: ['./src/components/**/*','./src/component-templates/**/*']
    }
};
