"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  
  float time = uTime * 0.15; // Slower for elegance
  
  // Mouse influence
  vec2 mouse = uMouse * 0.3;
  
  // Dynamic zoom/scale
  float zoom = 1.0 + 0.2 * sin(time * 0.5);
  vec2 scaledUV = uv * (2.0 * zoom) + mouse;

  // Noise layers
  float n1 = snoise(scaledUV + time);
  float n2 = snoise(scaledUV * 1.5 - time * 0.3);
  
  float finalNoise = n1 * 0.5 + n2 * 0.25;

  // Color mix - Light Theme
  vec3 whiteBase = vec3(0.98, 0.98, 0.98); // #fafafa
  vec3 brandRed = vec3(0.9, 0.0, 0.0);     // #e60000 approx
  vec3 softGray = vec3(0.9, 0.9, 0.9);

  // Flow intensity
  float flow = smoothstep(0.3, 0.7, finalNoise + 0.5);
  
  // Mix white base with soft gray noise
  vec3 color = mix(whiteBase, softGray, flow * 0.5);
  
  // Add red accents on peaks
  color = mix(color, brandRed, smoothstep(0.65, 0.85, finalNoise + 0.5) * 0.6);

  // Subtle vignette (darkens corners slightly)
  float dist = distance(vUv, vec2(0.5));
  float vignette = smoothstep(1.5, 0.0, dist); // wider falloff
  
  gl_FragColor = vec4(color * vignette, 1.0);
}
`;

export default function HeroShader() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { size, mouse } = useThree();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uResolution: { value: new THREE.Vector2(size.width, size.height) },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            // @ts-ignore
            meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();

            // Smooth mouse interpolation
            // @ts-ignore
            const targetMouse = new THREE.Vector2(mouse.x, mouse.y);
            // @ts-ignore
            meshRef.current.material.uniforms.uMouse.value.lerp(targetMouse, 0.05);
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -1]} scale={[10, 10, 1]}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
            />
        </mesh>
    );
}
