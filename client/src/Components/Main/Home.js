import React from 'react'
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.png";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 ,content:"Register yourself as a donor and provide your details. We will keep your information safe."},
        { title: "Seeing", img: g2 ,content:"Find a donor or a blood bank near you. You can also request blood."},
        { title: "Donation", img: g3,content:"Donate blood to the one in need. You can also donate blood to a blood bank."},
        { title: "Save Life", img: g4 ,content:"Save a life by donating blood. You can also request blood from a donor."},
    ]
    return (
        <div className="dark:text-white-900">
            <img src={bg} alt="" />
            <div className='place-items-center mx-36 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
            </div>
            <br/>
            <h1 className=' text-3xl font-bold text-black text-center mt-10 mb-5'>
                BLOOD DONATION PROCESS
            </h1>
            <br/>
            <div className='grid grid-cols-2 place-items-center'>
                {temp2.map((e, i) =>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div className='py-5 px-5'><img src={e.img} draggable={false} width="90%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>{e.content}</p>
                        </div>
                    </div>
                )}
            </div>
            <br/>
            <br/>
            <h1 className=' text-3xl font-bold text-black text-center mt-10 mb-5'>HOW DOES IT WORK</h1>
            <br/>
            <div className='flex px-20'>
                
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-black text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div>
                    <img src={donationFact} width="90%" alt="" />
                    <p className='text-center'>
                        <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                    </p>
                </div>
            </div>
            
            
            <br />
            <div className='w-full bg-black text-white-900 h-max text-sm text-center font-bold'>
                <code>Blood Connect {new Date().getFullYear()}. All rights reserved.</code>
            </div>
        </div>
    )
}

export default Home