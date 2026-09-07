import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const points = [
  new THREE.Vector3(0, 1.35, 0),
  new THREE.Vector3(-1.35, 0, 0),
  new THREE.Vector3(1.35, 0, 0),
  new THREE.Vector3(0, -1.35, 0),
]

function Connection({ from, to, color, opacity = 0.5 }) {
  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints([from, to])
  }, [from, to])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  )
}

function AdvisoryModel() {
  const group = useRef()
  const core = useRef()
  const nodeRefs = useRef([])

  useFrame((state, delta) => {
    if (!group.current) return

    const targetY = state.pointer.x * 0.2
    const targetX = -state.pointer.y * 0.13

    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
    group.current.rotation.z += delta * 0.035

    if (core.current) {
      core.current.rotation.x += delta * 0.22
      core.current.rotation.y += delta * 0.28
    }

    nodeRefs.current.forEach((node, index) => {
      if (!node) return
      const base = points[index]
      node.position.y = base.y + Math.sin(state.clock.elapsedTime * (0.8 + index * 0.08) + index) * 0.09
      node.rotation.y += delta * (0.16 + index * 0.025)
    })
  })

  return (
    <group ref={group}>
      <Connection from={points[0]} to={points[1]} color="#C9A568" opacity={0.62} />
      <Connection from={points[1]} to={points[3]} color="#C9A568" opacity={0.62} />
      <Connection from={points[3]} to={points[2]} color="#C9A568" opacity={0.62} />
      <Connection from={points[2]} to={points[0]} color="#C9A568" opacity={0.62} />
      <Connection from={points[1]} to={points[2]} color="#6C8CA8" opacity={0.34} />

      {points.map((point, index) => (
        <mesh
          key={index}
          ref={(node) => { nodeRefs.current[index] = node }}
          position={point}
        >
          <icosahedronGeometry args={[index === 0 ? 0.44 : 0.34, 2]} />
          <meshStandardMaterial
            color={index === 0 ? '#C9A568' : '#173A59'}
            metalness={0.58}
            roughness={0.23}
          />
        </mesh>
      ))}

      <mesh ref={core}>
        <torusKnotGeometry args={[0.45, 0.11, 120, 12]} />
        <meshStandardMaterial color="#F1E0BE" metalness={0.82} roughness={0.2} />
      </mesh>
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 40 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.8} />
      <directionalLight position={[4, 5, 3]} intensity={2.8} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={2.1} color="#C9A568" />
      <AdvisoryModel />
    </Canvas>
  )
}
