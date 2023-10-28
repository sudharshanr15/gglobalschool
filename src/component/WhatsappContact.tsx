'use client';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsappContact(){
    return (
        <a href="https://api.whatsapp.com/send/?phone=7550317999&text=Hi,%20I%20am%20(name)%20I%20would%20like%20to%20know%20more%20about%20G%20GLOBAL%20SCHOOL" target='_blank' className="whatsapp-contact fixed z-[1000] bg-[#25d366] right-3 md:right-6 bottom-3 md:bottom-6 inline-block text-white hover:text-[#075e54] cursor-pointer p-4 aspect-square rounded-full group transition">
          <WhatsAppIcon className="text-3xl md:text-4xl" />
          <span className="inline-block w-max rounded-lg font-semibold bg-slate-50 text-sm text-black p-4 absolute bottom-[110%] right-0 invisible group-hover:visible shadow-lg">Hello there 👋, chat with us!</span>
        </a>
    )
}