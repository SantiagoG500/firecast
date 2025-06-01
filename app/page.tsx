'use client'
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { useEffect, useRef } from 'react';

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from '@/config/site';
import { ParticleSystem } from '@/utils/particle-system';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect( () => {
    const canvas = canvasRef.current
      const settings = {
      particleColor: "orange",
      minSize: 0.5,
      maxSize: 3,
      minSpeedX: -1,
      maxSpeedX: 1,
      minSpeedY: -5,
      maxSpeedY: -0.1,
    };

    if (!canvas) return
    
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight

    const pSystem = ParticleSystem({
      canvas,
      ctx,
      settings
    })

    pSystem.animate()
  } )


  return (
    <>          
      {/* FireCast: predicción inteligente para prevenir incendios forestales antes de que ocurran. */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 mt-16 md:mt-20 z-50">
        <div className="inline-block max-w-xl text-center justify-center">
          {/* <span className={title()}>Predicción inteligente de incendios con &nbsp;</span> */}
          <span className={title({ color: "yellow" })}>FireCast 🔥&nbsp;</span>
          <br />
          {/* <span className={title({color: "yellow"})}> */}
          <span className={title()}>
            Detecta el riesgo, protege el futuro
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            predicción inteligente para prevenir incendios forestales antes de que ocurran.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 ">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            
            href={'/simulator'}
          >
            Checa nuestro simulador
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
      <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-full pointer-events-none" />
    </>
  );
}
