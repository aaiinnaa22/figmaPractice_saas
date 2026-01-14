import worldImg from "../assets/world.png"

export function LanguageSelector() {
	return (
		<div className="flex gap-1 items-center justify-center">
			<img src={worldImg} className="object-contain"></img>
			<select className="p3 text-secondary-white">
				<option value="en">English</option>
				<option value="sv">Svenska</option>
			</select>
		</div>
	);
}