import type { LinkSection } from "./footer"


export function Links({linkArray}: {linkArray : LinkSection}) {
	const [title, ...links] = linkArray;
	return (
		<div className="flex flex-col items-center gap-4 font-inter text-secondary-white">
			<h3 className="p2 font-bold">{title}</h3>
			<ul className="flex flex-col items-center gap-4">
				{links.map((link) => (
					<li
					key={link}
					className="p2">
						{link}
					</li>
				))}
			</ul>
		</div>
	)
}