import React, { useRef, useEffect, useState } from 'react'
import { Canvas  , useThree} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Animation ,Animation0 ,  Animation1 , Animation2 , Animation3 , Animation4 , Animation5 } from './animation.js'
import { useGLTF } from '@react-three/drei'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./model.css"
import { useFetcher } from 'react-router-dom'

export function CarModel(props) {
    const { nodes, materials } = useGLTF('/car-transformed.glb')
    const groupRef = useRef()
    const { camera, gl } = useThree();

    useEffect(() => {
        Animation0(groupRef.current.children[0].position )
        Animation1(groupRef.current.children[1].position )
        Animation2(groupRef.current.children[2].position )
        Animation3(groupRef.current.children[3].position )
        Animation4(groupRef.current.children[4].position )
        Animation5(groupRef.current.children[5].position )
        Animation(groupRef.current )
    }, [])

    return (
        <group {...props} ref={groupRef} dispose={null} position={[-5, -3, 0]}>
            {/* <primitive object={camera}/> */}
            <mesh geometry={nodes.body_car_body_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.front_bumper_carbon_fiber_0.geometry} material={materials.carbon_fiber} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Plane008_window_0.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.headlight_glass_headlight_glass_0.geometry} material={materials.headlight_glass} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.front_right_wheel_wheel_0.geometry} material={materials.wheel} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.intercooler_intercooler_0.geometry} material={materials.intercooler} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
    )
}

const Model = () => {
    const [cond , setCond] = useState(false)

    useEffect(()=>{
        const handleResize=()=>{
            if(window.scrollY > window.innerHeight ){
                setCond(true)
            }else{
                setCond(false)
            }
        }
        handleResize()
        window.addEventListener("scroll", handleResize)
        return()=>{
            window.removeEventListener("scroll", handleResize)
        }
    },[])

    useEffect(()=>{
        window.scrollTo({top:0, behavior:"smooth"})
    },[])

    return (
        <>
            <div className='test '>
                <div className="model position-fixed d-flex justify-content-evenly px-5 align-items-center">
                    <Canvas camera={{ fov: 25, position: [10, 10, 10] }}  >
                        {cond ? <OrbitControls enableZoom={false} autoRotate={false} />:""}
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <CarModel scale={0.5} />
                    </Canvas>
                </div>

                <div className="box">
                    <div className="blue">
                        <div className="heading">
                            {/* <h1>Just a Demo</h1> */}
                            {/* <h1>I can handle 3d components easily</h1> */}
                            <h1>Ignore the design :)</h1>
                            <h1>Please Scroll down</h1>
                        </div>
                    </div>
                    <div className="green"></div>
                    <div className="yellow"></div>
                </div>
            </div>

        </>
    )
}

export default Model

