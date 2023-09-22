import React from "react";
import PropTypes from "prop-types";
import circleIcon from "../Assets/circle.png";
import crossIcon from "../Assets/cross.png";

TicTacToe.propTypes = {};

function TicTacToe() {
    return (
        <div>
            <div className="container">
                <h1 className="title">Tic Tac Toe </h1>
                <div className="board">
                    <div className="row1">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                    <div className="row2">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                    <div className="row3">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                </div>
                <button className="reset">Reset</button>
            </div>
            <img src={circleIcon} alt="" />
        </div>
    );
}

export default TicTacToe;
