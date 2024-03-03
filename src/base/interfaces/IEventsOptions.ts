import { Events } from 'discord.js'

export default interface IEventOption {
    name: Events;
    description: string;
    once: boolean;
}