import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React from "react"

import { onlyUnique } from "@lib/util/only-unique"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelectKid2: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  let filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  // Ordina le opzioni se l'opzione corrente è "Taglia"
  if (option.title === "Taglia") {
    filteredOptions = ["0-1", "1-2", "3-4", "5-6", "7-8", "9-10", "11-12", "13-14"]
  }

  // Divide le opzioni in gruppi di 4 per riga
  const optionGroups = []
  for (let i = 0; i < filteredOptions.length; i += 4) {
    optionGroups.push(filteredOptions.slice(i, i + 4))
  }

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Seleziona {title}</span>
      <div
        className="flex flex-wrap gap-2"
        data-testid={dataTestId}
      >
        {optionGroups.map((group, index) => (
          <div key={index} className="flex flex-wrap gap-2 w-full">
            {group.map((v) => (
              <button
                onClick={() => updateOption({ [option.id]: v })}
                key={v}
                className={clx(
                  "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
                  {
                    "border-ui-border-interactive": v === current,
                    "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                      v !== current,
                  }
                )}
                disabled={disabled}
                data-testid="option-button"
              >
                {v}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OptionSelectKid2
