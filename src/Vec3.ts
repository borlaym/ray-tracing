export default class Vec3 {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number
    ) {}

    get negative(): Vec3 {
        return new Vec3(-this.x, -this.y, -this.z)
    }

    get length(): number {
        return Math.sqrt(
            this.x * this.x +
            this.y * this.y +
            this.z * this.z
        )
    }

    get unit(): Vec3 {
       return this.divideScalar(this.length)
    }

    add(vec: Vec3): Vec3 {
        return new Vec3(
            this.x + vec.x,
            this.y + vec.y,
            this.z + vec.z
        )
    }

    subtract(vec: Vec3): Vec3 {
        return new Vec3(
            this.x - vec.x,
            this.y - vec.y,
            this.z - vec.z
        )
    }

    multiply(vec: Vec3): Vec3 {
        return new Vec3(
            this.x * vec.x,
            this.y * vec.y,
            this.z * vec.z
        )
    }

    multiplyScalar(t: number): Vec3 {
        return new Vec3(
            this.x * t,
            this.y * t,
            this.z * t
        )
    }

    divide(vec: Vec3): Vec3 {
        return new Vec3(
            this.x / vec.x,
            this.y / vec.y,
            this.z / vec.z
        )
    }

    divideScalar(t: number): Vec3 {
        return new Vec3(
            this.x / t,
            this.y / t,
            this.z / t
        )
    }

    dot(vec: Vec3): number {
        return (
            this.x * vec.x +
            this.y * vec.y +
            this.z * vec.z
        )
    }

    cross(vec: Vec3): Vec3 {
        return new Vec3(
            this.y * vec.z - this.z * vec.y,
            this.z * vec.x - this.x - vec.z,
            this.x * vec.y - this.y - vec.x
        )
    }



    

}