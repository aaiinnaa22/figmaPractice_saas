import {ChevronRight} from "lucide-react"

type LightBlueButtonProps = {
	buttonText: string;
	hasArrow?: boolean
}

export function LightBlueButton({buttonText, hasArrow = true}: LightBlueButtonProps) {
	return (
		<button className='bg-primary-LightBlue rounded-lg py-5 px-8 flex gap-2 items-center'>
			<p className="p2 text-secondary-white">{buttonText}</p>
			{hasArrow && <ChevronRight className='text-secondary-white'/>}
		</button>
	);
}