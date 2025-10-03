"use client";

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
      
        <button
          type="submit"
          className="w-full bg-[#3B0A45] text-white font-semibold py-3 rounded-lg transition-colors focus:outline-none "
        >
          Contact us
        </button>
      </form>
    </div>
  );
}