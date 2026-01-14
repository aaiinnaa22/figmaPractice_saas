import yellowLineImg from "../assets/yellowLine.png"

type titleProps =
{
	text: string;
	textClass?: string;
}

export function Title({text, textClass}: titleProps)
{
	return (
		<div className="relative w-full flex justify-center">
			<h2 className={"relative z-10 h4 text-center " + textClass}>{text}</h2>
			<img className="absolute self-end z-0 bottom-0 translate-y-2 w-57.5 h-7" src={yellowLineImg}></img>
		</div>
	);
}