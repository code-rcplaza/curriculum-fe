import { useEffect, useState } from "react"

export const useFetch = ( url ) => {   
    
    const [data, setData] = useState({
        personalData: {},
        academicData: [],
        workExperience: []
    })

    useEffect(() => {
        fetch(url).then( res => res.json())
                .then(data => {
                    setData({
                        personalData: data.personalData,
                        academicData: data.academicData,
                        workExperience: data.workExperience
                    })
                })
    }, [url])
  
    return data
}   
