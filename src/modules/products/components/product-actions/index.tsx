"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button, Heading, Input, Label, Text } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import FocusModal from "./modal"
import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"

import MobileActions from "../mobile-actions"
import ProductPrice from "../product-price"
import { TableDemo } from "./taglie-table.tsx"
import Modal from "@modules/common/components/modal"
import { ProductOption } from "@medusajs/product"
import OptionSelectKid1 from "../option-select-kid1"
import OptionSelectKid2 from "../option-select-kid2"
import {TableDemoKid2 } from "./taglie-table-kid2"
import {TableDemoKid1 } from "./taglie-table-kid1"


type ProductActionsProps = {
  product: PricedProduct
  region: Region
  disabled?: boolean
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [isAdding, setIsAdding] = useState(false)

  const countryCode = useParams().countryCode as string

  const variants = product.variants
  const guidataglie = product.metadata
  const guidataglieValue = guidataglie?.GuidaAlleTaglie; // Accedi al valore in modo sicuro

  let value = NaN; // Valore predefinito se non è possibile convertire

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Verifica se guidataglieValue è definito e se è una stringa
  if (typeof guidataglieValue === 'string' && !isNaN(parseInt(guidataglieValue))) {
    value = parseInt(guidataglieValue); // Converti il valore in un numero intero
  }

  console.log(value); // Stampa il valore intero o NaN
  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {}

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined })
    }

    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id])
    }
  }, [variants, variantRecord])

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    if (variant && !variant.inventory_quantity) {
      return false
    }

    if (variant && variant.allow_backorder === false) {
      return true
    }
  }, [variant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: variant.id,
      quantity: 1,
      countryCode,
    })

    setIsAdding(false)
  }
  const handleAddToCartOutRunnedVariant = async () => {
    if (!variant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: variant.id,
      quantity: 1,
      countryCode,
    })

    setIsAdding(false)
  }
  const handlenothing = () => { }

  const isValidValue = !isNaN(value);

    const renderComponentByValue = (valuez:number) => {
      if ([1, 2, 3, 4,5,6,7].includes(valuez)) {
        return <TableDemo guidataglie={valuez} />;
      } else if ([10, 11].includes(valuez)) {
        return <TableDemoKid1 guidataglie={valuez} />;
      } else if ([8,9].includes(valuez)) {
        return <TableDemoKid2 guidataglie={valuez} />;
      } else {
        return null;
      }}
    


  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div>
          {product.variants.length > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
                const taglie = [{}, {}]
                if ([1, 2, 3,4,5,6,7].includes(value)) {

                return (
                  <div key={option.id}>
                    
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                );
              }else if([8,9].includes(value)) {

                return (
                  <div key={option.id}>
                    
                    <OptionSelectKid1
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                );

              }
              else if([10,11].includes(value)) {

                return (
                  <div key={option.id}>
                    
                    <OptionSelectKid2
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                );
                
              }else{
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                )
              }
              }
              )}
              <Divider />
            </div>
          )}
        </div>

        <ProductPrice product={product} variant={variant} region={region} />

        <Button
          onClick={handleAddToCart}
          disabled={!inStock || !variant || !!disabled || isAdding}
          variant="primary"
          className="w-full h-10"
          isLoading={isAdding}
          data-testid="add-product-button"
        >
          {!variant
            ? "Seleziona variante"
            : !inStock
              ? "Terminato"
              : "Aggiungi al carrello"}
        </Button>
        <MobileActions
          product={product}
          variant={variant}
          region={region}
          options={options}
          updateOptions={updateOptions}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        />
        {/* Renderizza <FocusModal> solo se isValidValue è true */}
        {isValidValue && (
          <>
            <Button onClick={openModal} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Guida Alle Taglie</Button>
            <Modal isOpen={isModalOpen} close={closeModal}>
              <>
                  {renderComponentByValue(value)}
                <Button onClick={closeModal} className="ml-auto">Chiudi</Button>
              </>
            </Modal>

          </>
        )}
      </div>
    </>
  )
}
