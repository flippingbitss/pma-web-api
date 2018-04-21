import * as winston from "winston";
import { relative } from "path";

/**
 * core.Log
 * ------------------------------------------------
 *
 * This is the main Logger Object. You can create a scope logger
 * or directly use the static log methods.
 *
 * By Default it uses the debug-adapter, but you are able to change
 * this in the start up process in the core/index.ts file.
 */

export class Logger {
    private readonly DEFAULT_SCOPE = "@app";
    private scope: string;

    constructor(scope?: string) {
        this.scope = `@root/${relative("./", scope)}` || this.DEFAULT_SCOPE;
    }

    public debug(message: string, ...args: any[]): void {
        this.log("debug", message, args);
    }

    public info(message: string, ...args: any[]): void {
        this.log("info", message, args);
    }

    public warn(message: string, ...args: any[]): void {
        this.log("warn", message, args);
    }

    public error(message: string, ...args: any[]): void {
        this.log("error", message, args);
    }

    private log(level: string, message: string, args: any[]): void {
        if (winston) {
            winston[level](`${this.formatScope()} ${message}`, args);
        }
    }

    private formatScope(): string {
        return `[${this.scope}]`;
    }
}
