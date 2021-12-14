import { useEffect, useState } from "react";
import { fetchWeather } from "./api";

function Header() {
    return (
        <header className="hero is-link">
            <div className="hero-body">
                <p className="title">
                    <center><font size="7">天気予報</font></center>
                </p>
                <p className="subtitle">
                    <center>東京都の天気予報を知れるよ</center>
                </p>
            </div>
        </header>
    );
}

function Loading() {
    return <p>Loading...</p>;
}


function Main() {
    const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json';
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchWeather(url).then((urls) => {
            setUrls(urls);
        });
    }, []);
    if (urls == null) {
        return <Loading />;
    }
    return (
        <main>
            <div>
                <center>これは日本大学文理学部情報科学科 Webプログラミングの演習課題です．</center>
                <div class="container">
                    <div class="notification is-primary">
                        <center><font size="5">発表元</font></center>
                    </div>
                </div>
                <div class="box">
                    <center>{urls.publishingOffice}</center>
                </div>

                <div class="container">
                    <div class="notification is-primary">
                        <center><font size="5">発表日時</font></center>
                    </div>
                </div>
                <div class="box">
                    <center>{urls.reportDatetime}</center>
                </div>

                <div class="container">
                    <div class="notification is-primary">
                        <center><font size="5">詳細</font></center>
                    </div>
                </div>
                <div class="box">
                    <center>{urls.text}</center>
                </div>


            </div>

        </main>
    );
}

function Footer() {
    return (
        <footer class="footer">
            <div class="content has-text-centered">
                <a href="https://www.jma.go.jp/bosai/forecast/">気象庁API</a>を使ってサイトを作成しました．<br></br>
                The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                The website content
                is licensed <a href="https://creativecommons.org/licenses/by/4.0/legalcode.ja">CC BY</a>.
                <p><strong>This website is made by 5420086 Hinata Segawa</strong></p>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;