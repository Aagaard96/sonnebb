import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className=' mx-auto max-6xl bg-gray-500 mb-20'>
            <ul className='flex justify-around items-center text-xl px-20 uppercase'>
                <li><Link href="/">Sonne Body & Balance | BodySDS</Link></li>
                <div className='flex divide-x-4 divide-orange-500 py-3'>
                    <li className='py-3 px-3 hover:text-orange-700 transition duration-300 ease-in-out'><Link href="/om-body-sds">om bodySDS</Link></li>
                    <li className='py-3 px-3 hover:text-orange-700 transition duration-300 ease-in-out'><Link href="/om-mig">om mig</Link></li>
                    <li className='py-3 px-3 hover:text-orange-700 transition duration-300 ease-in-out'><Link href="/videoer">videoer</Link></li>
                    <li className='py-3 px-3 hover:text-orange-700 transition duration-300 ease-in-out'><Link target='_blank' href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE">booking</Link></li>

                </div>
            </ul>
        </nav>
    )
}
