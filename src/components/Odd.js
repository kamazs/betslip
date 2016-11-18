import React, {PureComponent} from "react";
import styles from "./odd.css";

export default class Odd extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            value: 0,
            activated: false
        };

        this.onChange = this.onChange.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onSelectClick = this.onSelectClick.bind(this);
    }

    componentWillReceiveProps(props){
        if (props.value){
            this.setState({
                value: props.value
            });
        }
        if (props.odd!=this.props.odd){
            this.setState({
                activated: true
            });
            setTimeout( ()=>this.setState({ 
                activated: false 
            }), 2000);
        }
    }

    onChange(e){
        if (!this.props.onChangeValue){
            return;
        }
        let newValue = Math.abs(+e.currentTarget.value);
        this.props.onChangeValue(this.props.id, newValue, this.props.selected);
    }

    onInputClick(e){
        e.currentTarget.select();
    }

    onSelectClick(e){
        if (!this.props.onSelect){
            return;
        }
        this.props.onSelect(this.props.id)
    }

    render(){
        return <div className={this.props.selected ? styles.selectedOdd : styles.oddContainer}>
            <span> ODDS:</span><span className={this.state.activated ? styles.oddActivated : styles.odd} onClick={this.onSelectClick}> {this.props.odd.toFixed(2)} </span>
            <span> BET: </span>
            <input type="number" className={styles.oddInput} value={this.state.value} id="amount" onChange={this.onChange} onClick={this.onInputClick}/>
        </div>;
    }
}