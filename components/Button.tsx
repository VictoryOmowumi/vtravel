import Image from "next/image";
type ButtonProps = {
    type: "button" | "submit" | "reset";
    title: string;
    icon?: string;
    variant?: "btn_dark_green" | "btn_green" | "btn_white_text" | "btn_dark_green_outline" ;
    full?: boolean;
    };



const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 ${variant} py-2 px-4 rounded-full border`}>
        {icon && <Image src={icon} alt="icon" width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button