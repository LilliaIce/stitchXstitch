import { useState, useEffect } from 'react';

interface RowColumnInputProps {
    value?: number;
    onChange?: (value: number) => void;
}

export default function RowColumnInput({ value: propValue = 15, onChange }: RowColumnInputProps) {
    const [value, setValue] = useState(propValue);

    useEffect(() => {
        setValue(propValue);
    }, [propValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="intField" >
            <input 
                type="number" 
                value={value}
                min="1"
                onChange={handleChange}
            />
        </div>
    );
}
