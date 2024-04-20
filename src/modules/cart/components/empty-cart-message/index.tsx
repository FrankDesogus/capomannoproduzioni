import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Cart
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Non hai nulla nel carrello. Cambiamo la situazione,utilizza il link qui sotto per iniziare a sfogliare i nostri prodotti
      </Text>
      <div>
        <InteractiveLink href="/store">Esplora i prodotti</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
