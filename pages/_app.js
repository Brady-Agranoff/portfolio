import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../public/css/styles.css";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
