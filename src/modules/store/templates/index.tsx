import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import NegozioCategorie from "../components/refinement-list/menu-negozio"


import PaginatedProducts from "./paginated-products"
import ListaCollezzioni from "../components/refinement-list/menu-collezioni"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container" data-testid="category-container">
      <div className="hidden small:block">
        <div className="w-full small:w-auto small:mr-6 mb-6 small:mb-0">
          <RefinementList sortBy={sortBy || "created_at"} />
          <NegozioCategorie />
          <ListaCollezzioni />
        </div>
      </div>
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">Tutti i nostri prodotti</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>

    </div>
  );
}

export default StoreTemplate
