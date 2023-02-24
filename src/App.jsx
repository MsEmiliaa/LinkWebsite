import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div class="gradient-animation"> 
			<h1>MsEmiliaa</h1>
		</div>

		<p style="color: #dcd7c9; text-align: center">These are my linkerinos.</p>

		<p style="color: #dcd7c9; text-align: center">
			24 | she/they | Rocket league boomer, recent valorant main
		</p>

		{/* Twitch, YouTube, Discord, TikTok, Twitter, Instagram, Donate, Merch, Subscribe + Emotes, PC Goal?, countdown, live now */}

			<div class="grid-container">

			{/*Card ONE*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">Twitch</div>
				</div>
        </a>
			</div>

			{/*Card TWO*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">YouTube</div>
				</div>
        </a>
			</div>

			{/*Card THREE*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">Discord</div>
				</div>
        </a>
			</div>

			{/*Card FOUR*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">TikTok</div>
				</div>
        </a>
			</div>

			{/*Card FIVE*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">Twitter</div>
				</div>
        </a>
			</div>

			{/*Card SIX*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">Instagram</div>
				</div>
        </a>
			</div>

			{/*Card SEVEN*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">Tip</div>
				</div>
        </a>
			</div>

			{/*Card EIGHT*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">Subscribe</div>
				</div>
        </a>
			</div>

			{/*Card NINE*/}
			<div class="grid-item">
				<a href="https://twitch.tv/MsEmiliaa">
					<div class="card">
						<div class="card2">Twitch</div>
					</div>
				</a>
			</div>
		</div>
    </div>
  )
}

export default App
