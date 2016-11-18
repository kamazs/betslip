import React, {Component} from "react";
import Odd from "./Odd.js";
import styles from "./app.css";

export default class App extends Component {

    render() {
        return <div className={styles.container}>
            <div className={styles.containerPane}>
                <h1 className={styles.allOddsHeading}>ALL ODDS</h1>
                <ul className={styles.bulletless}>
                    { this.props.data && 
                        this.props.data.slice().sort((a,b)=>a.id-b.id).map(
                            odd=>
                                <li key={odd.id}> 
                                    <Odd 
                                        onChangeValue = {this.props.onUpdate} 
                                        onSelect = {this.props.onSelect} 
                                        odd = {odd.odd} 
                                        id = {odd.id} 
                                        value = {odd.value} /> 
                                </li>
                        ) 
                    }
                </ul>
            </div>
            <div className={styles.containerPane}>
                <h1 className={styles.selectedOddsHeading}>BETSLIP</h1>
                <ul className={styles.bulletless}>
                    { this.props.data && 
                        this.props.data.map(
                            odd=> 
                                odd.selected ? 
                                    <li key={odd.id}> 
                                        <Odd 
                                            onChangeValue = {this.props.onUpdate} 
                                            odd = {odd.odd} 
                                            id = {odd.id} 
                                            value = {odd.value} 
                                            selected/> 
                                    </li> 
                                : []
                            )
                        }
                </ul>
            </div>
        </div>;
    }

}