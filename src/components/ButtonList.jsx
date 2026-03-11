import { useState } from "react"


export default function ButtonList({ lingua }) {



    const [selectedLanguage, setSelectedLanguage] = useState(null)

    function toggleButton(id) {
        if (selectedLanguage == id) {
            setSelectedLanguage(null)
        } else {
            setSelectedLanguage(id)
        }
    }
    return (
        <>
            {
                
                lingua.map(item => (
                <div key={item.id}>
                    <button onClick={()=> toggleButton(item.id) }>{item.title}</button>
                  {selectedLanguage==item.id &&<div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>}
                </div>    
                ))
            }
        </>
    )

}

