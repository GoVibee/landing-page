"use client";

import { ArrowUpRight } from "lucide-react";

// Reusable Input Field
const InputField = ({ id, label, type = 'text' }: any) => (
  <div className="font-plus">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      id={id}
      type={type}
      placeholder={`Your ${label.toLowerCase()}`}
      className="block w-full px-4 py-3 bg-white rounded-md  focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
    />
  </div>
);

const TextAreaField = ({ id, label, rows = 5 }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <textarea
      id={id}
      name={id}
      rows={rows}
      placeholder="Enter your message"
      className="block w-full px-4 py-3 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45] resize-y"
    ></textarea>
  </div>
);


export function ContactForm() {

  return (
    <div className="bg-purple-100 p-8 rounded-xl  border border-gray-200/60 font-plus">
      <form className="space-y-6">
        <InputField id="name" label="Name" />
        <InputField id="email" label="Email" type="email" />
         <TextAreaField id="message" label="Message" />
      
       <div className="flex items-center justify-between">
          <div className="w-5/12"/>
          <button
            className="bg-[#3B0A45] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#3B0A45] transition-colors font-plus flex items-center gap-3"
          >
            Contact us
            <div className="bg-white p-1 rounded-3xl">
              <ArrowUpRight color="#3B0A45" size={20}/>
            </div>
          </button> 
       </div>
      </form>
    </div>
  );
}