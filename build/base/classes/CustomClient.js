"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Handler_1 = __importDefault(require("./Handler"));
class CustomClient extends discord_js_1.Client {
    constructor() {
        super({ intents: [] });
        this.config = require(`${process.cwd()}/data/config.json`);
        this.handler = new Handler_1.default(this);
    }
    Init() {
        this.LoadHandlers();
        this.login(this.config.token)
            .catch((err) => console.error(err));
    }
    LoadHandlers() {
        this.handler.LoadEvents();
    }
}
exports.default = CustomClient;
