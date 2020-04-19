import './Profile.scss'
import StyledInput from '../../components/Input/Input'
import Button from '../../components/Button/Button';
const Profile = ({ model, data }) => {
    console.log(data);

    const isProducer = model === 'produtores'

    return <div className="profile">
        <div className="profile-title"><h2>Meu perfil</h2></div>
        <div className="profile-container">
            <div>
                <div className="card">
                    <h4>Dados pessoais</h4>

                    <div className="form-group">
                        <label>Nome completo</label>
                        <StyledInput value={data.contactName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <StyledInput disabled="true" value={data.email} />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <StyledInput disabled="true" value={data.phone} />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <StyledInput disabled="true" value={data.contactDocument} />
                    </div>
                    <div className="products-container">
                        <h3>Meus produtos</h3>
                        <p>Cadastre, categorize e controle os seus produtos.</p>
                        <Button color="secondary">Cadastrar produtos +</Button>
                    </div>
                </div>
            </div>
            <div className="company-info">
                <h3>Dados da organização</h3>
                <div className="form-group">
                    <label>Razão social</label>
                    <StyledInput value={data.companyName} />
                </div>
                <div className="form-group">
                    <label>CNPJ</label>
                    <StyledInput disabled="true" value={data.companyDocument} />
                </div>
                {isProducer && (<>
                    <div className="form-group">
                        <label>Número CNPO</label>
                        <StyledInput placeholder="CNPO" disabled="true" value="" />
                    </div>
                    <div className="form-group">
                        <label>Tipo de certificação</label>
                        <StyledInput placeholder="Tipo de certificação" disabled="true" value={data.entityType} />
                    </div>
                    <div className="form-group">
                        <label>Escopo de produção</label>
                        <StyledInput placeholder="Escopo de produção" disabled="true" value={data.productionScope?.join(', ')} />
                    </div>

                </>)}
                {!isProducer && (
                    <div className="button-container">
                        <Button color="primary">Atualizar</Button>
                    </div>
                )}
                {isProducer && (
                    <>
                        <h3>Endereço</h3>
                        <div className="form-group">
                            <label>Nome do endereço</label>
                            <StyledInput disabled="true" value="Principal" />
                        </div>
                        <div className="form-group">
                            <label>Endereço</label>
                            <StyledInput disabled="true" value={data.address} />
                        </div>
                        <div className="zipcode-state-container">
                            <div className="form-group">
                                <label>CEP</label>
                                <StyledInput disabled="true" value={data.zipcode} />
                            </div>
                            <div className="form-group">
                                <label>UF</label>
                                <StyledInput disabled="true" value={data.state} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Cidade</label>
                            <StyledInput disabled="true" value={data.city} />
                        </div>
                        <div className="complete-data">
                            <h3>Complete seu cadastro e aumente suas chances de fazer negócios!</h3>
                            <Button color="primary">Completar cadastro</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>

}

export default Profile;