import type { LinkSection } from "../data";

type LinksProps =
{
	linkArray: LinkSection;
}

export function Links({linkArray}: LinksProps) {
	return (
		<nav className="flexCol items-center gap-4 font-inter text-secondary-white">
			<h3 className="p2 font-bold">{linkArray.title}</h3>
			<ul className="flexCol items-center gap-4">
				{linkArray.links.map((link) => (
					<li
					key={link}
					className="p2">
						{link}
					</li>
				))}
			</ul>
		</nav>
	)
}