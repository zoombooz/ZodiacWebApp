import { useContext, useState } from "react"
import Swal from "sweetalert2"
import ZodiacContext from "../context/context"

export default function BirthdateForm(){

    const [name, setName] = useState("")
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    const zodiac = useContext(ZodiacContext)

    function reset(e){
        e.preventDefault()
        setName("")
        setDay("")
        setMonth("")
        setYear("")
        zodiac.setZodiac("")
    }

    function handleSubmit(e){
        e.preventDefault()
        let errorMessage = []
        if(!day || !month || !year || !name){
            errorMessage.push("Data harus diinput semua")
        }
        if(day < 1 || day > 31){
            errorMessage.push("Hari harus di antara 1 dan 31")
        }
        if(month < 1 || month > 12){
            errorMessage.push("Bulan harus di antara 1 dan 12")
        }
        if(year > 2024){
            errorMessage.push("Tahun tidak bisa melebihi tahun sekarang")
        }
        if(errorMessage.length > 0){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage.join(", ")
            });
        }else {
            let date = new Date(month + "/" + day + "/" + year)
            if(date >= new Date("03/21/" + year) && date <= new Date("04/19/" + year)){
                zodiac.setZodiac("Aries")
            }else if(date >= new Date("04/20/" + year) && date <= new Date("05/20/" + year)){
                zodiac.setZodiac("Taurus")
            }else if(date >= new Date("05/21/" + year) && date <= new Date("06/20/" + year)){
                zodiac.setZodiac("Gemini")
            }else if(date >= new Date("06/21/" + year) && date <= new Date("07/22/" + year)){
                zodiac.setZodiac("Cancer")
            }else if(date >= new Date("07/23/" + year) && date <= new Date("08/22/" + year)){
                zodiac.setZodiac("Leo")
            }else if(date >= new Date("08/23/" + year) && date <= new Date("09/22/" + year)){
                zodiac.setZodiac("Virgo")
            }else if(date >= new Date("09/23/" + year) && date <= new Date("10/22/" + year)){
                zodiac.setZodiac("Libra")
            }else if(date >= new Date("10/23/" + year) && date <= new Date("11/21/" + year)){
                zodiac.setZodiac("Scorpio")
            }else if(date >= new Date("11/22/" + year) && date <= new Date("12/21/" + year)){
                zodiac.setZodiac("Sagitarius")
            }else if(date >= new Date("01/20/" + year) && date <= new Date("02/18/" + year)){
                zodiac.setZodiac("Aquarius")
            }else if(date >= new Date("02/19/" + year) && date <= new Date("03/20/" + year)){
                zodiac.setZodiac("Pisces")
            }else{
                zodiac.setZodiac("Capricorn") 
            }
        }
    }

    return (
    <div className="p-8 w-1/2 bg-gray-100">
        <form>
            <div className="flex">
                <label htmlFor="name" className="w-1/2 text-lg font-medium text-gray-700"> Nama :</label>
                <input
                    type="text"
                    id="name"
                    placeholder="input nama"
                    className="mt-1 w-1/2 p-2 rounded-md border-gray-400 border-2 shadow-sm sm:text-sm"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="flex">
                <label htmlFor="day" className="w-1/2 text-lg font-medium text-gray-700"> Tanggal Lahir :</label>
                <div className="flex">
                    <input
                        type="number"
                        id="day"
                        placeholder="day"
                        className="mt-1 w-full p-2 mr-2 rounded-md border-gray-400 border-2 shadow-sm sm:text-sm"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                    <h1 className="text-3xl mr-2 text-gray-400">/</h1>
                    <input 
                        type="number"
                        id="month"
                        placeholder="month"
                        className="mt-1 w-full p-2 mr-2 rounded-md border-gray-400 border-2 shadow-sm sm:text-sm"
                        value={month}
                        onChange={e => setMonth(e.target.value)}
                    />
                    <h1 className="text-3xl mr-2 text-gray-400">/</h1>
                    <input 
                        type="number"
                        id="year"
                        placeholder="year"
                        className="mt-1 w-full p-2 rounded-md border-gray-400 border-2 shadow-sm sm:text-sm"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex mt-4">
                <button onClick={handleSubmit} type="submit" className="p-2 bg-gray-400 w-1/2 hover:bg-gray-500">Submit</button>
                <button onClick={reset} className="bg-gray-300 p-2 w-1/2 hover:bg-gray-400">Reset</button>
            </div>
        </form>
        
    </div>
    )
}