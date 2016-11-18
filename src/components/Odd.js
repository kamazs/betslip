import React, {PureComponent} from "react";
import styles from "./odd.css";

export default class Odd extends PureComponent {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onSelectClick = this.onSelectClick.bind(this);
    }

    onChange(e){
        this.props.onChangeValue(this.props.id, e.currentTarget.value);
    }

    onInputClick(e){
        e.currentTarget.select();
    }

    onSelectClick(e){
        this.props.onSelect(this.props.id)
    }

    render(){
        return <div className={this.props.selected ? styles.selectedOdd : styles.oddContainer}>
            <span> ODDS:</span><span className={styles.odd} onClick={this.onSelectClick}> {this.props.odd.toFixed(2)} </span>
            <span> Amount: </span>
            <input className={styles.oddInput} value={this.props.value} id="amount" onChange={this.onChange} onClick={this.onInputClick}/>
            
        </div>;
    }
}