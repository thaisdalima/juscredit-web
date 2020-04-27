import './Input.scss';
import InputMask, { Props } from 'react-input-mask';
const StyledInput = ({ field, form, ...props }: Props & any) => {
    const className = props.className || ''
    return <InputMask {...field} {...props} className={'juscredit-input' + className } 
     />
}

export default StyledInput