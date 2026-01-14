import worldImg from "../assets/world.png"

export function LanguageSelector() {
	return (
		<div className="flex gap-1 items-center justify-center">
			<img src={worldImg} className="object-contain"></img>
			<select className="font-inter text-secondary-white font-light text-sm">
				<option value="en">English</option>
				<option value="sv">Svenska</option>
			</select>
		</div>
	);
}