import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useReach } from '../hooks'
import s from '../styles/Shared.module.css'
import lg from '../styles/Landing.module.css'
import { cf } from '../utils'

const Landing = () => {
	const navigate = useNavigate()
	const { checkForSignIn } = useReach()
	return (
		<div className={cf(s.wMax, s.window)}>
			<div
				className={cf(
					s.container,
					s.wMax,
					s.flex,
					s.flexCenter,
					s.flex_dColumn,
					lg.hero
				)}
			>
				<div
					className={cf(
						s.wMax,
						s.p10,
						s.flex,
						s.flexLeft,
						s.g10,
						lg.heroWelcome
					)}
				>
					<h2 className={cf(s.wMax, s.p0, s.m0, lg.heroWelcomeText)}>
						Welcome to P2PFinance - the future of lending and borrowing.
					</h2>
				</div>
				<div className={cf(s.wMax, s.p10, s.flex, s.flexLeft, lg.catchPhrase)}>
					<h1 className={cf(s.wMax, s.p0, s.m0, lg.catchPhraseText)}>
						A Fully Decentralized P2P Loaning Platform
					</h1>
				</div>
				<div className={cf(s.wMax, s.p10, s.flex, s.flexLeft, lg.intro)}>
					<h2 className={cf(s.wMax, s.p0, s.m0, lg.introText)}>
						Direct connections, smart choices, easy access.
					</h2>
				</div>
			</div>
			<div
				className={cf(
					s.container,
					s.wMax,
					s.flex,
					s.flexCenter,
					lg.forestParent
				)}
			>
				<div className={cf(lg.forestTextCon)}>
					<h2 className={cf(lg.forestText)}>
						Unlock Financial Opportunities: Borrow or Invest.
					</h2>
				</div>
				<div
					className={cf(
						s.wMax,
						s.flex,
						s.spaceXAround,
						s.spaceYCenter,
						lg.cardForest
					)}
				>
					<div
						className={cf(lg.card)}
						onClick={() => {
							checkForSignIn(() => {
								navigate('/loans')
							})
						}}
					>
						<div className={cf(lg.cardAction)}>Borrow</div>
						<div className={cf(s.flex, s.flex_dColumn, lg.cardPurpose)}>
							<div className={cf(lg.cardPurposeText)}>Get a Loan</div>
							<div className={cf(lg.cardDescription)}>
								Get the funds you need, fast and easy with P2PFinance. Connect
								your wallet, sign up and Create an advert to access liquidity
								securely.
							</div>
						</div>
						<div className={cf(lg.cardIcon, lg.sellIcon)}>
							<svg
								width='34'
								height='32'
								viewBox='0 0 34 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M17 30.6604L32 16.3083L17.0002 1.95703M17 30.6604L2 16.3083L17.0002 1.95703M17 30.6604L9.06396 16.3083L17.0002 1.95703M17 30.6604L24.9363 16.3083L17.0002 1.95703'
									stroke='white'
									strokeWidth='1.5'
								></path>
							</svg>
						</div>
					</div>
					<div
						className={cf(lg.card)}
						onClick={() => {
							checkForSignIn(() => {
								navigate('/loans')
							})
						}}
					>
						<div className={cf(lg.cardAction)}>Lend</div>
						<div className={cf(s.flex, s.flex_dColumn, lg.cardPurpose)}>
							<div className={cf(lg.cardPurposeText)}>Earn Interest Income</div>
							<div className={cf(lg.cardDescription)}>
								Explore your investment options with P2PFinance. Browse a
								variety of loan options that match your risk vs reward profile.
							</div>
						</div>
						<div className={cf(lg.cardIcon, lg.buyIcon)}>
							<svg
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12.9346 14.7323C11.367 14.1059 10.0672 12.9521 9.25925 11.4698C8.45133 9.98762 8.18596 8.26992 8.50891 6.61299C8.83187 4.95605 9.72291 3.46376 11.0284 2.39346C12.3338 1.32316 13.9718 0.741955 15.6599 0.750084C17.348 0.758213 18.9804 1.35516 20.2754 2.43799C21.5705 3.52081 22.4471 5.02162 22.7541 6.68158C23.0611 8.34155 22.7792 10.0566 21.957 11.531C21.1349 13.0054 19.824 14.1466 18.2504 14.7579'
									stroke='white'
									strokeWidth='1.5'
								></path>{' '}
								<path
									d='M12.9257 14.75H4.93394L16 30.6851L27.0661 14.75H18.0743L17.6082 14.8432C16.2165 15.1215 14.7835 15.1215 13.3918 14.8432L12.9257 14.75Z'
									stroke='white'
									strokeWidth='1.5'
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
			{/* Community Links */}
			<div
				className={cf(
					s.wMax,
					s.flex,
					s.spaceXAround,
					s.spaceYCenter,
					s.container,
					lg.community
				)}
			>
				<div
					className={cf(
						s.flex,
						s.flexCenter,
						s.flex_dColumn,
						s.w760_100,
						s.w480_100,
						s.w360_100,
						lg.joinCommunity
					)}
				>
					<div className={cf(s.wMax, lg.joinComTheme)}>
						<h1 className={cf(s.wMax, s.p10, s.m0, lg.joinComThemeText)}>
							Join the future of lending and borrowing with P2PFinance.
						</h1>
					</div>
					<div className={cf(s.wMax, lg.joinComDescription)}>
						<span
							className={cf(
								s.wMax,
								s.dInlineBlock,
								s.p10,
								s.m0,
								s.m0,
								lg.joinComDescriptionText
							)}
						>
							Our platform offers direct connections, smart choices, and easy
							access to liquidity. Sign up now and experience the convenience
							and security of decentralized peer-to-peer lending. Stay updated
							with the latest developments by following us on social media.
							P2PFinance - the smart choice for lending and borrowing.
						</span>
					</div>
				</div>
				<div
					className={cf(
						s.flex,
						s.flexLeft,
						s.w760_100,
						s.w480_100,
						s.w360_100,
						lg.communitySocials
					)}
				>
					<div
						className={cf(
							s.flex,
							s.spaceXBetween,
							s.spaceYCenter,
							s.wMax,
							s.m0,
							s.pY10,
							s.w760_50,
							s.w480_100,
							s.w360_100,
							s.p760_x10,
							s.p480_x10,
							s.p360_x10,
							lg.communitySocial
						)}
					>
						<div
							className={lg.comSocialIcon}
							// onClick={() => {
							// 	window.open(`https://twitter.com`, '_blank')
							// }}
						>
							<svg
								data-v-41d372ae=''
								width='32'
								height='33'
								viewBox='0 0 32 33'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								data-v-706ceafa=''
							>
								<path
									d='M32 6.08945C30.8227 6.61158 29.5573 6.96431 28.2294 7.12299C29.5848 6.31069 30.6259 5.02441 31.116 3.49162C29.8474 4.24394 28.4424 4.79005 26.9469 5.08439C25.7494 3.80867 24.0432 3.01172 22.1549 3.01172C18.5293 3.01172 15.5896 5.95044 15.5896 9.57526C15.5896 10.0897 15.6477 10.5907 15.7597 11.0711C10.3033 10.7974 5.46588 8.1842 2.22779 4.21306C1.66267 5.18245 1.33883 6.30989 1.33883 7.51283C1.33883 9.7901 2.49787 11.7991 4.25947 12.9761C3.18331 12.9421 2.17099 12.6468 1.28587 12.1552C1.28512 12.1825 1.28512 12.2101 1.28512 12.2377C1.28512 15.4178 3.54817 18.0706 6.55153 18.6739C6.00065 18.824 5.42065 18.9041 4.82193 18.9041C4.39889 18.9041 3.98769 18.8629 3.58673 18.7864C4.42225 21.394 6.84673 23.2917 9.7197 23.3445C7.47281 25.105 4.64209 26.1544 1.56608 26.1544C1.03616 26.1544 0.513602 26.1232 0 26.0626C2.90545 27.9251 6.35633 29.0117 10.0639 29.0117C22.1396 29.0117 28.7432 19.0102 28.7432 10.3362C28.7432 10.0516 28.7368 9.76866 28.7242 9.48696C30.0068 8.56172 31.1197 7.40581 31.9999 6.08945H32Z'
									fill='currentColor'
								></path>
							</svg>
						</div>
						<div className={lg.comSocialContent}>
							<div className={lg.comSocialName}>
								Join the conversation on Twitter
							</div>
							<div className={lg.comSocialDescription}>
								<span
									className={cf(s.wMax, s.dInlineBlock, lg.comSocialDesText)}
								>
									Stay up-to-date with the latest developments and news from
									P2PFinance by following us on Twitter. Get access to exclusive
									promotions, updates on new features, and valuable insights on
									the lending and borrowing industry. Follow us now and stay
									connected with P2PFinance community
								</span>
							</div>
						</div>
					</div>
					<div
						className={cf(
							s.flex,
							s.spaceXBetween,
							s.spaceYCenter,
							s.wMax,
							s.m0,
							s.pY10,
							s.w760_50,
							s.w480_100,
							s.w360_100,
							s.p760_x10,
							s.p480_x10,
							s.p360_x10,
							lg.communitySocial
						)}
					>
						<div
							className={lg.comSocialIcon}
							// onClick={() => {
							// 	window.open(`https://bit.ly/`, '_blank')
							// }}
						>
							<svg
								data-v-41d372ae=''
								width='34'
								height='33'
								viewBox='0 0 34 33'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								data-v-706ceafa=''
							>
								<g clipPath='url(#clip0-882207)'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M5.28 0.0117188H26.72C28.528 0.0117188 30 1.48372 30 3.30772V32.0117L26.56 28.9717L24.624 27.1797L22.576 25.2757L23.424 28.2357H5.28C3.472 28.2357 2 26.7637 2 24.9397V3.30772C2 1.48372 3.472 0.0117188 5.28 0.0117188ZM19.488 19.6117C19.968 20.2197 20.544 20.9077 20.544 20.9077C24.08 20.7957 25.44 18.4757 25.44 18.4757C25.44 13.3237 23.136 9.14772 23.136 9.14772C20.832 7.41972 18.64 7.46772 18.64 7.46772L18.416 7.72372C21.136 8.55572 22.4 9.75572 22.4 9.75572C20.736 8.84372 19.104 8.39572 17.584 8.21972C16.432 8.09172 15.328 8.12372 14.352 8.25172C14.2682 8.25172 14.1966 8.26391 14.1159 8.27766C14.1041 8.27966 14.0922 8.28169 14.08 8.28372C13.52 8.33172 12.16 8.53972 10.448 9.29172C9.856 9.56372 9.504 9.75572 9.504 9.75572C9.504 9.75572 10.832 8.49172 13.712 7.65972L13.552 7.46772C13.552 7.46772 11.36 7.41972 9.056 9.14772C9.056 9.14772 6.752 13.3237 6.752 18.4757C6.752 18.4757 8.096 20.7957 11.632 20.9077C11.632 20.9077 12.224 20.1877 12.704 19.5797C10.672 18.9717 9.904 17.6917 9.904 17.6917C9.904 17.6917 10.064 17.8037 10.352 17.9637C10.368 17.9797 10.384 17.9957 10.416 18.0117C10.44 18.0277 10.464 18.0397 10.488 18.0517C10.512 18.0637 10.536 18.0757 10.56 18.0917C10.96 18.3157 11.36 18.4917 11.728 18.6357C12.384 18.8917 13.168 19.1477 14.08 19.3237C15.28 19.5477 16.688 19.6277 18.224 19.3397C18.976 19.2117 19.744 18.9877 20.544 18.6517C21.104 18.4437 21.728 18.1397 22.384 17.7077C22.384 17.7077 21.584 19.0197 19.488 19.6117ZM11.4707 15.2135C11.4707 14.2375 12.1907 13.4375 13.1027 13.4375C14.0147 13.4375 14.7507 14.2375 14.7347 15.2135C14.7347 16.1895 14.0147 16.9895 13.1027 16.9895C12.2067 16.9895 11.4707 16.1895 11.4707 15.2135ZM17.3107 15.2135C17.3107 14.2375 18.0307 13.4375 18.9427 13.4375C19.8547 13.4375 20.5747 14.2375 20.5747 15.2135C20.5747 16.1895 19.8547 16.9895 18.9427 16.9895C18.0467 16.9895 17.3107 16.1895 17.3107 15.2135Z'
										fill='currentColor'
									></path>
								</g>{' '}
								<defs>
									<clipPath id='clip0-882207'>
										<rect
											width='33.6271'
											height='32'
											fill='white'
											transform='translate(0 0.0117188)'
										></rect>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className={lg.comSocialContent}>
							<div className={lg.comSocialName}>Join our discord community</div>
							<div className={lg.comSocialDescription}>
								<span
									className={cf(s.wMax, s.dInlineBlock, lg.comSocialDesText)}
								>
									Join our growing community on Discord and stay connected with
									the P2PFinance team and other users. Get real-time support,
									participate in discussions and events, and stay updated with
									the latest developments and updates on the platform. Join us
									now and be a part of the P2PFinance community.
								</span>
							</div>
						</div>
					</div>
					<div
						className={cf(
							s.flex,
							s.spaceXBetween,
							s.spaceYCenter,
							s.wMax,
							s.m0,
							s.pY10,
							s.w760_50,
							s.w480_100,
							s.w360_100,
							s.p760_x10,
							s.p480_x10,
							s.p360_x10,
							lg.communitySocial
						)}
					>
						<div
							className={lg.comSocialIcon}
							// onClick={() => {
							// 	window.open(`https://www.reach.sh/`, '_blank')
							// }}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='78'
								height='33'
								viewBox='0 0 78 57'
								fill='none'
							>
								<path
									d='M38.1722 0L57.113 18.8771L18.9409 56.9217L0 38.0446L38.1722 0Z'
									fill='#fff'
								/>
								<path
									d='M58.7212 21.4413L59.1604 20.9951L77.2937 39.0647L59.295 56.9996L58.7212 56.4402C56.4223 54.1529 54.5966 51.4349 53.3484 48.4417C52.1002 45.4485 51.4541 42.2389 51.4468 38.9959C51.4396 35.7529 52.0714 32.5402 53.3062 29.5415C54.541 26.5428 56.3546 23.8168 58.6433 21.5193L58.7212 21.4413Z'
									fill='#fff'
								/>
							</svg>
						</div>
						<div className={lg.comSocialContent}>
							<div className={lg.comSocialName}>The Platform</div>
							<div className={lg.comSocialDescription}>
								<span
									className={cf(s.wMax, s.dInlineBlock, lg.comSocialDesText)}
								>
									Our platform allows borrowers and lenders to interact
									directly, providing a marketplace and a secure smart contract
									to hold collateral in escrow. Why not just sell the asset to
									raise the necessary funds? Some assets give the user access to
									certain benefits such as Alpha, rewards, access to a dApp,
									amongst other things, therefore it becomes detrimental to sell
									off such assets. Hence, we provide you with the solution.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing
