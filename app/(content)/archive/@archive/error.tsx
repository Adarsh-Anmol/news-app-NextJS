"use client";

//type of error is object Error
export default function FilterError({error}: {error : Error}){

    return (
        <div id='error'>
            <h2>Error Occured!</h2>
            <p>{error.message}</p> 
        </div>
    )
}