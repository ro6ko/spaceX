export class Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: Date;
    original_launch_unix: number;
    // missions: [
    //   {
    //     name: COTS 1,
    //     flight: 7
    //   }
    // ],
    missions: any;
    landings: number;
    type: string;
    details: string;
    reuse_count: number;
}
