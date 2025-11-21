import { useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HoverButton } from "@components/ui"
import clsx from "clsx"
import "./InputSearch.css";


const InputSearch = ({

}) => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    }
    return (
        <div className="input-search" onClick={handleFocus}>
            <div className="input-search-content">
                <div className="xuycikk">

                    <input
                        className="input-search__field"
                        ref={inputRef}
                        type="search"
                        value={value}
                        spellCheck={false}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Search here"
                    />
                    <button className="input-search__action">
                        <span className="input-search__action-icon">
                            <IoSearchSharp />
                        </span>
                    </button>

                </div>



            </div>
        </div>
    )
}

export default InputSearch;