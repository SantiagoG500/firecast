import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    // FireCast: predicción inteligente para prevenir incendios forestales antes de que ocurran.
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
  );
}
