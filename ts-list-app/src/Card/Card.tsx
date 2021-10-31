import React from "react"


interface CardProps {
    width?: string
    height?: string
}

export const Card: React.FC<CardProps> =
    ({
         width,
         height,
         children,
     }) => {
        return (
            <div style={{
                width,
                height,
                border: "solid 1px gray",
            }}>
                Hi, {children}
            </div>
        )
    }