import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../../components/layout";

export default class FirstPost extends React.Component {
    render() {
        return <Layout className="page">
            <Head>
                <title>first post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Head>
            <h1>first post</h1>
            <h2>
                <Link href="/">back home</Link>
            </h2>
        </Layout>
    }
}