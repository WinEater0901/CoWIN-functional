import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import MessageBox from './messageBox'
import DropdownSelect from './dropdownSelect'
import DropdownSelectStates from './dropdownSelectStates'

const ShowDistrictCode = () => {
  const [districts, setDistricts] = useState([])
  const [distId, setDistID] = useState()
  const [distName, setDistName] = useState('Select District')
  const [states, setStates] = useState([])
  const [stateId, setStateID] = useState()
  const [stateName, setStateName] = useState('Select state')

  useEffect(() => {
    axios
      .get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
      .then((res) => {
        let statesData = res.data.states
        setStates(statesData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const stateClickHandler = (state) => {
    setStateID(state.state_id)
    setStateName(state.state_name)  
    if (state.state_id) {
      callDistSetter(state.state_id)
      setDistName('Select District')
    }
  }

  const callDistSetter = (state_id) => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`,
      )
      .then((res) => {
        setDistricts(res.data.districts)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const distClickHandler = (district) => {
    setDistID(district.district_id)
    setDistName(district.district_name)
  }

  return (
    <>
      <Container className="pl-0 pr-0">
        <Row>
          <Col sm={10} className="ml-0 pl-0 pr-0">
            <MessageBox distId={distId} />
          </Col>
          <Col sm={2} className="mt-4 ml-0">
            <DropdownSelectStates
              stateClickHandler={stateClickHandler}
              stateName={stateName}
              states={states}
            />
            {stateId && (
              <DropdownSelect
                distClickHandler={distClickHandler}
                distName={distName}
                districts={districts}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ShowDistrictCode
