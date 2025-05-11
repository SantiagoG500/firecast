import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import { link as linkStyles } from "@heroui/theme";
import clsx from 'clsx';
import NextLink from "next/link";

export default function SimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar className='mb-5'  position='static'>
        <NavbarContent className='overflow-x-auto'>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href='/simulator'
            >
              Datos Mensuales
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href='/simulator/calc'
            >
              Calculadora de probabilidad
            </NextLink>
          </NavbarItem>

        </NavbarContent>
      </Navbar>
      <div>
        {children}
      </div>
    </section>
  );
}