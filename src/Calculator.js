import React, {Component} from 'react';
import './Calculator.scss';
import Slider from './Slider';

class Calculator extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-8 cal-container">
                <div className="card">
                <div className="card-body">
                    <h6 className="card-title">Mortgage Calculator</h6>
                    <form className="">
                        <div className="form-group">
                        <label className="">Years of mortgage</label>
                        <Slider />

                        </div>
                    </form>
                </div>
                </div>
                </div>
                <div className="col-4 results"></div>
            </div>
        );
    }
}



export default Calculator;