import React, {Component} from "react";
import Odd from "./Odd.js";

export default class App extends Component {

    render() {
        return <div>
            <div>
                Odds:<ul>
                    { this.props.data && this.props.data.map(odd=> <li key={odd.id}> <Odd onChangeValue={this.props.onUpdate} odd={odd.odd} id={odd.id} value={odd.value}/> </li>) }
                </ul>
            </div>
            <div>
                Betslip:<ul>
                    { this.props.data && this.props.data.map(odd=> odd.selected ? <li key={odd.id}> <Odd onChangeValue={this.props.onUpdate} odd={odd.odd} id={odd.id} value={odd.value}/> </li> : null ) }
                </ul>
            </div>
        </div>;
    }

}