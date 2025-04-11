import React from 'react'
import plumbing from "../assets/providerprofile/plumbing.png"
import mobile from "../assets/providerprofile/mobile.png"
import waterTank from "../assets/providerprofile/waterTank.png"
import audio from "../assets/providerprofile/audio instal.png"
import lockset from "../assets/providerprofile/lockset.png"
import pump from "../assets/providerprofile/pump.png"
import wiring from "../assets/providerprofile/wiring.png"

const services = [
  { name: 'Plumbing', icon: plumbing },
  { name: 'Access Mobile, Desktop & TV', icon: mobile },
  { name: 'Water tank fitt', icon: waterTank },
  { name: 'Audio instal', icon: audio },
  { name: 'Lockset changir', icon: lockset },
  { name: 'Pumb cleani', icon: pump },
  { name: 'Wiring', icon: wiring },
];



function Service() {
  return (
    <div className="bg-white  rounded-xl shadow-3xl pl-4 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Services</h2>
      <ul className="space-y-4 p-4">
        {services.map((service, index) => (
          <li key={index} className="flex items-center gap-4">
            <img src={service.icon} alt={service.name} className="w-6 h-6" />
            <span className="text-gray-700 font-medium">{service.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Service;

