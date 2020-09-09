import React from 'react'
import {jsPDF} from 'jspdf'

const doc = new jsPDF('p','mm','a4')
const width = doc.internal.pageSize.getWidth();
const height = doc.internal.pageSize.getHeight();


const htmlToPdf = () => {
    doc.html(document.getElementById('root'), {callback: function (doc) {
        doc.save()
    }})
    // console.log('document.getElementById("root") -> ',document.getElementById('root'))    
}

function Converter() {


    return (
        <button style={{width:width/2 , height: height * 0.02}} onClick={htmlToPdf}>
            Convert
        </button>
    )
}

export default Converter
