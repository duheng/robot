const fs = require('fs');
const path = require('path');
const babelPlugin = require('rollup-plugin-babel');
const json = require('@rollup/plugin-json');

//const { eslint } = require('rollup-plugin-eslint');
const cwd = process.cwd();
import sass from 'rollup-plugin-sass';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";


// import hash from 'rollup-plugin-hash';

//import copy from 'rollup-plugin-copy'

const entry = {
    robot: './src/robot.js',
   // example: './example/demo.js',
}

function generateWebConfig(isBrowser,input) {
    return {
        input,
        output:  {
            dir: 'dist',
            format: 'cjs',
            name: 'Robot'
        },
        //告诉rollup不要将此打包，而作为外部依赖
        external: ['puppeteer'],
        plugins: [
            sass(),
            json(),
            image(),
            babelPlugin({
                exclude: 'node_modules/**',
                presets: [
                    [
                      '@babel/env',
                      {
                        modules: false,
                        targets: {
                        //   browsers: [ 
                        //     "> 1%",
                        //     "last 2 versions",
                        //     "ie 9-11"
                        //   ],
                         node: 8
                        },
                        corejs: 3, // 声明corejs版本
                        useBuiltIns: 'usage'
                      }
                    ]
                ],
                plugins: [
                    '@babel/plugin-proposal-object-rest-spread',
                    '@babel/plugin-transform-classes',
                ],
            }),
            resolve({
                browser: isBrowser,
            }),
            commonjs(),
           // terser({ compress: { drop_console: false } })
            // copy({
            //     targets: [
            //       { src: 'src/assets/**/*', dest: 'dist/assets' }
            //     ]
            //   })
        ],
    };
}

const build = () => {
    return Object.keys(entry).map(item=>{
        return generateWebConfig(true,entry[item])
    })
}
module.exports = build();