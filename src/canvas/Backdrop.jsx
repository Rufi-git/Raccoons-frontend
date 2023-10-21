import React, { useRef } from 'react'
import { easing } from "maath"
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useSelector } from 'react-redux'

const Backdrop = () => {
  const shadows = useRef()
  const rotate = useSelector(state => state.count);
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={rotate == 0 ? 1 : 0}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0+rotate, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={20}
        intensity={4}
        ambient={50}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={15}
        intensity={0.25}
        ambient={50}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop