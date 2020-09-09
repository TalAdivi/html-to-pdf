import React from 'react'
import {jsPDF} from 'jspdf'

function Shapes() {
    var doc = new jsPDF("p", "mm", "a4");

    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    return (
        <div>
            <div style={{ width: width/4, height: height/4, backgroundColor: "red" }}>

            </div>
            <div style={{ width: width/4, height: height/4, backgroundColor: "blue" }}>

            </div>
            <div style={{ width: width/4, height: height/4, backgroundColor: "yellow" }}>

            </div>

            <img src={"https://create-react-app.dev/img/logo.svg"}/>
        </div>
    )
}

export default Shapes
