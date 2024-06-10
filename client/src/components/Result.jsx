import { useContext, useState } from "react"
import ZodiacContext from "../context/context"

const style = {
    placeholder : "italic text-gray-500",
    normal : "font-medium"
}

export default function Result(){

    const zodiac = useContext(ZodiacContext)

    return (
        <div className="p-4 w-1/2">
            <div className="border-2 h-full p-4 bg-gray-100">
                <p className={zodiac.zodiac ? style.normal : style.placeholder}>
                    {zodiac.zodiac 
                        ? "You are a " + zodiac.zodiac 
                        : "Please submit your birthdate first"
                    }
                </p>
            </div>
        </div>
    )
} 