import { clx } from "@medusajs/ui";
import { getCategoriesList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

export default async function ListeCategorie({ categoryId }: { categoryId?: string }) {
    const { product_categories } = await getCategoriesList();
    
    // Determine the parent category ID if a categoryId is provided
    let catid: string | undefined;
    if (categoryId) {
        const category = product_categories?.find(c => c.id === categoryId);
        catid = category?.parent_category ? category.parent_category_id || undefined : categoryId;
    }

    return (
        <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
            {product_categories && product_categories.length > 0 && (
                <div className="flex flex-col gap-y-2">
                    <span className="txt-small-plus txt-ui-fg-base">
                        Categorie
                    </span>
                    <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                        {product_categories.map((c) => {
                            if (c.parent_category) {
                                return null;
                            }
                            
                            // Filter the children based on the catid
                            const children = c.category_children
                                ?.filter(child => child.parent_category_id === catid)
                                ?.map(child => ({
                                    name: child.name,
                                    handle: child.handle,
                                    id: child.id,
                                })) || null;

                            return (
                                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small" key={c.id}>
                                    <LocalizedClientLink
                                        className={clx("hover:text-ui-fg-base", c && "txt-small-plus")}
                                        href={`/categories/${c.handle}`}
                                        data-testid="category-link"
                                    >
                                        {c.name}
                                    </LocalizedClientLink>
                                    {children && (
                                        <ul className="grid grid-cols-1 ml-3 gap-2">
                                            {children.map(child => (
                                                <li key={child.id}>
                                                    <LocalizedClientLink
                                                        className="hover:text-ui-fg-base"
                                                        href={`/categories/${child.handle}`}
                                                        data-testid="category-link"
                                                    >
                                                        {child.name}
                                                    </LocalizedClientLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
