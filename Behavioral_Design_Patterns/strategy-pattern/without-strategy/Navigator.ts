export class Navigator {
    navigate(mode: string, start: string, end: string) {
        if (mode === "driving") {
            console.log(`Driving from ${start} to ${end} via highways.`);
        } else if (mode === "walking") {
            console.log(`Walking from ${start} to ${end} through pedestrian paths.`);
        } else if (mode === "cycling") {
            console.log(`Cycling from ${start} to ${end} via bike lanes.`);
        } else {
            console.log("Invalid mode of transportation.");
        }
    }
}
