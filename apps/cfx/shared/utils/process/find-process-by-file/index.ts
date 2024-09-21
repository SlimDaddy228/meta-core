import {exec} from "child_process";

export function findProcessByFile(fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(`tasklist /FI "IMAGENAME eq ${fileName}"`, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }

            const regex = new RegExp(`${fileName}\\s+(\\d+)`, "i");
            const match = stdout.match(regex);
            if (match && match[1]) {
                resolve(match[1]);
            } else {
                reject("Process not found");
            }
        });
    });
}