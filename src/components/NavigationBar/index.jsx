import React from "react";
import searchIcon from "../../assets/Vector.svg";

const NavigationBar = () => {
	return (
		<>
			<div className="spacing-up"></div>
			<div className="title">Поиск</div>
			<div className="search">
				<div className="search-content">
					<p><img src={ searchIcon } alt="Search" /></p>
					<input type="text" placeholder="Введите имя, тег, почту ..." />
				</div>
			</div>
			<nav className="nav">
				<ul>
					<li><a href="/"><div
						// @ts-ignore
						hover>Всё</div></a></li>
					<li><a href="/"><div>Designers</div></a></li>
					<li><a href="/"><div>Analysts</div></a></li>
					<li><a href="/"><div>Managers</div></a></li>
					<li><a href="/"><div>iOS</div></a></li>
					<li><a href="/"><div>Android</div></a></li>
				</ul>
			</nav>
			<div className="spacing-down"></div>
		</>
	);
};

export default NavigationBar;