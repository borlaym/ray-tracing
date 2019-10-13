import Vec3 from './Vec3'

export default class Ray {
    constructor(
        public readonly origin: Vec3,
        public readonly direction: Vec3
    ) {}

    at(t: number): Vec3 {
        return this.origin.add(this.direction.multiplyScalar(t))
    }
}