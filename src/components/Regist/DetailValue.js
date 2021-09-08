import React from "react"

const DetailValue =(props) => {
    return (
        <>
            {props._valueList && props._valueList.map((item,i) => (
                <tr>
                    <th>Sensor Value {i+1} : </th>
                    <td><input type="text" key={i} name='sensorValue' autoComplete="off"/></td>
                </tr>
            ))}
        </>
    )
}

export default DetailValue