import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';



export default function CheckBoxs() {
    const [icons, setIconsView] = useState('0');
    const settingsState = {
        iconsv: icons
    }
    // useEffect(() => {
    //     localStorage.setItem('gameGeneralSettings', JSON.stringify(settingsState));
    // }, [icons])

    const handleChange = (event) => {
        setIconsView(event.target.value);
        console.log(icons)
    };

    return (
        <div className='view__settings'>
            <Radio
                checked={icons === '0'}
                onChange={handleChange}
                value='0'
                color="default"
                // name="radio-button-demo"
                // inputProps={{ 'aria-label': 'E' }}
                size="small"
            />
            <div className='icons'>
                ╳◯
            </div>

            <Radio
                checked={icons === '1'}
                onChange={handleChange}
                value='1'
                color="default"
                // name="radio-button-demo"
                // inputProps={{ 'aria-label': 'E' }}
                size="small"
            />

            <div className='icons'>
                🔥❄
            </div>



        </div>
    );
}
