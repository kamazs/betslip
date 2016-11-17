import React, {PureComponent} from "react";

export default class Odd extends PureComponent {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.props.onChangeValue(this.props.id, e.currentTarget.value);
    }

    render(){
        return <div>
            <span> ODDS: {this.props.odd} </span>
            <span>Amount: </span>
            <input value={this.props.value} id="amount" onChange={this.onChange}/>
            
        </div>;
    }
}