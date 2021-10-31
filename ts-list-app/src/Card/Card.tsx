import React, {useState} from "react"


export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}

interface CardProps {
    width?: string
    height?: string
    variant: CardVariant
    onClick: (num: number) => void
}

export const Card: React.FC<CardProps> =
    ({
         width,
         height,
         variant,
         children,
         onClick,
     }) => {
        const [counter, setCounter] = useState(0)
        return (
            <div
                style={{
                    width,
                    height,
                    border: variant === CardVariant.outlined ?
                        "solid 1px gray" :
                        "none",
                    background: variant === CardVariant.primary ?
                        "lightgray" :
                        "none",
                }}
                onClick={() => onClick(counter)}
            >
                Hi, {children}
            </div>
        )
    }