import Document, {Html, Main,Head, NextScript} from "next/document";

class Mydocument extends Document{
	static async getInitialPorps(ctx){
		const initialPorps = await document.getInitialPorps(ctx);
		return {...initialPorps}
	}

	render(){
		return(
			<>
				<Html>

					<Head />
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</>
		)
	}
}

export default Mydocument;