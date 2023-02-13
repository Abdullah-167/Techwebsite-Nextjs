import React from "react";

const Newsletter = () => {
    return (
        <div className="bg-[#565656] flex justify-end gap-24 items-center py-4">
            <div className="flex gap-4 items-center">
                <div class="w-full md:min-w-[400px] px-3 py-1 bg-[#565656] text-white border-b-2 rounded border-[#F98400]">
                    <label
                        class="block tracking-wide text-xs mb-2 font-light "
                        for="grid-last-name"
                    >
                        Search
                    </label>
                    <input
                        class="appearance-none bg-transparent block w-full leading-tight focus:outline-none"
                        id="grid-last-name"
                        type="text"
                        placeholder=""
                    />
                </div>
                <div class="w-full max-h-[80px] px-3 py-1 bg-[#565656] text-white border-b-2 rounded border-[#F98400]">
                    <label
                        class="block tracking-wide text-xs mb-2 font-light "
                        for="grid-last-name"
                    >
                        Sort
                    </label>
                    <select
                        class="block bg-transparent appearance-none w-full px-4 pr-8 rounded leading-tight focus:outline-none"
                        id="grid-state"
                    >
                        <option></option>
                        <option>None</option>
                        <option>A-Z</option>
                        <option>Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
