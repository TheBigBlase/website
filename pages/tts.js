import Layout from './layout'

const Tts= () => {
	const handleSubmit = async(e) => {
		e.preventDefault();
		const body = { message: e.currentTarget.message.value,
									 name: e.currentTarget.name.value
		}
		const res = await fetch('/api/tts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		if (res.status === 201) {
			const userObj = await res.json();
			mutate(userObj);
		}
	}
	return ( 
		<Layout>
		<h1 className="title"> TTS </h1>
		<form onSubmit={handleSubmit}>
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
