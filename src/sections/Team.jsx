import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import WhatsAppButton from '../components/WhatsAppButton';
import { contact, safetySteps } from '../data/site';

// Seção de segurança: como o cliente confirma que a coleta é da Godzilla.
const Team = () => (
    <section className="section" aria-labelledby="seguranca-titulo">
        <div className="container">
            <SectionTitle
                id="seguranca-titulo"
                eyebrow="Segurança"
                title="Coleta confirmada pelo nosso WhatsApp oficial"
                lead="Antes de entregar o óleo, confirme com a gente o nome do coletor agendado para você. Assim você evita golpes de quem se passa pela Godzilla."
            />

            <ol className="safety">
                {safetySteps.map(({ title, text }, index) => (
                    <li key={title} className="safety__step reveal">
                        <span className="safety__number" aria-hidden="true">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </li>
                ))}
            </ol>

            <aside className="notice reveal">
                <FaShieldAlt aria-hidden="true" className="notice__icon" />
                <div className="notice__body">
                    <p>
                        <strong>Nossos únicos canais oficiais:</strong> WhatsApp {contact.whatsappLabel}, telefone{' '}
                        {contact.phoneLabel} e e-mail {contact.email}. Desconsidere qualquer outro contato em nome da
                        Godzilla.
                    </p>
                    <WhatsAppButton message="verify" variant="primary">
                        Confirmar uma coleta
                    </WhatsAppButton>
                </div>
            </aside>
        </div>
    </section>
);

export default Team;
