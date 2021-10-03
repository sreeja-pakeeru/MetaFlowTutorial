export interface LogInterface {
    debug(message: string, messageData: any): void;
}

export class Log implements LogInterface {
    public debug(msg: string, messageDetails: any): void {
        this.emitLogMessage("error", msg, messageDetails)
    }
    private emitLogMessage(msgType: "debug" | "info" | "warn" | "error", msg: string, supportingDetails: any) {
        if (supportingDetails.length > 0) {
            console[msgType](msg, supportingDetails);
        }
        else {
            console[msgType](msg)
        }
    }
}
