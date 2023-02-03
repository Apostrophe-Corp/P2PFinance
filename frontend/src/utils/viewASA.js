const algoExplorerURI = {
	TestNet: 'https://testnet.algoexplorer.io',
	MainNet: 'https://algoexplorer.io',
}['TestNet']

export const viewASA = (ASA) => {
	window.open(`${algoExplorerURI}/asset/${ASA}`, '_blank')
}
