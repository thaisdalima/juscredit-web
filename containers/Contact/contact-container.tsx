import './contact.scss'
import StyledInput from '../../components/Input/Input'
import { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  return (
    <div>
      <div className="contact-card">
        <img src="/email.svg" />
        <div className="form-container">
          <h2>Quer falar com a gente?</h2>
          <p>É só escrever para <a className="email" href="mailto:contato@organis.org">contato@organis8.org</a> ou nos enviar uma mensagem no campo abaixo. Entraremos em contato o mais rápido possível!</p>

          <StyledInput placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
          <StyledInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <StyledInput placeholder="Assunto" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea className="organis-input" placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
          <a className="link button warn" href={`mailto:contato@organis.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n' + name)}`} >Enviar</a>
        </div>
      </div>
    </div>
  );
}
export default Contact;