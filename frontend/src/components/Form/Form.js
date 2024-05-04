import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const [text,settext]=useState("This is the intial tex to text")

    const handleochange=(e)=>{//as you are typing ,its state changes and this is called and it sets e.target.value
        settext(e.target.value)
    }
    const handlevalue=(e)=>{
        settext("You click on button")
    }

  return (
    <div>
       <textarea className="text" value={text} onChange={handleochange}/>
       <button onClick={handlevalue}>Click me</button>
    </div>
  )
}

