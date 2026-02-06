"use client";

import { Canvas } from "@react-three/fiber";
import { View, Preload } from "@react-three/drei";

type SceneProps = {
    children?: React.ReactNode;
    eventSource?: React.RefObject<HTMLElement>;
};

export default function Scene({ children, eventSource, ...props }: SceneProps) {
    return (
        <Canvas
            {...props}
            eventSource={eventSource}
            className="!fixed top-0 left-0 h-screen w-screen -z-10 pointer-events-none"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: -1,
            }}
        >
            <View.Port />
            {children}
            <Preload all />
        </Canvas>
    );
}
