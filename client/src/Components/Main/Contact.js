import React from 'react'
import cc from "../../assets/logo.png"

const Contact = () => {
    const data = [
        {
            title: "", body: [
                "Army Institute of Technology",
                "Alandi Road,Dighi Hills,Pune",
                "Maharashtra, India",
                "Pin - 411015",
                "Contact no: 121-123-1234",
            ]
        },
        
    ];
    return (
        <div className='px-64'><br />
        <div className='flex justify-around'>
                    <img src={cc} draggable={false} width="20%" alt="" />
                </div>
                <br />
            <h1 className='text-center text-3xl font-bold'>CONTACT DETAILS</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact