# PixiJS & Pixi3D Webpack Issues

Pixi3D currently doesn't support ES modules. This means that trying to use PixiJS with Pixi3D will be unable to bundle with Webpack.
To resolve this issue here's a simple project. If we force Webpack to use the CommonJS output of PixiJS, it works.
