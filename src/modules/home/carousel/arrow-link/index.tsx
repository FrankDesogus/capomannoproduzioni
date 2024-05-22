import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from '@modules/common/components/localized-client-link';

type InteractiveLinkHomeProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLinkHome = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkHomeProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group"
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text className="text-ui-fg-interactive text-purple-600 px-2">{children}</Text>
      <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150"
        color="var(--fg-interactive)"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLinkHome
