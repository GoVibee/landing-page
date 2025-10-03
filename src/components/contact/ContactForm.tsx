"use client";

// Reusable Input Field
const InputField = ({ id, label, type = 'text' }: any) => (
  <div className="font-plus">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      id={id}
      type={type}
      placeholder={`Your ${label.toLowerCase()}`}
      className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
    />
  </div>
);


export function ContactForm() {

  return (
    <div className="bg-gray-50/70 p-8 rounded-xl shadow-sm border border-gray-200/60 font-plus">
      <form className="space-y-6">
        <InputField id="name" label="Name" />
        <InputField id="email" label="Email" type="email" />
      
        <button
          type="submit"
          className="w-full bg-[#3B0A45] text-white font-semibold py-3 rounded-lg hover:bg-[#1A4B44] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4B44]"
        >
          Book a call
        </button>
      </form>
    </div>
  );
}