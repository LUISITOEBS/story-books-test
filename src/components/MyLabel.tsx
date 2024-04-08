import './MyLabel.css';

export interface MyLabelProps {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label Size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * if true convert to Uppercase
     */
    AllCaps?: boolean;

    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * Font color
     */
    fontColor?: string;

    /**
     * Background Color
     */
    backgroundColor?: string; 

}

export const MyLabel = ({ 
        label, 
        size = 'normal', 
        AllCaps = false, 
        color = 'text-primary', 
        fontColor,
        backgroundColor = 'transparent'
    }: MyLabelProps) => {
    return (
        <span 
            className={`${ size } ${ color }`}
            style={{ color: fontColor, backgroundColor }}
        >
            { AllCaps ? label.toUpperCase() : label }
        </span>
    )
}
