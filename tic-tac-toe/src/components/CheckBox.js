import React, { Component } from 'react';


export default class CheckBox extends Component {

    state = {
        icons: 1,
        colorField: 'blue',
        sound: true
    };

    handleChange = (event) => {
        this.setState({
            icons: event.target.value
        })
    };

    componentDidUpdate() {
        localStorage.setItem('gameGeneralSettings', JSON.stringify(this.state));
    }


    componentDidMount() {
        if (localStorage.gameGeneralSettings) {
            this.setState({
                icons: (JSON.parse(localStorage.gameGeneralSettings)).icons
            })

        }

    }

    render() {
        const { updateData } = this.props;
        const { icons } = this.state;
        return (
            <div>
                <div className='view__settings' >
                    <div className="form_radio"  >
                        <input id="radio-1" type="radio" name="radio" value="0" onClick={this.handleChange} onChange={updateData(this.state.icons)} defaultChecked={this.state.icons === 0} />
                        <label className='icons' >╳◯</label>
                    </div>
                    <div className="form_radio" >
                        <input id="radio-2" type="radio" name="radio" value="1" onClick={this.handleChange} onChange={updateData(this.state.icons)} defaultChecked={this.state.icons === 1} />
                        <label className='icons' > 🔥❄</label>
                    </div>

                </div>

            </div>
        )
    }
}
