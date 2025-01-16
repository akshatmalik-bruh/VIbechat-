import React from 'react'

function Users() {
 return (
    <>
    <div className = " h-screen bg-custom-bg bg-cover w-full " >
        <div className = "pt-20 flex flex-col items-center justify-center">
            <div className= "bg-white p-5 flex flex-col gap-4 rounded-2xl items-center ">
        <div className = " bg-white flex  gap-4  items-center  rounded-xl justify-between ">
            <h1 className = "text-3xl">username :</h1>
            <h1 className = "text-3xl">height :</h1>
            <h1 className = "text-3xl">age : </h1>
            <h1 className = "text-3xl">hobby : </h1>
            <h1 className = "text-3xl">course :</h1>
            <h1 className = "text-3xl">year :</h1>
            </div>
            <button type = "submit" className = "text-xl bg-blue-200 p-5 rounded-xl w-fit">
                Addfriend
            </button>
            </div>


       
        
        
</div>

    </div>
        
    </>
  )
}

export default Users