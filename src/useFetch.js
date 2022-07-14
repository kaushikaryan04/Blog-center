import { useState , useEffect } from "react"


const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [isLoading , setisLoading] = useState(true)
    const [isError , setisError] = useState(null)
    // const abortCont = new AbortController(); 
    useEffect(() => {
        fetch(url)
          .then(res =>{
            if(!res.ok){
              throw Error("could not get data from server")
            }
            return res.json()
          })
          .then(data =>{
    
              setdata(data)
              setisLoading(false)
              setisError(null)
          })
          .catch((err)=>{
            if(err.name === "AbortError"){
                console.log('fetch aborted')
            }else{

            setisLoading(false)
            setisError(err.message)

            }


            })

            return () => {}
      } , [url]);
      return {data , isLoading , isError};
}

export default useFetch;