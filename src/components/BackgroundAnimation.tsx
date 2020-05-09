import React from 'react';
import ParticlesBg from 'particles-bg'

const config = {
    num: [1, 10],
    rps: 0.1,
    radius: [1, 10],
    life: [1.5, 6],
    v: [1, 1],
    tha: [-40, 40],
    alpha: [0.4, 0],
    scale: [1, 0.1],
    position: "all", // all or center or {x:1,y:1,width:100,height:100}
    color: ["#ffffff"],
    cross: "dead", // cross or bround
    random: 5,  // or null,
    g: 0,    // gravity
    // f: [2, -1], // force
};

export default function BackgroungAnimation() {
    return (
        <ParticlesBg type="custom" bg={true} config={config} />
    )
}