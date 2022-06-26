import QRCode from "./qrcode";
export declare const QRPointType: {
    DATA: number;
    POS_CENTER: number;
    POS_OTHER: number;
    ALIGN_CENTER: number;
    ALIGN_OTHER: number;
    TIMING: number;
    FORMAT: number;
    VERSION: number;
};
export interface IOptions {
    text: string;
    typeNumber?: number;
    correctLevel?: string;
}
export declare function getLevelNumber(level: string): 2 | 1 | 0 | 3;
export declare function encodeData(options: IOptions): QRCode | undefined;
export declare function getTypeTable(qrcode: QRCode): number[][];
