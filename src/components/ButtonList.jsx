import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <div className="container py-4">
            <h1 className="mb-4">Learn Web development</h1>
            { 
                lingua.map(item => (
                <div key={item.id} className="d-inline-block me-2 mb-2">
                    <button className="btn btn-primary" onClick={()=> toggleButton(item.id) }>{item.title}</button>
                  {selectedLanguage==item.id &&
                    <div className="card mt-3 p-3">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>}
                </div>    
                ))
            }
        </div>    
        </>
    )

}

