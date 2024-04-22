import ArrowRight from "@modules/common/icons/arrow-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start ml-72 lg:ml-80">
      <Link
        href={href}
        className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1 lg:mb-0 mb-4"
      >
        <>
          <span className="">{children}</span>
          <ArrowRight
            size={20}
            className="transition-all group-hover:ml-2 duration-300"
          />
        </>
      </Link>
    </div>
  )
}

export default UnderlineLink
