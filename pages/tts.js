import Router from 'next/router';
import {useState} from 'react';
import Layout from './layout';

const Tts= () => {
	const [errorMsg, setErrorMsg] = useState('');
	const handleSubmit = async(e) => {
		e.preventDefault();
		const body = { 
			message: e.currentTarget.message.value,
			name: e.currentTarget.name.value
		}
		const res = await fetch('/api/tts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		if(res.status === 400){
			setErrorMsg('Please enter both a username and a messge.');
		}
		else{
			Router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
	}
	return ( 
		<Layout>
		<h1 className="title"> TTS </h1>
		<form onSubmit={handleSubmit}>
		{errorMsg ? <p style={{ color: '#FF0000'}} align="center">{errorMsg}</p> : null}
			<div id="inner" align="center">
				<h3 style={{color:"#ff33aa"}}> your message </h3>
				<input type="text" name="message"/>
			</div>
			<div id="inner" align="center">
				<h3 style={{color:"#ff33aa"}}> your name </h3>
				<input type="text" name="name"/>
			</div>
			<div id="inner" align="center">
				<input type="submit" value="Go !"/>
			</div>
			<div id="inner" align="center">
				<p style={{color:"#ff33aa"}}> 
					Your message will be read next time my computer boots up ! 
				</p>
				<p style={{color:"#070707"}}>
					Please sample don't do it, you know it's not worth it man
				</p>
			</div>
		</form>
		</Layout>)
}

export default Tts;
