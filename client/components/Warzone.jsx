import React from 'react'
import { connect } from 'react-redux'

const Warzone = ({test}) =>{

    // useEffect(() => {
    //       getWarzoneStats()
    //         .then(stats => {
    //           dispatch(setStats(stats))
    //           return null
    //         })
    //         .catch(err => console.log(err))
    //   }, [])
    console.log(test)

    return(
        <h1>test</h1>
    )
}


const mapStateToProps = (state)=>{
    return {
      test: state.test
    }
  }
  export default connect(mapStateToProps)(Warzone)