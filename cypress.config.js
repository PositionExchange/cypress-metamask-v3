require('dotenv').config()
const {defineConfig} = require('cypress')
const plugin = require('./cypress/plugins')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents (on, config) {
            plugin(on, config)
        }
    }
})