'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus]     = useState('');

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();
    if(!formData.name||!formData.email||!formData.message){
      setFormStatus('Tous les champs doivent être remplis.');
      return;
    }
    setIsSubmitting(true); setFormStatus('');
    try{
      const r = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(formData)});
      setFormStatus(r.ok? 'Message envoyé avec succès !':'Erreur lors de l’envoi. Réessayez.');
      if(r.ok) setFormData({ name:'', email:'', message:'' });
    }catch{
      setFormStatus("Erreur de connexion, veuillez réessayer.");
    }finally{ setIsSubmitting(false); }
  };

  return(
    <section id="contact" className="relative py-32 bg-slate-900 text-white overflow-hidden">
      {/* halos */}
      <div className="absolute -top-24 -left-32 w-80 h-80 bg-indigo-500/30 blur-3xl rounded-full -z-10 animate-pulse"/>
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-purple-600/25 blur-3xl rounded-full -z-10 animate-pulse delay-500"/>

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.h2
          className="gradient-text text-3xl md:text-4xl font-bold mb-14"
          initial={{opacity:0,y:-30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}}
        >
          Parlons de votre projet
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {(['name','email','message'] as const).map((field,i)=>(
            <motion.div key={field} variants={{hidden:{opacity:0,y:20}, show:{opacity:1,y:0,transition:{delay:.1*i}}}}
                        initial="hidden" whileInView="show" viewport={{once:true}} className="input-neon">
              {field!=='message' ? (
                <input type={field==='email'?'email':'text'} placeholder={field==='name'?'Nom':'Email'}
                       value={formData[field]} onChange={e=>setFormData({...formData,[field]:e.target.value})}/>
              ):(
                <textarea rows={5} placeholder="Votre message"
                          value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})}/>
              )}
            </motion.div>
          ))}

          <motion.button type="submit" disabled={isSubmitting}
            className="btn-gradient shadow-md hover:shadow-lg"
            whileHover={{scale:1.03}} whileTap={{scale:0.97}}
            initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.4,duration:.8}}
          >
            {isSubmitting? 'Envoi en cours…':'Envoyer'}
          </motion.button>
        </form>

        {formStatus && (
          <motion.p
            className={`mt-8 text-base font-medium ${formStatus.includes('succès')?'text-green-400':'text-red-400'}`}
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}}
          >
            {formStatus}
          </motion.p>
        )}
      </div>
    </section>
  );
}
