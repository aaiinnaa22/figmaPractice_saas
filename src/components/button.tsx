import {ChevronRight} from "lucide-react"

type ButtonProps = {
	buttonText: string;
	hasArrow?: boolean;
	colorClassName?: string;
}

export function Button({buttonText, hasArrow = true, colorClassName}: ButtonProps) {
	if (!colorClassName || colorClassName === "")
		colorClassName = "bg-primary-LightBlue text-secondary-white"
	return (
		<button className={"rounded-lg py-5 px-8 flex gap-2 items-center " + colorClassName}>
			<p className="p2">{buttonText}</p>
			{hasArrow && <ChevronRight className='text-secondary-white'/>}
		</button>
	);
}