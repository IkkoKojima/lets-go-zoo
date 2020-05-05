import React from 'react'
import * as THREE from 'three'
import VantaGlobe from 'vanta/dist/vanta.globe.min'

class Background extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = VantaGlobe({
            el: this.vantaRef.current,
            THREE: THREE,
            backgroundColor: "rgb(229, 219, 217)",
            color: "rgb(102, 135, 187)",
            color2: "rgb(98, 154, 102)",
            size: 1
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy()
        }
    }
    render() {
        return <div >
            <div ref={this.vantaRef} style={{ width: '100vw', height: "100vh" }}>
                {this.props.children}
            </div>
        </div>
    }
}

export default Background;