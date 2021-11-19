import React, {useState} from 'react'
import DetailValue from './DetailValue'

const AddSensor = () => {
  const [_valueList, setValueList] = useState([0])

  const onAddValue = (e) => {
    e.preventDefault();

    let valueArr = [..._valueList];
    valueArr.push(valueArr[valueArr.length-1]+1);
    setValueList(valueArr);
  }

  return (
    <>
      <DetailValue _valueList={_valueList}></DetailValue>
      <button onClick={onAddValue}>Add Value</button>
    </>
  )
}

export default AddSensor