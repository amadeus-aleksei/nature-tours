import React from "react"
import './First.css'

const First = () => {
    return (
        <div>
            <header className="header">
                <div className="logo-box">
                    <img src={require("../../img/logo-white.png")} alt="Logo" className="logo"/>
                </div>

                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">hiking</span>
                        <span className="heading-primary-sub">project css header 2 animations</span>
                    </h1>

                    <a href='#' className="btn btn-white btn-animated">discover more here</a>
                </div>

                
            </header>
        </div>
    )
}

export default First