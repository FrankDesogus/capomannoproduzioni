import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <div className="relative h-4 mx-auto duration-200 bg-black text-xs text-center text-ui-fg-on-color">resistenza e sostenibiltà in ogni filo del tessuto</div>

      <header className="relative h-16 mx-auto duration-200 bg-black bg-opacity-10 w-full">
        <nav className="border-b-2 border-white content-container txt-xsmall-plus text-ui-fg-on-color flex items-center justify-between w-[90%] mx-auto h-full text-small-regular">
          
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
          <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/GrandeOndaDentata.png'} width={50} height={50} alt={"logo"} />

            <LocalizedClientLink
              href="/"
              className="text-xl small:text-4xl md:text-2xl hover:text-ui-fg-base uppercase ml-2"
              data-testid="nav-store-link"
            >
              
              Orientando Capo Mannu
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Carrello (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

        </nav>
        <div className="invisible small:visible relative h-8 mx-auto duration-200 bg-black bg-opacity-10 text-center text-ui-fg-on-color w-[80%] text-l">
        <ul className="flex space-x-4 items-center text-center">
            <li><a href="#" className="text-white hover:text-gray-300">Abbigliamento Capo Mannu</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Abbigliamento Etnico</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Accessori</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Bijoux</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Borse</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Uomo</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Donna</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Bambino</a></li>
          </ul>
          </div>

      </header>
    </div>
  )
}
