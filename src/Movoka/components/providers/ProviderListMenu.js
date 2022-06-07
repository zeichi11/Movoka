import React from "react";
import ListMenu from "../ui/ListMenu";
import { TMDB_PROVIERS } from "../../common/Constants";
import "./ProviderListMenu.scss";

function ProviderListMenu(props) {
	const _couldMakeList = function (providersInfo) {
		return providersInfo && providersInfo.hasOwnProperty("flatrate");
	};

	const _generateListItems = function (providersInfo) {
		const flatrateList = providersInfo.flatrate;
		return flatrateList.map((provider, index) => {
			const providerDisplays = TMDB_PROVIERS[provider.provider_id];
			return (
				<a href={providerDisplays.url} target="_blank">
					<div key={index} className="provider_list_item">
						<div className="provider_info">
							<span className="provider_logo">
								<img
									src={`https://www.themoviedb.org/t/p/original${provider.logo_path}`}
								/>
							</span>
						</div>
						<div className="provider_link">
							<span className="provider_name">{providerDisplays.name}</span>
							<span className="provider_goto">{">"}</span>
						</div>
					</div>
				</a>
			);
		});
	};

	/*
display_priority: 0
logo_path: "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg"
provider_id: 8
provider_name: "Netflix"

 */

	return _couldMakeList(props.providers.KR) ? (
		<>
			<h2>Now Streaming</h2>
			<ListMenu
				items={_generateListItems(props.providers.KR)}
				menuName={"providers_list_menu"}
			/>
		</>
	) : (
		<></>
	);
}

export default ProviderListMenu;
