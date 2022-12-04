import { useState } from "react";
import "./index.scss";

interface IProps {
    onSelect: (selected: string)=> void;
    placeholder: string;
    options: OptionType[];
};

const Select: React.FC<IProps> = ({onSelect, placeholder, options}): JSX.Element => {
    const [showOptions, setShowOptions] = useState(false as boolean);
    const [selectedOption, setSelectedOption] = useState(placeholder as string);
    const toggleOptions = ()=> setShowOptions(po=> !po);

    return (
        <div className={`c-select ${showOptions && "active"}`} >
            <input type="text" className="c-select-input" readOnly value={selectedOption} placeholder={placeholder} onClick={toggleOptions} />
            <div className="c-select-options">
                <div data-value={placeholder}
                    onClick= {()=> {
                        onSelect("");
                        setSelectedOption("");
                        toggleOptions();
                    }}
                >{ placeholder }</div>
                {
                    options.map(({title, value})=> {
                        return (
                            <div key={`opt-${value}`} data-value={value} data-title={title}
                                onClick={ (e: any)=> {
                                    onSelect(e.target.attributes["data-value"].value);
                                    setSelectedOption(e.target.attributes["data-title"].value);
                                    toggleOptions();
                                }}
                            >{ title }</div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Select;