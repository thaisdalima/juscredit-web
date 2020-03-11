import './PartnerPopup.scss'

function PartnerPopup({ partner, setRef, onMouseLeave }) {
    const { address, fantasyName, city, state, phone, email, certified } = partner
    return <div
        onMouseLeave={onMouseLeave}
        className="partner-popup" ref={setRef} >
        <h2>{fantasyName} {certified && (<img src="/certified.svg" width="14" />)}</h2>
        <p>{address}, {city}, {state}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <p>{phone}</p>
    </div >

}
export default PartnerPopup