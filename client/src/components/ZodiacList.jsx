import { useState } from "react"

export default function ZodiacList(){

    const [zodiac, setZodiac] = useState([
        ["21 Maret", "19 April", "Aries"], 
        ["20 April", "20 Mei", "Taurus"], 
        ["21 Mei", "20 Juni", "Gemini"], 
        ["21 Juni", "22 Juli", "Cancer"], 
        ["23 Juli", "22 Agustus", "Leo"], 
        ["23 Agustus", "22 September", "Virgo"], 
        ["23 September", "22 Oktober", "Libra"], 
        ["23 Oktober", "21 November", "Scorpio"], 
        ["22 November", "21 Desember", "Sagitarius"], 
        ["22 Desember", "19 Januari", "Capricorn"],
        ["20 Januari", "18 Februari", "Aquarius"],
        ["19 Februari", "20 Maret", "Pisces"]
    ])

    return (
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Start Date</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">End Date</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Zodiac</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {zodiac.map(el => (
                    <tr className="odd:bg-gray-50" key={el[2]}>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-900">{el[0]}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{el[1]}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{el[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}