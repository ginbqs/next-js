export default function Timepicker(){
    return(
        <div className="bg-gray-900 text-white py-2 px-3">
            Select Time
            <div className="relative pt-3">
                <div className="relative">
                    <input type="text" className="bg-gray-600 px-2 py-4 border-white border-2 rounded-md w-full" value="08:00"/>
                </div>
                <div className="absolute top-20 h-96 bg-gray-600 w-full rounded-md px-10 py-4">
                    <div>as</div>
                </div>
            </div>
        </div>
    )
}