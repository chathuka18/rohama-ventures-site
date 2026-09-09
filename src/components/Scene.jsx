import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function Building({position=[0,0,0], scale=[1,1,1], rotation=[0,0,0], color='#173A59', gold=false}){
  return <mesh position={position} scale={scale} rotation={rotation} castShadow receiveShadow>
    <boxGeometry args={[1,1,1]}/>
    <meshStandardMaterial color={gold ? '#C9A568' : color} metalness={0.35} roughness={0.48}/>
  </mesh>
}

function LotusTower(){
  const g=useRef()
  useFrame((state)=>{ if(g.current) g.current.position.y = -0.25 + Math.sin(state.clock.elapsedTime*.65)*.035 })
  return <group ref={g} position={[0.3,-0.25,0]}>
    <mesh position={[0,1.15,0]}><cylinderGeometry args={[0.10,0.15,2.3,20]}/><meshStandardMaterial color="#D8DDE2" metalness={.45} roughness={.3}/></mesh>
    <mesh position={[0,2.42,0]} scale={[1,1.15,1]}><sphereGeometry args={[0.48,24,18]}/><meshStandardMaterial color="#C9A568" metalness={.55} roughness={.25}/></mesh>
    <mesh position={[0,2.87,0]}><cylinderGeometry args={[0.05,0.09,0.85,16]}/><meshStandardMaterial color="#D8DDE2" metalness={.4}/></mesh>
    <mesh position={[0,3.35,0]}><coneGeometry args={[0.045,0.3,12]}/><meshStandardMaterial color="#C9A568" metalness={.65}/></mesh>
    <mesh position={[0,-0.05,0]}><cylinderGeometry args={[0.44,0.54,0.34,24]}/><meshStandardMaterial color="#173A59" metalness={.3} roughness={.5}/></mesh>
  </group>
}

function ColomboSkyline(){
  const group=useRef()
  useFrame((state,delta)=>{
    if(!group.current) return
    group.current.rotation.y += ((state.pointer.x*.12)-group.current.rotation.y)*.025
    group.current.rotation.x += ((-state.pointer.y*.05)-group.current.rotation.x)*.025
    group.current.position.y = Math.sin(state.clock.elapsedTime*.45)*.025
  })
  return <group ref={group} rotation={[-0.02,-0.08,0]}>
    <LotusTower/>
    {/* World Trade Center inspired twin towers */}
    <group position={[-1.35,-.7,-.25]}>
      <Building position={[-.31,1.05,0]} scale={[.48,2.65,.52]}/>
      <Building position={[.31,1.05,0]} scale={[.48,2.65,.52]}/>
      {[0.1,.5,.9,1.3,1.7,2.1].map((y,i)=><mesh key={i} position={[0,y,0.275]}><boxGeometry args={[1.18,.025,.012]}/><meshBasicMaterial color="#C9A568" transparent opacity={.55}/></mesh>)}
    </group>
    {/* Altair-inspired angled pair */}
    <group position={[1.65,-.88,-.5]}>
      <Building position={[-.22,.9,0]} scale={[.48,2.45,.5]} rotation={[0,0,.09]}/>
      <Building position={[.36,.78,.05]} scale={[.5,2.2,.5]} rotation={[0,0,-.17]} color="#204B6C"/>
    </group>
    {/* Supporting skyline */}
    <Building position={[-2.15,-.25,.45]} scale={[.6,1.15,.7]} color="#204B6C"/>
    <Building position={[2.45,-.35,.25]} scale={[.58,.95,.6]} color="#204B6C"/>
    <Building position={[-2.65,-.5,-.2]} scale={[.45,.68,.48]} gold/>
    <Building position={[2.95,-.55,-.25]} scale={[.5,.55,.5]} gold/>
    <mesh position={[0,-1.13,0]} rotation={[-Math.PI/2,0,0]} receiveShadow><circleGeometry args={[4.2,64]}/><meshStandardMaterial color="#EEF2F6" metalness={.1} roughness={.8}/></mesh>
    <mesh position={[0,-1.12,0]} rotation={[-Math.PI/2,0,0]}><ringGeometry args={[2.1,2.14,64]}/><meshBasicMaterial color="#C9A568" transparent opacity={.55}/></mesh>
  </group>
}

export default function Scene(){
  return <Canvas shadows camera={{position:[0.1,1.2,7.6],fov:38}} dpr={[1,1.5]}>
    <ambientLight intensity={1.6}/>
    <directionalLight castShadow position={[4,7,6]} intensity={2.2} color="#ffffff"/>
    <pointLight position={[-4,2,4]} intensity={2.4} color="#C9A568"/>
    <fog attach="fog" args={['#F7F9FC',7.5,12]}/>
    <ColomboSkyline/>
  </Canvas>
}
