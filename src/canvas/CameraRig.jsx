import React, { useRef, useState } from 'react'
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"
import state from "../store"
import { CustomButton } from '../components'
import { useSelector } from 'react-redux'

const CameraRig = ({ children }) => {
    const group = useRef()
    const snap = useSnapshot(state)
    const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
    const rotate = useSelector(state => state.count);

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 700;

        let targetPosition = [-0.4, 0, 2];

        if (snap.intro) {
            if (isBreakpoint) targetPosition = [0, 0, 2];
            if (isMobile) targetPosition = [0, 0.2, 2.5];
        }
        else {
            if (isMobile) targetPosition = [0, 0, 2.5]
            else targetPosition = [0, 0, 2]
        }

        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        //set the model rotation smoothly
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, (-state.pointer.x + rotate) / 5, 0],
            0.25,
            delta
        )

    })

    return (
        <group ref={group}>{children}</group>
    )
}

export default CameraRig