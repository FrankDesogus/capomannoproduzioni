import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function ListaCollezzioni() {

    const { collections } = await getCollectionsList(0, 6)
    return (
        <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
            {collections && collections.length > 0 && (
                <div className="flex flex-col gap-y-2">
                    <span className="txt-small-plus txt-ui-fg-base">
                        Collezzioni
                    </span>
                    <ul
                        className={clx(
                            "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                            {
                                "grid-cols-2": (collections?.length || 0) > 3,
                            }
                        )}
                    >
                        {collections?.slice(0, 6).map((c) => (
                            <li key={c.id}>
                                <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/collections/${c.handle}`}
                                >
                                    {c.title}
                                </LocalizedClientLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    )
}
