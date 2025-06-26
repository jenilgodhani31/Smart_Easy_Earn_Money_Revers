import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


function HourlyPay() {
    const router = useRouter()

    function handleClick() {     
            router.push('/emoney');
    }
    return (
        <Layout title={"Hourly Pay "} className={"text-[15px]"}>
            <div className="p-5 pt-[100px]">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>

            <div className="flex flex-col gap-5 mx-auto h-max p-4  h-screen">

                <div className='grid grid-cols-1 gap-4 '>
                    {gameData?.HourlyPay?.map((item, index) => (
                        <div
                            key={index}
                            onClick={handleClick}
                            className={`cursor-pointer font-semibold  text-center text-[18px] p-4 rounded-2xl bg-primary1 text-white
                                }`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>


                <button onClick={handleClick} className="flex items-center font-semibold  justify-center w-full text-[20px] p-3 text-white gap-3 rounded-[15px] bg-primary1 shadow-xl/20 transition-shadow duration-300">
                    {"NEXT"}
                </button>

            </div>
        </Layout>
    )
}

export default HourlyPay 
