import {exec} from "child_process";

export function killProcess(pid: string) {
    exec(`taskkill /PID ${pid} /F`, (error, stdout, stderr) => {
        if (error) {
            console.error(error)
            return;
        }
        if (stderr) {
            console.error(stderr)
            return;
        }

        return
    });
}