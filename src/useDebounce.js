import { useEffect, useRef } from "react"

export const useDebounce = (callback, delay) => {

   const timeRef = useRef(null);

   const debouncFn = (...args) => {
        if(timeRef.current)clearTimeout(timeRef.current)
        timeRef.current = setTimeout(() => {
            callback(...args)
        },delay)
   }

   useEffect(() => {
     return () => {
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
     }
   },[])

   return debouncFn

}