import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

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

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          // href={siteConfig.links.docs}
          href={'#'}
        >
          Checa nuestro simulador
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          // href={siteConfig.links.github}
          href={'#'}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
