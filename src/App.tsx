import './App.css';
import Vec3 from './Vec3';
import Ray from './Ray'
import * as React from 'react';

const WIDTH = 800
const HEIGHT = 400

const LOWER_LEFT_CORNER = new Vec3(-2, -1, -1)
const HORIZONTAL = new Vec3(4, 0, 0)
const VERTICAL = new Vec3(0, 2, 0)
const ORIGIN = new Vec3(0, 0, 0)
const WHITE = new Vec3(1, 1, 1)
const SKY_COLOR = new Vec3(0.5, 0.7, 1)

function getColor(ray: Ray): Vec3 {
    const unitDirection = ray.direction.unit
    const t = 0.5 * (unitDirection.y + 1)
    return WHITE.multiplyScalar(1 - t).add(SKY_COLOR.multiplyScalar(t))
}

function getImageData() : ImageData {
    const imageData = new ImageData(WIDTH, HEIGHT)
    for (let y = HEIGHT - 1; y >= 0; y--) {
        for (let x = 0; x < WIDTH; x++) {
            const u = x / WIDTH
            const v = y / HEIGHT
            const ray = new Ray(ORIGIN, LOWER_LEFT_CORNER.add(HORIZONTAL.multiplyScalar(u)).add(VERTICAL.multiplyScalar(v)))
            const color = getColor(ray)
            imageData.data[((HEIGHT - y) * WIDTH + x) * 4] = 255 * color.x
            imageData.data[((HEIGHT - y) * WIDTH + x) * 4 + 1] = 255 * color.y
            imageData.data[((HEIGHT - y) * WIDTH + x) * 4 + 2] = 255 * color.z
            imageData.data[((HEIGHT - y) * WIDTH + x) * 4 + 3] = 255
        }
    }
    return imageData
}

class App extends React.Component < {} > {
    private canvasRef = React.createRef < HTMLCanvasElement > ()

    componentDidMount() {
        const canvas = this.canvasRef.current
        if (!canvas) {
            throw new Error('No canvas found')
        }
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('No rendering context found')
        }
        const imageData = getImageData()
        console.log(imageData)
        context.putImageData(imageData, 0, 0)
    }

    render() {
        return (
            <canvas ref={this.canvasRef} width={WIDTH} height={HEIGHT}></canvas>
        );
    }
}

export default App;
