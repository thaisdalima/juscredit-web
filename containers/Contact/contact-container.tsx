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
        <div className="form-container">
          <h2>Quer falar com a gente?</h2>
          <p>É só escrever para <a className="email" href="mailto:oi@juscredit.com.br">oi@juscredit.com.br</a> ou nos enviar uma mensagem no campo abaixo. Entraremos em contato o mais rápido possível!</p>

          <StyledInput placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
          <StyledInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <StyledInput placeholder="Assunto" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea className="juscredit-input" placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button><a className="link button warn" href={`mailto:oi@juscredit.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n' + name)}`} >Enviar</a></button>
        </div>
      </div>
    </div>
  );
}
export default Contact;