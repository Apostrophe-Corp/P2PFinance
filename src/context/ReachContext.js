import React, { useState } from 'react'
import Helmet from 'react-helmet'
import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
	ALGO_WalletConnect as WalletConnect,
	ALGO_PeraConnect as PeraConnect,
} from '@reach-sh/stdlib'
// import * as adminCtc
// import * as loanCtc
import { cf } from '../hooks/cf'
import { Alert } from '../components/Alert'

const reach = loadStdlib()

export const ReachContext = React.createContext()

const ReachContextProvider = ({ children }) => {
	// states

	const ReachContextValue = {
        // ...states
    }

	return (
		<ReachContext.Provider value={ReachContextValue}>
			<Helmet>
				<title>Urgent2K | D-Lending Platform </title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Helmet>
		</ReachContext.Provider>
	)
}

export default ReachContextProvider