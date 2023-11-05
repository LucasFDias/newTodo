import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: React.ReactNode;
}
export function Button({ text, icon, ...props}: ButtonProps) {
    
    return(
        <button className={styles.button} type={props.type}>
            <span>{text}</span>
            {icon}
        </button>
    )
}