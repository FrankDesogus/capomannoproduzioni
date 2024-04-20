
import { Text, clx } from "@medusajs/ui"

import { getCategoriesList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
type categoriesParams = {
    category_id?: string[]
}
export default async function NegozioCategorie({categoryId}:{categoryId?:string}) {
    const { product_categories } = await getCategoriesList()

    return (
        <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
            {product_categories && product_categories?.length > 0 && (
                <div className="flex flex-col gap-y-2">
                    <span className="txt-small-plus txt-ui-fg-base">
                        Categorie
                    </span>
                    <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                        {product_categories?.map((c) => {
                            if (c.parent_category) {
                                return
                            }

                            const children =
                                c.category_children?.map((child) => ({
                                    name: child.name,
                                    handle: child.handle,
                                    id: child.id,
                                })) || null

                            return (
                                <li
                                    className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                                    key={c.id}
                                >
                                    <LocalizedClientLink
                                        className={clx(
                                            "hover:text-ui-fg-base",
                                            children && "txt-small-plus"
                                        )}
                                        href={`/categories/${c.handle}`}
                                        data-testid="category-link"
                                    >
                                        {c.name}
                                    </LocalizedClientLink>
                                    
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>

    )
}
