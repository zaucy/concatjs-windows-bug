function writeLine(str) {
	document.body.innerHTML += '<pre>' + str + '</pre>\n';
}

async function testFetch(path) {
	try {
		const response = await fetch(path);
		if(response.ok) {
			const txt = await response.text();
			if(txt.length > 1000) {
				writeLine(path + ' contents: too long to display; length=' + txt.length);
			} else {
				writeLine(path + ' contents: ' + txt);
			}
		} else {
			writeLine(path + ' request failed: ' + response.status + ' ' + response.statusText);
		}
	} catch(err) {
		writeLine(path + ' error:' + err);
	}
}

async function main() {
	await testFetch('test.txt');
	await testFetch('nested/test.txt');
	await testFetch('npm/node_modules/@bazel/concatjs/LICENSE');
}

main();
