import { memo } from "react"

const CustomButton = 
    ({ onClick, title }) => {
        console.log("custom button rendered:", title)
        return (
            <button onClick={onClick}>{title}</button>
        )
    }

export default memo(CustomButton);