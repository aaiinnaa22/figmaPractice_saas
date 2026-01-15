type LinksProps =
{
	linkArray: string[];
}

export function Links({linkArray}: LinksProps) {
	const [title, ...links] = linkArray;
	return (
		<div className="flexCol items-center gap-4 font-inter text-secondary-white">
			<h3 className="p2 font-bold">{title}</h3>
			<ul className="flexCol items-center gap-4">
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