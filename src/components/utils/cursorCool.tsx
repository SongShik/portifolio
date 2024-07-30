"use client";

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

export default function CursorCool() {
    const cursor = useRef(null);

    useGSAP(() => {

        // Função para animar o cursor
        const onMouseMove = (event: MouseEvent) => {
            const { clientX, clientY, target } = event;
            // Desabilita aviso caso o target seja nulo
            gsap.config({
                nullTargetWarn: false,
            });
            gsap.to(cursor.current, {
                x: clientX,
                y: clientY,
                opacity: 1,
            });
        }

        const onMouseLeave = () => {
            gsap.to(cursor.current, {
                duration: 0.7,
                opacity: 0,
            });
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
    });



    return (<>
        <div className='cursor-cool' ref={cursor}>
            <div className="cursor-cool-circle"></div>
        </div>
    </>)
}
