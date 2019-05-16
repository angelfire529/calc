import React, {Component} from 'react'
import {noUiSlider as slider} from 'nouislider';
import './Slider.scss';

class Slider extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const currentVal = e.target.value;
        const sheet = document.createElement('style');
        document.body.appendChild(sheet);
        const getTrackStyle = (val) => {
            const prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
            let style = '';
            for(let i =0; i < prefs.length; i++) {
                style += `.range::-${prefs[i]} {background: linear-gradient(to right, blue 0%, blue ${val}%, #ddd ${val + 1}%, #ddd 100%)}`
            }
            return style;
        };
        
        sheet.textContent = getTrackStyle(currentVal);
        console.log(e)
    }

    render() {
        return (
            <div className="slide-container">
            
            </div>
        );
    }
}


// var getTrackStyle = function (el) {
// 	var curVal = el.value,
// 		style = '';

// 	for (var i = 0; i < prefs.length; i++) {
// 		style += '.range::-' + prefs[i] + '{background: linear-gradient(to right, #34495e 0%, #34495e ' + curVal + '%, #fff ' + curVal + '%, #fff 100%)}';
// 	}

// 	return style;
// }

// $rangeInput.on('input', function () {
// 	sheet.textContent = getTrackStyle(this);
// });

export default Slider;